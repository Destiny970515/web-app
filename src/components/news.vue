<template>
  <div>
    <!--news 头部-->
    <div class="news_header">
      <p>消息</p>
    </div>
    <!--news icon图标功能-->
    <div class="news_main">
      <div class="news_iconBox" v-for="icon in news_icons">
        <img :src="icon.img">
        <span>{{icon.text}}</span>
      </div>
    </div>
    <!--分割线-->
    <div class="division"></div>
    <!--买家消息-->
    <div class="news_Buyers">
      <div class="Buyers_box" v-for="item in Buyers">
        <div class="Buyers_avatar">
          <!--买家头像-->
          <img :src="item.avatar">
        </div>
        <div class="Buyers_message">
          <div class="Buyers_name">
            <p>{{item.name}}</p>
            <span>{{item.date}}</span>
          </div>
          <div class="Buyers_text">
            <p>{{item.text}}</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  //图标功能图片
  import interactive from "../assets/images/news_icon interactive.png"
  import Logistics from "../assets/images/news_icon Logistics.png"
  import Notice from "../assets/images/news_icon Notice.png"
  //买家消息图片
  import avatar from "../assets/images/news_icon avatar.jpg"
    export default {
      name: "news",
      data(){
        return {
          news_icons:[//图标功能数据
            {img:Logistics,text:"交易物流"},
            {img:Notice,text:"通知"},
            {img:interactive,text:"互动"},
          ],
          Buyers:[//买家消息数据
            {
              avatar:avatar,
              name:"巧克力工坊",
              date:"18/01/24",
              text:"亲，请核对收货地址"
            },
            {
              avatar:avatar,
              name:"小雪梨蛋糕店",
              date:"18/01/02",
              text:"亲，请问有什么需要帮助的吗？"
            }
          ]
        }
      }
    }
</script>

<style scoped>
  @import url(../assets/css/news.css);
</style>
