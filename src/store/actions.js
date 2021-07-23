export default {
  addcart(context,payload){
    return new Promise((reslove,reject)=>{
      let oldproduct=context.state.cartlist.find(item=>item.iid===payload.iid)
    if(oldproduct){
   context.commit('addcounter',oldproduct)
   reslove('该商品数量加1')
   //通过连接mutations来修改数据，这样才可以在vuex中跟踪数据
    }else {
      payload.count=1
     context.commit('addtocart',payload)
     reslove('新增一件商品')
    }
    })
   }
}