import { createRequire } from 'module'
import { DefaultTheme, defineConfig } from 'vitepress'

const require = createRequire(import.meta.url)
const pkg = require('../../package.json')

export const vi = defineConfig({
  description: "Dự án tra cứu lịch vạn niên, ngày lễ và tiết khí Việt Nam",

  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: 'Hướng dẫn', link: '/guide/what-is-vietnamese-days' },
      { text: 'Ví dụ', link: '/demo/calendar' },
      {
        text: pkg.version,
        link: 'https://github.com/mrtinhnguyen/vietnamese-days/blob/main/CHANGELOG.md'
      },
    ],

    sidebar: {
      '/guide/': { base: '/guide/', items: sidebarGuide() },
      '/demo/': { base: '/demo/', items: sidebarDemo() }
    },

    socialLinks: [
      { icon: 'github', link: 'https://github.com/mrtinhnguyen/vietnamese-days' }
    ],

    footer: {
      message: 'Phát hành theo giấy phép MIT',
      copyright: `Copyright © 2019-${new Date().getFullYear()} Yawei Sun & TonyX.Dev`
    },

    docFooter: {
      prev: 'Trang trước',
      next: 'Trang sau'
    },

    outline: {
      label: 'Nội dung trang'
    },

    lastUpdated: {
      text: 'Cập nhật cuối lúc',
      formatOptions: {
        dateStyle: 'short',
        timeStyle: 'medium'
      }
    },

    langMenuLabel: 'Ngôn ngữ',
    returnToTopLabel: 'Lên đầu trang',
    sidebarMenuLabel: 'Menu',
    darkModeSwitchLabel: 'Giao diện',
    lightModeSwitchTitle: 'Chuyển sang chế độ sáng',
    darkModeSwitchTitle: 'Chuyển sang chế độ tối'
  }
})

function sidebarGuide(): DefaultTheme.SidebarItem[] {
  return [
    {
      text: 'Giới thiệu',
      collapsed: false,
      items: [
        { text: 'Về dự án này', link: 'what-is-vietnamese-days' },
        { text: 'Đăng ký lịch (iCal)', link: 'ical-subscription' },
        { text: 'Bắt đầu nhanh', link: 'getting-started' },
      ]
    },
    {
      text: 'Ngày lễ',
      collapsed: false,
      items: [
        { text: 'Danh sách ngày lễ', link: 'holidays' },
        { text: 'Ngày nghỉ bù', link: 'lieu-days' },
        { text: 'Ngày làm việc', link: 'working-days' },
      ]
    },
    {
      text: '24 Tiết khí',
      collapsed: false,
      items: [
        { text: 'Cách sử dụng', link: '24-solar-terms' },
      ]
    },
    {
      text: 'Âm lịch',
      collapsed: false,
      items: [
        { text: 'Dương lịch sang Âm lịch', link: 'to-lunar' },
        { text: 'Âm lịch sang Dương lịch', link: 'from-lunar' },
        { text: 'Lễ hội dân gian & Kỷ niệm', link: 'lunar-folk-festival' },
      ]
    },
    { text: 'Khác',
      collapsed: false,
      items: [
        { text: 'Hướng dẫn đóng góp', link: 'contributing' },
        { text: 'Lời cảm ơn', link: 'thank' }
      ]
    }
  ]
}

function sidebarDemo(): DefaultTheme.SidebarItem[] {
  return [
    {
      text: 'Ví dụ sử dụng',
      items: [
        { text: 'Lịch điện tử', link: 'calendar' },
        { text: 'Công cụ tính lương thời gian thực', link: 'salary-calculator' }
      ]
    }
  ]
}
