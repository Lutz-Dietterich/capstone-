import styled from "styled-components";
import Image from "next/image";

export default function CardList() {
  return (
    <>
      <StyledCard>
        <StyledCardHeader>Card 1</StyledCardHeader>
        <StyledCardImage
          src="/pmlogo.png"
          alt="PawfectMatch"
          width={200}
          height={50}
        />
      </StyledCard>
    </>
  );
}

const StyledCard = styled.article`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 90vw;
  height: 50vh;
  background-color: #fff;
  border-radius: 30px;
  border: 1px solid #000;
`;

const StyledCardHeader = styled.header`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 50px;
  background-color: #fff;
  border-radius: 30px;
`;

const StyledCardImage = styled(Image)`
  width: 100%;
  height: 100%;
`;
