import RecipesList from '@/components/home/RecipesList';
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table';
import { RecipeCardProps } from '@/utils/types';
import Image from 'next/image';
import Link from 'next/link';
import { deleteRecipeAction, fetchUsersRecipe } from '../actions/recipeActions';
import { Button } from '@/components/ui/button';
import FormContainer from '@/components/form/FormContainer';
import { IconButton } from '@/components/form/Buttons';

async function MyRecipes() {
  const recipes: RecipeCardProps[] = await fetchUsersRecipe();
  return (
    <div className="mt-16">
      <Link href="/recipe/create">
        <Button className="mb-4 -mt-4">Create a recipe</Button>
      </Link>
      <h4 className="mb-4 capitalize">
        My Recipes: {recipes.length} recipe{recipes.length > 1 && 's'}
      </h4>
      <Table>
        <TableCaption>A list of all your recipes</TableCaption>
        <TableHeader>
          <TableRow>
            <TableHead>Recipe Name</TableHead>
            <TableHead> Cuisine</TableHead>
            <TableHead> Image</TableHead>
            <TableHead>Actions</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {recipes.map((recipe) => {
            const { name, image, id, cuisine } = recipe;
            const { id: recipeId } = recipe;
            return (
              <TableRow key={id}>
                <TableCell>{name}</TableCell>
                <TableCell>{cuisine}</TableCell>
                <TableCell>
                  <Image
                    src={image}
                    alt={name}
                    width={100}
                    height={100}
                    className="object-cover rounded-lg"
                  />
                </TableCell>
                <TableCell className="flex items-center gap-x-2">
                  <Link href={`/recipe/${recipeId}/edit`}>
                    <IconButton actionType="edit" />
                  </Link>

                  <DeleteRecipeComponent recipeId={recipeId} />
                </TableCell>
              </TableRow>
            );
          })}
        </TableBody>
      </Table>
    </div>
  );
}

const DeleteRecipeComponent = ({ recipeId }: { recipeId: string }) => {
  const deleteRecipe = deleteRecipeAction.bind(null, { recipeId });
  return (
    <FormContainer action={deleteRecipe}>
      <IconButton actionType="delete" className="text-red-500" />
    </FormContainer>
  );
};

export default MyRecipes;
