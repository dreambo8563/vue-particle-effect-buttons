module.exports = {
  publicPath:
    process.env.NODE_ENV === "production"
      ? "/vue-particle-effect-button/"
      : "/",
  css: {
    extract: false
  }
};
