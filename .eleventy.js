module.exports = function(eleventyConfig) {
    eleventyConfig.addPassthroughCopy('css')
    eleventyConfig.addPassthroughCopy("image.jpg");
    return {
      passthroughFileCopy: true
    }
  }