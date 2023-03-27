import styled from "styled-components";
import { Favourite } from "../../pages/_app";
import { useContext } from "react";

export default function FavoriteButton({ breedID }) {
  const { favourite, handleFavorite } = useContext(Favourite);
  return (
    <>
      <StyledFavouriteButton onClick={() => handleFavorite(breedID)}>
        {favourite ? "❤️" : "🤍"}
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
