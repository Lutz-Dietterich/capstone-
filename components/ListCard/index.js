import styled from "styled-components";
import Image from "next/image";
import FavoriteButton from "../FavoriteButton";
import Link from "next/link";
import { useContext } from "react";
import { Favorite } from "../../pages/_app";

export default function ListCard({ name, img, breedID }) {
  const { favorites } = useContext(Favorite);
  const parsedData = JSON.parse(localStorage.getItem("parsedData") ?? "null");
  const matchedIds = parsedData ? parsedData.map((dog) => dog._id) : [];
  const matchedFavorite =
    favorites.find((item) => item._id === breedID)?.favorite &&
    matchedIds.includes(breedID);
  console.log("card", favorites);
  console.log("parsedData", parsedData);
  console.log("breedID", breedID);
  console.log("matchedIds", matchedIds);
  return (
    <>
      {matchedFavorite ? (
        <StyledCard id={breedID}>
          <StyledCardHeaderMatch>
            <StyledCardHeadline>{name}</StyledCardHeadline>
            <FavoriteButton breedID={breedID} />
          </StyledCardHeaderMatch>
          <StyledLink href={`/details/${breedID}`}>
            <StyledCardImage
              src={img}
              alt={`Bild ${name}`}
              width={512}
              height={500}
            />
          </StyledLink>
        </StyledCard>
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
  background-color: #000;
  border-radius: 30px;
  margin-top: 10px;
  padding: 0 15px;
`;

const StyledCardHeadline = styled.h2`
  font-size: 1.2rem;
  font-weight: 600;
  color: darkslategray;
`;

const StyledCardImage = styled(Image)`
  width: 100%;
  height: 100%;
  border-radius: 30px;
  object-fit: fill;
`;
