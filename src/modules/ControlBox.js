import React, { useEffect, useState } from "react";
import {Box, Checkbox, Switch, Typography} from '@mui/material';

const style = {
  width: 150,
  height: 150,
  backgroundColor: 'primary.light',
  borderRadius: 2,
  margin: 1,
  justifyContent: 'center',
  alignItems: 'center',
  display: 'flex',
  flexDirection: 'column',
}

const ControlBox = ({ serverNum, port, checked, setChecked }) => {
  const [health, setHealth] = useState(0)
  const [toggle, setToggle] = useState(false)

  const addr = '127.0.0.1'

  useEffect(() => {
    fetch('http://' + addr + ':' + port + '/health', { credentials: 'include' })
      .then(response => response.text())
      .then(responseText => setHealth(responseText))
      .catch(error => console.log('Error getting health'))
  }, [port]);

  useEffect(() => {
    fetch('http://' + addr + ':' + port + '/toggle/false', { credentials: 'include' })
    .then(response => response.text())
      .then(responseText => setToggle(responseText === 'True'))
      .catch(error => console.log('Error getting toggle state'))
  }, [port]);

  const handleToggle = () => {
    fetch('http://' + addr + ':' + port + '/toggle/true', { credentials: 'include' })
    .then(responseText => setToggle(!toggle))
    .catch(error => console.log('Error updating toggle state'))
  }

  const handleCheck = () => {
    setChecked(checked.map((checkState, i) => i === serverNum ? !checkState : checkState))
  }

  return (<>
    <Box
      sx={style}
    >
      <Typography> 
        PORT {port} 
        <Checkbox checked={checked[serverNum]} onChange={handleCheck} />
      </Typography>
      <Typography> 
        Status: 
        <Switch checked={toggle} onChange={handleToggle} enabled={checked} /> 
      </Typography>
      <Typography> 
        Health: {health} 
      </Typography>
    </Box>
  </>);
};

export default ControlBox;