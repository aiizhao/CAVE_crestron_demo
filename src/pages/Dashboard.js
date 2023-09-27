import React, { useState } from "react";
import { IconButton, Typography } from '@mui/material';
import RefreshIcon from '@mui/icons-material/Refresh';

import ControlBox from "../modules/ControlBox";

const styles = {
  refreshButton: {
    backgroundColor: 'primary.dark',
    borderRadius: 2,
    margin: 1,
    width: 30,
    height: 30,
    color: 'white',
  },
  text: {
    margin: 1,
    fontFamily: 'Arial',
    fontSize: 30,
    color: 'primary.dark',
  }
}

const Dashboard = () => {
  const [checked, setChecked] = useState(Array(12).fill(true))
  const ports = ['5000', '5001']

  const refreshPage = () => {
    window.location.reload(false);
  }
  
  return (<>
    <Typography sx={styles.text}>
      DASHBOARD
      <IconButton onClick={refreshPage} sx={styles.refreshButton}> 
        <RefreshIcon /> 
      </IconButton>
    </Typography>

    <ControlBox serverNum={0} port={ports[0]} checked={checked} setChecked={setChecked}/>
    <ControlBox serverNum={1} port={ports[1]} checked={checked} setChecked={setChecked}/>
  </>);
};

export default Dashboard;
