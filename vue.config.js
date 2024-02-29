module.exports = {
  devServer: {
    proxy: {
      "/": {
        target: "http://LOCALHOST",
        pathRewrite: { "^/": "" },
        changeOrigin: true,
        secure: false,
      },
    },
  },
  publicPath:
    process.env.NODE_ENV === "production"
      ? "/vue-test/" // GitHub Pages의 프로젝트 이름에 따라 경로를 수정하세요.
      : "/",
  outputDir: "docs",
  productionSourceMap: false,
  //   configureWebpack: (config) => {
  //     config.output.filename = "js/[name].[chunkhash].js";
  //     config.output.chunkFilename = "js/[name].[chunkhash].js";
  //   },
};

// 요청하는 URL을 부를 때 localhost가 server와 통신할 때 에러가 나기 때문에
// 이를 방지하고자 해당 부분을 설정해 줌
