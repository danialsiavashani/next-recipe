'use server'

import { createRecipeSchema, imageSchema, validateWithZodSchema } from "@/utils/schemas"
import { getAuthUserId } from "./authActions"
import prisma from "@/lib/db"
import { uploadImage } from "@/utils/supabase"
import { redirect } from "next/navigation"
import { ZodError } from "zod"
import { revalidatePath } from "next/cache"



const renderError = (error:unknown):{message:string}=>{
    return {message:error instanceof Error ? error.message : "An error occurred"}
}


export const createRecipeAction = async(prevState: any, formData:FormData):Promise<{message: string}> =>{
    try {
        const userId = await getAuthUserId()
        if(!userId) return {message:"Unauthorize"}

        const rawData = Object.fromEntries(formData);
        if (rawData.steps) {
            rawData.steps = JSON.parse(rawData.steps as string);
        }

        const file = formData.get('image') as File
        const validatedFields = validateWithZodSchema(createRecipeSchema, rawData)
        const validatedFile = validateWithZodSchema(imageSchema, {image:file});
      const fullPath = await uploadImage(validatedFile.image)
        console.log(validatedFields);
        await prisma.recipe.create({
            data:{
                ...validatedFields,
                image: fullPath,
                userId:userId
            }
        })
        

    } catch (error) {
        if (error instanceof ZodError) {
            console.log(error.flatten());
          }
        return renderError(error)
    }
    redirect('/')
}


export const fetchRecipes = async({search = '',cuisine}:{search?:string,cuisine?:string})=>{
    const recipes = await prisma.recipe.findMany({
        where:{
            cuisine,
            OR:[
                {name:{contains:search,mode:'insensitive'}},
                {tagline:{contains:search,mode:'insensitive'}}
            ]
        },
        select:{
            id:true,
            name:true,
            tagline:true,
            image:true,
            cuisine:true
        }
    });
    return recipes
}


export const fetchUsersRecipe = async()=>{
    const userId = await getAuthUserId()
    const recipes = await prisma.recipe.findMany({
        where:{
            userId:userId
        }
    })
return recipes
}


export const fetchRecipeDetails = async (recipeId:string)=>{
    try {
        const recipe = await prisma.recipe.findUnique({
        where:{
            id:recipeId
        }
    })
    return recipe  
    } catch (error) {
        console.log(error);
        return null
        
    }
  
}


export const updateRecipeAction = async(prevState: any, formData:FormData):Promise<{message:string}>=>{

    
    const userId = await getAuthUserId()
    const recipeId = formData.get('id') as string
    try {
        const rawData = Object.fromEntries(formData)
        console.log(rawData.steps);
        
        if (rawData.steps) {
            rawData.steps = JSON.parse(rawData.steps as string);
        }

        const validatedFields = validateWithZodSchema(createRecipeSchema,rawData)
        
        console.log(validatedFields);
        
        await prisma.recipe.update({
            where:{
                id:recipeId,
                userId:userId
            },
            data:{
                ...validatedFields,
            }
        });
        revalidatePath(`/recipe/${recipeId}/edit`)
        return {message:'Recipe updated successfully'}
    } catch (error) {
        if (error instanceof ZodError) {
            console.log(error.flatten());
          }
        return renderError(error)
    }
}

export const updateRecipeImage = async (prevState:any, formData:FormData):Promise<{message:string}>=>{
    const recipeId = formData.get('id') as string
    const userId = await getAuthUserId()

    try {
        const image = formData.get('image') as File
        const validatedFields = validateWithZodSchema(imageSchema,{image})
        const fullPath = await uploadImage(validatedFields.image)
        await prisma.recipe.update({
            where:{
                id:recipeId,
                userId:userId
            },
            data:{
                image:fullPath
            }
        })
        revalidatePath(`/recipes/${recipeId}/edit`)
        return {message:'Image updated successfully'}
    } catch (error) {
        return renderError(error)
    }

}


export const deleteRecipeAction = async (prevState: {recipeId:string})=>{
    const {recipeId} = prevState
    const userId = await getAuthUserId()

    try {
        await prisma.recipe.delete({
            where:{
                id:recipeId,
                userId: userId
            }
        });
        revalidatePath('/recipes')
        return{message:'Recipe deleted successfully'}
    } catch (error) {
        return renderError(error)
    }
}