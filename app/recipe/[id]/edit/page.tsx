import { SubmitButton } from '@/components/form/Buttons';
import FormContainer from '@/components/form/FormContainer';
import FormInput from '@/components/form/FormInput';
import TextAreaInput from '@/components/form/TextAreaInput';

import { useState } from 'react';
import { IoMdAdd } from 'react-icons/io';
import { FaRegTrashCan } from 'react-icons/fa6';
import IngredientsInput from '@/components/form/IngredientsInput';
import ImageInput from '@/components/form/ImageInput';
import CuisinesInput from '@/components/form/CuisinesInput';
import Steps from '@/components/recipes/Steps';
import { Ingredient } from '@/utils/ingredients';
import {
  fetchRecipeDetails,
  updateRecipeAction,
  updateRecipeImage,
} from '@/app/actions/recipeActions';
import { redirect } from 'next/navigation';
import ImageInputContainer from '@/components/form/ImageInputContainer';
import StepsInput from '@/components/form/StepsInput';

async function EditRecipe({ params }: { params: { id: string } }) {
  const recipe = await fetchRecipeDetails(params.id);

  if (!recipe) redirect('/');

  const defaultIngredients: Ingredient[] = JSON.parse(recipe.ingredients);
  const recipeSteps = recipe.steps;

  return (
    <section>
      <h1 className="text-2xl font-semibold mb-8 capitalize">Update Recipe</h1>
      <div className="bordered p-8 rounded">
        <ImageInputContainer
          name={recipe.name}
          text="Update Image"
          action={updateRecipeImage}
          image={recipe.image}
        >
          <input type="hidden" name="id" value={recipe.id} />
        </ImageInputContainer>

        <FormContainer action={updateRecipeAction}>
          <input type="hidden" name="id" value={recipe.id} />
          <div className="grid md:grid-cols-2 gap-8 mb-4 mt-4">
            <FormInput
              name="name"
              type="text"
              label="Name (20 limit)"
              defaultValue={recipe.name}
            />
            <FormInput
              name="tagline"
              type="text "
              label="Tagline (30 limit)"
              defaultValue={recipe.tagline}
            />
          </div>
          <TextAreaInput
            name="description"
            labelText="Description"
            defaultValue={recipe.description}
          />
          <div className="grid sm:grid-cols-2 gap-8 mt-4">
            <CuisinesInput defaultValue={recipe.cuisine} />
          </div>
          <div>
            <h3 className="text-lg mb-4 mt-4 font-medium">Steps</h3>
            <StepsInput stepsProp={recipeSteps} />
          </div>
          <h3 className="text-lg mb-4 mt-4 font-medium">Ingredients</h3>
          <IngredientsInput defaultValue={defaultIngredients} />
          <SubmitButton text="Update recipe" className="mt-12" />
        </FormContainer>
      </div>
    </section>
  );
}

export default EditRecipe;
