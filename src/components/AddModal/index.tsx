import Modal from '@mui/material/Modal';
import CloseIcon from '@mui/icons-material/Close';

import {
  StyledButton,
  StyledContainer,
  StyledContainerBottom,
  StyledContainerTop,
  StyledHeaderContainer,
  StyledHeading,
  StyledMessage,
} from './styles';
import Input from 'src/sharedComponents/Input';
import { useState } from 'react';

interface ModalProps {
  isOpen: boolean;
  onRequestClose: () => void;
  onSave: (eventKey: string, eventValue: string) => void;
  title: string;
  message?: string;
}

const AddModal: React.FC<ModalProps> = ({ isOpen, onRequestClose, onSave, title, message }) => {
  const [eventKey, setEventKey] = useState('');
  const [eventValue, setEventValue] = useState('');

  const handleInputKeyChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e?.target?.value) {
      setEventKey(e.target.value);
    }
  };

  const handleInputValueChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e?.target?.value) {
      setEventValue(e.target.value);
    }
  };

  const handleSave = () => {
    onSave(eventKey, eventValue);
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
          <Input onChange={handleInputKeyChange} label='Enter the event name' />
          <Input onChange={handleInputValueChange} label='Enter the event details' />
        </StyledContainerTop>
        <StyledContainerBottom>
          <StyledButton type='button' onClick={handleSave}>
            Add
          </StyledButton>
        </StyledContainerBottom>
      </StyledContainer>
    </Modal>
  );
};

export default AddModal;
