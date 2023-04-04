import { useRouter } from "next/router";
import { useContext } from "react";
import { BreedData } from "../../pages/_app";
import styled from "styled-components";
import Image from "next/image";
import { TiArrowBackOutline } from "react-icons/ti";
import StarRating from "../../components/StarRating";
import Characteristics from "../../components/Characteristics";
import FavoriteButton from "../../components/FavoriteButton";
import LoadingSpinner from "../../components/LoadingSpinner";
import Link from "next/link";

export default function DetailsPage() {
  const breedData = useContext(BreedData);
  const router = useRouter();
  const { id } = router.query;

  let selectedBreed = null;

  if (breedData) {
    selectedBreed = breedData.find((breed) => breed._id === id);
  }

  if (!selectedBreed) {
    return <LoadingSpinner />;
  }

  return (
    <StyledDetailsPage>
      <StyledDetailsHeader>
        <StyledBackLink href={"/"} onClick={() => router.back()}>
          <TiArrowBackOutline />
          Back
        </StyledBackLink>
        <FavoriteButton breedID={selectedBreed._id} />
      </StyledDetailsHeader>
      <StyledImageContainer>
        <StyledImage
          src={selectedBreed.image_link}
          width={600}
          height={500}
          alt={selectedBreed.name}
        />
      </StyledImageContainer>
      <StyledTextFields>
        <StyledHeadline>{selectedBreed.name}</StyledHeadline>

        <Characteristics
          title={"Height (Female)"}
          min={(selectedBreed.min_height_female * 2.54).toFixed(1)}
          max={(selectedBreed.max_height_female * 2.54).toFixed(1)}
          unit={"centimeters"}
        />

        <Characteristics
          title={"Height (Male)"}
          min={(selectedBreed.min_height_male * 2.54).toFixed(1)}
          max={(selectedBreed.max_height_male * 2.54).toFixed(1)}
          unit={"centimeters"}
        />

        <Characteristics
          title={"Weight (Female)"}
          min={(selectedBreed.min_weight_female * 0.453592).toFixed(1)}
          max={(selectedBreed.max_weight_female * 0.453592).toFixed(1)}
          unit={"kilograms"}
        />

        <Characteristics
          title={"Weight (Male)"}
          min={(selectedBreed.min_weight_male * 0.453592).toFixed(1)}
          max={(selectedBreed.max_weight_male * 0.453592).toFixed(1)}
          unit={"kilograms"}
        />

        <Characteristics
          title={"min. Monthly Cost ~"}
          min={((selectedBreed.min_weight_female * 0.7 + 10) * 2).toFixed(2)}
          max={((selectedBreed.max_weight_male * 0.6 + 10) * 2).toFixed(2)}
          unit={"euros"}
        />

        <Characteristics
          title={"Life Expectancy"}
          min={selectedBreed.min_life_expectancy}
          max={selectedBreed.max_life_expectancy}
          unit={"years"}
        />

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

const StyledDetailsPage = styled.article`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  max-width: 612px;
  height: 100%;

  @media (min-width: 1024px) {
    width: 100%;
    max-width: 1200px;
    flex-direction: row;
    align-items: flex-start;
    gap: 50px;
  }
`;

const StyledDetailsHeader = styled.header`
  background-color: #f1f1f1f1;
  position: fixed;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  max-width: 650px;
  padding-right: 10px;

  @media (min-width: 1024px) {
    width: 100%;
    max-width: 1220px;
  }
`;

const StyledBackLink = styled(Link)`
  text-decoration: none;
  background-color: #f1f1f1f1;
  padding-left: 20px;
  font-size: 1rem;
  font-weight: 500;
  color: darkslategray;
  border: none;
`;

const StyledImageContainer = styled.div`
  width: 100%;
  height: 67vw;
  max-height: 400px;
  overflow: hidden;
  border-radius: 30px 30px 0 0;
  box-shadow: 0 5px 10px 2px rgba(0, 0, 0, 0.3);
  z-index: -1;
  margin-top: 40px;
  margin-bottom: -23px;

  @media (min-width: 1024px) {
    position: sticky;
    top: 190px;
    margin-top: 120px;
    border-radius: 30px;
    height: 100%;

`;

const StyledImage = styled(Image)`
  width: 100%;
  height: auto;
  object-fit: cover;
  transform: scale(1.1);
  object-position: 50% 50%;
  margin-top: 10px;
`;

const StyledTextFields = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  border: 1px solid #3742fa;
  border-radius: 30px;
  padding-bottom: 50px;
  background-color: #fff;
  box-shadow: 0 0 10px 2px rgba(0, 0, 0, 0.3);

  @media (min-width: 1024px) {
    width: 100%;
    max-width: 450px;
    margin-top: 120px;
  }
`;

const StyledHeadline = styled.h2`
  color: darkslategray;
  text-align: center;
  margin: 20px;

  @media (min-width: 1024px) {
    display: block;
    position: fixed;
    top: 120px;
    left: 23%;
    transform: translate(-50%, -50%);
    width: 1200px;
    background-color: transparent;
    padding: 10px;
  }

  @media (min-width: 1150px) {
    left: 27%;
  }

  @media (min-width: 1300px) {
    left: 30%;
  }

  @media (min-width: 1400px) {
    left: 33%;
  }

  @media (min-width: 1500px) {
    left: 35%;
  }
`;

const StyledLine = styled.hr`
  width: 80%;
  border-top: 0.1px solid rgba(55, 66, 250, 0.3);
`;
