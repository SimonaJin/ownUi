module.exports = {
	// 组件库名称
	name: 'Demo-ui组件',
	// 构建配置
	build: {
		site: {
			publicPath: '/demo-ui',
		},
	},
	// 文档站点配置
	site: {
		// 标题
		title: 'yq-ui组件',
		// 图标
		logo: 'assets/img/logo.png',
		// 描述
		description: '示例组件库',
		// 左侧导航
		nav: [{
				title: '开发指南',
				items: [{
					path: 'home',
					title: '介绍',
				}, ],
			},
			{
				title: '基础组件',
				items: [{
					path: 'button',
					title: 'MyButton 按钮',
				}, ],
			},
		],
	},
};