import styled from "styled-components";
import { Favourite } from "../../pages/_app";
import { useContext } from "react";

export default function FavouriteButton() {
  const { favourite, handleFavorite } = useContext(Favourite);
  return (
    <>
      <StyledFavouriteButton onClick={handleFavorite}>
        {favourite ? "❤️" : "🤍"}
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
