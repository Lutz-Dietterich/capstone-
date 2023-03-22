import { useRouter } from "next/router";
import { useContext } from "react";
import { BreedData } from "../../pages/_app";
import styled from "styled-components";
import Image from "next/image";
import Link from "next/link";
import { TiArrowBackOutline } from "react-icons/ti";
import StarRating from "../../components/StarRating";

export default function DetailsPage() {
  const breedData = useContext(BreedData);
  const router = useRouter();
  const { id } = router.query;

  let selectedBreed = null;

  if (breedData) {
    selectedBreed = breedData.find((breed) => breed._id === id);
  }

  if (!selectedBreed) {
    return <div>Loading...</div>;
  }
  console.log(selectedBreed.energy);
  return (
    <StyledDetailsPage>
      <StyledBackLink href="/">
        <TiArrowBackOutline />
        Back
      </StyledBackLink>
      <StyledImage
        src={selectedBreed.image_link}
        width={500}
        height={500}
        alt={selectedBreed.name}
      />
      <StyledTextFields>
        <StyledHeadline>{selectedBreed.name}</StyledHeadline>
        <StyledLine />
        <StarRating title={"Energy"} score={selectedBreed.energy} />
        <StarRating
          title={"Good with Children"}
          score={selectedBreed.good_with_children}
        />
        <StarRating
          title={"Good with Other Dogs"}
          score={selectedBreed.good_with_other_dogs}
        />
        <StarRating title={"Shedding"} score={selectedBreed.shedding} />
        <StarRating title={"Grooming"} score={selectedBreed.grooming} />
        <StarRating title={"Drooling"} score={selectedBreed.drooling} />
        <StarRating title={"Coat Length"} score={selectedBreed.coat_length} />
        <StarRating
          title={"Good with Strangers"}
          score={selectedBreed.good_with_strangers}
        />
        <StarRating title={"Playfulness"} score={selectedBreed.playfulness} />
        <StarRating
          title={"Protectiveness"}
          score={selectedBreed.protectiveness}
        />
        <StarRating title={"Trainability"} score={selectedBreed.trainability} />
        <StarRating title={"Barking"} score={selectedBreed.barking} />
      </StyledTextFields>
    </StyledDetailsPage>
  );
}

const StyledBackLink = styled(Link)`
  position: fixed;
  text-decoration: none;
  background-color: #f5f5f5;
  width: 100%;
  max-width: 550px;
  padding-bottom: 5px;
  padding-left: 20px;
  font-size: 1rem;
  font-weight: 500;
  color: darkslategray;
`;

const StyledDetailsPage = styled.article`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  max-width: 800px;
  height: 100%;
`;

const StyledImage = styled(Image)`
  width: 100%;
  max-width: 512px;
  height: 40vh;
  max-height: 500px;
  margin-top: 30px;
`;

const StyledTextFields = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  max-width: 512px;

  border: 1px solid #3742fa;
  border-radius: 30px 30px 0 0;
  margin-top: -23px;
  padding-bottom: 50px;
  background-color: #fff;
  box-shadow: 0 0 10px 2px rgba(0, 0, 0, 0.3);
`;

const StyledHeadline = styled.h2`
  color: darkslategray;
  text-align: center;
  margin: 20px;
`;

const StyledLine = styled.hr`
  width: 80%;
  max-width: 512px;
  border: 0.2px solid darkslategray;
`;
