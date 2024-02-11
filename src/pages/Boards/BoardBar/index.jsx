import Box from '@mui/material/Box'
import Chip from '@mui/material/Chip'
import DashboardIcon from '@mui/icons-material/Dashboard'
import VpnLockIcon from '@mui/icons-material/VpnLock'
import AddToDriveIcon from '@mui/icons-material/AddToDrive'
import Avatar from '@mui/material/Avatar'
import AvatarGroup from '@mui/material/AvatarGroup'
import Tooltip from '@mui/material/Tooltip'
import Button from '@mui/material/Button'
import PersonAddAlt1Icon from '@mui/icons-material/PersonAddAlt1'
import FilterListIcon from '@mui/icons-material/FilterList'
import { Bolt } from '@mui/icons-material'

const index = () => {
  const MENU_STYLE = {
    color: 'white',
    bgcolor: 'transparent',
    borderColor: 'none',
    paddingX: '5px',
    borderRadius: '4px',
    '.MuiSvgIcon-root': {
      color: 'white'
    },
    ':hover': {
      backgroundColor: 'primary.30'
    }
  }
  return (
    <Box
      sx={{
        width: '100%',
        height: (theme) => theme.trello.boardBarHeight,
        display: 'flex',
        alignItems: 'center',
        overflowX: 'auto',
        gap: 2,
        paddingX: 2,
        borderBottom: '1px solid white',
        bgcolor: (theme) =>
          theme.palette.mode === 'dark' ? '#34495e' : '#1976d2',
        justifyContent: 'space-between',
        '&::-webkit-scrollbar-track': {
          m: 2
        }
      }}
    >
      <Box sx={{ display: 'flex', gap: 2 }}>
        <Chip
          icon={<DashboardIcon />}
          label="Nguyen Quoc Dung Stack"
          clickable
          sx={MENU_STYLE}
        />{' '}
        <Chip
          icon={<VpnLockIcon />}
          label="Public/Private Workspace"
          clickable
          sx={MENU_STYLE}
        />{' '}
        <Chip
          icon={<AddToDriveIcon />}
          label="Add To Google Drive"
          clickable
          sx={MENU_STYLE}
        />
        <Chip icon={<Bolt />} label="Automation" clickable sx={MENU_STYLE} />
        <Chip
          icon={<FilterListIcon />}
          label="Filter"
          clickable
          sx={MENU_STYLE}
        />
      </Box>
      <Box sx={{ display: 'flex', gap: 2 }}>
        <Button
          sx={{
            color: 'white',
            borderColor: 'white',
            '&:hover': {
              borderColor: 'white'
            }
          }}
          variant="outlined"
          startIcon={<PersonAddAlt1Icon />}
        >
          Invite
        </Button>
        <AvatarGroup
          total={4}
          sx={{
            cursor: 'pointer',
            gap: '10px',
            '& .MuiAvatar-root': {
              width: 32,
              height: 32,
              fontSize: 16,
              border: 'none',
              '&:first-of-type': {
                bgcolor: '#a4b0be'
              }
            }
          }}
        >
          <Tooltip title="Nguyen Quoc Dung">
            <Avatar
              alt="Nguyen Quoc Dungg Stack"
              src="https://bizweb.dktcdn.net/thumb/1024x1024/100/383/989/products/z4341885986200-26f4e9b72d28a542d5e28f6088fc7352.jpg?v=1683968885500"
            />
          </Tooltip>
          <Tooltip title="Nguyen Quoc Dung">
            <Avatar
              alt="Nguyen Quoc Dungg Stack"
              src="https://bizweb.dktcdn.net/thumb/1024x1024/100/383/989/products/z4341885986200-26f4e9b72d28a542d5e28f6088fc7352.jpg?v=1683968885500"
            />
          </Tooltip>
          <Tooltip title="Nguyen Quoc Dung">
            <Avatar
              alt="Nguyen Quoc Dungg Stack"
              src="https://bizweb.dktcdn.net/thumb/1024x1024/100/383/989/products/z4341885986200-26f4e9b72d28a542d5e28f6088fc7352.jpg?v=1683968885500"
            />
          </Tooltip>
        </AvatarGroup>
      </Box>
    </Box>
  )
}

export default index
