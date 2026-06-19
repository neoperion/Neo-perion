import { z, ZodSchema } from 'zod';

export type ValidationErrors<T> = Partial<Record<keyof T, string>>;

export function validate<T>(schema: ZodSchema<T>, data: unknown): { success: true; data: T } | { success: false; errors: ValidationErrors<T> } {
  const result = schema.safeParse(data);
  if (result.success) return { success: true, data: result.data };
  const errors: ValidationErrors<T> = {};
  for (const issue of result.error.issues) {
    const key = issue.path[0] as keyof T | undefined;
    if (key && !errors[key]) errors[key] = issue.message;
  }
  return { success: false, errors };
}

export const leadFormSchema = z.object({
  name: z.string().min(2, 'Name must be at least 2 characters'),
  email: z.string().email('Enter a valid email'),
  phone: z.string().optional(),
  company: z.string().optional(),
  industry: z.string().optional(),
  budget: z.string().optional(),
  project_type: z.string().optional(),
  message: z.string().min(10, 'Tell us a bit more (10+ chars)'),
});

export const newsletterFormSchema = z.object({
  email: z.string().email('Enter a valid email'),
  name: z.string().optional(),
});

export const jobApplicationSchema = z.object({
  name: z.string().min(2, 'Name required'),
  email: z.string().email('Valid email required'),
  phone: z.string().optional(),
  cover_letter: z.string().optional(),
  linkedin: z.string().url().optional().or(z.literal('')),
  portfolio: z.string().url().optional().or(z.literal('')),
});
