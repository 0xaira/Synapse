import { z } from 'zod';

export const signUpSchema = z
  .object({
    name: z.string().min(2, { message: 'Name must be at least 2 characters' }),
    email: z.string().email(),
    password: z.string().min(6, { message: 'Password must be at least 6 characters' }),
    confirmPassword: z.string(),
    profilePicture: z.string().optional(),
  })
  .refine(data => data.password === data.confirmPassword, {
    message: 'Passwords must match',
    path: ['confirmPassword'],
  });

export type TSignUpSchema = z.infer<typeof signUpSchema>;

export const signInSchema = z.object({
  email: z.string().email(),
  password: z.string().min(6, { message: 'Password must be at least 6 characters' }),
});

export type TSignInSchema = z.infer<typeof signInSchema>;
