import styled from "styled-components";
import { Favorite } from "../../pages/_app";
import { useContext } from "react";
import { AiOutlineHeart } from "react-icons/ai";

export default function FavoriteButton({ breedID }) {
  const { favorites, handleFavorite } = useContext(Favorite);

  return (
    <StyledFavoriteButton onClick={() => handleFavorite(breedID)}>
      {favorites.find((item) => item._id === breedID)?.favorite ? (
        <StyledHeadlineHeartON />
      ) : (
        <StyledHeadlineHeartOFF />
      )}
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

  &:focus {
    outline: none;
  }

  &:hover {
    opacity: 0.8;
    transition: 0.3s;
    transform: scale(1.1);
  }
`;

const StyledHeadlineHeartON = styled(AiOutlineHeart)`
  color: red;
  font-size: 1.5rem;
  font-weight: bold;
`;

const StyledHeadlineHeartOFF = styled(AiOutlineHeart)`
  color: darkslategray;
  font-size: 1.5rem;
  font-weight: bold;
`;
