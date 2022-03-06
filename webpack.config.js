//* Entry -> output
const path = require("path");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

module.exports = function (env, argv) {
  const isProduction = argv.mode === "production";
  

  return {
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
          use: [
            MiniCssExtractPlugin.loader,
            {
              loader: "css-loader",
              options: {
                sourceMap: true,
              },
            },
            {
              loader: "sass-loader",
              options: {
                sourceMap: true,
              },
            },
          ],
        },
      ],
    },
    plugins: [
      new MiniCssExtractPlugin({
        filename: "styles.css",
      }),
    ],
    devtool: isProduction ? "source-map" : "inline-cheap-module-source-map",
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
};


// console.log(path.join(__dirname, 'public'))

// module.exports = {
//   // target: "node",
//   entry: "./src/App.js",
//   output: {
//     path: path.join(__dirname, "public"),
//     filename: "bundle.js",
//   },
//   mode: "development",
//   module: {
//     rules: [
//       {
//         // loader: "babel-loader",
//         test: /\.js$/,
//         exclude: /node_modules/,
//         use: {
//           loader: "babel-loader",
//           options: {
//             presets: [
//               ["@babel/preset-env", { targets: "defaults" }],
//               ["@babel/preset-react"],
//             ],
//             plugins: ["@babel/plugin-transform-classes"],
//           },
//         },
//       },
//       {
//         // test: /\.scss$/,
//         test: /\.s?[ac]ss$/i,
//         use: ["style-loader", "css-loader", "sass-loader"],
//       },
//     ],
//   },
//   devtool: "eval-cheap-module-source-map",
//   devServer: {
//     // contentBase: path.join(__dirname, "public"),
//     static: path.join(__dirname, "public"),
//     compress: true,
//     port: 3010, // default 8000
//     historyApiFallback: true,
//   },
//   // resolve: {
//   //   // ... rest of the resolve config
//   //   fallback: {},
//   // },
//   resolve: {
//     fallback: {
//       fs: false,
//       path: false,
//       assert: false,
//       util: false,
//       os: false,
//     },
//   },
// };
