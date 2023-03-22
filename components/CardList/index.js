import ListCard from "../ListCard";
import styled from "styled-components";
import { BreedData } from "../../pages/_app";
import { useContext } from "react";

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
        <div>Loading...</div>
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
  height: 100%;
  gap: 20px;
  margin-top: 20px;

  // @media (min-width: 768px) {
  //   display: grid;
  //   grid-template-columns: repeat(2, 1fr);
  //   justify-items: center;
  //   gap: 20px;
  //   align-items: center;
  //   margin: 20px auto;
  //   overflow: hidden;
  // }
`;
