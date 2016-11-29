module.exports = {
  build: {
    "index.html": "index.html",
    "src/": "src/",
    "app.js" : [
      "javascripts/app.js"
    ],
    "assets/": "assets/",
    "jspm_packages/": "jspm_packages/",
    "config.js": "config.js"
  },
  rpc: {
    host: "localhost",
    port: 8545
  }
};
