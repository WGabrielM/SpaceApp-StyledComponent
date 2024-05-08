import styled from "styled-components";

import Title from "../Title/Title";
import Tags from "./Tags/Tags";
import Popular from "./Popular/Popular";

const GalleryContainer = styled.div`
  display: flex;
`;

const SectionFluid = styled.section`
  flex-grow: 1;
`;

export default function Gallery() {
  return (
    <>
      <Tags />
      <GalleryContainer>
        <SectionFluid>
          <Title> Navegue pela galeria</Title>
        </SectionFluid>
        <Popular />
      </GalleryContainer>
    </>
  );
}
