"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AuthValidation = void 0;
const zod_1 = require("zod");
const signUpZodSchema = zod_1.z.object({
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
const LoginZodSchema = zod_1.z.object({
    body: zod_1.z.object({
        email: zod_1.z.string({
            required_error: "email is required"
        }),
        password: zod_1.z.string({
            required_error: "Password is required"
        }),
    }),
});
const refreshTokenZodSchema = zod_1.z.object({
    cookies: zod_1.z.object({
        refreshToken: zod_1.z.string({
            required_error: 'Refresh Token is required (zod)',
        }),
    }),
});
exports.AuthValidation = {
    LoginZodSchema,
    refreshTokenZodSchema,
    signUpZodSchema
};
