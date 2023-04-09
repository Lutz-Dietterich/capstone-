import ListCard from "../../components/ListCard";
import styled from "styled-components";
import { AiOutlineHeart } from "react-icons/ai";
import LoadingSpinner from "../../components/LoadingSpinner";
import { useRouter } from "next/router";

export default function ResultPage() {
  const router = useRouter();
  const parsedData = JSON.parse(router.query.nextBreedData ?? "null");

  if (!parsedData) {
    return <LoadingSpinner />;
  }

  return (
    <div>
      <StyledHeadline2>Test Result</StyledHeadline2>
      <StyledCardList>
        {parsedData ? (
          parsedData.map((dog) => (
            <div key={dog._id}>
              <ListCard
                name={dog.name}
                img={dog.image_link}
                breedID={dog._id}
              />
            </div>
          ))
        ) : (
          <p>No favorites yet.</p>
        )}
      </StyledCardList>
    </div>
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

const StyledHeadlineHeart = styled(AiOutlineHeart)`
  margin-right: 10px;
  color: red;
`;

const StyledCardList = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  max-width: 800px;
  gap: 20px;
  margin-top: 20px;
  margin-bottom: 60px;

  @media (min-width: 768px) {
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: center;
    width: 100%;
    max-width: 1300px;
    margin-top: 70px;
  }
  }
`;
