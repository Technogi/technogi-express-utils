"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const debug = require("debug");
const log = debug('technogi:utils:error-handling');
exports.default = (options) => (error, req, resp, next) => {
    log('handling error {}', error);
    if (error.stack) {
        log(error);
    }
    return resp.status(error.status || 500).send({
        status: error.status || 500,
        code: error.name || error.code || 'SYSTEM_ERROR',
        message: error.message || 'undefined error',
    });
};
//# sourceMappingURL=json-error-handler.js.map