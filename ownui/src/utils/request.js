import config from '../config/index';
import axios from 'axios';

class HttpRequest{
    constructor(){
        this.baseURL = config.baseURL;
        this.timeout = 3000
    }
    setInterceptors(instance){
        
        //请求拦截
        instance.interceptors.request.use(config=>{
            return config;
        })
        //响应拦截
        instance.interceptors.response.use(res=>{
            if(res.status == 200){
        
                return Promise.resolve(res.data)
            }else{
                return Promise.reject(res.data.data)
            }
        },err=>{
            switch(err.response.status){
                case '401':console.log(err)
                    break;
                default:
                    break;   
            }
        })
    }
    mergeOptions(options){
        return{baseURL:this.baseURL,timeout:this.timeout,...options}
    }
    request(options){
        const instance = axios.create();//
        this.setInterceptors(instance);
        const opts = this.mergeOptions(options)
        return instance(opts)
    }
    get(url,config={}){
        return this.request({
            methods:'get',
            url,
            ...config
        })
    }
    post(url,data){
        return this.request({
            methods:'post',
            url,
            data
        })
    }
}
export default new HttpRequest;