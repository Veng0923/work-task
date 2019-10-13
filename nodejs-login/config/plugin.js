'use strict';

/** @type Egg.EggPlugin */
// module.exports = {
//   // had enabled by egg
//   static: {
//     enable: true,
//   }
// };
exports.nunjucks = {
  enable: true,
  package: 'egg-view-nunjucks',
};
exports.cors = {
  enable: true,
  package: 'egg-cors',
};
exports.mysql = {
  enable: true,
  package: 'egg-mysql',
};
