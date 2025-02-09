"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const user_controller_1 = require("../controllers/user.controller");
const upload_middleware_1 = __importDefault(require("../middlewares/upload.middleware"));
const user_router = (0, express_1.Router)();
user_router.post("/create-user", upload_middleware_1.default.single("picture"), user_controller_1.createUser);
user_router.patch("/edit-user/:id", user_controller_1.editUser);
user_router.delete("/delete-user/:id", user_controller_1.deleteUser);
user_router.get('/get-user/:id', user_controller_1.listUser);
user_router.get('/get-users', user_controller_1.listUsers);
exports.default = user_router;
