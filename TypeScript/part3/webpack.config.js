// 引入一个包
const path = require("path");

// webpack中的所有配置信息都应该写在module.exports中
module.exports = {
  // 入口文件
  entry: "./src/index.ts",

  // 打包输出的指定目录
  output: {
    // 指定打包后的目录
    path: path.resolve(__dirname, "dist"),
    // 打包后文件的名字
    filename: "bundle.js",
  },

  // 指定webpack打包时要使用的模块
  module: {
    // 指定加载的规则
    rules: [
      {
        //  test指定的时规则生效的文件
        test: /\.ts$/, // 以ts结尾的文件
        // 要使用的loader
        use: "ts-loader",
        // 要排除的文件夹
        exclude: /node-modules/,
      },
    ],
  },
};
