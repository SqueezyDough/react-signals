const { VanillaExtractPlugin } = require("@vanilla-extract/webpack-plugin");

module.exports = {
  webpack: {
    plugins: {
      add: [new VanillaExtractPlugin()]
    }
  },
  babel: {
    plugins: [["module:@preact/signals-react-transform"]]
  }
};
