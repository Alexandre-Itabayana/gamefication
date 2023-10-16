"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.errorMiddleware = void 0;
const errorMiddleware = (err, req, res, _next) => {
    if (err.status) {
        return res.status(err.status).json({ message: err.message });
    }
    console.log(err.message);
    res.status(500).json({ message: 'Internal Server Error' });
};
exports.errorMiddleware = errorMiddleware;
//# sourceMappingURL=errorHandler.js.map