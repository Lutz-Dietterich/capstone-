import useSWR from "swr";
import ListCard from "../ListCard";
import styled from "styled-components";

export default function CardList() {
  const { data, error } = useSWR("/api/db");

  return (
    <StyledCardList>
      {data ? (
        data.map((dog) => (
          <div key={dog.id}>
            <ListCard name={dog.name} img={dog.image_link} />
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
