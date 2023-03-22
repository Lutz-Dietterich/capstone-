import { useRouter } from "next/router";
import { useContext } from "react";
import { BreedData } from "../../pages/_app";

export default function DetailsPage() {
  const breedData = useContext(BreedData);
  const router = useRouter();
  const { id } = router.query;

  let selectedBreed = null;

  if (breedData) {
    selectedBreed = breedData.find((breed) => breed._id === id);
  }

  if (!selectedBreed) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <h1>Details Page</h1>
      <p>Id: {id}</p>
      <p>Name: {selectedBreed.name}</p>
    </div>
  );
}
