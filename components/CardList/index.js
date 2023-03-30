import ListCard from "../ListCard";
import styled from "styled-components";
import { BreedData, Filter } from "../../pages/_app";
import { useContext } from "react";
import LoadingSpinner from "../LoadingSpinner";
import FilterSection from "../FilterButtonSection";
import { buttons } from "../../utils/data/buttons";

export default function CardList() {
  const breedData = useContext(BreedData);
  const activeButtonId = useContext(Filter);

  const selectedButton = buttons.find(
    ({ id }) => id === activeButtonId.activeButtonId.id
  );
  if (!breedData) {
    return <LoadingSpinner />;
  }
  let filteredBreedData = breedData;

  if (selectedButton?.criteria) {
    filteredBreedData = eval(selectedButton.criteria);
  }

  return (
    <>
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
    max-width: 100%;
  }
`;
