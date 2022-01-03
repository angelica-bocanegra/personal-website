import * as React from 'react';
import { render, screen } from '@testing-library/react';

import App from '.';

describe('<App />', () => {
  it('renders correctly', () => {
    render(<App />);

    expect(screen.getByTestId('container')).toBeDefined();
  });
});
