import { defineConfig } from 'vitepress'

export default defineConfig ({
  lang: 'jp',
  title: 'FLS',
  base: '/',
  cleanUrls: true,
  outDir: './dist',           // distribtion folder
  ignoreDeadLinks: true,      // no build error when dead links
  srcExclude: ['**/README.md'],
  lastUpdated: true,
  themeConfig: {
    logo: { /* small logo navbar */
      light: '/images/FLSv2.svg',
      dark: '/images/FLS_dark.svg',
      alt: "FabLab Sapporo"
    }
  },
  locales: {
    root: {
      title: 'FabLab Sapporo (Virtual)',
      description: 'FabLab Sapporo, FabAcademy, How to Grow Almost Anything, HTMAA, HTGAA',
      label: 'Japanese',
      lang: 'jp', // optional, will be added  as `lang` attribute on `html` tag
      themeConfig: {
        nav: [
        
        ],
        footer: {
          message: 'Released under the <a href="">MIT License</a>.',
          copyright: `Made with VitePress and ❤️ in Sapporo. Copyright ©${new Date().getFullYear()} <a href="">FabLab Sapporo</a>`
        }
      }
    },
    en: {
      title: 'FabLab Sapporo (Virtual)',
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
              { text: 'FabAcademy 2025', link: '/en/fabacademy' },
              { text: 'HTGAA 2025', link: '/en/htgaa' }
            ]
          },
          { text:'Upcoming Events', link:'/en/#upcoming-events'},
        ],
        footer: {
          message: 'Released under the MIT License.',
          copyright: `Copyright ©${new Date().getFullYear()} FabLab Sapporo`
        }
      }
    }
  }
})