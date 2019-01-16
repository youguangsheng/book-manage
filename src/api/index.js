import axios from "axios";
// 设置默认基础路径
axios.defaults.baseURL = "http://localhost:3000";
//设置拦截请求，由于响应回来的东西较多，而只需要服务器的数据
axios.interceptors.response.use(res => {
    //Do something with response data
    // console.log(res);
    return res.data;
});
//获取轮播图片
export let getSwiperImage = () => {
    return axios.get("/getswipeImage")
};
//获取首页热门图书
export let getHotBook = () => {
    return axios.get("/gethotbook")
};
//获取图书列表
export let getALLBook = () => {
    return axios.get("/getallbook")
};

//获得一本图书
export let getOneBook = (id) => {
    return axios.get(`/getonebook?id=${id}`)
};
//升级一本图书
export let updateOneBook = (id,data) => {
    return axios.put(`/updateonebook?id=${id}`, data)
};
//添加一本图书
export let addOneBooK = (data) => {
    return axios.post('/addonebook', data)
};
//删除一本图书
export let deletedOneBook = (id) => {
    return axios.delete(`/deletedonebook?id=${id}`)
};