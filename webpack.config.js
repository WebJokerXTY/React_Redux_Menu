const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
module.exports = {
    // 选择模式告诉webpack相应的使用其内置优化
    mode: "development",
    // webpack打包入口
    entry: "./index.tsx",
    // webpack输出结果
    output: {
        path: path.resolve(__dirname, "dist"), // 输出文件目标路径
        filename: "bundle.js", // 入口分块的文件名模板
    },
    // 模块配置，匹配选项和loader
    module: {
        rules: [{ //ES6,tsx处理
                test: /\.tsx?$/,
                loader: 'babel-loader',
                options: {
                    presets: [
                        [
                            "@babel/preset-env",
                            {
                                modules: false,
                                targets: {
                                    browsers: [
                                        "cover 99.5%",
                                        "chrome > 55",
                                        "ie > 8"
                                    ]
                                }
                            }
                        ],
                        "@babel/preset-react",
                        "@babel/preset-typescript"
                    ],
                    plugins: [
                        "transform-es3-property-literals",
                        "transform-es3-member-expression-literals",
                        "@babel/plugin-transform-property-mutators",
                        "@babel/proposal-object-rest-spread",
                        "@babel/plugin-transform-runtime",
                        ["@babel/plugin-proposal-decorators", {
                            "legacy": true
                        }],
                        ["@babel/plugin-proposal-class-properties", {
                            "loose": true
                        }],
                        ["@babel/plugin-syntax-decorators",{
                            "legacy": true
                        }],
                        [
                            "import",
                            {
                                libraryName: "antd",
                                style: 'css'
                            }
                        ]
                    ]
                }
            },
            {
                test: /\.js$/,
                use: ["source-map-loader"],
                enforce: "pre"
            },
            { //css处理
                test: /\.css$/,
                use: ["style-loader", "css-loader"],
                exclude: /node_modules/
            },
            { //antd样式处理
                test: /\.css$/,
                exclude: /src/,
                use: [{
                        loader: "style-loader",
                    },
                    {
                        loader: "css-loader",
                        options: {
                            importLoaders: 1
                        }
                    }
                ]
            }
        ]
    },
    // 解析模块请求的选项
    resolve: {
        modules: ["node_modules"], // 用于查找模块的目录
        extensions: [".ts", ".tsx", ".js", ".json"], // 使用的扩展名
        alias: { // 模块的别名列表
            "module": "new-module" // 起别名
        }
    },
    // // 配置性能提示
    // performance: {
    //     hints: "warning"        // 提示时展示警告
    // },
    // // 使用source-map增强调试过程
    // devtool: "source-map",
    // // bundle包运行的环境
    // target: "web",
    // // 控制要显示的bundle信息
    // stats: "errors-only",
    // // 开发选项
    // devServer: {
    //     contentBase: "./public",        // 提供内容的目录
    //     compress: true,                 // 启用gzip压缩
    //     historyApiFallback: true,       // 任何404响应都被替代为index.html
    //     hot: true                       // 使用热更新模式
    // },
    plugins: [
        new HtmlWebpackPlugin({
            filename: "index.html",
            template: "./public/index.html"
        })
    ]
}