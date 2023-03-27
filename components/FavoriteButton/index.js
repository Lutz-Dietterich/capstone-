import styled from "styled-components";
import { Favorite } from "../../pages/_app";
import { useContext } from "react";

export default function FavoriteButton({ breedID }) {
  const { favorites, handleFavorite } = useContext(Favorite);
  return (
    <StyledFavoriteButton onClick={() => handleFavorite(breedID)}>
      {favorites.find((item) => item._id === breedID)?.favorite ? "❤️" : "🤍"}
    </StyledFavoriteButton>
  );
}

const StyledFavoriteButton = styled.button`
  width: 30px;
  height: 30px;
  background-color: transparent;
  border: none;
  cursor: pointer;
  margin-right: 20px;
`;
