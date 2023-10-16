"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.validateLoginForm = void 0;
const joi_1 = __importDefault(require("joi"));
const loginSchema = joi_1.default.object({
    // email: Joi.string().email().required(),
    // password: Joi.string().min(6).required(),
    usuario: joi_1.default.string(),
    senha: joi_1.default.string(),
});
const validateLoginForm = (data) => {
    return loginSchema.validate(data, { abortEarly: false });
};
exports.validateLoginForm = validateLoginForm;
//# sourceMappingURL=loginSchema.js.map