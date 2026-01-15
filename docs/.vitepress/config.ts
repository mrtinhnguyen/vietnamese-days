import { defineConfig } from 'vitepress'
import { en } from './en'
import { vi } from './vi'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "Vietnamese Days",

  head: [
    ['link', { rel: 'icon', type: 'image/png', href: '/icon.png' }],
  ],

  rewrites: {
    'vi/:rest*': ':rest*'
  },

  themeConfig: {
    logo: { src: '/icon.png', width: 24, height: 24 },
    search: {
      provider: 'local',
    }
  },

  locales: {
    root: { label: 'Tiếng Việt', ...vi },
    en: { label: 'English', ...en },
  },
})
