module.exports = function(eleventyConfig) {
    // Set custom directories for input, output, includes, and data
    eleventyConfig.addPassthroughCopy("css");
    eleventyConfig.addPassthroughCopy("fonts");
    eleventyConfig.addPassthroughCopy("images");
    return {
      
      passthroughFileCopy: true,  

      dir: {
        input: "src",
        includes: "_includes",
        data: "_data",
        output: "_site"
        
      }
    
    };
   
   };