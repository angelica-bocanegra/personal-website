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
      padding: '12px',
      textAlign: 'center',
    },
    image: {
      borderRadius: '100%',
      width: '24px',
      padding: '8px',
      marginRight: 'auto',
      backgroundColor: '#20221C',
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
        <Typography sx={{ mt: 2 }}>
          {variant.title}
        </Typography>
        <Typography sx={{ mt: 2 }}>
          {variant.body}
        </Typography>
        <Link href={variant.link} sx={{ mt: 2 }} target="_blank">
          {variant.link}
        </Link>
      </Box>
    </Modal>
  );
};

export default SuccessModal;
