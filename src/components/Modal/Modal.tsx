import { FC, memo, ReactElement } from "react";
import { CloseButton, ModalContainer, Overlay } from "./style";

export interface ModalProps {
  isModalOpen: boolean;
  modalContent: ReactElement;
  handleClose: any;
}

export const Modal: FC<ModalProps> = memo(
  ({ isModalOpen, modalContent, handleClose }) => {
    if (!isModalOpen) return null;

    return (
      <Overlay onClick={handleClose}>
        <ModalContainer onClick={(e) => e.stopPropagation()}>
          <CloseButton onClick={handleClose}>&times;</CloseButton>
          {modalContent}
        </ModalContainer>
      </Overlay>
    );
  }
);
