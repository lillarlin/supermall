import {request} from './request.js'
export function getCategory(){
  return request({
    url:'/category'
  })
}
export function getSubcategory(maitKey){
  return request({
    url:'/subcategory',
    params:{
      maitKey
    }
  })
}
export function getcatedetail(miniWallkey,type){
  return request({
    url:'/subcategory/detail',
    params:{
      miniWallkey,
         type
    }
  })
}