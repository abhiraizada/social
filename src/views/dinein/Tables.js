import PropTypes from 'prop-types';

// material-ui
import { Box, Button, Card, Grid, Modal, Stack, TextField, Typography } from '@mui/material';

// project imports
import SubCard from 'ui-component/cards/SubCard';
import MainCard from 'ui-component/cards/MainCard';
import SecondaryAction from 'ui-component/cards/CardSecondaryAction';
import { gridSpacing } from 'store/constant';
import T from 'saas-manager/T';
import { useState } from 'react';

// ===============================|| COLOR BOX ||=============================== //

function createData(tableid, status, note, color) {
    return {
        tableid, status, note, color
    };
}

const rows = [
    createData('tableid001', "available","This table is available",  '#00c853'),
    createData('tableid002', "occupied", " Someone sitting", '#c62828'),
    createData('tableid003', "reserved", "reserved for 5", "#FFC007"),
    createData('tableid004', "reserved", "reserved for 5", "#FFC007"),
    createData('tableid005', "available", 'Green-A700', '#00c853'),
    createData('tableid006', "reserved", "reserved for 5", "#FFC007"),
    createData('tableid007', "occupied", 'occupied by 3', '#c62828'),
    createData('tableid008', "occupied", 'occupied by 8', '#c62828'),
    createData('tableid009', "unavailable", "wet floor", '#2096F3' ),
    createData('tableid0010', "available", 'Green-A700', '#00c853'),
    createData('tableid0011', "unavailable", "wet floor", '#2096F3'),


];
const TableBox = ({ onclick, bgcolor, title, data, dark }) => (
    <>
        <Card onClick={onclick} sx={{ mb: 3 }} style={{ cursor: "pointer" }}>
            <Box
                sx={{

                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                    py: 4.5,
                    bgcolor,
                    color: dark ? 'grey.800' : '#ffffff'
                }}
            >
                {title && (
                    <Typography variant="subtitle1" color="inherit">
                        {title}
                    </Typography>
                )}
                {!title && <Box sx={{ p: 1.15 }} />}
            </Box>
        </Card>
        {data && (
            <Grid container justifyContent="space-between" alignItems="center">
                <Grid item>
                    <Typography variant="subtitle2">{data.label}</Typography>
                </Grid>
                <Grid item>
                    <Typography variant="subtitle1" sx={{ textTransform: 'uppercase' }}>
                        {data.color}
                    </Typography>
                </Grid>
            </Grid>
        )}
    </>
);

TableBox.propTypes = {
    bgcolor: PropTypes.string,
    title: PropTypes.string,
    data: PropTypes.object.isRequired,
    dark: PropTypes.bool
};

// ===============================|| UI COLOR ||=============================== //

const Tables = () => {
    const [showDetails, setshowDetails] = useState(false)
    const [currentTable, setcurrentTable] = useState(null)
    return (
        <>

            <div style={{ color: "red" }}><Modal
                open={showDetails}
                onClose={null}
                aria-labelledby="parent-modal-title"
                aria-describedby="parent-modal-description"
            >
                <div style={{ backgroundColor: "red" }}><Box sx={{
                    width: '100%',
                    maxWidth: '20vw',
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
                        <TextField
                            label="Quantity"
                            id="filled-hidden-label-small"
                            defaultValue={10}
                            variant="filled"
                            type="number"

                            onChange={() => { }}
                        />
                        <TextField
                            hiddenLabel
                            id="filled-hidden-label-normal"
                            defaultValue={10}
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
                    <div style={{ display: "flex", justifyContent: "space-between" }}>
                        <Button onClick={() => { setshowDetails(false) }}>Cancel</Button>
                        <Button onClick={() => { console.log() }}>Save</Button>
                    </div>
                </Box>
                </div>
            </Modal>
            </div>
            <MainCard secondary={<SecondaryAction link="https://next.material-ui.com/system/palette/" />}>
                <Grid container spacing={gridSpacing}>
                    <Grid item xs={12}>
                        <SubCard title={T.manage_tables}>
                            <Grid container spacing={gridSpacing}>
                                {rows.map(element => (
                                    <Grid item xs={12} sm={6} md={4} lg={2}>
                                        <TableBox onclick={() => {
                                            setshowDetails(true)
                                            console.log(element.status)
                                        }} bgcolor={element.color} data={{ label: 'Green-A700', color: '#00c853' }} title="1" />
                                    </Grid>
                                ))}

                                {/* <Grid item xs={12} sm={6} md={4} lg={2}>
                                    <TableBox onclick={() => { setshowDetails(true), setcurrentTable() }} bgcolor="success.dark" data={{ label: 'Green-A700', color: '#00c853' }} title="1" />
                                </Grid> */}

                            </Grid>
                        </SubCard>
                    </Grid>
                </Grid>
            </MainCard>
        </>
    )


}


export default Tables;
