import axios from 'axios';
//添加axios拦截
axios.interceptors.response.use(function (response) {
  return response.data.data;
}, function (error) {
  return Promise.reject(error);
});
//请求home组件的数据接口
export let gethome=()=>{
  return axios.get('/mock/index.json')
}