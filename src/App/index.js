// @flow
import * as React from 'react';
import {
  Box,
  Typography,
} from '@mui/material';

import MemoryGame from './MemoryGame';
import Footer from './Footer';

const App = (): React.Node => (
  <Box>
    <Typography
      variant="h1"
      align="center"
    >
      Hello... my name is Angelica
    </Typography>
    <MemoryGame />
    <Footer />
  </Box>
);

export default App;
