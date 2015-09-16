module.exports = {
  code: {
    source: "src/**/*.js",
    output: {
      root: "dist/",
      system: "dist/system/",
      common: "dist/common/"
    }
  },
  test: {
    specs: "test/spec/**/*.js",
    coverage: "dist/system/**/*.js"
  },
  doc:'./doc'
};
