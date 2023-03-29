import styled from "styled-components";
import FilterButton from "../FilterButton";
import { useRef, useState, useEffect } from "react";
import { buttons } from "../../utils/data/buttons";

export default function FilterButtoonSection() {
  const [activeButtonId, setActiveButtonId] = useState({ id: 1 });

  return (
    <StyledWrapper>
      <StyledFilterButtonSection>
        {buttons &&
          buttons.map((type) => (
            <FilterButton
              key={type.id}
              value={type.value}
              text={type.name}
              isactive={type.id === activeButtonId.id ? true : false}
              id={type.id}
              setActive={setActiveButtonId}
            />
          ))}
      </StyledFilterButtonSection>
    </StyledWrapper>
  );
}

const StyledWrapper = styled.div`
  position: fixed;
  display: flex;
  flex-direction: row;
  align-items: center;
  width: 100%;
  gap: 20px;
  padding: 0 10px 8px;
  background-color: #f5f5f5;
  z-index: 1;
`;

const StyledFilterButtonSection = styled.section`
  display: flex;
  flex-wrap: nowrap;
  overflow: scroll;
  scrollbar-width: none;
  white-space: nowrap;
  -webkit-overflow-scrolling: touch;
  -ms-overflow-style: none;
  &::-webkit-scrollbar {
    display: none;
  }

  width: 90%;
  max-width: 400px;
  gap: 10px;
  scrollbar-width: none;
  margin: auto;
  padding: 2px;
  background-color: #f5f5f5;
  z-index: 1;
`;
