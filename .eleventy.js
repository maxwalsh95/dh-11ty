const CleanCSS = require("clean-css");

module.exports = function (eleventyConfig) {
  eleventyConfig.setQuietMode(true);
  eleventyConfig.addPassthroughCopy("src/js");
  eleventyConfig.addPassthroughCopy("src/css");

  eleventyConfig.addCollection("sections", function (collection) {
    return collection.getFilteredByGlob("./src/sections/*.md");
  });

  eleventyConfig.addFilter("cssmin", function (code) {
    return new CleanCSS({}).minify(code).styles;
  });

  return {
    dir: {
      output: "site",
      input: "src",
      includes: "_templates",
      data: "_data",
    },

    templateFormats: ["njk", "md", "css", "js"],
    passthroughFileCopy: true,
  };
};
