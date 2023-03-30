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
        <StyledBackButton type="button" onClick={() => router.back()}>
          <TiArrowBackOutline />
          Back
        </StyledBackButton>
        <FavoriteButton breedID={selectedBreed._id} />
      </StyledDetailsHeader>
      <StyledImage
        src={selectedBreed.image_link}
        width={600}
        height={500}
        alt={selectedBreed.name}
      />
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

const StyledBackButton = styled.button`
  text-decoration: none;
  background-color: #f5f5f5;
  max-width: 550px;
  padding-left: 20px;
  font-size: 1rem;
  font-weight: 500;
  color: darkslategray;
  border: none;
`;

const StyledDetailsHeader = styled.header`
  background-color: #f5f5f5;
  position: fixed;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  max-width: 550px;
  padding-right: 10px;
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
  height: 90vw;
  max-width: 512px;
  max-height: 500px;
  margin-top: 40px;
  box-shadow: 0 5px 10px 2px rgba(0, 0, 0, 0.3);
  border-radius: 30px 30px 0 0;
  object-fit: fill;
`;

const StyledTextFields = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  max-width: 512px;

  border: 1px solid #3742fa;
  border-radius: 30px;
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
  border-top: 0.1px solid rgba(55, 66, 250, 0.3);
`;
