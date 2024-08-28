import { IconType } from 'react-icons';
import { SiFoodpanda } from "react-icons/si";
import { GiIndianPalace } from "react-icons/gi";
import { GiItalia } from "react-icons/gi";
import { GiGreekTemple } from "react-icons/gi";
import { LuSalad } from "react-icons/lu";
import { LuSoup } from "react-icons/lu";
import { GiMexico } from "react-icons/gi";
import { GiBread } from "react-icons/gi";
import { FiCoffee } from "react-icons/fi";
import { BiDrink } from "react-icons/bi"; 

export type Cuisine = {
    label: CuisineLabel;
    icon : IconType
}

export type CuisineLabel=
   | 'asian'
   | 'indian'
   | 'italian'
   | 'mediterranean'
   | 'mexican'
   | 'soup'
   | 'salad'
   | 'appetizer'
   | 'hot drinks'
   | 'cocktails'


export const cuisines: Cuisine[] = [
    {
        label: 'asian',
        icon: SiFoodpanda ,
    },
    {
        label: 'indian',
        icon: GiIndianPalace 
    },
    {
        label: 'italian',
        icon: GiItalia 
    },
    {
        label: 'mediterranean',
        icon: GiGreekTemple 
    },
    {
        label: 'mexican',
        icon: GiMexico 
    },
    {
        label: 'soup',
        icon: LuSoup 
    },
    {
        label: 'salad',
        icon: LuSalad 
    },
    {
        label: 'appetizer',
        icon: GiBread 
    },
    {
        label: 'hot drinks',
        icon: FiCoffee 
    },
    {
        label: 'cocktails',
        icon: BiDrink 
    },
]