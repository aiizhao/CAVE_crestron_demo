import { Box, ThemeProvider } from '@mui/material'
import { Route, Routes } from 'react-router-dom'

import Dashboard from './pages/Dashboard'
import theme from './theme'

const style = {
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center',
  width: '100w',
  height: '100vh',
}

const App = () => {
  const width = 4
  const height = 3
  const addr = 'http://127.0.0.1:'
  const ports = [...Array(width * height).keys()].map(
    (serverId) => `${5000 + serverId}`,
  )

  return (
    <Box sx={style}>
      <ThemeProvider theme={theme}>
        <Box>
          <Routes>
            <Route
              path="/"
              element={
                <Dashboard
                  width={width}
                  height={height}
                  addr={addr}
                  ports={ports}
                />
              }
            />
          </Routes>
        </Box>
      </ThemeProvider>
    </Box>
  )
}

export default App
