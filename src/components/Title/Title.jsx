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
`;

const StyledTitle = styled.h1`
    font-size: 40px;
    color: #FFFFFF;
    max-width: 300px;
    font-weight: 400;
    line-height: 48px;

    padding: 0 64px;
`


export default function Title({text, backgroundImage}) {
    return (<StyledFigure $backgroundImage={backgroundImage}>
        <StyledTitle>{text}</StyledTitle>
    </StyledFigure>)
}
