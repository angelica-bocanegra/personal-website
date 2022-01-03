// @flow
import * as React from 'react';
import {
  Box,
  Typography,
} from '@mui/material';

import MemoryGame from './MemoryGame';
import Footer from './Footer';

const App = (): React.Node => (
  <Box sx={{ position: 'relative', minHeight: '100vh' }}>
    <Box style={{ paddingBottom: '100px' }}>
      <Typography
        variant="h1"
        align="center"
      >
        {'Hello, I\'m Angelica'}
      </Typography>
      <MemoryGame />
    </Box>
    <Footer />
  </Box>
);

export default App;
