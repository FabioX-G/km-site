module.exports = function (eleventyConfig) {
  eleventyConfig.addPassthroughCopy({ "src/assets": "assets" });
  eleventyConfig.addLayoutAlias("base", "layouts/base.njk");

   eleventyConfig.addFilter("date", (value) => {
    if (!value) return new Date();
    if (value === "now" || value === "today") return new Date();
    return new Date(value);
  });

  eleventyConfig.addFilter("dateISO", v => new Date(v).toISOString());
  eleventyConfig.addFilter("y", v => new Date(v).getFullYear());

  eleventyConfig.setTemplateFormats(["njk","md"]);

  return {
    dir: { input: "src", includes: "_includes", data: "_data", output: "_site" },
    htmlTemplateEngine: "njk",
    markdownTemplateEngine: "njk",
    dataTemplateEngine: "njk"
  };
};