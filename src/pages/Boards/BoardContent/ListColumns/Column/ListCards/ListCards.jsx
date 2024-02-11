import React from 'react'
import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'

import Button from '@mui/material/Button'
import Menu from '@mui/material/Menu'
import MenuItem from '@mui/material/MenuItem'
import ListItemText from '@mui/material/ListItemText'
import ListItemIcon from '@mui/material/ListItemIcon'
import ContentCut from '@mui/icons-material/ContentCut'
import ContentCopy from '@mui/icons-material/ContentCopy'
import ContentPaste from '@mui/icons-material/ContentPaste'
import Cloud from '@mui/icons-material/Cloud'
import Divider from '@mui/material/Divider'
import ExpandMoreIcon from '@mui/icons-material/ExpandMore'
import { useState } from 'react'
import Tooltip from '@mui/material/Tooltip'
import DeleteForeverIcon from '@mui/icons-material/DeleteForever'
import AddCardIcon from '@mui/icons-material/AddCard'
import DragHandleIcon from '@mui/icons-material/DragHandle'
import Card from './Card/Card'
const ListCards = () => {
  const COLUMN_HEADER_HEIGHT = '58px'
  const COLUMN_FOOTER_HEIGHT = '60px'
  return (
    <Box
      sx={{
        p: '0 5px',
        m: '0 5px',
        maxHeight: (theme) =>
          `calc(${theme.trello.BoardContentHeight} -
                    ${theme.spacing(5)} -
                    ${COLUMN_HEADER_HEIGHT} -
                    ${COLUMN_FOOTER_HEIGHT}
                  )`,
        display: 'flex',
        flexDirection: 'column',
        gap: 1,
        overflowX: 'hidden',
        overflowY: 'auto',
        '&::-webkit-scrollbar-thumb': {
          background: ' #ced0da',
          borderRadius: '8px'
        },
        '&::-webkit-scrollbar-thumb:hover': {
          background: '#bfc2cf'
        }
      }}
    >
      <Card />
    </Box>
  )
}

export default ListCards
