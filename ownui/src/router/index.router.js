export default[
    {
        path:'/',
        component:()=> import(/*webpackChunkName:'home'*/'views/home.vue')
    },
    {
        path:'*',
        component:()=> import(/*webpackChunkName:'404'*/'views/404.vue')
    }  
]