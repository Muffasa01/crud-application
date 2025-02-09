"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
const userSchema = new mongoose_1.Schema({
    username: {
        type: String,
        unique: true,
        trim: true,
        min: 8,
        max: 30
    },
    picture: {
        type: String,
        default: "default.png"
    },
    bio: {
        type: String,
        max: 120
    }
}, {
    timestamps: true,
    collection: "users",
});
// userSchema.index({username: 1})
const usermodel = (0, mongoose_1.model)('User', userSchema);
exports.default = usermodel;
