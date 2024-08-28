import CuisinesList from '@/components/home/CuisinesList';
import RecipeContainer from '@/components/home/RecipeContainer';

export default function Home({
  searchParams,
}: {
  searchParams: { cuisine?: string; search?: string };
}) {
  return (
    <div>
      <CuisinesList
        cuisine={searchParams.cuisine}
        search={searchParams.search}
      />
      <RecipeContainer
        cuisine={searchParams.cuisine}
        search={searchParams.search}
      />
    </div>
  );
}
