module.exports = {
    configureWebpack: {
      devtool: "source-map"
    },
    css: {
        loaderOptions: {
            sass: {
                data: `
                  @import "@/scss/main.scss";
                `
            }
        }
    }
  };
