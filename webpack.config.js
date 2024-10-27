const path = require("path");

module.exports = {
  // Other configuration options...
  resolve: {
    fallback: {
      fs: false,
      child_process: false,
      crypto: require.resolve("crypto-browserify"),
      os: require.resolve("os-browserify/browser"),
      path: require.resolve("path-browserify"),
      http: require.resolve("stream-http"),
      https: require.resolve("https-browserify"),
      url: require.resolve("url/"),
      assert: require.resolve("assert/"),
      stream: require.resolve("stream-browserify"),
      util: require.resolve("util/"),
    },
  },
};
