const path = require("path");

function resolve(dir) {
  return path.join(__dirname, dir);
}
module.exports = {
  // https://www.cnblogs.com/hanguidong/p/9416194.html 针对2.0 需要手动加的
  configureWebpack: config => {
    config.resolve = {
      extensions: [".js", ".vue", ".json", ".css"],
      alias: {
        vue$: "vue/dist/vue.esm.js",
        "@": resolve("src")
      }
    };
  },
  baseUrl: "./",
  outputDir: "dist",
  devServer: {
    port: 3333, // 端口号
    host: "localhost",
    https: false, // https:{type:Boolean}
    //baseUrl: process.env.NODE_ENV === "production" ? "/my-project/" : "./",
    open: false //配置自动启动浏览器
    // proxy: {
    //   "/proxy": {
    //     target: "http://AAAAAA", //访问的地址y
    //     changeOrigin: true, //允许跨域
    //     ws: true,
    //     pathRewrite: {
    //       "^/proxy": ""
    //     }
    //   }
    // }
  }
};
