import Slider from "rc-slider";
import "rc-slider/assets/index.css";
import styled from "styled-components";

export default function AnswerSlider({ value, handleValue, showHandle }) {
  console.log(showHandle);
  console.log(value);
  console.log(handleValue);

  return (
    <StyledSliderWrapper>
      <StyledSlider
        min={1}
        max={100}
        defaultValue={value}
        value={value}
        onChange={(value) => {
          handleValue(value);
        }}
      />

      {showHandle && <StyledHandle value={value}>{value}%</StyledHandle>}
    </StyledSliderWrapper>
  );
}

const StyledSliderWrapper = styled.div`
  position: relative;
  width: 80%;
  margin: 40px auto 20px;
`;

const StyledSlider = styled(Slider)`
  .rc-slider-rail {
    background-color: #e6e6e6;
    height: 24px;
    border-radius: 12px;
  }

  .rc-slider-track {
    background: rgb(11, 4, 131);
    background: linear-gradient(
      101deg,
      rgba(11, 4, 131, 1) 0%,
      rgba(40, 32, 201, 1) 10%,
      rgba(0, 212, 255, 1) 100%
    );
    height: 24px;
    border-radius: 12px;

    &:after {
      content: "Text im Track";
      position: absolute;
      left: 0;
      color: #ffffff;
      font-size: 10px;
      font-weight: 200;
      line-height: 24px;
      padding: 0 8px;
      white-space: nowrap;
    }
  }

  .rc-slider-handle {
    background-color: #ffffff;
    color: white;
    width: 24px;
    height: 24px;
    margin-top: 0;
    opacity: 1;
    box-shadow: 0 0 0 1px #e6e6e6;
    z-index: 2;
  }
`;

const StyledHandle = styled.div`
  background: rgb(55, 66, 250);
  background: radial-gradient(
    circle,
    rgba(55, 66, 250, 1) 0%,
    rgba(55, 66, 250, 1) 41%,
    rgba(0, 212, 255, 1) 72%
  );
  color: #ffffff;
  position: absolute;
  top: -40px;
  left: ${({ value }) => `calc(${((value - 1) / 99) * 100}% - 18px)`};
  width: 32px;
  height: 32px;
  border-radius: 50%;
  line-height: 32px;
  text-align: center;
  font-size: 10px;
  white-space: nowrap;
  z-index: 1;
`;
