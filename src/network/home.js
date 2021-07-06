import {request} from './request.js'
export function getHomeMultidata () {
    //对request在进行一次封装
    return request({
        url:'/home/multidata'
    })
}