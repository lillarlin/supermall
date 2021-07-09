import {request} from './request.js'
export function getHomeMultidata () {
    //对request在进行一次封装
    return request({
        url:'/home/multidata'
    })
}
export function gethomegoods(type,page){
     return request({
         url:'/home/data',
         params:{
             type,
             page
         }
     })
}