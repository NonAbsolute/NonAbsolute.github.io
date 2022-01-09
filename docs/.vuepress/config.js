module.exports = {
    title: 'FJD安全团队文档', // 设置网站标题
    description: '安全运维，安全开发，漏洞挖掘，代码审计',
    base: "/",
    themeConfig: {
        //nav : [
        //    { text: '新年祝福', link: '/NewYearGreetings' },
        //    { text: '2022年的打算', link: '/PlansFor2022' },
        //    { text: '创建Github组织', link: '/CreateGitHubOrganization' },
        //    { text: '创建团队邮箱', link: '/CreateTeamMailbox' },
        //    { text: '蛛网之殇与FJD的关系', link: '/CobwebAndFJD' },
        //    { text: '关于私自使用geekzwzs.cn域名前缀的道歉声明',link: '/BreezyStatementOfApology' },
        //],
        sidebar: {
            '/': [
                ["/", '主页'], //指的是根目录的md文件 也就是 README.md 里面的内容
                ['/NewYearGreetings', '新年祝福'],
                ['/PlansFor2022', '2022年的打算'],
                ['/CreateGitHubOrganization', '创建Github组织'],
                ['/CreateTeamMailbox', '创建团队邮箱'],
                ['/CobwebAndFJD', '蛛网之殇与FJD的关系'],
                ['/BreezyStatementOfApology', '关于私自使用geekzwzs.cn域名前缀的道歉声明'],
            ]
        },
	sidebarDepth : 2,
    },
    head: [
        [
            'link', // 设置 favicon.ico，注意图片放在 public 文件夹下
            { rel: 'icon', href: 'favicon.png' }
        ]
    ],
}
