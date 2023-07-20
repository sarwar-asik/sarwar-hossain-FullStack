import { z } from "zod"





const signUpZodSchema = z.object({
  body: z.object({
    role: z.string({
      required_error: 'role is required',
    }).optional(),
    email: z.string({
      required_error: 'email is required',
    }),
    name: z.string({
      required_error: 'name is required',
    }),
    password: z.string({
      required_error: 'password is required',
    }),
   
  }),
});


const LoginZodSchema = z.object({
  body: z.object({
    email:z.string({
    required_error:"email is required"
   }),
  password:z.string({
    required_error:"Password is required"
   }),
  }),
});


const refreshTokenZodSchema = z.object({
  cookies: z.object({
    refreshToken: z.string({
      required_error: 'Refresh Token is required (zod)',
    }),
  }),
});



  export const AuthValidation = {
     LoginZodSchema,
    refreshTokenZodSchema,
    signUpZodSchema
  }
