import { useRouter } from "next/router";
import styled from "styled-components";
import LoadingSpinner from "../../components/LoadingSpinner";
import { personalityQuestionsData } from "../../utils/data/personalityQuestions";

export default function DetailsPage() {
  const router = useRouter();
  const { id } = router.query;
  const selectedQuestion = personalityQuestionsData.find(
    (question) => question.id === parseInt(id)
  );

  if (!selectedQuestion) {
    return <LoadingSpinner />;
  }

  console.log(selectedQuestion);

  return (
    <>
      <p>{selectedQuestion.id}</p>
    </>
  );
}
