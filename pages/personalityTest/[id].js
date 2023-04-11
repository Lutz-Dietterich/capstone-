import { useState, useEffect, useContext } from "react";
import { useRouter } from "next/router";
import Link from "next/link";
import styled from "styled-components";

import { personalityQuestionsData } from "../../utils/data/personalityQuestions";
import { BreedData } from "../_app";

import LoadingSpinner from "../../components/LoadingSpinner";
import AnswerSlider from "../../components/Slider";
import AnswerSliderTwo from "../../components/SliderTwo";

export default function PesonalityTestPage() {
  const breedData = useContext(BreedData);
  const router = useRouter();
  const { id } = router.query;
  const parsedData = JSON.parse(router.query.nextBreedData ?? "null");
  const [value, setValue] = useState([]);
  const [showHandle, setShowHandle] = useState(false);

  let testBreedData = breedData;

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

  if (parsedData && parsedData.length > 0) {
    testBreedData = parsedData;
  }

  // if (value.length <= 1) {
  //   setValue(value / 20);
  // }

  if (selectedQuestion && breedData && value.length > 1) {
    testBreedData = breedData.filter(
      (breed) =>
        breed.min_height_male * 2.54 >= value[0] &&
        breed.max_height_male * 2.54 <= value[1]
    );
  } else if (selectedQuestion && parsedData) {
    testBreedData = parsedData.filter(selectedQuestion.filter);
  }

  const nextQuestionId = selectedQuestion.id + 1;

  console.log("breedData:", testBreedData);
  console.log("parsedData:", parsedData);

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
              nextQuestionId <= personalityQuestionsData.length
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
            {nextQuestionId <= personalityQuestionsData.length
              ? "Next"
              : "Show Results"}
          </StyledLink>
        ) : (
          <h4>pleace select an answer</h4>
        )}
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
