import ListCard from "../ListCard";
import styled from "styled-components";
import { BreedData } from "../../pages/_app";
import { useContext } from "react";
import { Dna } from "react-loader-spinner";
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
        <div>
          <Dna
            visible={true}
            height="80"
            width="80"
            ariaLabel="dna-loading"
            wrapperStyle={{}}
            wrapperClass="dna-wrapper"
          />
        </div>
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

// @media (min-width: 768px) {
//   display: grid;
//   grid-template-columns: repeat(2, 1fr);
//   justify-items: center;
//   gap: 20px;
//   align-items: center;
//   margin: 20px auto;
//   overflow: hidden;
// }

// mögliche Lösung
function ListCardWrapper(props) {
  const [favorites, setFavorites] = useState({});

  const handleSetFavorite = (breedID, value) => {
    setFavorites({ ...favorites, [breedID]: value });
  };

  return (
    <div>
      {props.breeds.map((breed) => (
        <ListCard
          key={breed.id}
          name={breed.name}
          img={breed.image}
          breedID={breed.id}
          favorite={favorites[breed.id]}
          setFavorite={(value) => handleSetFavorite(breed.id, value)}
        />
      ))}
    </div>
  );
}
