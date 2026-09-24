import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "Yang458的文档站",
  description: "Yang458的一些文章",
  locales: {
    zh: {
      label: '简体中文',
      lang: 'zh',
      link: '/zh/',
      themeConfig: {
       
      }
    }
  },
  themeConfig: {
    
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: '首页', link: '/zh/' },
      { text: '铁脉RAILWAY', link: '/zh/railway/' },
      { text: '计算机', link: '/zh/computer/' },
    ],
    
    search: {
      provider: 'local',
      options: {
        miniSearch: {
          options: {
            tokenize: (text: string) =>
              Array.from(
                new Intl.Segmenter('zh', { granularity: 'word' }).segment(text),
                (s) => s.segment
              )
          }
        }
      }
    },

    sidebar: [
      // {
      //   text: 'Examples',
      //   items: [
      //     { text: 'Markdown Examples', link: '/markdown-examples' },
      //     { text: 'Runtime API Examples', link: '/api-examples' }
      //   ]
      // }

      {
        text: '铁脉RAILWAY',
        collapsed: false,
        items: [
          { text: '概述', link: '/zh/railway/' },
          {
            text: '第一卷 永不陷落',
            collapsed: true,
            items: [
              { text: '第一章 铁北基地', link: '/zh/railway/c-1' },
              { text: '第二章 尸潮（一）', link: '/zh/railway/c-2' },
              { text: '第三章 尸潮（二）', link: '/zh/railway/c-3' },]

          }
        ],
      },
      {
        text: '计算机',
        collapsed: false, // 想默认折叠就加，不想折叠就删掉这行
        items: [
          { text: '序言', link: '/zh/computer/' },
          { text: '原序', link: '/zh/computer/yuanxv' },
          {
            text: '第一卷 计算机理论',
            collapsed: true,
            items: [
              { text: '卷首语', link: '/zh/computer/j1/' },
              { text: '第一章 计算机的起源', link: '/zh/computer/j1/z1' },
              //{ text: '第三节 计算机的未来', link: '/zh/computer/c-1-3' },
            ]
          }
        ]
      },



    ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/vuejs/vitepress' }
    ],

    footer: {
      message: 'Powered by VitePress.<br>Follow the CC-BY-SA 4.0 License.',
      copyright: 'Copyright © 2026 Yang458.'
    },

    

  },
  lastUpdated: true
})
