import { z } from 'zod';

const createUserZodSchema = z.object({
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



const updateUserZodSchema = z.object({
  body: z.object({
    role: z.string({
      required_error: 'role is required',
    }).optional(),
    email: z.string({
      required_error: 'email is required',
    }).optional(),
    name: z.string({
      required_error: 'name is required',
    }).optional(),
    password: z.string({
      required_error: 'password is required',
    }).optional(),
  }),
});

export const UserValidation = {
  createUserZodSchema,
  updateUserZodSchema,
};