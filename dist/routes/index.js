"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const userController_1 = require("../controller/userController");
const router = express_1.default.Router();
router.get('/', (req, res) => {
    const teste = __dirname.split('routes');
    res.sendFile(teste[0] + 'views/login.html');
});
router.post('/login', userController_1.loginUserController);
exports.default = router;
//# sourceMappingURL=index.js.map