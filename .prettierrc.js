/** @type {import('prettier').Config} */
module.exports = {
  ...require('@vercel/style-guide/prettier'),
  plugins: ['prettier-plugin-packagejson'],
};
