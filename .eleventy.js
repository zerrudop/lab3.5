// The export statement makes these settings available to other files in 11ty
module.exports = function(eleventyConfig) {
  eleventyConfig.addPassthroughCopy("images");
  eleventyConfig.addPassthroughCopy("styles");

  eleventyConfig.addShortcode("twitter_user", function(name, twitterUsername){
    return `<div class="user">
  <div class="user_name">${name}</div>
  <div class="user_twitter">@${twitterUsername}</div>
  </div>`;
  });
};