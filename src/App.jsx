import { useEffect, useState } from "react";
import { styled } from "styled-components";

import GlobalStyles from "./components/GlobalStyles/GlobalStyles";
import Header from "./components/Header/Header";
import Sidebar from "./components/Sidebar/Sidebar";
import Banner from "./components/Banner/Banner";
import bannerBackground from "./assets/banner.png";
import Gallery from "./components/Gallery/Gallery";

import photos from "./fotos.json";
import ModalZoom from "./components/ModalZoom/ModalZoom";
import Footer from "./components/Footer/Footer";

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
  const [photoSelected, setPhotoSelected] = useState(null);
  const [filter, setFilter] = useState("");
  const [tag, setTag] = useState(0);
  const [photoWithZoom, setPhotoWithZoom] = useState(null);

  useEffect(() => {
    const filteredPhotos = photos.filter((photo) => {
      const filterByTag = !tag || photo.tagId === tag;

      const filterByTitle =
        !filter || photo.titulo.toLowerCase().includes(filter.toLowerCase());

      return filterByTag && filterByTitle;
    });

    setGalleryPhotos(filteredPhotos);
  }, [filter, tag]);

  const onChangeFavorite = (photo) => {

    if (photo.id === photoWithZoom?.id) {
      setPhotoWithZoom({
        ...photoWithZoom,
        favorite: !photoWithZoom.favorite
      })
    }

    setGalleryPhotos(
      galleryPhotos.map((galleryPhoto) => {
        return {
          ...galleryPhoto,
          favorite:
            galleryPhoto.id === photo.id
              ? !photo.favorite
              : galleryPhoto.favorite,
        };
      })
    );
  };

  return (
    <FundoGradiente>
      <GlobalStyles />
      <AppContainer>
        <Header filter={filter} setFilter={setFilter} />
        <MainContainer>
          <Sidebar />
          <ContentGallery>
            <Banner
              text="A galeria mais completa de fotos do espaço!"
              backgroundImage={bannerBackground}
            />
            <Gallery
              photoSelected={(photo) => setPhotoSelected(photo)}
              photos={galleryPhotos}
              onChangeFavorite={onChangeFavorite}
              setTag={setTag}
            />
          </ContentGallery>
        </MainContainer>
      </AppContainer>
      <ModalZoom
        photo={photoWithZoom}
        onChangeClose={() => setPhotoSelected(null)}
        onChangeFavorite={onChangeFavorite}
      />
      <Footer />
    </FundoGradiente>
  );
}

export default App;
