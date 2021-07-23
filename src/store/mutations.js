export default {
  addcounter(state,payload){
    payload.count+=1
    //添加本件商品的数量
},
addtocart(state,payload){
     //添加新的商品数量·
     payload.checked=true
       state.cartlist.push(payload)
}
}