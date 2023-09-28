import DeselectIcon from '@mui/icons-material/Deselect'
import RefreshIcon from '@mui/icons-material/Refresh'
import { Box, IconButton, Grid } from '@mui/material'
import React, { useState } from 'react'

import ControlBox from '../modules/ControlBox'

const styles = {
  button: {
    color: 'white',
    width: 30,
    height: 30,
    margin: 1,
    borderRadius: 2,
    backgroundColor: (theme) => theme.palette.primary.background,
  },
  header: {
    color: (theme) => theme.palette.primary.background,
    justifyContent: 'center',
    alignItems: 'center',
    display: 'flex',
    margin: 1,
    fontSize: 30,
    fontFamily: 'Roboto',
  },
  grid: {
    display: 'flex',
    flexDirection: 'row',
  },
  gridContainer: {
    display: 'flex',
    flexDirection: 'column',
  },
}

const Dashboard = ({ width, height, addr, ports }) => {
  const [checked, setChecked] = useState(Array(width * height).fill(true))

  const mapRow = (row) => {
    return ports.slice(row * width, (row + 1) * width).map((port, i) => {
      return (
        <ControlBox
          key={i}
          serverNum={row * width + i}
          addr={addr}
          port={port}
          checked={checked}
          setChecked={setChecked}
        />
      )
    })
  }

  const mapGrid = () => {
    const grid = []
    for (let row = 0; row < height; row++) {
      grid.push(
        <Grid item sx={styles.grid} xs={4}>
          {mapRow(row)}
        </Grid>,
      )
    }
    return grid
  }

  return (
    <>
      <Box sx={styles.header}>
        <IconButton
          onClick={() => window.location.reload(false)}
          sx={styles.button}
        >
          <RefreshIcon />
        </IconButton>
        <IconButton
          onClick={() => setChecked(checked.fill(false))}
          sx={styles.button}
        >
          <DeselectIcon />
        </IconButton>
      </Box>

      <Grid container sx={styles.gridContainer}>
        {mapGrid()}
      </Grid>
    </>
  )
}

export default Dashboard
