module.exports = {
  website: {
    assets: "./assets",
    js: [ "contributors.js" ],
    css: [ "style.css" ]
  },

  blocks: {
    GitHubContributors: function(block) {
      return "<div id='GitHubContributors' class='contributors'> test </div>";
    }
  }

};
