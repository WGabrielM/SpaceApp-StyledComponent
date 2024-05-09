import styled from "styled-components";

import Title from "../Title/Title";
import Tags from "./Tags/Tags";
import Popular from "./Popular/Popular";
import Image from "./Image/Image";

const GalleryContainer = styled.div`
  display: flex;
`;

const SectionFluid = styled.section`
  flex-grow: 1;
`;

const ImageContainer = styled.section`
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  gap: 24px;
`;

export default function Gallery({ photos = [], photoSelected }) {
  return (
    <>
      <Tags />
      <GalleryContainer>
        <SectionFluid>
          <Title> Navegue pela galeria</Title>
          <ImageContainer>
            {photos.map((photo) => (
              <Image key={photo.id} photo={photo} zoomRequest={photoSelected} />
            ))}
          </ImageContainer>
        </SectionFluid>
        <Popular />
      </GalleryContainer>
    </>
  );
}
