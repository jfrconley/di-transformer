const {di} = require("@jfconley/di-compiler");

const transformer = (program) => di({ program })

exports.default = transformer;
