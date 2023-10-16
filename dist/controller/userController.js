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
exports.loginUserController = void 0;
const userServices_1 = require("../services/userServices");
const loginUserController = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { usuario, senha } = req.body;
        const data = yield (0, userServices_1.loginUser)(usuario, senha);
        return res.status(200).json({ token: data });
    }
    catch (err) {
        next(err);
    }
});
exports.loginUserController = loginUserController;
//# sourceMappingURL=userController.js.map