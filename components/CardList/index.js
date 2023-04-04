import ListCard from "../ListCard";
import styled from "styled-components";
import { BreedData, Filter } from "../../pages/_app";
import { useContext } from "react";
import LoadingSpinner from "../LoadingSpinner";
import FilterSection from "../FilterButtonSection";
import { filterButtonsData } from "../../utils/data/filterButtonsData";
import { useState } from "react";
import { useEffect } from "react";
import SearchField from "../SearchField";

export default function CardList() {
  const breedData = useContext(BreedData);
  const { activeButtonId, setActiveButtonId } = useContext(Filter);

  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    setActiveButtonId({ id: 1 });
  }, [searchTerm]);

  const selectedButton = filterButtonsData.find(
    ({ id }) => id === activeButtonId.id
  );
  if (!breedData) {
    return <LoadingSpinner />;
  }
  let filteredBreedData = breedData;

  if (selectedButton?.criteria) {
    filteredBreedData = eval(selectedButton.criteria);
  }

  // TODO: replace eval function

  filteredBreedData = filteredBreedData.filter((breed) =>
    breed.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  filteredBreedData.sort((a, b) => a.name.localeCompare(b.name));
  return (
    <>
      <SearchField
        value={searchTerm}
        handleSearchChange={(newTerm) => {
          setSearchTerm(newTerm);
        }}
      />
      <FilterSection />

      <StyledCardList>
        {filteredBreedData ? (
          filteredBreedData.map((dog) => (
            <div key={dog._id}>
              <ListCard
                name={dog.name}
                img={dog.image_link}
                breedID={dog._id}
              />
            </div>
          ))
        ) : (
          <LoadingSpinner />
        )}
      </StyledCardList>
    </>
  );
}

const StyledCardList = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  max-width: 800px;
  gap: 20px;
  margin-top: 45px;
  margin-bottom: 60px;

  @media (min-width: 768px) {
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: center;
    width: 100%;
    max-width: 1300px;
    margin-top: 70px;
  }
`;
