"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.loginUser = void 0;
const loginSchema_1 = require("../schemas/loginSchema");
const errorGenerator_1 = require("../utils/errorGenerator");
const tokenService_1 = require("../auth/tokenService");
const loginUser = (email, password) => __awaiter(void 0, void 0, void 0, function* () {
    const { error } = (0, loginSchema_1.validateLoginForm)({ email, password });
    if (error)
        throw (0, errorGenerator_1.errorGenerator)(400, error.message);
    // Acesso ao banco de dados:
    // const user = await users.findOne({ where: { email, password } });
    // exceção caso o usuário não seja encontrado - Front trata pra fazer o cadastro
    // if (!user) {
    //     throw errorGenerator(404, 'Invalid fields');
    // }
    const token = (0, tokenService_1.genToken)(email);
    return token;
});
exports.loginUser = loginUser;
//# sourceMappingURL=userServices.js.map