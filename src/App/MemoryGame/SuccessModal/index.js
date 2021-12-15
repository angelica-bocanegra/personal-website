// @flow
import * as React from 'react';
import {
  Box,
  IconButton,
  Link,
  Modal,
  Typography,
} from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';

type Props = {
  handleClose: () => void,
  variant: any,
};

const SuccessModal = ({
  handleClose,
  variant,
}: Props): React.Node => {
  const styles = {
    modal: {
      maxWidth: '500px',
      position: 'absolute',
      top: '50%',
      left: '50%',
      background: '#FFF3EB',
      transform: 'translate(-50%, -50%)',
      padding: '16px',
      textAlign: 'center',
    },
    image: {
      borderRadius: '100%',
      width: '40px',
      padding: '4px',
      marginRight: 'auto',
      backgroundColor: '#676751',
    },
    icon: {
      position: 'absolute',
      right: '4px',
      top: '4px',
    },
  };

  return (
    <Modal
      data-testid={`${variant}-success-modal`}
      onClose={handleClose}
      open
    >
      <Box sx={styles.modal}>
        <IconButton
          sx={styles.icon}
          onClick={handleClose}
        >
          <CloseIcon />
        </IconButton>
        <img
          src={variant.src}
          alt={variant.alt}
          style={styles.image}
        />
        <Typography variant="h6">{variant.title}</Typography>
        <Typography>{variant.body}</Typography>
        <Link href={variant.link.includes('@') ? `mailto:${variant.link}` : variant.link} sx={{ m: 2 }} target="_blank">
          {variant.link}
        </Link>
      </Box>
    </Modal>
  );
};

export default SuccessModal;
