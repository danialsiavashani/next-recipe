'use client';

import { Ingredient, ingredients } from '@/utils/ingredients';
import { useState } from 'react';
import { Checkbox } from '../ui/checkbox';

function IngredientsInput({ defaultValue }: { defaultValue?: Ingredient[] }) {
  const ingredientsWithIcons = defaultValue?.map(({ name, selected }) => {
    return {
      name,
      selected,
      icon: ingredients.find((ingredient) => ingredient.name === name)!.icon,
    };
  });

  const [selectedIngredients, setSelectedIngredients] = useState<Ingredient[]>(
    ingredientsWithIcons || ingredients
  );

  const handleChange = (ingredient: Ingredient) => {
    setSelectedIngredients((prev) => {
      return prev.map((i) => {
        if (i.name === ingredient.name) {
          return { ...i, selected: !i.selected };
        }
        return i;
      });
    });
  };

  return (
    <section>
      <input
        type="hidden"
        name="ingredients"
        value={JSON.stringify(selectedIngredients)}
      />
      <div className="grid grid-cols-2 gap-4">
        {selectedIngredients.map((ingredient) => {
          const Icon = ingredient.icon;
          return (
            <div key={ingredient.name} className="flex items-center space-x-2">
              <Checkbox
                id={ingredient.name}
                checked={ingredient.selected}
                onCheckedChange={() => handleChange(ingredient)}
              />
              <label
                htmlFor={ingredient.name}
                className="text-sm font-medium leading-none capitalize flex gap-x-2 items-center"
              >
                {ingredient.name} {Icon && <Icon className="w-4 h-4" />}
              </label>
            </div>
          );
        })}
      </div>
    </section>
  );
}

export default IngredientsInput;
