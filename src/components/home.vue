<template>
  <div>
    <!--home头部搜索-->
    <div class="header">
      <div class="header-flex">
        <a class="header-left">
          <img src="../assets/images/扫一扫.png" class="header-icon">
          <span>扫一扫</span>
        </a>
        <div class="input-box">
          <span class="search">
            <img src="../assets/images/搜索.png">
          </span>
          <input type="text" class="input-search" placeholder="搜索">
          <span class="camera">
            <img src="../assets/images/相机.png">
          </span>
        </div>
        <a class="header-right">
          <img src="../assets/images/会员码.png" class="header-icon">
          <span>会员码</span>
        </a>
      </div>
    </div>
    <!--home轮播图-->
    <div class="page-swipe" id="home">
      <mt-swipe :auto="4000">
        <mt-swipe-item :class="{slide1:true}">
          <img :src="photo[0].p1">
        </mt-swipe-item>
        <mt-swipe-item :class="{slide2:true}">
          <img :src="photo[1].p2">
        </mt-swipe-item>
        <mt-swipe-item :class="{slide3:true}">
          <img :src="photo[2].p3">
        </mt-swipe-item>
        <mt-swipe-item :class="{slide4:true}">
          <img :src="photo[3].p4">
        </mt-swipe-item>
      </mt-swipe>
    </div>
    <!--图标功能-->
    <div class="icon-box">
      <a v-for="icon in icon_photo">
        <img :src="icon.url" class="icon-style">
        <span class="icon-span">{{icon.text}}</span>
      </a>
    </div>
    <!--今日推介-->
    <div class="today-new">
      <div class="today-icon">
        <img src="../assets/images/今日推荐.png">
      </div>
      <a id="con1" :class="{anim:animate===true}">
        <div v-for='item in items' class="today-box">
          <div class="today-text">
            <p>{{item.name}}</p>
            <p>{{item.new}}</p>
          </div>
          <div class="today-photo">
            <img :src="item.photo">
          </div>
        </div>
      </a>
    </div>
  </div>
</template>
<script>
  //引入轮播图片
  import p1 from "../assets/images/p1.png";
  import p2 from "../assets/images/p2.png";
  import p3 from "../assets/images/p3.png";
  import p4 from "../assets/images/p4.png";
  //引入图标功能图片
  import cookies from "../assets/images/icon-cookies.jpg"
  import bamboo from "../assets/images/icon-bamboo.jpg"
  import chocolate from "../assets/images/icon-chocolate.jpg"
  import candy from "../assets/images/icon-candy.jpg"
  import cake from "../assets/images/icon-cake.jpg"
  import fish from "../assets/images/icon-fish.jpg"
  import meat from "../assets/images/icon-meat.jpg"
  import tea from "../assets/images/icon-tea.jpg"
  import packAge from "../assets/images/icon-package.jpg"
  import nut from "../assets/images/icon-nut.jpg"
  //引入今日推荐图片
  import today01 from "../assets/images/today_01.png"
  import today02 from "../assets/images/today_02.jpg"
  import today03 from "../assets/images/today_03.jpg"
    export default {
      name: "home",
      data(){
        return{
          photo:[//photo中图片数据
            {p1:p1},
            {p2:p2},
            {p3:p3},
            {p4:p4},
          ],
          icon_photo:[//图标功能数据
            {url:cookies,text:"饼干"},
            {url:bamboo,text:"坚果"},
            {url:chocolate,text:"巧克力"},
            {url:candy,text:"糖果"},
            {url:cake,text:"点心"},
            {url:fish,text:"海鲜"},
            {url:meat,text:"蔬菜"},
            {url:tea,text:"果茶"},
            {url:packAge,text:"品牌"},
            {url:nut,text:"熟食"},
          ],
          animate:false,
          items:[//今日推荐
            {
              name:"习近平强调：大抓实战化军事训练 聚力打造精锐作战力量",
              new:"最近李宇春、张杰都在为这场演唱会做精心准备",
              photo:today01
            },
            {
              name:"被霍夫曼即兴打了一巴掌 梅丽尔：那有点太过分了",
              new:"南川：22万居民有了家庭医生 暖心服务获好评",
              photo:today02
            },
            {
              name:"李小璐和PGone出轨照片流出，不拉窗帘，网友：比陈冠希还猛！",
              new:"贾乃亮终于忍不住了，取消关注李小璐，网友：别想洗白了",
              photo:today03
            }
          ]
        }
      },
      created(){
        setInterval(this.scroll,2500)
      },
      methods: {
        scroll(){
          this.animate=true;    // 因为在消息向上滚动的时候需要添加css3过渡动画，所以这里需要设置true
          setTimeout(()=>{      //  这里直接使用了es6的箭头函数，省去了处理this指向偏移问题，代码也比之前简化了很多
            this.items.push(this.items[0]);  // 将数组的第一个元素添加到数组的
            this.items.shift();//删除数组的第一个元素
            this.animate=false;  // margin-top 为0 的时候取消过渡动画，实现无缝滚动
          },2000)
        }
      }
    }
</script>

<style scoped>
  @import url(../assets/css/header-search.css);
  @import url(../assets/css/home.css);
</style>
