var webpack = require("webpack")

var ExtractTextPlugin = require("extract-text-webpack-plugin")
var cssLoader = ExtractTextPlugin.extract("vue-style", "css?sourceMap!postcss");

var publicPath = "/build/"

var pkg = require('./package.json')
var vendor = Object.keys(pkg.dependencies)

var proxy = {
    "/api/*": { target: "http://python-china.org", host: "python-china.org", secure: false, changeOrigin: true },
    "/session*": { target: "http://python-china.org", host: "python-china.org", secure: false, changeOrigin: true }
}


module.exports = {
    entry: {
        app: ["./src/ga.js", "./src/index.js", "./lib/css/responsive.css", "./css/index.css"],
        vendor: vendor,
    },

    output: {
        path: __dirname + publicPath,
        filename: 'app.js',
        publicPath: publicPath,
        devtoolModuleFilenameTemplate: function(info) {
            return info.resource;
        }
    },
    resolve: {
        alias: {
            vue: 'vue/dist/vue.js'
        }
    },
    module: {
        loaders: [
            { test: /\.vue$/, loader: 'vue' },
            { test: /\.css$/, loader: cssLoader },
            { test: /\.js$/, exclude: /node_modules/, loader: 'babel' },
        ]
    },

    plugins: [
        new ExtractTextPlugin("app.css", { disable: false }),
        new webpack.optimize.CommonsChunkPlugin("vendor", "vendor.js")
    ],
    // 用于其他css文件
    postcss: function() {
        return [require('postcss-import')({ addDependencyTo: webpack }),
            require('postcss-url')(),
            require('postcss-nested'),
            require('postcss-css-variables')
        ]
    },

    vue: {
        loaders: {
            css: cssLoader
        },
        // 用于.vue文件
        postcss: [
                // import 动态监测
                require('postcss-import')({ addDependencyTo: webpack }),
                require('postcss-url')(),
                require('postcss-mixins')(),
                require('postcss-nested'),
                require('postcss-css-variables'),
                require('autoprefixer')
                // require('postcss-cssnext')()
            ]
            // todo：直接使用postcss-cssnext插件
    },

    babel: {
        presets: ['es2015'],
        plugins: ['transform-runtime'],
    },

    devServer: {
        historyApiFallback: true,
        host: '0.0.0.0',
        proxy: proxy,
        port: 7070
    },

    devtool: "source-map",
}
