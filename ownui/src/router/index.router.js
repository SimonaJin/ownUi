export default [
  {
    path: "/",
    redirect: "/home",
    component: () => import(/*webpackChunkName:'home'*/ "views/Home.vue")
  },
  {
    path: "/home",
		component: () => import(/*webpackChunkName:'home'*/ "views/Home.vue"),
		children:[
			{
				path:'/button',
				name:'button',
				component:() => import("components/yqButton/README.md")
			},
		]
	},
	{
    path: "/demo-ui/button",
    component: () => import(/*webpackChunkName:'drag'*/ "components/yqButton/demo/index.vue")
  },
  {
    path: "/drag",
    component: () => import(/*webpackChunkName:'drag'*/ "views/drag/index.vue")
  },
  {
    path: "*",
    component: () => import(/*webpackChunkName:'404'*/ "views/404.vue")
  }
];
