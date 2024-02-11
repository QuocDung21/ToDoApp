import React from 'react'
import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'
import CardContent from '@mui/material/CardContent'
import { Card as MuiCard } from '@mui/material'
import Button from '@mui/material/Button'
import CardMedia from '@mui/material/CardMedia'
import CardActions from '@mui/material/CardActions'
import SupervisorAccountIcon from '@mui/icons-material/SupervisorAccount'
import AttachFileIcon from '@mui/icons-material/AttachFile'
import CommentIcon from '@mui/icons-material/Comment'
const Card = () => {
  return (
    <>
      <MuiCard
        sx={{
          overflow: 'unset',
          cursor: 'pointer',
          boxShadow: '0 1px 1px rgba(0,0,0,0.2)'
        }}
      >
        <CardMedia
          sx={{ height: 140 }}
          image="https://cdn.trangcongnghe.com.vn/uploads/posts/2023-09/one-pice.jpg"
          title="green iguana"
        />
        <CardContent
          sx={{
            p: 1.5
          }}
        >
          <Typography>Nguyen Quoc Dung Stack</Typography>
        </CardContent>
        <CardActions
          sx={{
            p: '0 4px 8px 4px'
          }}
        >
          <Button startIcon={<SupervisorAccountIcon />} size="small">
            20
          </Button>
          <Button startIcon={<CommentIcon />} size="small">
            10
          </Button>
          <Button startIcon={<AttachFileIcon />} size="small">
            10
          </Button>
        </CardActions>
      </MuiCard>
      <MuiCard
        sx={{
          cursor: 'pointer',
          boxShadow: '0 1px 1px rgba(0,0,0,0.2)',
          overflow: 'unset'
        }}
      >
        <CardContent
          sx={{
            p: 1.5,
            '&:last-child': {
              p: 1.5
            }
          }}
        >
          <Typography>Card 01</Typography>
        </CardContent>
      </MuiCard>
    </>
  )
}

export default Card
