import { IconType } from 'react-icons';

import { GiSaltShaker } from "react-icons/gi";
import { FaPepperHot } from "react-icons/fa6";
import { GiRoastChicken } from "react-icons/gi";
import { FaFish } from "react-icons/fa";
import { FaWineBottle } from "react-icons/fa";
import { GiPowderBag } from "react-icons/gi";
import { TbMeat } from "react-icons/tb";
import { GiFruitBowl } from "react-icons/gi";
import { GiFlour } from "react-icons/gi";
import { GiSugarCane } from "react-icons/gi";



export type Ingredient = {
  name: string;
  icon: IconType;
  selected: boolean;
};



export const ingredients: Ingredient[] = [
    { name: 'salt', icon: GiSaltShaker, selected: false },
    { name: 'pepper', icon: FaPepperHot, selected: false },
    { name: 'chicken', icon: GiRoastChicken, selected: false },
    { name: 'fish', icon: FaFish, selected: false },
    { name: 'wine', icon: FaWineBottle, selected: false },
    { name: 'baking soda', icon: GiPowderBag, selected: false },
    { name: 'meat', icon: TbMeat, selected: false },
    { name: 'fruit', icon: GiFruitBowl, selected: false },
    { name: 'flour', icon: GiFlour, selected: false },
    { name: 'sugar', icon: GiSugarCane, selected: false },

]