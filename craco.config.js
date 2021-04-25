const path = require("path");
module.exports = {
  style: {
    postcss: {
      plugins: [require("tailwindcss"), require("autoprefixer")],
    },
  },
  webpack: {
    alias: {
      "@app": path.join(path.resolve(__dirname, "src")),
      "@css": path.join(path.resolve(__dirname, "src/assets/css")),
      "@cps": path.join(path.resolve(__dirname, "src/components")),
      "@actions": path.join(path.resolve(__dirname, "src/actions")),
    },
  },
};
