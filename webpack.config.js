module.exports = {
    entry: "./src/index.js",
    output: {
        path: __dirname + "/client",
        filename: "client.js"
    },
    devServer: {
        contentBase: __dirname,
        compress: true,
        port: 3003
    }
}
