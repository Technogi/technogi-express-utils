"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.config = (options) => (property, defaultValue) => {
    let normalizedProp = property.toUpperCase().replace(/\./g, '_');
    if (process.env[normalizedProp])
        return process.env[normalizedProp];
    if (defaultValue)
        return defaultValue;
    return property;
};
//# sourceMappingURL=config.js.map