import { useRouter } from "next/router";
import styled from "styled-components";
import LoadingSpinner from "../../components/LoadingSpinner";
import { personalityQuestionsData } from "../../utils/data/personalityQuestions";
import AnswerSlider from "../../components/Slider";
import AnswerSliderTwo from "../../components/SliderTwo";
import Link from "next/link";
import { useState } from "react";

export default function DetailsPage() {
  const router = useRouter();
  const { id } = router.query;
  const [value, setValue] = useState([20, 50]);
  const [showHandle, setShowHandle] = useState(false);

  const handleValue = (value) => {
    setValue(value);
    setShowHandle(true);
  };

  const selectedQuestion = personalityQuestionsData.find(
    (question) => question.id === parseInt(id)
  );

  if (!selectedQuestion) {
    return <LoadingSpinner />;
  }
  const nextQuestionId = selectedQuestion.id + 1;

  return (
    <>
      <StyledHeadline2>personalityTest</StyledHeadline2>

      <StyledQestionCard>
        <h3>{selectedQuestion.question}</h3>
        <p>{selectedQuestion.description}</p>
        {value.length < 2 ? (
          <AnswerSlider
            value={value}
            showHandle={showHandle}
            handleValue={handleValue}
          />
        ) : (
          <AnswerSliderTwo
            value={value}
            showHandle={showHandle}
            handleValue={handleValue}
          />
        )}
        {showHandle ? (
          <StyledLink
            href={
              nextQuestionId <= 10
                ? `/personalityTest/${nextQuestionId}`
                : "/personalityTest/results"
            }
            onClick={() => {
              setShowHandle(false);
              setValue([50]);
            }}
          >
            {nextQuestionId <= 10 ? "Next" : "Show Results"}
          </StyledLink>
        ) : (
          <h4>bitte antworten</h4>
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
