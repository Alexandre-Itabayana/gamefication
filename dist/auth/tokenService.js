"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.genToken = void 0;
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
// require("dotenv-safe").config({path: __dirname + '/.env'});
const JWT_CONFIG = {
    expiresIn: 360000,
};
const genToken = (email) => {
    return jsonwebtoken_1.default.sign({ user: email }, process.env.SECRET_KEY || "", JWT_CONFIG);
};
exports.genToken = genToken;
//# sourceMappingURL=tokenService.js.map