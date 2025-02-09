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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.listUsers = exports.listUser = exports.deleteUser = exports.editUser = exports.createUser = void 0;
const user_model_1 = __importDefault(require("../models/user.model"));
const createUser = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { username, picture, bio } = req.body;
    if (!username || !picture || !bio) {
        res.status(400).json({
            success: false,
            message: "fill all the fields"
        });
    }
    const user = yield user_model_1.default.findOne({ username: username });
    if (user) {
        res.status(400).json({
            success: false,
            message: "user exists"
        });
    }
    const newUser = new user_model_1.default({
        username,
        picture,
        bio
    });
    yield newUser.save();
    res.status(200).json({
        success: true,
        message: "new user added",
        user_details: {
            newUser
        }
    });
});
exports.createUser = createUser;
const editUser = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { username, picture, bio } = req.body;
    if (!username || !picture || !bio) {
        res.status(400).json({
            success: false,
            message: "fill all the fields"
        });
    }
    const user = yield user_model_1.default.findOneAndUpdate({ username: username });
    if (!user) {
        res.status(400).json({
            success: false,
            message: "user does not  exists"
        });
    }
    const newUser = new user_model_1.default({
        username,
        picture,
        bio
    });
    yield newUser.save();
    res.status(200).json({
        success: true,
        message: "user updated",
        user_details: {
            newUser
        }
    });
});
exports.editUser = editUser;
const deleteUser = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    if (!id) {
        res.status(400).json({
            success: false,
            message: "user id does not  exists"
        });
    }
    const user = yield user_model_1.default.findOneAndDelete({ _id: id });
    if (!user) {
        res.status(400).json({
            success: false,
            message: "user does not  exists"
        });
    }
    res.status(200).json({
        success: true,
        message: "user deleted",
    });
});
exports.deleteUser = deleteUser;
const listUser = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    if (!id) {
        res.status(400).json({
            success: false,
            message: "user id does not  exists"
        });
    }
    const user = yield user_model_1.default.findOne({ _id: id });
    if (!user) {
        res.status(400).json({
            success: false,
            message: "user does not  exists"
        });
    }
    res.status(200).json({
        success: true,
        user
    });
});
exports.listUser = listUser;
const listUsers = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const users = yield user_model_1.default.find({});
    if (!users) {
        res.status(400).json({
            success: false,
            message: "no users available"
        });
    }
    res.status(200).json({
        success: true,
        users: {
            users
        }
    });
});
exports.listUsers = listUsers;
