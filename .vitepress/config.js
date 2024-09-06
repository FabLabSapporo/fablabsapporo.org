import { defineConfig } from 'vitepress'
import { imagetools } from 'vite-imagetools'

export default defineConfig ({
  lang: 'jp',
  title: 'FLS',
  base: '/',
  cleanUrls: true,
  vite: { plugins: [ imagetools() ] },  // vite plugins
  outDir: './dist',                     // distribtion folder
  ignoreDeadLinks: true,                // no build error when dead links
  srcExclude: ['**/README.md'],         // exclude files
  lastUpdated: true,
  themeConfig: {
    logo: { /* small logo navbar */
      light: '/images/FLSv2.svg',
      dark: '/images/FLS_dark.svg',
      alt: "FabLab Sapporo"
    },
    editLink: {
      pattern: 'https://github.com/FabLabSapporo/fablabsapporo.org/edit/main/:path'
    }
  },
  locales: {
    root: {
      title: "Virtual FabLab Sapporo",
      description: 'FabLab Sapporo, FabAcademy, How to Grow Almost Anything, HTMAA, HTGAA',
      label: 'Japanese',
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
          { text:'コンタクト', link:'/contact/'},
        ],
        footer: {
          message: 'Released under the <a href="">MIT License</a>.',
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
          { text:'Upcoming Events', link:'/en/#upcoming-events'},
          { text:'Contact', link:'/en/contact/'},
        ],
        footer: {
          message: 'Released under the MIT License.',
          copyright: `Copyright ©${new Date().getFullYear()} FabLab Sapporo`
        }
      }
    }
  }
})