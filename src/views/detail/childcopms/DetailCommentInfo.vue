<template>
  <div class="comment-info">
   <div class="user-comment">
     <span>用户评价</span>
     <span class="more">更多</span>
   </div>
   <div class="user-info" v-if="commentinfo.user">
     <img :src="commentinfo.user.avatar" alt="" >
     <i>{{commentinfo.user.uname}}</i>
   </div>
   <div class="info-detail">
    <p> {{commentinfo.content}}</p>
    <div class="info-other">
       <div class="date">{{ commentinfo.created | showDate }}</div>
          <div class="style">{{ commentinfo.style }}</div>
    </div>
    <div class="comment-img">
      <img :src="item" alt="" v-for="(item,index) in commentinfo.images" :key="index">
    </div>
   </div>

  </div>
</template>
  
<script>
import { formatDate } from "common/utils.js"
export default {
  name:'DetailCommentInfo',
  props:{
    commentinfo:{
      type:Object,
      default(){
        return {}
      }
    }
  },
  filters:{
       showDate(value){
         let date=new Date(value*1000)
         return formatDate(date, "yyyy-MM-dd hh:mm")
       }
  }
}
</script>

<style>
.more{
  float: right;
}
.user-comment{
  font-weight: 700;
  margin: 10px 10px;
  border-top: 1px solid #e6e6e6;
  border-bottom: 1px solid #e6e6e6;
  height: 50px;
  line-height: 50px;
}
.user-info{
  margin: 20px;
}
.user-info img{
  height: 50px;
  width: 50px;
}
.info-detail p{
  margin: 20px 10px;
  margin-bottom: 5px;
}
.date,.style{
  
  font-size: 12px;
  color: grey;
  text-align: left;
  margin: 5px 10px;
  }
</style>