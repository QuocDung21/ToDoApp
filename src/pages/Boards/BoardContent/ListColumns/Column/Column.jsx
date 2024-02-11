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
import Card from '@mui/material/Card'
import CardActions from '@mui/material/CardActions'
import CardContent from '@mui/material/CardContent'
import CardMedia from '@mui/material/CardMedia'
import SupervisorAccountIcon from '@mui/icons-material/SupervisorAccount'
import AttachFileIcon from '@mui/icons-material/AttachFile'
import CommentIcon from '@mui/icons-material/Comment'
import ListCards from './ListCards/ListCards'
const Column = () => {
  const COLUMN_HEADER_HEIGHT = '58px'
  const COLUMN_FOOTER_HEIGHT = '60px'
  const [anchorEl, setAnchorEl] = useState(null)
  const open = Boolean(anchorEl)
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget)
  }
  const handleClose = () => {
    setAnchorEl(null)
  }
  return (
    <Box
      sx={{
        minWidth: '300px',
        maxWidth: '300px',
        ml: 2,
        borderRadius: '6px',
        height: 'fit-content',
        bgcolor: (theme) =>
          theme.palette.mode === 'dark' ? '#333643' : '#ebecf0',
        maxHeight: (theme) =>
          `calc(${theme.trello.BoardContentHeight} - 
                  ${theme.spacing(5)})
                  `
      }}
    >
      {/* Box column Header */}
      <Box
        sx={{
          height: COLUMN_HEADER_HEIGHT,
          p: 2,
          display: 'flex',
          justifyContent: 'space-between'
        }}
      >
        <Typography
          variant="h6"
          sx={{
            fontSize: '1rem',
            fontWeight: 'bold',
            cursor: 'pointer'
          }}
        >
          Column Title
        </Typography>
        <Box>
          <Tooltip title="More options">
            <ExpandMoreIcon
              aria-controls={open ? 'basic-menu-column-dropdown' : undefined}
              aria-haspopup="true"
              aria-expanded={open ? 'true' : undefined}
              id="basic-menu-column-dropdown"
              onClick={handleClick}
              sx={{
                color: 'text.primary',
                cursor: 'pointer'
              }}
            ></ExpandMoreIcon>
          </Tooltip>

          <Menu
            id="basic-menu-column-dropdown"
            anchorEl={anchorEl}
            open={open}
            onClose={handleClose}
            MenuListProps={{
              'aria-labelledby': 'basic-menu-column-dropdown'
            }}
          >
            <MenuItem>
              <ListItemIcon>
                <AddCardIcon fontSize="small" />
              </ListItemIcon>
              <ListItemText>Add new card</ListItemText>
            </MenuItem>
            <Divider />
            <MenuItem>
              <ListItemIcon>
                <ContentCut fontSize="small" />
              </ListItemIcon>
              <ListItemText>Cut</ListItemText>
            </MenuItem>
            <MenuItem>
              <ListItemIcon>
                <ContentCopy fontSize="small" />
              </ListItemIcon>
              <ListItemText>Coppy</ListItemText>
            </MenuItem>
            <MenuItem>
              <ListItemIcon>
                <ContentPaste fontSize="small" />
              </ListItemIcon>
              <ListItemText>Past</ListItemText>
            </MenuItem>
            <Divider />
            <MenuItem>
              <ListItemIcon>
                <DeleteForeverIcon fontSize="small" />
              </ListItemIcon>
              <ListItemText>Remove this column</ListItemText>
            </MenuItem>
            <MenuItem>
              <ListItemIcon>
                <Cloud fontSize="small" />
              </ListItemIcon>
              <ListItemText>Archive this column</ListItemText>
            </MenuItem>
          </Menu>
        </Box>
      </Box>
      {/* Box Column List Card */}
      <ListCards />
      {/* Box Column Footer */}
      <Box
        sx={{
          height: COLUMN_FOOTER_HEIGHT,
          p: 2,
          display: 'flex',
          justifyContent: 'space-between'
        }}
      >
        <Button startIcon={<AddCardIcon />}>Add new card</Button>
        <Tooltip title="Drag to move">
          <DragHandleIcon
            sx={{
              cursor: 'pointer'
            }}
          />
        </Tooltip>
      </Box>
    </Box>
  )
}

export default Column
