import { Box, Button, Modal, Stack, TextField } from '@mui/material'
import React, { useEffect, useState } from 'react'
import OrderDetailsModal from 'ui-component/modals/OrderDetailsModal';
import CloseIcon from '@mui/icons-material/Close';



function CommonModal({open, type}) {
  const [modalOpen, setModalOpen] = useState(true);
// useEffect(() => {
//   setModalOpen(true)
 
// }, [modalOpen])
function renderSwitch(type) {
  switch(type) {
    case 'orderDetails':
      return OrderDetailsModal;
    default:
      return 'foo';
  }
}

  return (
    <div >
      {console.log(type)}
    <Modal
      open={open&&modalOpen}
      onClose={null}
      aria-labelledby="parent-modal-title"
      aria-describedby="parent-modal-description"
    >
      <div style={{backgroundColor:"red"}}><Box sx={{   width: '100%',
  maxWidth: '20vw',
  maxHeight: '42%',
  position: 'fixed',
  padding:'20px 20px 20px 20px',
  top: '40%',
  left: '40%',
  transform: 'translate(0, -50%)',
  background:'white',
  overflowY: 'auto' }}>
    <div onClick={()=>setModalOpen(false)} style={{padding:"30 30 30 30"}}><CloseIcon oncl/></div>
    <OrderDetailsModal/> 
    </Box>
       </div>
    </Modal></div>
  )
}

export default CommonModal