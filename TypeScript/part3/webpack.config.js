// 引入一个包
const path = require("path");
// 引入HTML插件
const HTMLWebpackPlugin = require("html-webpack-plugin");
// clean 插件
const { CleanWebpackPlugin } = require("clean-webpack-plugin")
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
    // 配置打包环境
    environment: {
        // 取消打包js的箭头函数
        arrowFunction: false
    }
  },

  // 指定webpack打包时要使用的模块
  module: {
    // 指定加载的规则
    rules: [
      {
        //  test指定的时规则生效的文件
        test: /\.ts$/, // 以ts结尾的文件
        // 要使用的loader
        use: [
        // 配置babel
        {
            // 指定加载器
            loader: "babel-loader",
            // 设置babel
            options: {
                // 设置预定义的环境
                presets: [
                    [
                        // 指定环境插件
                        "@babel/preset-env",
                        // 配置信息
                        {
                            // 要兼容的目标浏览器
                            targets: {
                                // "chrome": "58",
                                "ie":"11"
                            },
                            // 指定使用的corejs版本
                            "corejs":"3",
                            // 使用corejs的方式: "usage"表示按需加载
                            "useBuiltIns":"usage"
                        }
                    ]
                ]
            }
        },
         "ts-loader"
        ],
        // 要排除的文件夹
        exclude: /node-modules/,
      },
    ],
  },

  // 配置webpack的插件
  plugins: [
    //   引入HTMLWebpackPlugin plugin插件
    new HTMLWebpackPlugin({
    //   title: "自定义title",
    template: './src/index.html'
    }),
    new CleanWebpackPlugin()
  ],

    // 用来设置引用模块
    resolve: {
        extensions: ['.ts', '.js']
    }  
};
