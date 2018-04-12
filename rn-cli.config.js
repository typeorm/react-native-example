const blacklist = require('metro-bundler').createBlacklist;

module.exports = {
    getTransformModulePath() {
      return require.resolve("react-native-typescript-transformer");
    },
    getSourceExts() {
      return ["ts", "tsx"];
    },
    getBlacklistRE() {
      return blacklist([/typeorm\/(?!browser).*/])
    },
    // getPolyfills() {
    //   return ["node_modules/buffer/index.js"]
    // }
  };