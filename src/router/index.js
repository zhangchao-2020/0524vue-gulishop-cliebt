//1.引入并声明使用
import VueRouter from 'vue-router'
import Vue from 'vue'
Vue.use(VueRouter) //声明使用

import Home from '@/pages/Home'
import Login from '@/pages/Login'
import Register from '@/pages/Register'
import Search from '@/pages/Search'

//2.必须往外暴露一个路由器对象
//this.router.push   this.$router就是VueRouter的实例化对象

const originPush = VueRouter.prototype.push

VueRouter.prototype.push = function(location,onResolved,onRejected){
    if(onResolved === undefined && onRejected === undefined){
        //代表没有传递处理的回调无论时成功还是失败
        return originPush.call(this,location).catch(() => {})
    }else{
        return originPush.call(this,location,onResolved,onRejected)
    }
   
};
//
export default new VueRouter({
    routes:[
        {
            path:'/home',
            component:Home
        },
        {
            path:'/login',
            component:Login,
            meta:{  //当做配置项
                isHide:true
            }

        },
        {
            path:'/register',
            component:Register,
            meta:{
                isHide:true
            }

        },
        {
            path:'/search/:keyWord?',//代表这个params参数可传可不传
            component:Search,  //把自己本身全部通过组件search全部传递过去
            name:'search',
            // params:{keyWord:'aa'},  //解析下面props传过来的参数
            // query:{keyWord2:'AA'},
            //props的第三种写法,props可写可不写, 主要是为了展示数据时方便
            props(route){
                return {keyWord:route.params.keyWord , keyWord2:route.query.keyWord2}
            }
        },
        //重新指向
        {
            path:'/',
            redirect: '/home'
        }
    ]
})

//3.必须在vue当中去注入(使用)路由器对象main.js当中去注入