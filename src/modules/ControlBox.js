import CheckCircleIcon from '@mui/icons-material/CheckCircle'
import ErrorOutlineIcon from '@mui/icons-material/ErrorOutline'
import { Box, Checkbox, IconButton, Switch, Typography } from '@mui/material'
import React, { useEffect, useState } from 'react'

const style = {
  box: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    maxWidth: 150,
    maxHeight: 150,
    margin: 1,
    padding: 2,
    borderRadius: 3,
    backgroundColor: (theme) => theme.palette.primary.background,
  },
  text: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    fontSize: 12,
    color: (theme) => theme.palette.primary.main,
  },
  health: {
    height: 13,
    width: 90,
    marginBottom: 1,
    borderRadius: 5,
    backgroundColor: (theme) => theme.palette.primary.light,
    '& .MuiLinearProgress-bar': {
      backgroundColor: (theme) => theme.palette.primary.main,
    },
  },
}

const ControlBox = ({ serverId, addr, port, checked, setChecked }) => {
  const [health, setHealth] = useState(false)
  const [toggle, setToggle] = useState(false)

  // get health
  useEffect(() => {
    fetch(`${addr + port}/health`, { credentials: 'include' })
      .then((response) => response.text())
      .then((responseText) => setHealth(responseText === 'True'))
      .catch(() => console.log('Error getting health'))
  }, [addr, port])

  // get toggle state
  useEffect(() => {
    fetch(`${addr + port}/toggle/false`, { credentials: 'include' })
      .then((response) => response.text())
      .then((responseText) => setToggle(responseText === 'True'))
      .catch(() => console.log('Error getting toggle state'))
  }, [addr, port])

  // flip toggle state
  const handleToggle = () => {
    fetch(`${addr + port}/toggle/true`, { credentials: 'include' })
      .then(() => setToggle(!toggle))
      .catch(() => console.log('Error updating toggle state'))
  }

  const handleCheck = () => {
    setChecked(
      checked.map((checkState, i) =>
        i === serverId ? !checkState : checkState,
      ),
    )
  }

  return (
    <Box
      sx={{ ...style.box, ...{ opacity: checked[serverId] ? '100%' : '50%' } }}
    >
      <Typography sx={style.text}>
        Port {port}
        <Checkbox checked={checked[serverId]} onChange={handleCheck} />
      </Typography>
      <Typography sx={style.text}>
        Toggle:
        <Switch
          checked={toggle}
          onChange={handleToggle}
          disabled={!checked[serverId]}
        />
      </Typography>
      <Typography sx={style.text}>
        Health:
        <IconButton>
          {' '}
          {health ? <CheckCircleIcon /> : <ErrorOutlineIcon />}{' '}
        </IconButton>
      </Typography>
    </Box>
  )
}

export default ControlBox
