import { useContext } from "react";
import { Favorite } from "../../pages/_app";
import ListCard from "../../components/ListCard";
import styled from "styled-components";
import { AiOutlineHeart } from "react-icons/ai";
import LoadingSpinner from "../../components/LoadingSpinner";
import useScrollPosition from "../../utils/hooks/useScrollPosition";
import ScrollToTopButton from "../../components/ScrollToTopButton";

export default function FavoritesPage() {
  const { favorites } = useContext(Favorite);

  useScrollPosition();

  if (!favorites) {
    return <LoadingSpinner />;
  }

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
      <ScrollToTopButton />
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

  @media (min-width: 768px) {
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: center;
    width: 100%;
    max-width: 1300px;
    margin-top: 70px;
  }
  }
`;
