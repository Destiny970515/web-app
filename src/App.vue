<template>
  <div id="app">
    <div class="content-margin">
      <router-view></router-view>
    </div>
    <!--Tabbar-->

    <mt-tabbar v-model="selected" :fixed="true">
      <mt-tab-item id="主页">
        <img slot="icon" src="./assets/images/home.png">
        <router-link to="home" class="a">主页</router-link>
      </mt-tab-item>
      <mt-tab-item id="消息">
        <img slot="icon" src="./assets/images/news.png">
        <router-link to="news" class="a">消息</router-link>
      </mt-tab-item>
      <mt-tab-item id="购物车">
        <img slot="icon" src="./assets/images/shopCart.png">
        <router-link to="shop-cart" class="a">购物车</router-link>
      </mt-tab-item>
      <mt-tab-item id="个人中心">
        <img slot="icon" src="./assets/images/people.png">
        <router-link to="people" class="a">个人中心</router-link>
      </mt-tab-item>
    </mt-tabbar>
  </div>
</template>

<script>
  export default {
    name: 'app',
    data () {
      return {
        selected:'主页',
        fixed:false,
        go:""
      }
    }
  }
</script>

<style>
  /**
   *引入Css文件
   **/
  @import url(./assets/css/app.css);
</style>
