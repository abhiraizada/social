import PropTypes from 'prop-types';

// material-ui
import { Box, Button, Card, FormControl, FormControlLabel, FormLabel, Grid, Modal, Radio, RadioGroup, Stack, TextField, Typography } from '@mui/material';


export const TableModal = ({table, setshowDetails, visibility}) => {
  return (
    
    <div style={{ color: "red" }}><Modal
    open={visibility}
    onClose={null}
    aria-labelledby="parent-modal-title"
    aria-describedby="parent-modal-description"
>
    <div style={{ backgroundColor: "red" }}><Box sx={{
        width: '100%',
        maxWidth: '30vw',
        maxHeight: '100%',
        position: 'fixed',
        padding: '20px 20px 20px 20px',
        top: '40%',
        left: '40%',
        transform: 'translate(0, -50%)',
        background: 'white',
        overflowY: 'auto'
    }}>
        <Stack
            component="form"
            sx={{
                width: 'auto',
            }}
            spacing={2}
            noValidate
            autoComplete="off"
        >
             <FormControl>
<FormLabel id="demo-row-radio-buttons-group-label"></FormLabel>
<RadioGroup
row
aria-labelledby="demo-row-radio-buttons-group-label"
name="row-radio-buttons-group"
>
<FormControlLabel value="available" control={<Radio />} label="Available" />
<FormControlLabel value="occupied" control={<Radio />} label="Occupied" />
<FormControlLabel value="reserved" control={<Radio />} label="Reserved" />
<FormControlLabel value="unavailable" control={<Radio />} label="Unavailable" />

</RadioGroup>
</FormControl>

        </Stack>
        <div style={{ display: "flex", justifyContent: "space-between" }}>
            <Button onClick={() => { setshowDetails(false) }}>Cancel</Button>
            <Button onClick={() => { console.log() }}>Save</Button>
        </div>
    </Box>
    </div>
</Modal>
</div>
  )
}
