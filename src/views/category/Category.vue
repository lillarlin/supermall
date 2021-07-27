<template>
    <div class="category">
        <nav-bar class="category-style">
            <div slot="center">商品分类</div>
        </nav-bar>
       <div class="cate-list">
           <div class="cate-left"> <slide-bar :slidebarlist="categoryList" @clickcategory="clickcategory"></slide-bar></div>
       <div class="cate-rigth">
            <subcategory :subcatelist="subcategoryList" :getcategorydetail="catedetaillist"></subcategory>
           
       </div>
       </div>
    </div>
</template>

<script>
import NavBar from '../../components/common/navbar/NavBar.vue'
import SlideBar from './childcopms/SlideBar.vue'
import subcategory from './childcopms/subcategory.vue'

import {getCategory,getSubcategory,getcatedetail} from 'network/category.js'
export default {
name:'Category',
components:{
    NavBar,
   SlideBar,
   subcategory,
  
},
data(){
return {
    categoryList: [],
    subcategoryList:[],
    catedetaillist:[],
    cateindex:0
   
}
},
created(){
   this.getCategory()
   this.getSubcategory('3627')
   this.getcatedetail('10062603','pop')
},
methods:{
   
    getCategory(){
        getCategory().then(res=>{
         this.categoryList=res.data.category.list
        })
    },
clickcategory({maitKey,index}){
   this.getSubcategory(maitKey)
   this.cateindex=index
},
getSubcategory(key){
          getSubcategory(key).then(res=>{
            this.subcategoryList=[...res.data.list]
          }) 
},
getcatedetail(miniWallkey,type){
    getcatedetail(miniWallkey,type).then(res=>{
           this.catedetaillist=[...res]   
    })
}

}
}
</script>

<style scoped>
.category-style{
    background-color: pink;
    color:white;
    font-size: 16px;
  
   
}
.cate-list{
    display: flex;
}
.cate-left{
   width: 100px;
}
.cate-rigth{
    flex: 1;
    width: 100%;

}

</style>