module.exports = (options, ctx) => {  
  return {
    extend: '@vuepress/theme-default',
    plugins: [
      ['@vuepress/search', {
        searchMaxSuggestions: 10
      }]
    ]
  }
}