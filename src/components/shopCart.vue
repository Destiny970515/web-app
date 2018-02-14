<template>
  <div>
    <!--shop-cart头部-->
    <div class="shopCart_header">
      <p>购物车(0)</p>
    </div>
    <!--购物车空的情况下显示-->
    <div class="shopCart_none" v-show="shopCart.length==0">
      <div class="none">
        <img src="../assets/images/shopCart_none.png">
        <h3>购物车竟然是空的</h3>
        <p>再忙，也要记得买点什么犒赏自己~</p>
      </div>
    </div>
    <!--购物车不为空的情况下显示-->
    <div class="shopCart_list" v-show="shopCart.length!=0">
      <!--双重循环v-for，能访问到shopCart这种数据结构-->
      <div class="shopCart_box" v-for="(item,key) in shopCart">
        <p>{{item.name}}</p>
        <div v-for="list in item.date">
          <p>{{list.name}}</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
    export default {
      name: "shop-cart",
      data(){
          return{
            shopCart:[//购物车列表
//              {
//                name:"鞋子店",
//                date:[
//                  {id:1,name:"安踏",price:""},
//                  {id:2,name:"匹克",price:""},
//                ]
//              },
            ]

          }
      }
    }
</script>

<style scoped>
  @import url(../assets/css/shop-cart.css);
</style>
