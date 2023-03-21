import useSWR from "swr";
import ListCard from "../ListCard";
import styled from "styled-components";

export default function CardList() {
  const { data, error } = useSWR("/api/db");
  console.log(data);

  return (
    <StyledCardList>
      {data ? (
        data.map((dog) => (
          <div key={dog.id}>
            <ListCard name={dog.name} img={dog.image_link} />
          </div>
        ))
      ) : (
        <div>Loading...</div>
      )}
    </StyledCardList>
  );
}

const StyledCardList = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  height: 100%;
  gap: 20px;
  margin-top: 20px;
`;
