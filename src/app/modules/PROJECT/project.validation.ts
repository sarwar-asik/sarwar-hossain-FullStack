import { z } from 'zod';

const createProjectZodSchema = z.object({
  body: z.object({
    name: z.string({
        required_error: 'name is required',
      }),
      live: z.string({
        required_error: 'live is required',
      }),
      source: z.string({
        required_error: 'source is required',
      }),
      time: z.string({
        required_error: 'time is required',
      }),
      img: z.string({
        required_error: 'img is required',
      }),
      tech:z.array(z.string({
        required_error:"tech is required"
      })).optional(),
      photo:z.array(z.string({
        required_error:"photo is required"
      })).optional(),
  }),
});

const updateProjectZodSchema = z.object({
  body: z.object({
    name: z.string({
        required_error: 'name is required',
      }),
      live: z.string({
        required_error: 'live is required',
      }),
      source: z.string({
        required_error: 'source is required',
      }),
      time: z.string({
        required_error: 'time is required',
      }),
      img: z.string({
        required_error: 'img is required',
      }),
      tech:z.array(z.string({
        required_error:"tech is required"
      })).optional(),
      photo:z.array(z.string({
        required_error:"photo is required"
      })).optional(),
  }),
});

export const ProjectValidation = {
  createProjectZodSchema,
  updateProjectZodSchema
};
