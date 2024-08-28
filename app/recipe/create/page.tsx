'use client';
import { SubmitButton } from '@/components/form/Buttons';
import FormContainer from '@/components/form/FormContainer';
import FormInput from '@/components/form/FormInput';
import TextAreaInput from '@/components/form/TextAreaInput';
import { Button } from '@/components/ui/button';
import { useState } from 'react';
import { IoMdAdd } from 'react-icons/io';
import { FaRegTrashCan } from 'react-icons/fa6';
import IngredientsInput from '@/components/form/IngredientsInput';
import ImageInput from '@/components/form/ImageInput';
import CuisinesInput from '@/components/form/CuisinesInput';
import { createRecipeAction } from '@/app/actions/recipeActions';

function CreateRecipe() {
  const [steps, setSteps] = useState<string[]>(['']);

  const handleStepChange = (index: number, value: string) => {
    const newSteps = [...steps];
    newSteps[index] = value;
    setSteps(newSteps);
  };

  const handleAddStep = () => {
    setSteps([...steps, '']);
  };

  const handleRemoveStep = (index: number) => {
    const newSteps = steps.filter((_, i) => i !== index);
    setSteps(newSteps);
  };
  return (
    <section>
      <h1 className="text-2xl font-semibold mb-8 capitalize">
        Create a Recipe
      </h1>
      <div className="bordered p-8 rounded">
        <h3 className="text-lg mb-4 font-medium">General Info</h3>
        <FormContainer action={createRecipeAction}>
          <div className="grid md:grid-cols-2 gap-8 mb-4">
            <FormInput
              name="name"
              type="text"
              label="Name (20 limit)"
              defaultValue="Cabin in Latvia"
            />
            <FormInput
              name="tagline"
              type="text "
              label="Tagline (30 limit)"
              defaultValue="Dream Getaway Awaits You Here!"
            />
          </div>
          <TextAreaInput
            name="description"
            labelText="description(10-1000Words)"
          />
          <div className="grid sm:grid-cols-2 gap-8 mt-4">
            <CuisinesInput />
            <ImageInput />
          </div>
          <div>
            <h3 className="text-lg mb-4 mt-4 font-medium">Steps</h3>
            {steps.map((step, index) => (
              <div key={index} className="mb-2 flex items-center">
                <input
                  name={`step-${index}`} // Updated the name attribute to make each step distinct
                  type="text"
                  value={step}
                  onChange={(e) => handleStepChange(index, e.target.value)}
                  placeholder={`Step ${index + 1}`}
                  className="border p-2 w-full"
                />
                <Button
                  type="button"
                  onClick={() => handleRemoveStep(index)}
                  className="ml-2 bg-red-500 hover:bg-red-300 text-white px-4 py-2"
                >
                  <FaRegTrashCan />
                </Button>
              </div>
            ))}

            <Button
              type="button"
              onClick={handleAddStep}
              className="text-white px-4 py-2"
            >
              <IoMdAdd />
            </Button>

            {/* Hidden input to store steps as JSON */}
            <input type="hidden" name="steps" value={JSON.stringify(steps)} />
          </div>
          <h3 className="text-lg mb-4 mt-4 font-medium">Ingredients</h3>
          <IngredientsInput />
          <SubmitButton text="create recipe" className="mt-12" />
        </FormContainer>
      </div>
    </section>
  );
}
export default CreateRecipe;
