import { RecipeCardProps } from '@/utils/types';
import RecipeCard from './RecipeCard';

function RecipesList({ recipes }: { recipes: RecipeCardProps[] }) {
  return (
    <section className="mt-4 gap-8 grid xl:grid-cols-4 lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1">
      {recipes.map((recipe) => {
        return <RecipeCard key={recipe.id} recipe={recipe} />;
      })}
    </section>
  );
}
export default RecipesList;
