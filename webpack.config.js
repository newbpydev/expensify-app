//* Entry -> output
const path = require("path");


// console.log(path.join(__dirname, 'public'))

module.exports = {
  // target: "node",
  entry: "./src/App.js",
  output: {
    path: path.join(__dirname, "public"),
    filename: "bundle.js",
  },
  mode: "development",
  module: {
    rules: [
      {
        // loader: "babel-loader",
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
          options: {
            presets: [
              ["@babel/preset-env", { targets: "defaults" }],
              ["@babel/preset-react"],
            ],
            plugins: ["@babel/plugin-transform-classes"],
          },
        },
      },
      {
        // test: /\.scss$/,
        test: /\.s?[ac]ss$/i,
        use: ["style-loader", "css-loader", "sass-loader"],
      },
    ],
  },
  devtool: "eval-cheap-module-source-map",
  devServer: {
    // contentBase: path.join(__dirname, "public"),
    static: path.join(__dirname, "public"),
    compress: true,
    port: 3010, // default 8000
    historyApiFallback: true,
  },
  // resolve: {
  //   // ... rest of the resolve config
  //   fallback: {},
  // },
  resolve: {
    fallback: {
      fs: false,
      path: false,
      assert: false,
      util: false,
      os: false,
    },
  },
};
