import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  base: '/knowledge/',
  head:[['link', { rel: 'icon', href: '/knowledge/snail.svg'}]],
  title: "Knowledge Base",
  description: "我的知识库",
  themeConfig: {
    logo: '/snail.svg',
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: '首页', link: '/' },
      { text: '示例', link: '/markdown-examples' },
      { text: 'Vue', link: '/vue/desc' },
      { text: 'React', link: '/react/desc' },
    ],

    sidebar: [
      {
        text: '面试相关',
        items: [
          { text: '面试题', link: '/interviews/interview' },
        ]
      },
      {
        text: 'Vue相关',
        items: [
          { text: 'Vue', link: '/vue/desc' },
        ]
      },
      {
        text: 'React相关',
        items: [
          { text: 'React', link: '/react/desc' },
        ]
      },
      {
        text: '其他',
        items: [
          { text: '其他内容', link: '/markdown-examples' },
        ]
      },
      {
        text: '示例',
        items: [
          { text: 'Markdown Examples', link: '/markdown-examples' },
          { text: 'Runtime API Examples', link: '/api-examples' }
        ]
      }
    ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/vuejs/vitepress' }
    ]
  }
})
