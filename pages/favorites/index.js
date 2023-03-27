import { useContext } from "react";
import { Favorite } from "../../pages/_app";
import ListCard from "../../components/ListCard";
import styled from "styled-components";
import { Dna } from "react-loader-spinner";

export default function FavoritesPage() {
  const { favorites } = useContext(Favorite);

  if (!favorites) {
    // Wenn die Favoriten noch nicht geladen sind, zeigt ein Ladeindikator an.
    return (
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
    );
  }

  // Filtern Sie die Elemente, die in der Favoritenliste enthalten sind.
  const favoriteItems = favorites.filter((item) => item.favorite);

  return (
    <div>
      <h1>Favorite list</h1>
      <StyledCardList>
        {favoriteItems.length > 0 ? (
          favoriteItems.map((dog) => (
            <div key={dog._id}>
              <ListCard
                name={dog.name}
                img={dog.image_link}
                breedID={dog._id}
              />
            </div>
          ))
        ) : (
          <p>No favorites yet.</p>
        )}
      </StyledCardList>
    </div>
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
