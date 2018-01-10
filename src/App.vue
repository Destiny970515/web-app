<template>
  <div id="app">
    <div class="content-margin">
      <router-view></router-view>
    </div>
    <!--Tabbar-->
    <mt-tabbar v-model="selected" :fixed="true">
      <mt-tab-item id="主页" to="home">
        <img slot="icon" src="./assets/images/home.png">
        <router-link to="home" class="a">主页</router-link>
      </mt-tab-item>
      <mt-tab-item id="物流" to="logistics">
        <img slot="icon" src="./assets/images/logistics.png">
        <router-link to="logistics" class="a">物流</router-link>
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
