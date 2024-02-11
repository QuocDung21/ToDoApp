import Box from '@mui/material/Box'
import ModeSelect from '~/components/ModeSelect'
import { ReactComponent as TrelloIcon } from '~/assets/trello.svg'
import Typography from '@mui/material/Typography'
import AppsIcon from '@mui/icons-material/Apps'
import SvgIcon from '@mui/material/SvgIcon'
import Workspace from './Menus/Workspace'
import Recent from './Menus/Recent'
import Templates from './Menus/Templates'
import Starred from './Menus/Starred'
import Button from '@mui/material/Button'
import TextField from '@mui/material/TextField'
import Badge from '@mui/material/Badge'
import NotificationsNoneIcon from '@mui/icons-material/NotificationsNone'
import Tooltip from '@mui/material/Tooltip'
import HelpOutlineIcon from '@mui/icons-material/HelpOutline'
import Profiles from './Menus/Profiles'
import QueueIcon from '@mui/icons-material/Queue'
import InputAdornment from '@mui/material/InputAdornment'
import SearchIcon from '@mui/icons-material/Search'
import CloseIcon from '@mui/icons-material/Close'
import { useEffect, useState } from 'react'
const index = () => {
  const [searchValue, setSearchValue] = useState('')

  return (
    <Box
      px={2}
      sx={{
        backgroundColor: '',
        width: '100%',
        height: (theme) => theme.trello.appBarHeight,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        gap: 2,
        overflowX: 'auto',
        '&::-webkit-scrollbar-track': {
          m: 2
        },
        bgcolor: (theme) =>
          theme.palette.mode === 'dark' ? '#2c3e50' : '#1565c0'
      }}
    >
      <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
        <AppsIcon sx={{ color: 'white' }} />
        <Box
          sx={{
            display: 'flex',
            alignItems: 'center',
            gap: 0.5
          }}
        >
          <SvgIcon
            sx={{
              color: 'white'
            }}
            component={TrelloIcon}
            inheritViewBox
          />
          <Typography
            sx={{
              fontSize: '1.2rem',
              fontWeight: 'bold',
              color: 'white'
            }}
            variant="span"
          >
            Trello
          </Typography>
        </Box>
        <Box sx={{ display: { xs: 'none', md: 'flex' }, gap: 1 }}>
          <Workspace />
          <Recent />
          <Starred />
          <Templates />
          <Button
            startIcon={<QueueIcon />}
            sx={{
              color: 'white',
              border: 'none',
              '&:hover': {
                border: 'none'
              }
            }}
            variant="outlined"
          >
            Create
          </Button>
        </Box>
      </Box>
      <Box
        sx={{
          display: 'flex',
          alignItems: 'center',
          gap: 2
        }}
      >
        <TextField
          size="small"
          id="outlined-search"
          label="Search..."
          type="search"
          sx={{
            minWidth: 120,
            maxWidth: 170,
            '& label': {
              color: 'white'
            },
            '& input': {
              color: 'white'
            },
            '& label.Mui-focused': {
              color: 'white'
            },
            '& .MuiOutlinedInput-root': {
              '& fieldset': {
                borderColor: 'white'
              },
              '&:hover fieldset': {
                borderColor: 'white'
              },
              '&.Mui-focused fieldset': {
                borderColor: 'white'
              }
            }
          }}
          value={searchValue}
          onChange={(e) => setSearchValue(e.target.value)}
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <SearchIcon sx={{ color: 'white' }} />
              </InputAdornment>
            ),
            endAdornment: (
              <InputAdornment position="end">
                <CloseIcon
                  fontSize="small"
                  sx={{
                    color: 'white',
                    cursor: 'pointer',
                    display: searchValue ? 'block' : 'none'
                  }}
                  onClick={() => setSearchValue('')}
                />
              </InputAdornment>
            )
          }}
        />
        <ModeSelect />
        <Tooltip title="Notification">
          <Badge sx={{ cursor: 'pointer' }} color="warning" variant="dot">
            <NotificationsNoneIcon sx={{ color: 'white' }} />
          </Badge>
        </Tooltip>
        <Tooltip title="Help">
          <HelpOutlineIcon sx={{ color: 'white' }} />
        </Tooltip>
        <Profiles />
      </Box>
    </Box>
  )
}

export default index
