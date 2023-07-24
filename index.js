const {di} = require("@jfconley/di-compiler");


const transfomerCache = new Map();
const transformer = (program, config) => {
    if (!transfomerCache.has(program)) {
        transfomerCache.set(program, di({program}));
    }
    const transformer = transfomerCache.get(program);

    if (config.after) {
        return transformer.after[0] || (() => {})
    } else {
        return transformer.before[0]
    }
}

exports.default = transformer;
