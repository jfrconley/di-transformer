const {di} = require("@wessberg/di-compiler");

const transformer = (program) => di({ program })

exports.default = transformer;
