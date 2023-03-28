import ListCard from "../ListCard";
import styled from "styled-components";
import { BreedData } from "../../pages/_app";
import { useContext } from "react";
import LoadingSpinner from "../LoadingSpinner";

export default function CardList() {
  const breedData = useContext(BreedData);

  return (
    <StyledCardList>
      {breedData ? (
        breedData.map((dog) => (
          <div key={dog._id}>
            <ListCard name={dog.name} img={dog.image_link} breedID={dog._id} />
          </div>
        ))
      ) : (
        <LoadingSpinner />
      )}
    </StyledCardList>
  );
}

const StyledCardList = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  max-width: 800px;
  gap: 20px;
  margin-top: 20px;
  margin-bottom: 60px;
`;
