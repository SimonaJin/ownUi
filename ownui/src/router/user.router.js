export default[
    {
        path:'/login',
        component:()=> import(/*webpackChunkName:'login'*/'views/user/login.vue')
    },
    {
        path:'/reg',
        component:()=> import(/*webpackChunkName:'reg'*/'views/user/reg.vue')
    },
    {
        path:'/forget',
        component:()=> import(/*webpackChunkName:'forget'*/'views/user/forget.vue')
    },
    {
        path:'/test',
        component:()=> import(/*webpackChunkName:'test'*/'views/test.vue')
    }
]