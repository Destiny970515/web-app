<template>
  <div>
    <!--个人中心头部-->
    <div class="people_header">
      <p>设置</p>
    </div>
    <!--个人主页-->
    <div class="homepage">
      <div class="homepage_avatar">
        <img src="../assets/images/avatar_big.jpg">
        <h4>Destiny</h4>
      </div>
    </div>
    <!--个人记录-->
    <div class="recording">
      <div class="recording_box" v-for="(item,key) in recording">
        <p>{{item.quantity}}</p>
        <span>{{item.name}}</span>
      </div>
    </div>
    <!--分割线-->
    <div class="division"></div>
    <!--我的订单-->
    <div class="myOrder">
      <!--查看所有订单-->
      <div class="All">
        <p>我的订单</p>
        <div class="All-Orders">
          <p>查看更多订单</p>
          <img src="../assets/images/arrow_right.png">
        </div>
      </div>
      <!--订单功能-->
      <div class="Order-function">
        <div class="Order-icon" v-for="(item,key) in Orders">
          <img :src="item.img">
          <span>{{item.name}}</span>
        </div>
      </div>
      <!--分割线-->
      <div class="division"></div>
    </div>
  </div>
</template>

<script>
  import Order_1 from "../assets/images/Order_1.png"
  import Order_2 from "../assets/images/Order_2.png"
  import Order_3 from "../assets/images/Order_3.png"
  import Order_4 from "../assets/images/Order_4.png"
  import Order_5 from "../assets/images/Order_5.png"
    export default {
        name: "people",
      data(){
        return{
          recording:[//个人记录
            {name:"收藏夹",quantity:35},
            {name:"关注店铺",quantity:10},
            {name:"足迹",quantity:23},
          ],
          Orders:[//订单功能数据
            {img:Order_1,name:"待付款"},
            {img:Order_2,name:"待发货"},
            {img:Order_3,name:"待收货"},
            {img:Order_4,name:"待评价"},
            {img:Order_5,name:"退款/售后"},
          ]
        }
      }
    }
</script>

<style scoped>
  @import url(../assets/css/people.css);
</style>
