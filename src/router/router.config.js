//引入模板
import Home from '../components/home';
import Logistics from '../components/logistics';
import ShopCart from '../components/shopCart';
import People from '../components/poeple';

//配置路由
export default {
  routes:[
    {path:"/home",component:Home},
    {path:"/logistics",component:Logistics},
    {path:"/shop-cart",component:ShopCart},
    {path:"/people",component:People},
    {path:"/",component:Home}
  ],
}
