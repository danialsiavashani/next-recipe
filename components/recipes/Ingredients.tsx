import { Ingredient } from '@/utils/ingredients';
import { LuFolderCheck } from 'react-icons/lu';
import Title from './Title';

function Ingredients({ ingredients }: { ingredients: string }) {
  const ingredientsList: Ingredient[] = JSON.parse(ingredients as string);
  const noIngredient = ingredientsList.every(
    (ingredient) => !ingredient.selected
  );
  if (noIngredient) return null;
  return (
    <div className="mt-4">
      <Title text="Main ingredients used " />
      <div className="grid md:grid-cols-2 gap-x-4">
        {ingredientsList.map((ingredient) => {
          if (!ingredient.selected) return null;

          return (
            <div
              key={ingredient.name}
              className="flex items-center gap-x-4 mb-2"
            >
              <LuFolderCheck className="h-6 w-6 text-primary" />
              <span className="text-sm font-light capitalize">
                {ingredient.name}
              </span>
            </div>
          );
        })}
      </div>
    </div>
  );
}
export default Ingredients;
