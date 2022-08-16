import React from 'react'
import {Stack, TextField } from '@mui/material'

function OrderDetailsModal() {
  return (
    <div>
    
      <Stack
    component="form"
    sx={{
      width: 'auto',
    }}
    spacing={2}
    noValidate
    autoComplete="off"
  >
    <TextField
      hiddenLabel
      id="filled-hidden-label-small"
      defaultValue="Small"
      variant="filled"
      size="small"
    />
    <TextField
      hiddenLabel
      id="filled-hidden-label-normal"
      defaultValue="Normal"
      variant="filled"
    />
    <TextField
      hiddenLabel
      id="filled-hidden-label-normal"
      defaultValue="Normal"
      variant="filled"
    />
    <TextField
      hiddenLabel
      id="filled-hidden-label-normal"
      defaultValue="Normal"
      variant="filled"
    />
    <TextField
      hiddenLabel
      id="filled-hidden-label-normal"
      defaultValue="Normal"
      variant="filled"
    />
    
  </Stack>
    </div>  
  )
}

export default OrderDetailsModal