/** @type {import('prettier').Config} */
module.exports = {
  ...require('@vercel/style-guide/prettier'),
  plugins: [require('prettier-plugin-packagejson')],
};
