import styled from "styled-components";
import Image from "../Gallery/Image/Image";
import ButtonIcon from "../ButtonIcon/ButtonIcon";

const Overlay = styled.div`
  background-color: rgba(0, 0, 0, 0.7);

  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
`;

const DialogStyled = styled.dialog`
  display: flex;
  justify-content: center;
  background: transparent;

  border: 0;

  position: absolute;
  top: 294px;

  padding: 0;

  width: 1156px;

  form {
    button {
      position: relative;
      top: 20px;
      right: 60px;
    }
  }
`;

export default function ModalZoom({ photo, onChangeClose, onChangeFavorite }) {
  return (
    <>
      {photo && (
        <>
          <Overlay />
          <DialogStyled open={!!photo} onClose={onChangeClose}>
            <Image photo={photo} expand={true} onChangeFavorite={onChangeFavorite} />
            <form method="dialog">
              <ButtonIcon formMethod="dialog">
                <img src="/images/icon/close.png" alt="" />
              </ButtonIcon>
            </form>
          </DialogStyled>
        </>
      )}
    </>
  );
}
