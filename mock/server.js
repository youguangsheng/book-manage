const http = require('http')
const fs = require('fs')
const path = require('path')
const url = require('url')
const qs = require('querystring')
const swipeImage = require('./swipeImage')

http.createServer((req, res) => {
    //解析请求路径和查询字符串(对象形式)
    let {
        pathname,
        query
    } = url.parse(req.url, true)

    res.setHeader("Access-Control-Allow-Origin", "*");
    res.setHeader("Access-Control-Allow-Headers", "X-Requested-With");
    res.setHeader("Access-Control-Allow-Methods", "PUT,POST,GET,DELETE,OPTIONS");
    res.setHeader("Access-Control-Allow-Headers", "Content-Type,Access-Token");
    res.setHeader("X-Powered-By", ' 3.2.1')
    res.setHeader("Content-Type", "application/json;charset=utf-8");

    //根据客户端响应不同请求
    switch (req.method) {
        case "GET":
            if (pathname === "/getswipeImage") {
                res.setHeader("Content-Type", "application/json;charset=utf8");
                res.end(JSON.stringify(swipeImage))
            }
            if (pathname === "/gethotbook") {
                readFile('books.json', (data) => {
                    data = data.reverse().splice(0, 9)
                    res.end(JSON.stringify(data))
                })
            }
            if (pathname === '/getallbook') {
                readFile('books.json', (data) => {
                    res.end(JSON.stringify(data))
                })
            }
            if (pathname === '/getonebook') {
                readFile('books.json', (data) => {
                    data = data.filter(item => {
                        return item.id == query.id
                    });
                    res.end(JSON.stringify(data[0]))
                })
            }
            if (pathname === '/getmorebook') {

            }
            break;
        case "POST":
            if (pathname === '/addonebook') {
                let newData = "";
                req.on('data', (chunk) => {
                    //接收数据
                    newData += chunk;
                })
                req.on('end', () => {
                    let newBook = JSON.parse(newData)
                    readFile('books.json', (data) => {
                        //新数据生成id
                        newBook.id = data.length + 1
                        //添加新数据
                        data.push(newBook)
                        //更新后数据写入文件
                        writeFile('books.json', data, (err) => {
                            if (err) throw err
                            console.log('写入成功')
                            res.end()
                        })
                    })
                })
            } 
            break;
        case "PUT":
            if (pathname === '/updateonebook') {
                let updatedData = ""
                req.on('data', (chunk) => {
                    updatedData += chunk
                })
                req.on('end', () => {
                    let upadatedbook = JSON.parse(updatedData)
                    // console.log(upadatedbook)
                    readFile('books.json', (data) => {
                        upadatedbook.id = parseInt(query.id)
                        //将原数据更新
                        data = data.map(item => {
                            if (item.id == query.id) {
                                return upadatedbook
                            }
                            return item
                        })
                        //更新后数据写入文件
                        writeFile('books.json', data, (err) => {
                            if (err) throw err
                            console.log('数据更新成功')
                            res.end()
                        })
                    })

                })
            }
            break;
        case "DELETE":
            if (pathname === '/deletedonebook') {
                readFile('books.json', (data) => {
                    // console.log(data)
                    data = data.filter(item => {
                        return item.id != query.id
                    });
                    writeFile('books.json', data ,(err) => {
                        if (err) throw err
                        console.log('删除成功')
                        res.end(JSON.stringify(data))
                    }) 
                })
            }
            break;
        default:
            res.end()
            break;
    }
}).listen(3000, () => {
    console.log("app is running...")
})

//封装读取文件函数
function readFile(url, cb) {
    fs.readFile(path.join(__dirname, url), 'utf8', (err, data) => {
        if (err || data.length === 0) {
            cb([])
        } else {
            cb(JSON.parse(data))
        }
    })
}

//封装写入文件函数
function writeFile(url, data, cb) {
    fs.writeFile(path.join(__dirname, url), JSON.stringify(data), 'utf8', cb)
}