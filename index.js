const inheritance_loader = require('vue-inheritance-loader').resolve;
const path = require('path');
const deasync = require('deasync');
const vue_jest = require('vue-jest');

module.exports = {
  process: function (src, filePath, jestConfig) {
    let result = null;
    let basePath = path.dirname(filePath);
    inheritance_loader(src, basePath).then(res => {
      result = res;
    });

    // Use deasync because jest doesn't support async transformers
    while (!result) {
      deasync.sleep(100);
    }
    let processed_src = result.source;
    return vue_jest.process(processed_src, filePath, jestConfig);
  }
};