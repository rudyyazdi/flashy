'use strict';

module.exports = {
  diff: true,
  require: ["ts-node/register", "config/env"],
  spec: "api/**/__tests__/**/*.ts"
};
