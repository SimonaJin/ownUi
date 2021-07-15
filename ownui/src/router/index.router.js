export default [{
		path: "/",
		redirect: "/home",
		component: () => import( /*webpackChunkName:'home'*/ "views/Home.vue")
	},
	{
		path: "/home",
		component: () => import( /*webpackChunkName:'home'*/ "views/Home.vue"),
		children: [{
				path: '/component/button',
				name: 'button',
				component: () => import("components/yqButton/README.md")
			},
			{
				path: '/component/radio',
				name: 'radio',
				component: () => import("components/radio/README.md")
			}
		]
	},
	{
		path: "/demo-ui/button",
		component: () => import( /*webpackChunkName:'drag'*/ "components/yqButton/demo/index.vue")
	},
	{
		path: "/demo-ui/radio",
		component: () => import( /*webpackChunkName:'drag'*/ "components/radio/demo/index.vue")
	},
	{
		path: "*",
		component: () => import( /*webpackChunkName:'404'*/ "views/404.vue")
	}
];