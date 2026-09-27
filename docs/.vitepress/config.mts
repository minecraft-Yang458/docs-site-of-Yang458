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
              { text: '第二章 计算机的组成', link: '/zh/computer/j1/z2' },
            ]
          }
        ]
      },



    ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/vuejs/vitepress' ,ariaLabel: 'VitePress 官方仓库' },
      {
    icon: {
      svg: `<svg height="1em" style="flex:none;line-height:1" viewBox="0 0 24 24" width="1em" xmlns="http://www.w3.org/2000/svg"><title>bilibili</title><path clip-rule="evenodd" d="M4.977 3.561a1.31 1.31 0 111.818-1.884l2.828 2.728c.08.078.149.163.205.254h4.277a1.32 1.32 0 01.205-.254l2.828-2.728a1.31 1.31 0 011.818 1.884L17.82 4.66h.848A5.333 5.333 0 0124 9.992v7.34a5.333 5.333 0 01-5.333 5.334H5.333A5.333 5.333 0 010 17.333V9.992a5.333 5.333 0 015.333-5.333h.781L4.977 3.56zm.356 3.67a2.667 2.667 0 00-2.666 2.667v7.529a2.667 2.667 0 002.666 2.666h13.334a2.667 2.667 0 002.666-2.666v-7.53a2.667 2.667 0 00-2.666-2.666H5.333zm1.334 5.192a1.333 1.333 0 112.666 0v1.192a1.333 1.333 0 11-2.666 0v-1.192zM16 11.09c-.736 0-1.333.597-1.333 1.333v1.192a1.333 1.333 0 102.666 0v-1.192c0-.736-.597-1.333-1.333-1.333z" fill="#FB7299" fill-rule="evenodd"></path></svg>`
    },
    link: 'https://space.bilibili.com/650376968',
    ariaLabel: 'Bilibili'
  },
    {
    icon: {
      svg: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path fill="currentColor" d="M12,4A4,4 0 0,1 16,8A4,4 0 0,1 12,12A4,4 0 0,1 8,8A4,4 0 0,1 12,4M12,14C16.42,14 20,15.79 20,18V20H4V18C4,15.79 7.58,14 12,14Z"/></svg>`
    },
    link: 'https://github.com/minecraft-Yang458',
    ariaLabel: '我的 GitHub 主页'
  }
    ],

    footer: {
      message: 'Powered by VitePress.<br>Follow the CC-BY-SA 4.0 License.',
      copyright: 'Copyright © 2026 Yang458.'
    },

    

  },
  lastUpdated: true
})
