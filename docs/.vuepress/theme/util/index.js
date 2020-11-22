/**
 * @param { Page } page
 * @param { string } regularPath
 * @param { SiteData } site
 * @param { string } localePath
 * @returns { SidebarGroup }
 */
/* 从官网默认主题拿过来的工具函数 */
export function resolveSidebarItems (page, regularPath, site, localePath) {
    const { pages, themeConfig } = site
  
    const localeConfig = localePath && themeConfig.locales
      ? themeConfig.locales[localePath] || themeConfig
      : themeConfig
  
    const pageSidebarConfig = page.frontmatter.sidebar || localeConfig.sidebar || themeConfig.sidebar
    if (pageSidebarConfig === 'auto') {
      return resolveHeaders(page)
    }
  
    const sidebarConfig = localeConfig.sidebar || themeConfig.sidebar
    if (!sidebarConfig) {
      return []
    } else {
      const { base, config } = resolveMatchingConfig(regularPath, sidebarConfig)
      if (config === 'auto') {
        return resolveHeaders(page)
      }
      return config
        ? config.map(item => resolveItem(item, pages, base))
        : []
    }
  }