const externals =
  process.env.NODE_ENV == "production" && !process.env.DOC_ENV
    ? {
        animejs: "animejs"
      }
    : {};
module.exports = {
  publicPath:
    process.env.NODE_ENV === "production"
      ? "/vue-particle-effect-buttons/"
      : "/",
  css: {
    extract: false
  },
  chainWebpack: config => {
    config.externals(externals);
  }
};
