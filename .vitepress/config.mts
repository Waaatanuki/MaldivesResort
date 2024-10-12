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
          { text: '奥静洛碧吉利岛', link: '/resort/AI/oblu-select-lobigili' },
          { text: '莉莉海滩度假村', link: '/resort/AI/lily-beach-resort-and-spa' },
          { text: '康斯丹魔富士度假村', link: '/resort/AI/constance-moofushi' },
          { text: '胡拉瓦尔西岛度假村', link: '/resort/AI/hurawalhi-island-resort' },
          { text: '马尔地夫奥臻岛度假酒店', link: '/resort/AI/ozen-life-maadhoo' },
          { text: '盛泰澜马尔地夫中央格兰德岛', link: '/resort/AI/centara-grand-island-resort-and-spa-maldives' },
          { text: '马尔代夫伊露薇莉度假村', link: '/resort/AI/sun-aqua-iru-veli' },
          { text: '马尔代夫翡翠岛度假村及水疗中心', link: '/resort/AI/emerald-maldives-resort-spa' },
          { text: '马尔代夫瓦露岛度假村', link: '/resort/AI/varu-by-atmosphere' },
          { text: '瓦杜阿达郎尊享度假村', link: '/resort/AI/adaaran-prestige-vadoo' },
        ],
      },
    ],
  },
})
