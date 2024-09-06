import { defineConfig } from 'vitepress'
import { imagetools } from 'vite-imagetools'

export default defineConfig ({
  lang: 'jp',
  title: 'Virtual FabLab Sapporo',
  base: '/',
  cleanUrls: true,
  vite: { plugins: [ imagetools() ] },  // vite plugins
  outDir: './dist',                     // distribtion folder
  ignoreDeadLinks: true,                // no build error when dead links
  srcExclude: ['**/README.md'],         // exclude files
  themeConfig: {
    logo: { /* small logo navbar */
      light: '/images/FLSv2.svg',
      dark: '/images/FLS_dark.svg',
      alt: "FabLab Sapporo"
    },
    editLink: {
      pattern: 'https://github.com/FabLabSapporo/fablabsapporo.org/edit/main/:path'
    },
    lastUpdated: true,
    socialLinks: [
      { icon: 'instagram', link: 'https://instagram.com/fablabsapporo/' },
      { icon: 'github', link: 'https://github.com/FabLabSapporo/' },
      { icon: 'x', link: 'https://x.com/fablabsapporo/' },
    ]
  },
  locales: {
    root: {
      title: "Virtual FabLab Sapporo",
      description: 'FabLab Sapporo, FabAcademy, How to Grow Almost Anything, HTMAA, HTGAA',
      label: '日本語',
      lang: 'jp', // optional, will be added  as `lang` attribute on `html` tag
      themeConfig: {
        nav: [
          { text:'について', link:'/about'},
          {
            text:'プログラム', 
            items: [
              { text: 'FabAcademy 2025', link: '/fabacademy/' },
              { text: 'HTGAA 2025', link: '/htgaa/' }
            ]
          },
          { text:'イベント', link:'/events/'},
          { text:'コンタクト', link:'/contact/'},
        ],
        footer: {
          message: '<a href="https://instagram.com/fablabsapporo/">Instagram</a>, <a href="https://github.com/fablabsapporo/">GitHub</a>, <a href="https://x.com/fablabsapporo/">X</a>',
          copyright: `Made with <a href="http://github.com/FabLabSapporo/fablabsapporo.org">VitePress</a> and ❤️ in Sapporo. Copyright ©${new Date().getFullYear()} FabLab Sapporo`
        }
      }
    },
    en: {
      title: 'Virtual FabLab Sapporo',
      description: 'FabLab Sapporo, FabAcademy, How to Grow Almost Anything, HTMAA, HTGAA',
      label: 'English',
      lang: 'en', // optional, will be added  as `lang` attribute on `html` tag
      link: '/en/',
      themeConfig: {
        nav: [
          { text:'About', link:'/en/about'},
          {
            text:'Programmes', 
            items: [
              { text: 'FabAcademy 2025', link: '/en/fabacademy/' },
              { text: 'HTGAA 2025', link: '/en/htgaa/' }
            ]
          },
          { text:'Upcoming Events', link:'/en/events/'},
          { text:'Contact', link:'/en/contact/'},
        ],
        footer: {
          message: '<a href="https://instagram.com/fablabsapporo/">Instagram</a>, <a href="https://github.com/fablabsapporo/">GitHub</a>, <a href="https://x.com/fablabsapporo/">X</a>',
          copyright: `Made with <a href="http://github.com/FabLabSapporo/fablabsapporo.org">VitePress</a> and ❤️ in Sapporo. Copyright ©${new Date().getFullYear()} FabLab Sapporo`,
        }
      }
    }
  }
})