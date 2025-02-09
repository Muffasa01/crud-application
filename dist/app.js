"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const user_route_1 = __importDefault(require("./routes/user.route"));
const dotenv_1 = __importDefault(require("dotenv"));
const db_cofig_1 = __importDefault(require("./config/db.cofig"));
dotenv_1.default.config({
    path: "./config/.env",
});
const app = (0, express_1.default)();
app.use(express_1.default.json());
app.use("/crud", user_route_1.default);
app.listen(3000, () => {
    console.log("app listen on ", 3000);
    (0, db_cofig_1.default)();
});
