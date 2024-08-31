import { defineConfig } from 'vitepress'

export default defineConfig ({
  lang: 'jp',
  title: 'FLS',
  base: '/',
  cleanUrls: true,
  outDir: './dist', // distribtion folder
  lastUpdated: true,
  themeConfig: {
    logo: {
      light: '/FLSv2.svg',
      dark: '/FLS_dark.svg',
      alt: "FLS Logo"
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
          {text:'Examples JP', link:'/examples'},
          {text:'Examples JP', link:'/examples'}
        ],
        footer: {
          message: 'Released under the MIT License. JP',
          copyright: `Copyright ©${new Date().getFullYear()} FabLab Sapporo`
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
          {text:'About', link:'/en/about'},
          {text:'Programmes', link:'/en/programmes'},
          {text:'Events', link:'/en/events'},
          {text:'Foldscope', link:'/en/foldscope'},
        ],
        footer: {
          message: 'Released under the MIT License. EN',
          copyright: `Copyright ©${new Date().getFullYear()} FabLab Sapporo`
        }
      }
    }
  }
})