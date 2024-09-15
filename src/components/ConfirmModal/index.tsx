import Modal from '@mui/material/Modal';
import CloseIcon from '@mui/icons-material/Close';

import {
  StyledButton,
  StyledCancelButton,
  StyledContainer,
  StyledContainerBottom,
  StyledContainerTop,
  StyledHeaderContainer,
  StyledHeading,
  StyledMessage,
} from './styles';

interface ModalProps {
  isOpen: boolean;
  onRequestClose: () => void;
  onSave: () => void;
  title: string;
  message?: string;
}

const ConfirmModal: React.FC<ModalProps> = ({ isOpen, onRequestClose, onSave, title, message }) => {
  const handleSave = () => {
    onSave();
    handleClose();
  };

  const handleClose = () => {
    onRequestClose();
  };

  return (
    <Modal
      open={isOpen}
      onClose={handleClose}
      aria-labelledby='modal-modal-title'
      aria-describedby='modal-modal-description'
    >
      <StyledContainer>
        <StyledContainerTop>
          <StyledHeaderContainer>
            <StyledHeading>{title}</StyledHeading>
            <CloseIcon onClick={handleClose} />
          </StyledHeaderContainer>
          {!!message && <StyledMessage>{message}</StyledMessage>}
        </StyledContainerTop>
        <StyledContainerBottom>
          <StyledCancelButton onClick={handleClose}>Cancel</StyledCancelButton>
          <StyledButton type='button' onClick={handleSave}>
            Continue
          </StyledButton>
        </StyledContainerBottom>
      </StyledContainer>
    </Modal>
  );
};

export default ConfirmModal;
