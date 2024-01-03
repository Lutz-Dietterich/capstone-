import styled from "styled-components";
import { keyframes } from "styled-components";

import { AiOutlineClose } from "react-icons/ai";

export default function Impressum({ handleImpressumClick }) {
  return (
    <StyledImpressumPopup>
      <StyledImpressumContent>
        <CloseButton onClick={handleImpressumClick}>
          <AiOutlineClose />
        </CloseButton>
        <h2>Impressum</h2>

        <h3>Angaben gem&auml;&szlig; &sect; 5 TMG</h3>
        <p>
          Lutz Dietterich
          <br />
          Gl&uuml;singer Weg 2<br />
          21481 Lauenburg/Elbe
        </p>

        <h3>Kontakt</h3>
        <p>
          Telefon: 015780992549
          <br />
          E-Mail: job@lutz-dietterich.de
        </p>

        <p>
          Quelle:
          <a href="https://www.e-recht24.de/impressum-generator.html">
            https://www.e-recht24.de/impressum-generator.html
          </a>
        </p>
      </StyledImpressumContent>
    </StyledImpressumPopup>
  );
}

const fadeIn = keyframes`
  from {
    height: 0;
    opacity: 0;
    background-color: rgba(0, 0, 0, 0.0);
  }

  99% {
    background-color: rgba(0, 0, 0, 0.0);
  }

  to {
    height: 100%;
    opacity: 1;
    background-color: rgba(0, 0, 0, 0.5);
  }
`;

const StyledImpressumPopup = styled.div`
  position: fixed;
  display: flex;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  justify-content: center;
  align-items: center;
  /* background-color: rgba(0, 0, 0, 0.5); */
  z-index: 1000;
  animation: ${fadeIn} 0.5s ease-in-out;
`;

const StyledImpressumContent = styled.div`
  display: flex;
  flex-direction: column;
  min-width: 500px;
  align-items: center;
  background-color: white;
  padding: 20px;
  border-radius: 5px;
  color: var(--color-text);
  line-height: 1;
  box-shadow: 0 0 0 2000px rgba(0, 0, 0, 0.5);
  z-index: 10000;

  p {
    text-align: center;
  }

  @media (max-width: 768px) {
    min-width: 300px;
    margin: 0 10px 10px 10px;
  }
`;

const CloseButton = styled.button`
  cursor: pointer;
  margin-top: 10px;
  align-self: flex-end;
  background-color: transparent;
  border: none;
  font-size: 2rem;
  font-weight: 700;
`;
