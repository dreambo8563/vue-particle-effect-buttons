module.exports = {
  publicPath:
    process.env.NODE_ENV === "production"
      ? "/vue-particle-effect-buttons/"
      : "/",
  css: {
    extract: false
  }
};
