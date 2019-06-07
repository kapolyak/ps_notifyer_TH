var path = require('path');
var SRC_DIR = path.join(__dirname, './public/src');
var DIST_DIR = path.join(__dirname, './public/dist');

module.exports = {
  entry: `${SRC_DIR}/index.js`,
  devtool: "source-map",
  mode: "development",
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /(node_modules)/,
        loader: "babel-loader",
        options: {
          presets: ["@babel/preset-env", "@babel/react"],
        }
      },
      {
        test: /\.css$/,
        use: ["style-loader", "css-loader"]
      }
    ]
  },
  resolve: { extensions: ["*", ".js", ".jsx"] },
  output: {
    filename: "bundle.js",
    publicPath: "/dist",
    path: DIST_DIR
  }
}
