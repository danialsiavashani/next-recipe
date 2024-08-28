export type actionFunction = (prevState:any,formData:FormData)=>Promise<{message:string}>
import { IconType } from "react-icons";

export type RecipeCardProps={
    image:string;
    id:string;
    name:string;
    tagline:string;
    cuisine:string;
}

export type ClearFilter = {
    label: string;
    icon: IconType;
  };