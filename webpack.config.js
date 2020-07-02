var webpack = require('webpack');
var path = require('path');
var HtmlWebpackPlugin = require('html-webpack-plugin'); // 打包html的插件
var ExtractTextPlugin = require("extract-text-webpack-plugin"); // 打包css的插件

const {CleanWebpackPlugin} = require("clean-webpack-plugin"); // 打包删除dist文件的插件
const ProvidePlugin = new webpack.ProvidePlugin({ // 引入外部类库
  $: 'jquery',
  jQuery: 'jquery',
});

module.exports = {
     entry:{
         'index':'./pack/js/index.js'  // 入口文件
         // 我们的是多页面项目，多页面入口配置就是这样，
         // pack/page下可能还会有很多页面，照着这样配置就行
     },
     module: {
         // 以前的webpack是loader，现在是rules
         rules: [
             {
               test: /\.css$/,
               use: ExtractTextPlugin.extract({
                 use: [{
                   loader: "css-loader"
                 },
                //   {
                //    loader: "sass-loader" // sass-loader装了还没测试
                //  }
               ],
                 fallback: "style-loader",
                 publicPath: '../', // 更改css内部url的路径位置
               })
             },
             {
               test: /\.(gif|jpg|png|woff|svg|eot|ttf)\??.*$/,
               loader: 'url-loader?&name=images/[hash:8].[name].[ext]', // [hash:8]是名字前缀的数字文字，防止多页面总合一个文件夹时名字冲突，单页面可以不用，删除
               options: {
              //      // 小于 0k 全部压缩
                   limit: 0, // 这里我是没有设置压缩的配置，也就是说可以在本地文件夹看到全部图片（压缩的话会写入js内部）
                   esModule: false, // 路径前缀删除（没这个会有奇怪的前缀路径）
                   name: 'images/[hash:8].[name].[ext]',
              //      publicPath: './'
               }
             },
            //  { test: /\.png$/,
            //    loader: "file-loader?name=images/[hash:8].[name].[ext]"
            //  }, // 这个file因为和上面url重复，所以禁用了
      　　　　{
      　　　　　　test: /\.html$/,
      　　　　　　loader: 'html-withimg-loader'
      　　　　}
         ],
     },
     output:{
          // __dirname 当前webpack.config.js的路径
          filename: 'js/[name].[chunkHash:5].js',      // 打包后index.js的名字，
                                     // 这个[name]的意思是,配置入口entry键值对里的key值,app/dist/js/index,最后的index，
                                     // 这里无论你src/js/index.js这个脚本如何命名，打包后都将是index.js
          // path: path.resolve(__dirname'
     },
     //插件
     plugins:[
        new HtmlWebpackPlugin({
            chunks:['index'],
            filename:'index.html',
            template:'pack/index.html',
            // minify: false // html文件压不压缩
        }),
        new ExtractTextPlugin({
          //这里关键至极,filename:[name].[contenthash:5].css;之前我们项目是这样写的，这样写，打包出来的css就跑到dist/js里面去了，
          // 虽然不影响使用，但是混到一起就是很不舒服，
          //这里你们非常有必要先试试，filename:[name].[contenthash:5].css
          //还有就是最外层建一个 css文件夹  ，然后这样配置filename:css/[name].[contenthash:5].css,然后看看具体打包出什么，
          filename: `css/[name]_[md5:contenthash:hex:8].css`,
        }),
        new CleanWebpackPlugin(), // 每次打包自动删除dist
        ProvidePlugin, // 全局jq
     ]
}