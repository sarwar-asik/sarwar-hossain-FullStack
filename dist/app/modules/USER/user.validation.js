"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserValidation = void 0;
const zod_1 = require("zod");
const createUserZodSchema = zod_1.z.object({
    body: zod_1.z.object({
        role: zod_1.z.string({
            required_error: 'role is required',
        }).optional(),
        email: zod_1.z.string({
            required_error: 'email is required',
        }),
        name: zod_1.z.string({
            required_error: 'name is required',
        }),
        password: zod_1.z.string({
            required_error: 'password is required',
        }),
    }),
});
const updateUserZodSchema = zod_1.z.object({
    body: zod_1.z.object({
        role: zod_1.z.string({
            required_error: 'role is required',
        }).optional(),
        email: zod_1.z.string({
            required_error: 'email is required',
        }).optional(),
        name: zod_1.z.string({
            required_error: 'name is required',
        }).optional(),
        password: zod_1.z.string({
            required_error: 'password is required',
        }).optional(),
    }),
});
exports.UserValidation = {
    createUserZodSchema,
    updateUserZodSchema,
};
