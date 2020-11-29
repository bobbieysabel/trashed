const eleventyNavigationPlugin = require("@11ty/eleventy-navigation");
const pluginDate = require("eleventy-plugin-date");

module.exports = function(eleventyConfig) {
    eleventyConfig.addPassthroughCopy('css')
    eleventyConfig.addPlugin(eleventyNavigationPlugin);
    eleventyConfig.addPlugin(pluginDate);
    return {
      passthroughFileCopy: true
    }
  }