import {request} from './request.js'
export function getHomeMultidata(){
  return request({
    url:"/get"
  })
}
