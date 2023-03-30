import styled from "styled-components";
import FilterButton from "../FilterButton";
import { useRef, useContext } from "react";
import { buttons } from "../../utils/data/buttons";
import { useDraggable } from "react-use-draggable-scroll";
import { Filter } from "../../pages/_app";

export default function FilterButtoonSection() {
  const { activeButtonId, setActiveButtonId } = useContext(Filter);
  const ref = useRef();
  const { events } = useDraggable(ref);

  return (
    <StyledWrapper>
      <StyledFilterButtonSection
        className="flex max-w-xl space-x-3 overflow-x-scroll scrollbar-hide"
        {...events}
        ref={ref}
      >
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
  gap: 10px;
  scrollbar-width: none;
  margin: auto;
  padding: 2px;
  background-color: #f5f5f5;
  z-index: 1;

  @media (min-width: 1480px) {
    justify-content: center;
    width: 100%;
  }
`;
