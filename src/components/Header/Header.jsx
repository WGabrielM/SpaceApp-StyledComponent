import styled from "styled-components";
import TextField from "../TextField/TextField";

const HeaderStyled = styled.header`
  display: flex;
  justify-content: space-between;
  
  padding: 60px 0;

  img {
    max-width: 212px;
  }
`;

export default function Header() {
  return (
    <HeaderStyled>
      <img src="/images/logo.svg" alt="" />
      <TextField />
    </HeaderStyled>
  );
}
