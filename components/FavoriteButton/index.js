import styled from "styled-components";
import { Favorite } from "../../pages/_app";
import { useContext } from "react";

export default function FavoriteButton({ breedID }) {
  const { favorite, handleFavorite } = useContext(Favorite);
  return (
    <>
      <StyledFavouriteButton onClick={() => handleFavorite(breedID)}>
        {favorite ? "❤️" : "🤍"}
      </StyledFavouriteButton>
    </>
  );
}

const StyledFavouriteButton = styled.button`
  width: 30px;
  height: 30px;
  background-color: transparent;
  border: none;
  cursor: pointer;
  margin-right: 20px;
`;
