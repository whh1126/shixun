import axios from "axios";
//发送请求
let request = axios.create({
    baseURL:process.env.NODE_ENV!=="production"?"/exam":""
 
})
console.log(instance)
//发送响应
// axios.interceptors.response.use()
axios.interceptors.request.use(function (config) {
    // 在发送请求之前做些什么
    return config;
}, function (error) {
    // 对请求错误做些什么
    return Promise.reject(error);
});
let get=()=>{
    response 
}
export {}