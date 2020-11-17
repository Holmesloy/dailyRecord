module.exports = {
    title: 'Z daily',
    description: 'Hello World',
    head:[
        ['link', { rel: 'icon', href: '/cc.png'}],
    ],
    base: '/dailyRecord/',
    markdown: {
        lineNumbers: false // 代码块显示行号
    },
    themeConfig: {
        logo: "/cc.png",
        smoothScroll: true,
        // 主页导航栏配置
        nav:[
            { text: '主页', link: '/' },
            { text: '音乐', link: '/music/' },
            { text: '花切', link: '/cardistry/' },
            // 下拉列表的配置
        {
            text: 'Languages',
            items: [
              { text: 'Chinese', link: '/language/chinese' },
              { text: 'English', link: '/language/English' }
            ]
          }
        ],
        sidebar: 'auto',
        sidebarDepth: 2
    },
    configureWebpack: {
        resolve: {
          alias: {
            '@alias': '../.vuepress/image'
          }
        }
      }

}