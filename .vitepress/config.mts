import { defineConfig } from 'vitepress'

export default defineConfig({
  base: '/MaldivesResort/',
  title: 'MaldivesResort',
  head: [['link', { rel: 'icon', href: '/MaldivesResort/favicon.ico' }]],
  description: 'Maldives Resort Recommend',
  themeConfig: {
    nav: [
      { text: 'Home', link: '/' },
    ],

    sidebar: [
      { text: '怎么选酒店', link: '/resort/how-select-resort' },
      {
        text: '十大全价酒店',
        items: [
          { text: '简介', link: '/resort/AI/intro.md' },
          { text: '奥静·洛碧吉利', link: '/resort/AI/oblu-select-lobigili' },
          { text: '丽莉岛', link: '/resort/AI/lily-beach-resort-and-spa' },
          { text: '康斯丹·魔富士', link: '/resort/AI/constance-moofushi' },
          { text: '芙拉瓦丽', link: '/resort/AI/hurawalhi-island-resort' },
          { text: '奥臻岛', link: '/resort/AI/ozen-life-maadhoo' },
          { text: '中央格兰德', link: '/resort/AI/centara-grand-island-resort-and-spa-maldives' },
          { text: '伊露薇丽岛', link: '/resort/AI/sun-aqua-iru-veli' },
          { text: '翡翠岛', link: '/resort/AI/emerald-maldives-resort-spa' },
          { text: '瓦露岛', link: '/resort/AI/varu-by-atmosphere' },
          { text: '瓦度岛', link: '/resort/AI/adaaran-prestige-vadoo' },
        ],
      },
    ],
  },
})
