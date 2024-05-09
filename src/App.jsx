import { useState } from "react";
import { styled } from "styled-components";

import GlobalStyles from "./components/GlobalStyles/GlobalStyles";
import Header from "./components/Header/Header";
import Sidebar from "./components/Sidebar/Sidebar";
import Banner from "./components/Banner/Banner";
import bannerBackground from "./assets/banner.png";
import Gallery from "./components/Gallery/Gallery";

import photos from "./fotos.json";
import ModalZoom from "./components/ModalZoom/ModalZoom";

const FundoGradiente = styled.div`
  background: linear-gradient(
    174.61deg,
    #041833 4.16%,
    #04244f 48%,
    #154580 96.76%
  );
  min-height: 100vh;

  width: 100%;
`;
const AppContainer = styled.div`
  margin: 0 auto;
  max-width: 100%;

  width: 1440px;
`;

const MainContainer = styled.main`
  display: flex;
  gap: 24px;
`;

const ContentGallery = styled.section`
  display: flex;
  flex-grow: 1;
  flex-direction: column;
`;

function App() {
  const [galleryPhotos, setGalleryPhotos] = useState(photos);
  const [photoSelected, setphotoSelected] = useState(null);
  return (
    <FundoGradiente>
      <GlobalStyles />
      <AppContainer>
        <Header />
        <MainContainer>
          <Sidebar />
          <ContentGallery>
            <Banner
              text="A galeria mais completa de fotos do espaço!"
              backgroundImage={bannerBackground}
            />
            <Gallery photoSelected={photo => setphotoSelected(photo)} photos={galleryPhotos} />
          </ContentGallery>
        </MainContainer>
      </AppContainer>
      <ModalZoom photo={photoSelected} />
    </FundoGradiente>
  );
}

export default App;
