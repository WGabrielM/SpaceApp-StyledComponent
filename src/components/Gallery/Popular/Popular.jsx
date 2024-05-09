import styled from "styled-components";
import Title from "../../Title/Title";

import photos  from "./photos-popular.json"

const ColumnPhotos = styled.section`
  display: flex;
  flex-direction: column;
  gap: 16px;
`;

const Image = styled.img`
  max-width: 212px;
  border-radius: 20px;
`;

const Button = styled.button`
  color: #fff;
  cursor: pointer;
  font-size: 20px;
  border: 2px solid;
  padding: 12px 20px;
  border-radius: 10px;
  border-color: #c98cf1;
  background-color: transparent;

  margin-top: 16px;

  width: 100%;
`;

export default function Popular() {
  return (
    <section>
      <Title $alignment="center">Populares</Title>
      <ColumnPhotos>
        {photos.map((photo) => (
          <Image key={photo.id} src={photo.path} alt={photo.alt} />
        ))}
      </ColumnPhotos>
      <Button>Ver mais</Button>
    </section>
  );
}
