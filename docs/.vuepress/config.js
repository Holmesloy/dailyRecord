module.exports = {
    title: 'Z daily',
    description: 'Hello World',
    head:[
        ['link', { rel: 'icon', href: '/cc.png'}],
    ],
    base: '/',
    markdown: {
        lineNumbers: false // 代码块显示行号
    },
    themeConfig: {
        logo: "/cc.png",
        smoothScroll: true,
        // 主页导航栏配置
        nav:[
            { text: '', link: '' },
            { text: '', link: '' },
            { text: '', link: '' },
        ],
        sidebar: 'auto',
        sidebarDepth: 2
    }

}