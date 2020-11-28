const eleventyNavigationPlugin = require("@11ty/eleventy-navigation");

module.exports = function(eleventyConfig) {
    eleventyConfig.addPassthroughCopy('css')
    eleventyConfig.addPlugin(eleventyNavigationPlugin);
    return {
      passthroughFileCopy: true
    }
  }