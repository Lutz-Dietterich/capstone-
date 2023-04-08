import { useRouter } from "next/router";
import styled from "styled-components";
import LoadingSpinner from "../../components/LoadingSpinner";
import { personalityQuestionsData } from "../../utils/data/personalityQuestions";
import AnswerSlider from "../../components/Slider";
import Link from "next/link";

export default function DetailsPage() {
  const router = useRouter();
  const { id } = router.query;
  const selectedQuestion = personalityQuestionsData.find(
    (question) => question.id === parseInt(id)
  );

  if (!selectedQuestion) {
    return <LoadingSpinner />;
  }
  const nextQuestionId = selectedQuestion.id + 1;

  console.log(selectedQuestion);

  return (
    <>
      <StyledHeadline2>personalityTest</StyledHeadline2>

      <StyledQestionCard>
        <h3>{selectedQuestion.question}</h3>
        <p>{selectedQuestion.description}</p>
        <AnswerSlider />
        <StyledLink
          href={
            nextQuestionId <= 10
              ? `/personalityTest/${nextQuestionId}`
              : "/personalityTest/results"
          }
        >
          {nextQuestionId <= 10 ? "Next" : "Show Results"}{" "}
        </StyledLink>
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
  width: 90%;
  background-color: #fff;
`;

const StyledLink = styled(Link)`
  text-decoration: none;
  color: #000;
  font-weight: 700;
  font-size: 1.2rem;
  margin: 10px 0;
`;
