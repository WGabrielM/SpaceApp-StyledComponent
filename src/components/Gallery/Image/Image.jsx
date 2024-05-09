import styled from "styled-components";
import ButtonIcon from "../../ButtonIcon/ButtonIcon"

const Figure = styled.figure`
  width: ${(props) => (props.$expand ? "90%" : "460px")};
  max-width: 100%;
  margin: 0;
  display: flex;
  flex-direction: column;
  & > img {
    max-width: 100%;
    border-radius: 20px 20px 0 0;
  }
  figcaption {
    background-color: #001634;
    border-radius: 0px 0px 20px 20px;
    color: white;
    box-sizing: border-box;
    padding: 12px;
    h3 {
      font-family: "GandhiSansBold";
    }
    h4 {
      flex-grow: 1;
    }
    h3,
    h4 {
      margin: 0;
      font-size: 16px;
    }
  }
`;

const Footer = styled.footer`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export default function Image({ photo, expand = false, handleZoomRequest }) {
  return (
    <Figure $expand={expand} id={`fogo-${photo.id}`}>
      <img src={photo.path} alt={photo.alt} />
      <figcaption>
        <h3>{photo.titulo}</h3>
        <Footer>
          <h4>{photo.fonte}</h4>
          <ButtonIcon>
            <img src="images/icon/favorite.png" alt="Icone de favorito" />
          </ButtonIcon>
          {!expand && (
            <ButtonIcon aria-hidden={expand} onClick={() => handleZoomRequest(photo)}>
              <img src="images/icon/expand.png" alt="Icone de expandir" />
            </ButtonIcon>
          )}
        </Footer>
      </figcaption>
    </Figure>
  );
}
