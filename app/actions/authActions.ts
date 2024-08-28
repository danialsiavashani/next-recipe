'use server'

import { signIn, signOut, auth } from '@/auth'
import prisma from "@/lib/db";
import { loginSchema, registerSchema, validateWithZodSchema } from '@/utils/schemas';
import bcrypt from "bcryptjs";
import { AuthError } from 'next-auth';
import { redirect } from 'next/navigation';



export async function getUserByEmail(email:string) {
    return prisma.user.findUnique({
        where:{
            email
        }
    })
}



export async function getAuthUserId (){
    const session = await auth()
    const userId = session?.user?.id

    if(!userId) throw new Error('Unauthorized');

    return userId
}


export async function getUserById(id:string) {
    return prisma.user.findUnique({
        where:{
            id
        }
    })
}

const renderError = (error:unknown):{message:string}=>{
    return {message:error instanceof Error ? error.message : "An error occurred"}
}


export const signInUserAction = async(prevState: any, formData: FormData):Promise<{message:string}>=>{
    try {
        const rawData = Object.fromEntries(formData)
        const validatedFields = validateWithZodSchema(loginSchema,rawData)
        const {email, password} = validatedFields

        const result = await signIn('credentials',{
            email,
            password,
            redirect: false
        });
        if(!result || result.error){
            return {message:'Invalid credentials'}
        }
    } catch (error) {
        if( error instanceof AuthError){
            switch(error.type){
                case 'CredentialsSignin':
                    return {message:'Invalid credentials'}
                default:
                    return {message:'Something went wrong'}
            }
        } else {
            return {message:'Something else went wrong'}
        }
    }
    redirect('/')
}

export const registerUserAction = async(prevState: any, formData:FormData):Promise<{message:string}>=>{
    try {
        const rawData = Object.fromEntries(formData)
        const validatedFields = validateWithZodSchema(registerSchema,rawData)
        const {name,email,password} = validatedFields

        const hashedPassword = await bcrypt.hash(password,10)

        const existingUser = await prisma.user.findUnique({
            where:{email: validatedFields.email as string}
        })

        if(existingUser) {
            return {message:'User already exist'}
        }

        await prisma.user.create({
            data:{
                name,
                email,
                passwordHash: hashedPassword
            }
        });
        return {message:'User created successfully'}

    } catch (error) {
        return renderError(error)
    }
}

export async function signOutUser (){
    await signOut({redirectTo:'/'})
}