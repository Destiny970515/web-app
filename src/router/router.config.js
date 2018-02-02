//引入模板
import Home from '../components/home';
import News from '../components/news';
import ShopCart from '../components/shopCart';
import People from '../components/poeple';

//配置路由
export default {
  routes:[
    {path:"/home",component:Home},
    {path:"/news",component:News},
    {path:"/shop-cart",component:ShopCart},
    {path:"/people",component:People},
    {path:"/",component:Home}
  ],
}
