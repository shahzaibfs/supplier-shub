const CracoLessPlugin = require("craco-less");

module.exports = {
  plugins: [
    {
      plugin: CracoLessPlugin,
      options: {
        lessLoaderOptions: {
          lessOptions: {
            modifyVars: {
              "@primary-color": "#1a202c",
              "@primary-color-active": "white"
            },
            javascriptEnabled: true,
          },
        },
      },
    },
  ],
};
