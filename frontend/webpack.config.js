const HtmlWebpackPlugin = require("html-webpack-plugin");
const path = require("path");

const scssRules = {
  test: /\.scss$/,
  use: ["style-loader", "css-loader", "sass-loader"],
};

const jsxEntry = "./src/index.jsx"; // Una sola entrada

const jsxRules = {
  test: /\.jsx$/,
  loader: "babel-loader",
  options: {
    presets: [["@babel/preset-react", { runtime: "automatic" }]],
  },
};

const loadersRules = [scssRules, jsxRules];

module.exports = {
  entry: jsxEntry, // Solo una entrada
  output: {
    path: path.resolve(__dirname, "build"),
  },
  plugins: [new HtmlWebpackPlugin({ template: "/templates/index.html" })],
  module: { rules: loadersRules },
};
