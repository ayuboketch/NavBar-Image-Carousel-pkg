// Generated using webpack-cli https://github.com/webpack/webpack-cli

const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const WorkboxWebpackPlugin = require("workbox-webpack-plugin");

const isProduction = process.env.NODE_ENV == "production";

const stylesHandler = MiniCssExtractPlugin.loader;

const config = {
    entry: "./src/script.js",
    output: {
        path: path.resolve(__dirname, "dist"),
    },
    devServer: {
        open: true,
        host: "localhost",
    },
    plugins: [
        new HtmlWebpackPlugin({
            hash: true,
            template: "./src/index.html",
            filename: "index.html",
        }),
        new MiniCssExtractPlugin({
            filename: "style.css",
            chunkFilename: "style.css",
        }),

        // Add your plugins here
        // Learn more about plugins from https://webpack.js.org/configuration/plugins/
    ],
    mode: "development",
    output: {
        clean: true,
    },
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/i,
                loader: "babel-loader",
            },
            {
                test: /\.css$/,
                use: [
                    MiniCssExtractPlugin.loader, // instead of style-loader
                    "css-loader",
                ],
            },
            {
                test: /\.(eot|svg|ttf|woff|woff2|png|jpg|gif)$/i,
                type: "asset",
            },
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: {
                    loader: "babel-loader",
                    options: {
                        presets: ["@babel/preset-env"],
                    },
                },
            },
        ],
    },
};

module.exports = () => {
    if (isProduction) {
        config.mode = "production";

        config.plugins.push(new WorkboxWebpackPlugin.GenerateSW());
    } else {
        config.mode = "development";
    }
    return config;
};
