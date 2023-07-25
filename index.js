const {di} = require("@jfconley/di-compiler");


const transfomerCache = new Map();
const transformer = (after, program) => {
    if (!transfomerCache.has(program)) {
        transfomerCache.set(program, di({program}));
    }
    const transformer = transfomerCache.get(program);

    if (after) {
        return transformer.after[0] || (() => {})
    } else {
        return transformer.before[0]
    }
}



exports.default = (program) => transformer(false, program)
exports.preserve = (program) => transformer(true, program)
