const path = require('path');

module.exports = {
    entry: "./src/index.js",
    output: {
        filename: "bundle.js",
        path: path.join(__dirname, "dist")
    },
    devServer: {
        contentBase: path.join(__dirname, "dist"),
        port: 8082
    },
    module: {
        rules: [
            {
                test: /.js$/,
                exclude: /(node_modules)/,
                use: {
                    loader: "babel-loader",
                    options: {
                        presets: ["env"] 
                    }
                }
            },
            {
                test: /\.css$/,
                use: [
                    {loader: "style-loader"},
                    {loader: "css-loader"}
                ]
            }
        ]
    }
}