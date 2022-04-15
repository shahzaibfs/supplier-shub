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
              "@highlight-color": "1890FF",
              "@success-color": "#2da44e",
              "@error-color": "#d9534f",

              "@layout-header-background": "#131921",

              "@menu-bg": "@layout-header-background",
              "@menu-item-color": "@text-color-secondary-dark",
              "@menu-highlight-color": "#fff",
              "@menu-popup-bg": "#fff",
              "@menu-dark-submenu-bg": "#000C17",
              "@menu-submenu-bg": "#000C17",

              "@btn-font-weight": 400,
              "@btn-primary-color" : "#fff"
            },
            javascriptEnabled: true,
          },
        },
      },
    },
  ],
};
