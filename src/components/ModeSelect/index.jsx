import React from 'react'
import Button from '@mui/material/Button'
import {
  Experimental_CssVarsProvider as CssVarsProvider,
  useColorScheme
} from '@mui/material/styles'
import InputLabel from '@mui/material/InputLabel'
import MenuItem from '@mui/material/MenuItem'
import FormControl from '@mui/material/FormControl'
import Select from '@mui/material/Select'
import LightModeIcon from '@mui/icons-material/LightMode'
import DarkModeIcon from '@mui/icons-material/DarkMode'
import SettingsBrightnessIcon from '@mui/icons-material/SettingsBrightness'
import Box from '@mui/material/Box'

function index() {
  const { mode, setMode } = useColorScheme()
  const handleChange = (event) => {
    setMode(event.target.value)
  }

  return (
    <FormControl sx={{ minWidth: 120 }} size="small">
      <InputLabel
        sx={{
          color: 'white',
          '&.Mui-focused': {
            color: 'white'
          }
        }}
        id="label-select-small-label"
      >
        Mode
      </InputLabel>
      <Select
        labelId="label-select-small-label"
        id="label-select-small"
        value={mode}
        label="Theme"
        onChange={handleChange}
        sx={{
          color: 'white',
          '.MuiOutlinedInput-notchedOutline': {
            borderColor: 'white'
          },
          '&:hover .MuiOutlinedInput-notchedOutline': {
            borderColor: 'white'
          },
          '&.Mui-focused .MuiOutlinedInput-notchedOutline': {
            borderColor: 'white'
          },
          '.MuiSvgIcon-root': {
            color: 'white'
          }
        }}
      >
        <MenuItem value="system">
          <Box display={'flex'} gap={1} alignItems={'center'}>
            <SettingsBrightnessIcon fontSize="small" />
            System
          </Box>
        </MenuItem>
        <MenuItem value={'light'}>
          <Box display={'flex'} gap={1} alignItems={'center'}>
            <LightModeIcon fontSize="small" />
            Light
          </Box>
        </MenuItem>
        <MenuItem value={'dark'}>
          <Box display={'flex'} gap={1} alignItems={'center'}>
            <DarkModeIcon fontSize="small" />
            Dark
          </Box>
        </MenuItem>
      </Select>
    </FormControl>
  )
}

export default index
