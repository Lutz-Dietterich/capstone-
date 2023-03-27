import styled from "styled-components";
import { Favorite } from "../../pages/_app";
import { useContext } from "react";

export default function FavouriteButton() {
  const { favorite, handleFavorite } = useContext(Favorite);
  return (
    <>
      <StyledFavouriteButton onClick={handleFavorite}>
        {favorite ? "❤️" : "🤍"}
      </StyledFavouriteButton>
    </>
  );
}

const StyledFavouriteButton = styled.button`
  width: 50px;
  height: 50px;
  background-color: #fff;
  border: none;
  cursor: pointer;
`;
