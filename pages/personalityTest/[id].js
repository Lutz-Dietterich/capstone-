import { useState, useEffect, useContext } from "react";
import { useRouter } from "next/router";
import Link from "next/link";
import styled from "styled-components";

import { personalityQuestionsData } from "../../utils/data/personalityQuestions";
import { BreedData } from "../_app";

import LoadingSpinner from "../../components/LoadingSpinner";
import AnswerSlider from "../../components/Slider";
import AnswerSliderTwo from "../../components/SliderTwo";

export default function pesonalityTestPage() {
  const breedData = useContext(BreedData);
  const router = useRouter();
  const { id } = router.query;
  const [value, setValue] = useState([]);
  const [showHandle, setShowHandle] = useState(false);

  const handleValue = (value) => {
    setValue(value);
    setShowHandle(true);
  };

  const selectedQuestion = personalityQuestionsData.find(
    (question) => question.id === parseInt(id)
  );

  useEffect(() => {
    if (selectedQuestion) {
      setValue(selectedQuestion.startValue);
    }
  }, [selectedQuestion]);

  if (!selectedQuestion || !value || !breedData) {
    return <LoadingSpinner />;
  }

  let testBreedData = breedData;

  if (selectedQuestion && breedData && value.length > 1) {
    testBreedData = breedData.filter(
      (breed) =>
        breed.min_height_male * 2.54 >= value[0] &&
        breed.max_height_male * 2.54 <= value[1]
    );
  } else if (selectedQuestion && breedData) {
    testBreedData = breedData.filter(
      (breed) => breed[selectedQuestion.filter] <= value / 20
    );
  }
  const nextQuestionId = selectedQuestion.id + 1;

  console.log(`${selectedQuestion.filter}`);
  console.log("breedData:", testBreedData);
  console.log(`${selectedQuestion.trackText}`);

  return (
    <>
      <StyledHeadline2>personalityTest</StyledHeadline2>

      <StyledQestionCard>
        <h3>{selectedQuestion.question}</h3>
        <p>{selectedQuestion.description}</p>
        {value.length > 1 ? (
          <AnswerSliderTwo
            value={value}
            showHandle={showHandle}
            handleValue={handleValue}
          />
        ) : (
          <AnswerSlider
            value={value}
            showHandle={showHandle}
            handleValue={handleValue}
          />
        )}
        {showHandle ? (
          <StyledLink
            href={
              nextQuestionId <= 10
                ? `/personalityTest/${nextQuestionId}?nextBreedData=${JSON.stringify(
                    testBreedData
                  )}`
                : `/personalityTest/results?nextBreedData=${JSON.stringify(
                    testBreedData
                  )}`
            }
            onClick={() => {
              setShowHandle(false);
            }}
          >
            {nextQuestionId <= 10 ? "Next" : "Show Results"}
          </StyledLink>
        ) : (
          <h4>bitte antworten</h4>
        )}

        <p>breeds selected: {testBreedData.length}</p>
      </StyledQestionCard>
    </>
  );
}

const StyledHeadline2 = styled.h2`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  text-align: center;
  font-size: 2rem;
  font-weight: 400;
  margin: 10px 0 30px 0;
  line-height: 1.2;
`;

const StyledQestionCard = styled.article`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  padding: 1rem;
  border: 1px solid #ccc;
  border-radius: 30px;
  margin: 10px auto;
  width: 100%;
  max-width: 500px;
  background-color: #fff;

  p {
    width: 80%;
  }
`;

const StyledLink = styled(Link)`
  text-decoration: none;
  width: 80%;
  max-width: 200px;
  color: #fff;
  font-weight: 400;
  font-size: 1rem;
  margin: 20px;
  padding: 10px;
  background-color: #3742fa;
  border-radius: 30px;
`;
