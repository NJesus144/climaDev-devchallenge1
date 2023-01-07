import styled from "styled-components";

import BackgroundImageWithChildren from "../src/components/layout/backgroundImageWithChildren/BackgroundImageWithChildren";

const StyledDiv = styled.div`
  background-color: ${(props) => props.theme.colors.black};
`;

export default function HomePage() {
  return (
    <BackgroundImageWithChildren>
      <StyledDiv>Página Inicial</StyledDiv>
    </BackgroundImageWithChildren>
  );
}
