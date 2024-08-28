import { fetchRecipeDetails } from '@/app/actions/recipeActions';
import BreadCrumbs from '@/components/recipes/BreadCrumbs';
import Description from '@/components/recipes/Description';
import ImageContainer from '@/components/recipes/ImageContainer';
import Ingredients from '@/components/recipes/Ingredients';
import Steps from '@/components/recipes/Steps';
import { Separator } from '@/components/ui/separator';
import { redirect } from 'next/navigation';

async function RecipeDetailsPage({ params }: { params: { id: string } }) {
  const recipe = await fetchRecipeDetails(params.id);

  if (!recipe) redirect('/');
  return (
    <section>
      <BreadCrumbs name={recipe.name} />
      <header className="flex justify-between items-center mt-4">
        <h1 className="text-4xl font-bold capitalize"> {recipe.tagline} </h1>
      </header>
      <ImageContainer mainImage={recipe.image} name={recipe.name} />
      <section className="lg:grid grid-cols-12 gap-x-12 mt-12 ">
        <div className="lg:col-span-8">
          <div className="flex gap-x-4 items-center">
            <h1 className="text-xl font-bold">{recipe.name}</h1>
          </div>
          <Separator className="mt-4" />
          <Description description={recipe.description} />
          <Ingredients ingredients={recipe.ingredients} />
          <Steps steps={recipe.steps} />
        </div>
      </section>
    </section>
  );
}
export default RecipeDetailsPage;
