import React, { useMemo, useState } from 'react'
import './App.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import { CssBaseline, Switch, useMediaQuery } from '@mui/material'
import { createTheme, ThemeProvider } from '@mui/material/styles'
import AddWeight from './pages/AddWeight'

function App() {
  const prefersDarkMode = useMediaQuery('(prefers-color-scheme: dark)')
  const themeString = (b: boolean) => (b ? 'dark' : 'light')

  const theme = useMemo(
    () =>
      createTheme({
        palette: {
          mode: themeString(prefersDarkMode),
        },
      }),
    [prefersDarkMode],
  )

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <div className="App">
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Home text="Hello" />} />
            <Route path="/weight" element={<AddWeight />} />
          </Routes>
        </BrowserRouter>
      </div>
    </ThemeProvider>
  )
}

export default App
