// * https://www.npmjs.com/package/npm-check-updates#configuration-files
'use strict';

module.exports = {
  reject: [
    // ? Pin the CJS version
    'execa',
    // ? Pin the CJS version
    'remark-remove-comments'
  ]
};
