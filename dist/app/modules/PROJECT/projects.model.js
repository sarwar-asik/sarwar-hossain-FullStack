"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Project = void 0;
const mongoose_1 = require("mongoose");
const ProjectSchema = new mongoose_1.Schema({
    name: {
        type: String,
        required: true,
        unique: true
    },
    live: {
        type: String,
        required: true
    },
    source: {
        type: String,
        required: true
    },
    time: {
        type: String,
        required: true
    },
    img: {
        type: String,
        required: true
    },
    tech: {
        type: [String],
    },
    photo: {
        type: [String]
    }
}, {
    timestamps: true,
    toJSON: {
        virtuals: true
    }
});
exports.Project = (0, mongoose_1.model)("Project", ProjectSchema);
