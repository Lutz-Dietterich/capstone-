import ListCard from "../../components/ListCard";
import styled from "styled-components";
import LoadingSpinner from "../../components/LoadingSpinner";
import { useContext, useEffect, useState } from "react";
import { Test } from "../_app";
import Link from "next/link";

export default function ResultPage() {
  const { testComplete, handleTest, testData } = useContext(Test);
  const [parsedData, setParsedData] = useState(testData);

  useEffect(() => {
    const data = JSON.parse(localStorage.getItem("parsedData"));
    setParsedData(data);
  }, []);

  if (!parsedData) {
    return <LoadingSpinner />;
  }

  return (
    <div>
      <StyledHeadline2>Test Result</StyledHeadline2>
      <StyledLink href={"/personalityTest/1"}>
        <button onClick={() => handleTest(false)}>Retake Test</button>
      </StyledLink>
      <StyledCardList>
        {parsedData ? (
          parsedData.map((dog) => (
            <div key={dog._id}>
              <ListCard
                name={dog.name}
                img={dog.image_link}
                breedID={dog._id}
                resultData={parsedData}
              />
            </div>
          ))
        ) : (
          <p>No results yet.</p>
        )}
      </StyledCardList>
    </div>
  );
}

const StyledLink = styled(Link)`
  text-decoration: none;
  display: flex;
  justify-content: center;
`;

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
