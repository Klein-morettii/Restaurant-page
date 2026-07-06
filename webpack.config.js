import HtmlWebpackPlugin from "html-webpack-plugin";
import path from "node:path"
import test from "node:test";

export default {
    mode: "development",
    entry: "./src/index.js",
    output: {
        filename: "main.js",
        path: path.resolve(import.meta.dirname, "dist"),
        clean: true,
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: "./src/template.html",
        }),
    ],
    devServer: {
        static: "./dist",
        port: 3000,
        open: true,
        hot: true,
    },
    module: {
        rules: [
           {
            test: /\.css$/i,
            use: ["style-loader", "css-loader"]
           },
        ],
    },
};