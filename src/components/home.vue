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
    <!--商品种类-->
    <div class="shop-type">
      <a v-for="(type,key) in shop_type" class="shop-box" >
        <div class="shop-left">
          <!--文字-->
          <div class="shop-left-p">
            <p :class="'color'+key">{{type.title}}</p>
            <p>{{type.text}}</p>
          </div>
          <!--图片-->
          <div class="shop-left-img">
            <img :src="type.img1">
          </div>
        </div>
        <div class="shop-right">
          <!--图片-->
          <div class="shop-right-img">
            <img :src="type.img2">
          </div>
        </div>
      </a>
    </div>
    <!--分割-->
    <div class="division"></div>
    <!--猜你喜欢-->
    <div class="maybe-love">
      <!--头部-->
      <div class="maybe-title">
        <div class="maybe-title-box">
          <!--icon_喜欢-->
          <div class="maybe-title-icon">
            <img src="../assets/images/maybe_love.png">
          </div>
          <!--文字-->
          <p>猜你喜欢</p>
        </div>
      </div>
      <!--主体-->
      <div class="maybe-main">
        <!--商品-->
        <a class="maybe-shoplist-box" v-for="maybe in maybe_love">
          <!--图片盒子-->
          <div class="maybe-shoplist-ph">
            <!--商品图片-->
            <div class="shoplist-ph">
              <img :src="maybe.img">
            </div>
          </div>
          <!--价格盒子-->
          <div class="maybe-shoplist-price">
            <!--商品信息-->
            <div class="shoplist-message">
              <p>{{maybe.title}}</p>
            </div>
            <!--价格-->
            <div class="shoplist-pricebox">
             <div>
               <!--钱-->
               <span class="shoplist-price">¥{{maybe.price}}</span>
               <!--购买数-->
               <span class="shoplist-buy">{{maybe.payment}}人付款</span>
             </div>
              <!--商品功能键-->
              <a class="shoplist-function">
                <img src="../assets/images/other.png">
              </a>
            </div>
          </div>
        </a>
      </div>
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
  //引入商品种类图片
  import shop_app from "../assets/images/shop_apple.jpg";
  import shop_biscuit from "../assets/images/shop_biscuit.jpg";
  import shop_cherry from "../assets/images/shop_cherry.jpg";
  import shop_chestnuts from "../assets/images/shop_chestnuts.png";
  import shop_chestnuts_2 from "../assets/images/shop_chestnuts_2.png";
  import shop_chocolate from "../assets/images/shop_chocolate.jpg";
  import shop_hawthorn from "../assets/images/shop_hawthorn.jpg";
  import shop_jinsha from "../assets/images/shop_jinsha.jpg";
  import shop_longyan from "../assets/images/shop_longyan.jpg";
  import shop_noodles from "../assets/images/shop_noodles.jpg";
  import shop_orange from "../assets/images/shop_orange.jpg";
  import shop_sausage from "../assets/images/shop_sausage.png";
  //引入猜你喜欢图片
  import CartoonCake from "../assets/images/maybe_CartoonCake.jpg";
  import ChocolateCake from "../assets/images/maybe_ChocolateCake.jpg";
  import CoconutCrisp from "../assets/images/maybe_CoconutCrisp.jpg";
  import DarsChocolates from "../assets/images/maybe_DarsChocolates.jpg";
  import GrapeJuice from "../assets/images/maybe_GrapeJuice.jpg";
  import JapanChocolates from "../assets/images/maybe_JapanChocolates.jpg";
  import liangpinChestnuts from "../assets/images/maybe_liangpinChestnuts.jpg";
  import liangpinNutSnack from "../assets/images/maybe_liangpinNutSnack.jpg";
  import Macaroon from "../assets/images/maybe_Macaroon.jpg";
  import MangoPudding from "../assets/images/maybe_MangoPudding.jpg";
  import NutSnack from "../assets/images/maybe_NutSnack.jpg";
  import Oreo from "../assets/images/maybe_Oreo.jpg";
  import PeanutMeat from "../assets/images/maybe_PeanutMeat.jpg";
  import PotatoChips from "../assets/images/maybe_PotatoChips.jpg";
  import Pudding from "../assets/images/maybe_Pudding.jpg";
  import SmallCake from "../assets/images/maybe_SmallCake.jpg";
  import SoftSuger from "../assets/images/maybe_SoftSuger.jpg";
  import SugerBread from "../assets/images/maybe_SugerBread.jpg";
  import Waffle from "../assets/images/maybe_Waffle.jpg";
  import DoubleCake from "../assets/images/maybe_DoubleCake.jpg";

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
          ],
          shop_type:[//商品种类
            {
              title:"1元秒杀",
              text:"限时抢50元卷",
              img1:shop_app,
              img2:shop_biscuit
            },
            {
              title:"有好货",
              text:"高颜值美物",
              img1:shop_cherry,
              img2:shop_chestnuts
            },
            {
              title:"悦吉抢购",
              text:"火热抢购中",
              img1:shop_chestnuts_2,
              img2:shop_chocolate
            },
            {
              title:"必买清单",
              text:"帮你整理好",
              img1:shop_hawthorn,
              img2:shop_jinsha
            },
            {
              title:"爱逛街",
              text:"戳此马上变美",
              img1:shop_longyan,
              img2:shop_noodles
            },
            {
              title:"悦商品",
              text:"点击马上购",
              img1:shop_orange,
              img2:shop_sausage
            },
          ],
          maybe_love:[//猜你喜欢
            {
              title:"【经典香橙卡通雪糕】经典美味 好吃又好玩",
              price:20,
              img:CartoonCake,
              payment:658,
            },
            {
              title:"【经典双色球雪糕】配士多俾梨 小孩子最爱",
              price:28,
              img:DoubleCake,
              payment:863,
            },
            {
              title:"法式马卡龙甜点6粒装礼盒食品情人节礼物",
              price:80,
              img:Macaroon,
              payment:1635,
            },
            {
              title:"芒果布丁150g 好吃又美味 零食小吃  儿童零食",
              price:16,
              img:MangoPudding,
              payment:987,
            },
            {
              title:"糖豆豆沙包1包300g 买一送一 0990后素小吃零食",
              price:18,
              img:SugerBread,
              payment:1642,
            },
            {
              title:"椰子芒果布丁 大人小孩都爱吃 布丁果冻 小孩子最爱",
              price:19,
              img:Pudding,
              payment:1247,
            },
            {
              title:"越南原装进口 泉记芝士牛奶椰子酥120g越南特产糕点心休闲零食 芝士牛奶口味",
              price:35,
              img:CoconutCrisp,
              payment:365,
            },
            {
              title:"韩国进口 海太蜂蜜黄油薯片 饼干碳烤薯条 休闲膨化零食品土豆脆片",
              price:18,
              img:PotatoChips,
              payment:745,
            },
            {
              title:"日本进口 crisp choco CISCO麦脆批巧克力 0990后素小吃零食",
              price:99,
              img:JapanChocolates,
              payment:663,
            },
            {
              title:"徐福记糖果橡皮糖果汁软糖1500g 结婚庆喜糖 橡皮QQ糖",
              price:24,
              img:SoftSuger,
              payment:1243,
            },
            {
              title:"【Morinaga/森永 DARS达诗白巧克力43.2g12粒 日本进口零食入口即化",
              price:48,
              img:DarsChocolates,
              payment:842,
            },
            {
              title:"韩国进口 九日牌加糖葡萄果汁饮料238ml",
              price:22,
              img:GrapeJuice,
              payment:530,
            },
            {
              title:"韩国进口饼干 好丽友奥利奥巧克力奶油夹心饼干66g一盒装",
              price:14,
              img:Oreo,
              payment:439,
            },
            {
              title:"【疆域吃货-多味花生米210g】休闲零食炒货特产 香辣花生豆",
              price:21,
              img:PeanutMeat,
              payment:2463,
            },
            {
              title:"三只松鼠旗舰店 开口东北松子 坚果零食 218g",
              price:31,
              img:NutSnack,
              payment:1736,
            },
            {
              title:"良品铺子东北手剥松子开口手拨红松干果坚果零食特产小吃袋装98g",
              price:28,
              img:liangpinNutSnack,
              payment:1301,
            },
            {
              title:"【良品铺子_甘栗仁100g】休闲零食坚果河北特产板栗栗子仁美栗",
              price:16,
              img:liangpinChestnuts,
              payment:971,
            },
            {
              title:"丹夫华夫饼原味720g软格子饼蛋糕 休闲零食早餐",
              price:34,
              img:Waffle,
              payment:653,
            },
            {
              title:"巧克力蛋糕免费包邮黑森林樱桃速递巧克力水果德士",
              price:28,
              img:ChocolateCake,
              payment:430,
            },
            {
              title:"cake21客上海杭州北京广州下午茶点零食甜点糕点西点茶歇小蛋糕",
              price:19,
              img:SmallCake,
              payment:843,
            },
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
