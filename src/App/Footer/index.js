// @flow
import * as React from 'react';
import {
  Box,
} from '@mui/material';

const Footer = (): React.Node => {
  const getRandomColor = () => {
    const colors = ['#BF805F', '#B07450', '#A06740', '#676751', '#444537', '#20221C'];
    return colors[Math.floor(Math.random() * colors.length)];
  };

  const [color, setColor] = React.useState(getRandomColor());

  const styles = {
    wave: {
      width: '100%',
      position: 'absolute',
      display: 'flex',
      bottom: 0,
    },
    path: {
      transition: 'fill 0.2s ease-in-out',
    },
  };

  return (
    <Box>
      <svg style={styles.wave} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
        <path
          onMouseOver={() => setColor(getRandomColor)}
          style={styles.path}
          fill={color}
          fillOpacity="1"
          d="M0,128L80,138.7C160,149,320,171,480,181.3C640,192,800,192,960,181.3C1120,171,1280,149,1360,138.7L1440,128L1440,320L1360,320C1280,320,1120,320,960,320C800,320,640,320,480,320C320,320,160,320,80,320L0,320Z"
        />
      </svg>
    </Box>
  );
};

export default Footer;
