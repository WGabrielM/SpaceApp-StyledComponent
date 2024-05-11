import styled from "styled-components";
import search from "./search.png";

const ContainerStyled = styled.div`
  display: inline-block;

  position: relative;
`;

const TextFiedlStyled = styled.input`
  font-size: 20px;
  color: #d9d9d9;
  font-weight: 400;
  line-height: 20px;
  border: 2px solid;
  border-radius: 10px;
  box-sizing: border-box;
  background: transparent;
  border-color: #c98cf1;

  padding: 12px 16px;

  height: 56px;
  width: 566px;
`;

const IconLoupe = styled.img`
  position: absolute;

  top: 10px;
  right: 10px;

  height: 38px;
  width: 38px;
`;

export default function TextField({ filter, setFilter }) {
  return (
    <ContainerStyled>
      <TextFiedlStyled
        onChange={(event) => {
          setFilter(event.target.value);
        }}
        type="text"
        placeholder="O que você procura?"
      />
      <IconLoupe src={search} alt="ícone de lupa" />
    </ContainerStyled>
  );
}
