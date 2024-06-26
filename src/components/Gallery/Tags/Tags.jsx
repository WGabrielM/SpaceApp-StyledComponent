import styled from "styled-components";
import React from "react";
import tags from "./tags.json";

const BarTag = styled.section`
  display: flex;
  align-items: center;
  gap: 64px;
  margin-top: 56px;
`;

const TagTitulo = styled.h3`
  color: #d9d9d9;
  font-size: 24px;
  margin: 0;
`;

const Tag = styled.button`
  cursor: pointer;
  font-size: 24px;
  color: #ffffff;
  border-radius: 10px;
  box-sizing: border-box;
  border: 2px solid transparent;
  background: rgba(217, 217, 217, 0.3);
  transition: background-color 0.3s ease;

  padding: 12px;

  &:hover {
    border-color: #c98cf1;
  }
`;

const Div = styled.div`
  display: flex;
  gap: 24px;
  justify-content: end;
`;

export default function Tags({ setTag }) {
  return (
    <BarTag>
      <TagTitulo>Busque por tags:</TagTitulo>
      <Div>
        {tags.map((tag) => (
          <Tag key={tag.id} onClick={() => setTag(tag.tag)}>{tag.titulo}</Tag>
        ))}
      </Div>
    </BarTag>
  );
}
