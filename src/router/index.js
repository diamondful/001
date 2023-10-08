//专门用于创建整个应用的路由器
import VueRouter from "vue-router";

import IndexPage from "../views/IndexPage.vue";
import HomePage from "../views/HomePage.vue";
import RegisterPage from "../views/RegisterPage.vue";

import Vue from "vue";


/*import App from "../App.vue"*/
Vue.use(VueRouter)
export default new VueRouter({
    routes:[
       {
            path:'/',
            name:'HomePage',
            component:HomePage
        },
      /*   {
            path: '/HomePage',
            component: HomePage,
        }, */
        {
            path:'/IndexPage',
            name:'IndexPage',
            component:IndexPage
        },
        {
            path:'/RegisterPage',
            name:'RegisterPage',
            component:RegisterPage
        },
    ]
})