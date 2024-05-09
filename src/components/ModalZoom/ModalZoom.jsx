import styled from "styled-components";
import Image from "../Gallery/Image/Image";

const Overlay = styled.div`
  background-color: rgba(0, 0, 0, 0.7);

  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
`;

const DialogStyled = styled.dialog`
  position: absolute;
  top: 294px;
`;

export default function ModalZoom({ photo }) {
  return (
    <>
      {photo && (
        <>
          <Overlay />
          <DialogStyled open={!!photo}>
            <Image photo={photo} expand={true} />
            <p>Greetings, one and all!</p>
            <form method="dialog">
              <button>OK</button>
            </form>
          </DialogStyled>
        </>
      )}
    </>
  );
}
