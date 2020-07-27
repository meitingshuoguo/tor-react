module.exports = {
  entry: {
    main: "./main.js",
  },
  mode: "development",
  optimization: {
    minimize: false,
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        use: {
          loader: "babel-loader",
          options: {
            presets: ["@babel/preset-env"],
            plugins: [
              [
                "@babel/plugin-transform-react-jsx",
                //不加这个配置默认调用的就是React.createElement
                // 加了之后就调用指定的方法
                { pragma: "ToyReact.createElement" },
              ],
            ],
          },
        },
      },
    ],
  },
};
