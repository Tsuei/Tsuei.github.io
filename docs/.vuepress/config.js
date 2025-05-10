// const katex = require('vuepress-plugin-katex').default // import katex from 'vuepress-plugin-katex' 是 .ts 写法
// 以上为VuePress 2.0写法，本主题是在1.9.9上开发的（见package.json），版本不兼容

const baiduCode = require('./config/baiduCode.js'); // 百度统计hm码
const htmlModules = require('./config/htmlModules.js');

module.exports = {
  theme: 'vdoing', // 使用npm包主题
  // theme: require.resolve('../../theme-vdoing'), // 使用本地主题

  title: "秋水观 | Emanatism",
  description: '个人笔记站及知识堆放库',
  // base: '/', // 默认'/'。如果你想将你的网站部署到如 https://foo.github.io/bar/，那么 base 应该被设置成 "/bar/",（否则页面将失去样式等文件）

  // 主题配置
  themeConfig: {
    // mathjax: true, // 启用Mathjax数学公式支持，但我只装配了KaTeX，所以这行会报错
    // math: true, // 启用数学公式支持
    
    // 导航配置
    nav: [
      { text: '首页', link: '/' }, // 首页文件位于.vuepress/index.md
      {
        text: '杂学',
        link: '/heap/',
        items: [
          {
            text: '辩证唯物主义',
            items: [
              { text: '思想链表', link: '/Praxis/List/' },
              { text: '笔记', link: '/Praxis/Note/' },
              { text: '时间观', link: '/Praxis/Time/' },
            ],
          },
          {
            text: '哲学',
            items: [
              { text: '黑格尔', link: '/Philosophy/Hegel/' },
              { text: '精神现象学', link: '/Philosophy/PhenoSiprit/' },
              { text: '记忆', link: '/Philosophy/Memory/' },
              { text: '时间', link: '/Philosophy/Time/' },
            ],
          },
          {
            text: '意识形态批判',
            items: [
              { text: '精神分析', link: '/Psychoanalysis/' },
              { text: '经济学', link: '/Economics/' },
              { text: '现代性', link: '/Ideology/' },
              { text: '神秘学', link: '/Mysticism/' },
            ],
          },
        ],
      },
      {
        text: '诸术',
        link: '/stack/',
        items: [
          { text: '本站开发日志', link: '/Journal/' },
          {
            text: 'Linux',
            items: [
              { text: 'Linux参考', link: '/Linux/References/' },
              { text: 'Linux笔记', link: '/Linux/Note/' },
              { text: 'Linux内C开发', link: '/Linux/C/' },
            ],
          },
          {
            text: '待分类',
            items: [
              { text: '视频下载器', link: '/Download_Videos/' },
              { text: 'Python', link: '/Python/' },
          // { text: 'MMD', link: '/pages/0a83b083bdf257cb/' },
          // { text: '乐理', link: '/pages/0a83b083bdf257cb/' },
            ],
          },
          {
            text: '数学',
            items: [
              { text: '代数I', link: '/Algebra/I/' },
            ],
          },
        ],
      },
      {
        text: '前端',
        link: '/web/', //目录页链接，此处link是vdoing主题新增的配置项，有二级导航时，可以点击一级导航跳到目录页
        items: [
          // 说明：以下所有link的值只是在相应md文件头部定义的永久链接（不是什么特殊编码）。另外，注意结尾是有斜杠的
          {
            text: '前端文章',
            items: [
              { text: 'JavaScript', link: '/pages/8143cc480faf9a11/' },
            ],
          },
          {
            text: '学习笔记',
            items: [
              { text: '《JavaScript教程》', link: '/note/javascript/' },
              { text: '《JavaScript高级程序设计》', link: '/note/js/' },
              { text: '《ES6 教程》', link: '/note/es6/' },
              { text: '《Vue》', link: '/note/vue/' },
              { text: '《React》', link: '/note/react/' },
              {
                text: '《TypeScript 从零实现 axios》',
                link: '/note/typescript-axios/',
              },
              {
                text: '《Git》',
                link: '/note/git/',
              },
              {
                text: 'TypeScript',
                link: '/pages/51afd6/',
              },
              {
                text: 'JS设计模式总结',
                link: '/pages/4643cd/',
              },
            ],
          },
        ],
      },
      {
        text: '页面',
        link: '/ui/',
        items: [
          { text: 'HTML', link: '/pages/8309a5b876fc95e3/' },
          { text: 'CSS', link: '/pages/0a83b083bdf257cb/' },
        ],
      },
      {
        text: '技术',
        link: '/technology/',
        items: [
          { text: '技术文档', link: '/pages/9a7ee40fc232253e/' },
          { text: 'GitHub技巧', link: '/pages/4c778760be26d8b3/' },
          { text: 'Nodejs', link: '/pages/117708e0af7f0bd9/' },
          { text: '博客搭建', link: '/pages/41f87d890d0a02af/' },
        ],
      },
      {
        text: '更多',
        link: '/more/',
        items: [
          { text: '学习', link: '/pages/f2a556/' },
          { text: '面试', link: '/pages/aea6571b7a8bae86/' },
          { text: '心情杂货', link: '/pages/2d615df9a36a98ed/' },
          { text: '实用技巧', link: '/pages/baaa02/' },
          { text: '友情链接', link: '/friends/' },
        ],
      },
      { text: '关于', link: '/about/' },
      {
        text: '收藏',
        link: '/pages/beb6c0bd8a66cea6/',
        // items: [
        //   { text: '网站', link: '/pages/beb6c0bd8a66cea6/' },
        //   { text: '资源', link: '/pages/eee83a9211a70f9d/' },
        //   { text: 'Vue资源', link: '/pages/12df8ace52d493f6/' },
        // ],
      },
      {
        text: '索引',
        link: '/archives/',
        items: [
          { text: '分类', link: '/categories/' },
          { text: '标签', link: '/tags/' },
          { text: '归档', link: '/archives/' },
        ],
      },
    ],
    sidebarDepth: 4, // 侧边栏显示深度，默认1，最大2（显示到h3标题）// （无效）
    logo: '/img/logo.jpg', // 导航栏logo
    repo: 'tsuei/tsuei.github.io', // 导航栏右侧生成Github链接
    searchMaxSuggestions: 10, // 搜索结果显示最大数
    lastUpdated: '上次更新', // 开启更新时间，并配置前缀文字   string | boolean (取值为git提交时间)
    docsDir: 'docs', // 编辑的文件夹
    docsBranch: 'main', // 编辑的文件所在分支，默认master。 注意：如果你的分支是main则修改为main
    editLinks: true, // 启用编辑
    editLinkText: '编辑',

    //*** 以下是Vdoing主题相关配置，文档：https://doc.xugaoyi.com/pages/a20ce8/ ***//

    // category: false, // 是否打开分类功能，默认true
    // tag: false, // 是否打开标签功能，默认true
    // archive: false, // 是否打开归档功能，默认true
    // categoryText: '随笔', // 碎片化文章（_posts文件夹的文章）预设生成的分类值，默认'随笔'

    // bodyBgImg: [
    //   'https://cdn.jsdelivr.net/gh/xugaoyi/image_store/blog/20200507175828.jpeg',
    //   'https://cdn.jsdelivr.net/gh/xugaoyi/image_store/blog/20200507175845.jpeg',
    //   'https://cdn.jsdelivr.net/gh/xugaoyi/image_store/blog/20200507175846.jpeg'
    // ], // body背景大图，默认无。 单张图片 String | 多张图片 Array, 多张图片时每隔15秒换一张。
    // bodyBgImgOpacity: 0.5, // body背景图透明度，选值 0 ~ 1.0, 默认0.5

    titleBadge: false, // 文章标题前的图标是否显示，默认true 文档：https://doc.xugaoyi.com/pages/a20ce8/#titlebadge
    // titleBadgeIcons: [ // 文章标题前图标的地址，默认主题内置图标
    //   '图标地址1',
    //   '图标地址2'
    // ],
    // contentBgStyle: 1, // 文章内容块的背景风格，默认无. 1 方格 | 2 横线 | 3 竖线 | 4 左斜线 | 5 右斜线 | 6 点状

    // updateBar: { // 最近更新栏
    //   showToArticle: false, // 显示到文章页底部，默认true
    //   moreArticle: '/archives' // “更多文章”跳转的页面，默认'/archives'
    // },
    // rightMenuBar: false, // 是否显示右侧文章大纲栏，默认true (屏宽小于1300px下无论如何都不显示)
    // sidebarOpen: false, // 初始状态是否打开左侧边栏，默认true
    // pageButton: false, // 是否显示快捷翻页按钮，默认true

    // 侧边栏  'structuring' | { mode: 'structuring', collapsable: Boolean} | 'auto' | <自定义>    温馨提示：目录页数据依赖于结构化的侧边栏数据，如果你不设置为'structuring',将无法使用目录页
    sidebar: 'structuring',

    // 文章默认的作者信息，可在md文件中单独配置此信息 String | {name: String, link: String}
    author: {
      name: 'Ektropia Tsuei', // 必需
      link: 'https://github.com/tsuei', // 可选的
    },

    // 博主信息，显示在首页侧边栏
    blogger: {
      avatar: 'https://avatars.githubusercontent.com/u/47493588?v=4',
      name: 'Ektropia Tsuei',
      slogan: '团结紧张严肃活泼',
    },

    // 社交图标，显示于博主信息栏和页脚栏。内置图标：https://doc.xugaoyi.com/pages/a20ce8/#social
    social: {
      // iconfontCssFile: '//at.alicdn.com/t/font_1678482_u4nrnp8xp6g.css', // 可选，阿里图标库在线css文件地址，对于主题没有的图标可自己添加
      icons: [
        {
          iconClass: 'icon-youjian',
          title: '发邮件',
          link: 'mailto:1624033170@qq.com',
        },
        {
          iconClass: 'icon-github',
          title: 'GitHub',
          link: 'https://github.com/tsuei',
        },
        {
          iconClass: 'icon-erji',
          title: '听音乐',
          link: 'https://music.163.com/#/playlist?id=612345823',
        },
      ],
    },

    // 页脚信息
    footer: {
      createYear: 2024, // 博客创建年份
      copyrightInfo:
        'Ektropia Tsuei | <a href="https://github.com/tsuei/tsuei.github.io/blob/main/LICENSE" target="_blank">MIT License</a>', // 博客版权信息，支持a标签
    },

    // 插入hmtl(广告)模块
    htmlModules
  },

  // 注入到页面<head>中的标签，格式[tagName, { attrName: attrValue }, innerHTML?]
  head: [
    ['link', {rel:'stylesheet', href:'https://cdn.jsdelivr.net/npm/katex@0.15.1/dist/katex.min.css'}],
    //['link', {rel:'stylesheet', href:'https://gitcdn.xyz/cdn/goessner/markdown-it-texmath/master/texmath.css'}],
    //['script', {src: 'https://github.com/markdown-it/markdown-it/blob/master/bin/markdown-it.js'}],
    //['script', {src: 'https://gitcdn.xyz/cdn/goessner/markdown-it-texmath/master/texmath.js'}],
    ['script', {src: 'https://cdn.jsdelivr.net/npm/katex@0.15.1/dist/katex.min.js'}],
    // 在head中导入样式文件

    // ['link', { rel: 'stylesheet', href: 'https://cdn.jsdelivr.net/npm/katex@0.13.11/dist/katex.min.css' }],
    // ['script', { src: 'https://cdn.jsdelivr.net/npm/katex@0.13.11/dist/katex.min.js' }],
    // ['script', { src: 'https://cdn.jsdelivr.net/npm/katex@0.13.11/dist/contrib/auto-render.min.js' }],
    // 引入KaTeX的CDN（已废弃，未成功渲染LaTeX公式）

    ['link', { rel: 'icon', href: '/img/favicon_ekt.ico' }], //favicons，资源放在public文件夹
    [
      'meta',
      {
        name: 'keywords',
        content: '前端博客,个人技术博客,前端,前端开发,前端框架,web前端,前端面试题,技术文档,学习,面试,JavaScript,js,ES6,TypeScript,vue,python,css3,html5,Node,git,github,markdown',
      },
    ],
    ['meta', { name: 'baidu-site-verification', content: '7F55weZDDc' }], // 百度统计的站长验证（你可以去掉）
    ['meta', { name: 'theme-color', content: '#11a8cd' }], // 移动浏览器主题颜色
    [
      'script',
      {
        'data-ad-client': 'ca-pub-7828333725993554',
        async: 'async',
        src: 'https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js',
      },
    ], // 网站关联Google AdSense 与 html格式广告支持（你可以去掉）
  ],

  // 插件配置
  plugins: [
    // 'vuepress-plugin-katex', // （VuePress 1 写法，2.x 中可能失效）启用 KaTeX 插件
    // katex(), // 为VuePress 2.0写法，本主题是在1.9.9上开发的（见package.json），版本不兼容
    ['vuepress-plugin-katex'],
    
    // 本地插件（供学习）
    // [require('./plugins/love-me'), { // 鼠标点击爱心特效
    //   color: '#11a8cd', // 爱心颜色，默认随机色
    //   excludeClassName: 'theme-vdoing-content' // 要排除元素的class, 默认空''
    // }],

    'vuepress-plugin-baidu-autopush', // 百度自动推送

    // 可以添加第三方搜索链接的搜索框（原官方搜索框的参数仍可用）
    [
      'thirdparty-search',
      {
        thirdparty: [
          // 可选，默认 []
          {
            title: '在MDN中搜索',
            frontUrl: 'https://developer.mozilla.org/zh-CN/search?q=', // 搜索链接的前面部分
            behindUrl: '', // 搜索链接的后面部分，可选，默认 ''
          },
          {
            title: '在Runoob中搜索',
            frontUrl: 'https://www.runoob.com/?s=',
          },
          {
            title: '在Vue API中搜索',
            frontUrl: 'https://cn.vuejs.org/v2/api/#',
          },
          {
            title: '在Bing中搜索',
            frontUrl: 'https://cn.bing.com/search?q=',
          },
          {
            title: '通过百度搜索本站的',
            frontUrl: 'https://www.baidu.com/s?wd=site%3Atsuei.github.io%20', // 没用，站点未被百度收录
          },
        ],
      },
    ],

    [
      'one-click-copy', // 代码块复制按钮
      {
        copySelector: ['div[class*="language-"] pre', 'div[class*="aside-code"] aside'], // String or Array
        copyMessage: '复制成功', // default is 'Copy successfully and then paste it for use.'
        duration: 1000, // prompt message display time.
        showInMobile: false, // whether to display on the mobile side, default: false.
      },
    ],

    [
      'demo-block', // demo演示模块 https://github.com/xiguaxigua/vuepress-plugin-demo-block
      {
        settings: {
          // jsLib: ['http://xxx'], // 在线示例(jsfiddle, codepen)中的js依赖
          // cssLib: ['http://xxx'], // 在线示例中的css依赖
          // vue: 'https://cdn.jsdelivr.net/npm/vue/dist/vue.min.js', // 在线示例中的vue依赖
          jsfiddle: false, // 是否显示 jsfiddle 链接
          codepen: true, // 是否显示 codepen 链接
          horizontal: false, // 是否展示为横向样式
        },
      },
    ],
    [
      'vuepress-plugin-zooming', // 放大图片
      {
        selector: '.theme-vdoing-content img:not(.no-zoom)', // 排除class是no-zoom的图片
        options: {
          bgColor: 'rgba(0,0,0,0.6)',
        },
      },
    ],
    [
      'vuepress-plugin-baidu-tongji', // 百度统计 （你可以去掉）
      {
        hm: baiduCode || '503f098e7e5b3a5b5d8c5fc2938af002',
      },
    ],
    /*
    [
      'vuepress-plugin-comment', // 评论
      {
        choosen: 'gitalk',
        options: {
          clientID: 'a6e1355287947096b88b',
          clientSecret: 'f0e77d070fabfcd5af95bebb82b2d574d7248d71',
          repo: 'blog-gitalk-comment', // GitHub 仓库
          owner: 'xugaoyi', // GitHub仓库所有者
          admin: ['xugaoyi'], // 对仓库有写权限的人
          // distractionFreeMode: true,
          pagerDirection: 'last', // 'first'正序 | 'last'倒序
          id: '<%- (frontmatter.permalink || frontmatter.to.path).slice(-16) %>', //  页面的唯一标识,长度不能超过50
          title: '「评论」<%- frontmatter.title %>', // GitHub issue 的标题
          labels: ['Gitalk', 'Comment'], // GitHub issue 的标签
          body:
            '页面：<%- window.location.origin + (frontmatter.to.path || window.location.pathname) %>', // GitHub issue 的内容
        },
      },
    ],
    */
    [
      '@vuepress/last-updated', // "上次更新"时间格式
      {
        transformer: (timestamp, lang) => {
          const dayjs = require('dayjs') // https://day.js.org/
          return dayjs(timestamp).format('YYYY/MM/DD, HH:mm:ss')
        },
      },
    ],
  ],
  
  markdown: { //抄自 https://blog.csdn.net/m0_50488756/article/details/123799709
    lineNumbers: true, // 代码块显示行号
    anchor: { permalink: true }, // 是否生成标题锚点 参见 https://vuepress.vuejs.org/zh/guide/markdown.html#标题锚点
    toc: {includeLevel: [1,2,3,4]}, // [[toc]]命令生成的目录块包含一、二、三、四级标题 https://vuepress.vuejs.org/zh/guide/markdown.html#目录
  //toc: {includeLevel: [1,2,3,4,5,6]},
    extractHeaders: [ 'h2', 'h3', 'h4' ], // 目录栏支持二、三、四级标题 来自 https://doc.xugaoyi.com/pages/8dfab5/
  //extractHeaders: [ 'h2', 'h3', 'h4', 'h5', 'h6' ],
    extendMarkdown: md => { // Markdown渲染器扩展
      md.use(require('markdown-it-texmath'))
    }
  }
}
