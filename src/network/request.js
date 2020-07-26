import axios from 'axios'

export function request(config){

  //1.build axios instance
  const instance = axios.create({
    baseURL:'http://httpbin.org',
    timeout:5000
  })
  
  //2.axios interceptor
  instance.interceptors.request.use(config=>{
    return config
  },err=>{
    
  })
  
  instance.interceptors.response.use(res=>{
    return res.data
  },err=>{
    console.log(err)
  })
  
  return instance(config)
}
