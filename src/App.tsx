import React, { useMemo, useState } from 'react';
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import { CssBaseline, Switch, useMediaQuery } from '@mui/material';
import { createTheme, ThemeProvider } from '@mui/material/styles'

function App() {
  const prefersDarkMode = useMediaQuery("(prefers-color-scheme: dark)");
  const [darkMode, setDarkMode] = useState(prefersDarkMode);
  const themeString = (b: boolean) => (b ? "dark" : "light");

  const theme = useMemo(
    () =>
    createTheme({
        palette: {
          mode: themeString(darkMode)
        }
      }),
    [darkMode]
  );

  const handleSwitch = (_e: any, checked: boolean) => {
    setDarkMode(checked);
    console.log(darkMode);
  };

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
    <div className="App">
      <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home text="Hello"/>}/>
        <Route path="/ben" element={<Home text="BEN!"/>}/>
      </Routes>
      </BrowserRouter>
      <Switch
            onChange={handleSwitch}
          />
    </div>
    </ThemeProvider>
  );
}

export default App;
