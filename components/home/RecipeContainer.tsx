import { RecipeCardProps } from '@/utils/types';
import RecipesList from './RecipesList';
import { fetchRecipes } from '@/app/actions/recipeActions';
import EmptyList from './EmptyList';

async function RecipeContainer({
  search = '',
  cuisine,
}: {
  search?: string;
  cuisine?: string;
}) {
  const recipes: RecipeCardProps[] = await fetchRecipes({
    cuisine,
    search,
  });

  if (recipes.length === 0) {
    return (
      <EmptyList
        heading="No Recipes"
        message="Try Changing or removing some of your filters"
      />
    );
  }

  return <RecipesList recipes={recipes} />;
}
export default RecipeContainer;
