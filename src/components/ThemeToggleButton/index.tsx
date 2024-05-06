import { Box, IconButton, createTheme } from '@mui/material'
import Brightness4Icon from '@mui/icons-material/Brightness4'
import Brightness7Icon from '@mui/icons-material/Brightness7'
import { PropaneSharp } from '@mui/icons-material'
import React from 'react'

export type ThemeToggleButtonProps = {
  ColorModeContext: React.Context<{ toggleColorMode: () => void }>
}

const ThemeToggleButton = (props: ThemeToggleButtonProps) => {
  const theme = createTheme()
  const {
    ColorModeContext = React.createContext({ toggleColorMode: () => {} }),
  } = props
  const colorMode = React.useContext(ColorModeContext)
  return (
    <Box
      sx={{
        display: 'flex',
        width: '100%',
        alignItems: 'center',
        justifyContent: 'center',
        bgcolor: 'background.default',
        color: 'text.primary',
        borderRadius: 1,
        p: 3,
      }}
    >
      {theme.palette.mode} mode
      <IconButton
        sx={{ ml: 1 }}
        onClick={colorMode.toggleColorMode}
        color="inherit"
      >
        {theme.palette.mode === 'dark' ? (
          <Brightness7Icon />
        ) : (
          <Brightness4Icon />
        )}
      </IconButton>
    </Box>
  )
}

export default ThemeToggleButton
