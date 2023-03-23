import styled from "styled-components";
import Image from "next/image";
import FavouriteButton from "../FavouriteButton";

export default function ListCard({ name, img }) {
  return (
    <StyledCard>
      <StyledCardHeader>
        <StyledCardHeadline>{name}</StyledCardHeadline>
        <FavouriteButton />
      </StyledCardHeader>
      <StyledCardImage
        src={img}
        alt={`Bild ${name}`}
        width={512}
        height={500}
      />
    </StyledCard>
  );
}

const StyledCard = styled.article`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 90vw;
  max-width: 400px;
  height: 40vh;
  max-height: 400px;
  background-color: #fff;
  border-radius: 30px;
  border: 1px solid #3742fa;
  box-shadow: 0 0 10px 2px rgba(0, 0, 0, 0.3);
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

const StyledCardHeadline = styled.h2`
  font-size: 1.2rem;
  font-weight: 600;
  color: #000;
`;

const StyledCardImage = styled(Image)`
  width: 100%;
  height: 100%;
  max-height: 500px;
  border-radius: 30px;
`;
