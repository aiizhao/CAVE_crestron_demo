import {
  Route,
  Routes,
} from 'react-router-dom';
import { Box, ThemeProvider } from '@mui/material';

import theme from "./theme";
import Dashboard from "./pages/Dashboard";

const style = {
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center',
  width: '100w',
  height: '100vh',
}

const App = () => {
  const addr = 'http://127.0.0.1:'
  const ports = ['5000', '5001', '5002', '5003', '5004', '5005', '5006', '5007', '5008', '5009', '5010', '5011']
  return (
    <Box sx={style}>
      <ThemeProvider theme={theme}>
        <Box>
          <Routes>
            <Route path="/" element={<Dashboard width={4} height={3} addr={addr} ports={ports} />} />
          </Routes>
        </Box>
      </ThemeProvider>
    </Box>
  );
}

export default App;
