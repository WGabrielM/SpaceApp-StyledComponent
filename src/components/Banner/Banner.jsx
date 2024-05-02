import styled from "styled-components";

const StyledFigure = styled.figure`
  display: flex;
  align-items: center;

  flex-grow: 1;
  max-width: 100%;
  min-height: 328px;
  border-radius: 20px;
  background-size: cover;
  background-repeat: no-repeat;
  background-image: ${(props) => `url(${props.$backgroundImage})`};

  margin: 0;

  width: 1156px;
`;

const StyledBanner = styled.h1`
  font-size: 40px;
  color: #ffffff;
  max-width: 300px;
  font-weight: 400;
  line-height: 48px;

  padding: 0 64px;
`;

export default function Banner({ text, backgroundImage }) {
  return (
    <StyledFigure $backgroundImage={backgroundImage}>
      <StyledBanner>{text}</StyledBanner>
    </StyledFigure>
  );
}
