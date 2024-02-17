import Catalog from '../../features/catalog/Catalog.tsx';
import {
  Container,
  CssBaseline,
  ThemeProvider,
  createTheme,
} from '@mui/material';
import Header from './Header.tsx';
import { useState } from 'react';

export default function App() {
  const [darkMode, setDarkMode] = useState(false);

  const paletteType = darkMode ? 'dark' : 'light';
  const theme = createTheme({
    palette: {
      mode: paletteType,
    },
  });

  const changeTheme = function () {
    setDarkMode((prev) => !prev);
  };

  return (
    <ThemeProvider theme={theme}>
      <div className="app">
        <CssBaseline />
        <Header darkMode={darkMode} changeTheme={changeTheme} />
        <Container>
          <Catalog />
        </Container>
      </div>
    </ThemeProvider>
  );
}
