import styled from "styled-components";
import Image from "next/image";
import FavoriteButton from "../FavoriteButton";
import Link from "next/link";
import { useContext } from "react";
import { Favorite } from "../../pages/_app";

export default function ListCard({ name, img, breedID, resultData }) {
  const { favorites } = useContext(Favorite);

  let parsedData = [];

  if (resultData) {
    parsedData = resultData;
  } else {
    const localStorageData = localStorage.getItem("parsedData");
    if (localStorageData) {
      parsedData = JSON.parse(localStorageData);
    }
  }

  const matchedIds = parsedData ? parsedData.map((dog) => dog._id) : [];
  const matchedFavorite =
    favorites.find((item) => item._id === breedID)?.favorite &&
    matchedIds.includes(breedID);

  return (
    <>
      {matchedFavorite ? (
        <StyledMatchedCard id={breedID}>
          <StyledCardHeaderMatch>
            <StyledMatchedCardHeadline>{name}</StyledMatchedCardHeadline>
            <FavoriteButton breedID={breedID} />
          </StyledCardHeaderMatch>
          <StyledLink href={`/details/${breedID}`}>
            <StyledMatchedBanner>matched!</StyledMatchedBanner>

            <StyledMatchedCardImage
              src={img}
              alt={`Bild ${name}`}
              width={512}
              height={500}
            />
          </StyledLink>
        </StyledMatchedCard>
      ) : (
        <StyledCard id={breedID}>
          <StyledCardHeader>
            <StyledCardHeadline>{name}</StyledCardHeadline>
            <FavoriteButton breedID={breedID} />
          </StyledCardHeader>
          <StyledLink href={`/details/${breedID}`}>
            <StyledCardImage
              src={img}
              alt={`Bild ${name}`}
              width={512}
              height={500}
            />
          </StyledLink>
        </StyledCard>
      )}
    </>
  );
}
const StyledLink = styled(Link)`
  text-decoration: none;
  width: 100%;
  height: 90vw;
  position: relative;

  @media (min-width: 768px) {
    height: 40vw;
  }
`;

const StyledCard = styled.article`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 90vw;
  max-width: 500px;
  max-height: 500px;
  height: 90vw;
  background-color: #fff;
  border-radius: 30px;
  box-shadow: 0 0 10px 2px rgba(0, 0, 0, 0.3);
  overflow: hidden;
  &:hover {
    box-shadow: 0 0 10px 2px rgba(0, 0, 0, 0.5);
    border: 1px solid #3742fa;
  }

  @media (min-width: 768px) {
    width: 40vw;
    height: 40vw;
    max-width: 400px;
    max-height: 400px;
  }
`;

const StyledMatchedCard = styled.article`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 90vw;
  max-width: 500px;
  max-height: 500px;
  height: 90vw;
  background-color: #fff;
  border-radius: 30px;
  box-shadow: 0 0 10px 2px rgba(0, 0, 0, 0.3);
  border: 2px solid #3742fa;
  overflow: hidden;

  &:hover {
    box-shadow: 0 0 10px 2px rgba(0, 0, 0, 0.5);
    transform: scale(1.02);
  }

  @media (min-width: 768px) {
    width: 40vw;
    height: 40vw;
    max-width: 400px;
    max-height: 400px;
  }
`;

const StyledCardHeader = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  height: 50px;
  background-color: #fff;
  border-radius: 30px;
  margin-top: 10px;
  padding: 0 15px;
`;

const StyledCardHeaderMatch = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  height: 50px;
  background-color: #fff;
  border-radius: 30px;
  margin-top: 10px;
  padding: 0 15px;
`;

const StyledCardHeadline = styled.h2`
  font-size: 1.2rem;
  font-weight: 600;
  color: darkslategray;
`;

const StyledMatchedCardHeadline = styled.h2`
  font-size: 1.2rem;
  font-weight: 600;
  color: #3742fa;
`;

const StyledMatchedBanner = styled.p`
  font-size: 3rem;
  font-weight: 200;
  color: #3742fa;
  border-radius: 30px;
  margin: auto;

  position: absolute;
  transform: rotate(-30deg) translate(-50%, -50%);
  transform-origin: 50% 50%;
  z-index: 0;
  top: 30%;
  left: 50%;
`;

const StyledCardImage = styled(Image)`
  width: 100%;
  height: 100%;
  border-radius: 30px;
  object-fit: fill;
`;

const StyledMatchedCardImage = styled(Image)`
  width: 100%;
  height: 100%;
  border-radius: 30px;
  object-fit: fill;
  opacity: 1;
`;
