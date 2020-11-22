const navConf = require('./config/nav')
const sideBarConf = require('./config/sideBar')

module.exports = {
	base: '/docs', // 根路径
	title: 'Hello VuePress', // 标题
	description: '这是小刘的博客', // 
	repo: 'https://github.com/txs1992/mt-blog', // 仓库地址
	head: [ // 默认注入的head标签的内容
		['link', {
			rel: 'icon',
			href: '/logo.png'
		}]
	],
	// theme: '@vuepress/blog', // 使用依赖包主题
	themeConfig: {
		lastUpdated: 'Last Updated',
		permalink: "/:year/:month/:day/:slug",
		displayAllHeaders: true,
		nav: navConf,
		markdown: {
			lineNumbers: true
		},
		sidebar: sideBarConf,
		sidebarDepth: 4,
	},
}