import { useState } from "react";
import styled from "styled-components";

export default function FavouriteButton() {
  const [favourite, setFavourite] = useState(false);

  const handleClick = () => {
    setFavourite(!favourite);
  };

  return (
    <>
      <StyledFavouriteButton onClick={handleClick}>
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
