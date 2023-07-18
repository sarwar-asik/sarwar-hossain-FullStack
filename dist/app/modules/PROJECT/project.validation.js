"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProjectValidation = void 0;
const zod_1 = require("zod");
const createProjectZodSchema = zod_1.z.object({
    body: zod_1.z.object({
        name: zod_1.z.string({
            required_error: 'name is required',
        }),
        live: zod_1.z.string({
            required_error: 'live is required',
        }),
        source: zod_1.z.string({
            required_error: 'source is required',
        }),
        time: zod_1.z.string({
            required_error: 'time is required',
        }),
        img: zod_1.z.string({
            required_error: 'img is required',
        }),
        tech: zod_1.z.array(zod_1.z.string({
            required_error: "tech is required"
        })).optional(),
        photo: zod_1.z.array(zod_1.z.string({
            required_error: "photo is required"
        })).optional(),
    }),
});
const updateProjectZodSchema = zod_1.z.object({
    body: zod_1.z.object({
        name: zod_1.z.string({
            required_error: 'name is required',
        }),
        live: zod_1.z.string({
            required_error: 'live is required',
        }),
        source: zod_1.z.string({
            required_error: 'source is required',
        }),
        time: zod_1.z.string({
            required_error: 'time is required',
        }),
        img: zod_1.z.string({
            required_error: 'img is required',
        }),
        tech: zod_1.z.array(zod_1.z.string({
            required_error: "tech is required"
        })).optional(),
        photo: zod_1.z.array(zod_1.z.string({
            required_error: "photo is required"
        })).optional(),
    }),
});
exports.ProjectValidation = {
    createProjectZodSchema,
    updateProjectZodSchema
};
