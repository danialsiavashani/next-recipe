
import * as z from 'zod'
import { ZodSchema } from 'zod'



export function validateWithZodSchema<T>(schema:ZodSchema<T>,data:unknown):T{
    const result = schema.safeParse(data);
      if (!result.success) {
        const errors = result.error.errors.map((error) => error.message);
        throw new Error(errors.join(','));
      }
      return result.data;
}


export const loginSchema = z.object({
    email: z.string(),
    password: z.string()
  })
  

  export const registerSchema = z.object({
    name:z.string().min(3),
    email: z.string()
      .email({ message: "Must be a valid email address" })
      .regex(
        /@(yahoo|gmail|outlook|hotmail)\.com$/i, 
        { message: "Email must be a Yahoo, Gmail, or Outlook address" }
      ),
    password: z.string()
      .min(6, { message: "Password must be at least 6 characters long" })
      .regex(/[A-Z]/, { message: "Password must contain at least one uppercase letter" })
      .regex(/[!@#$%^&*(),.?":{}|<>]/, { message: "Password must contain at least one special character" }),
  });



  export const createRecipeSchema = z.object({
    name:z.string().min(3),
    tagline: z
    .string()
    .min(2, {
      message: 'tagline must be at least 2 characters.',
    })
    .max(100, {
      message: 'tagline must be less than 100 characters.',
    }),
    description: z.string().refine(
      (description) => {
        const wordCount = description.split(' ').length;
        return wordCount >= 10 && wordCount <= 1000;
      },
      {
        message: 'description must be between 10 and 1000 words.',
      }
    ),
    ingredients:z.string(),
    cuisine:z.string(),
    steps: z.array(z.string()).min(1, { message: 'At least one step is required.' })
  })

  export const imageSchema = z.object({
    image:validateFile()
  })
  

  function validateFile(){
    const maxUploadSize = (1024 * 1024) * 2;
    const acceptedFileTypes = ['image/']
    return z.instanceof(File).refine((file)=>{
      return !file || file.size <= maxUploadSize
    },'File size must be less than 2 MB').refine((file)=>{
      return !file || acceptedFileTypes.some((type)=> file.type.startsWith(type))
    },'File must be an image')
  }
  