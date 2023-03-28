import { useContext } from "react";
import { Favorite } from "../../pages/_app";
import ListCard from "../../components/ListCard";
import styled from "styled-components";
import { Dna } from "react-loader-spinner";
import { AiOutlineHeart } from "react-icons/ai";

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
      <StyledHeadline2>
        <StyledHeadlineHeart /> MyFavorites
      </StyledHeadline2>
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

const StyledHeadline2 = styled.h2`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  text-align: center;
  font-size: 2rem;
  font-weight: 400;
  margin: 10px 0 30px 0;
  line-height: 1.2;
`;

const StyledHeadlineHeart = styled(AiOutlineHeart)`
  margin-right: 10px;
  color: red;
`;

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
