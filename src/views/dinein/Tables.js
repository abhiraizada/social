import PropTypes from 'prop-types';

// material-ui
import { Box, Button, Card, FormControl, FormControlLabel, FormLabel, Grid, Modal, Radio, RadioGroup, Stack, TextField, Typography } from '@mui/material';

// project imports
import SubCard from 'ui-component/cards/SubCard';
import MainCard from 'ui-component/cards/MainCard';
import SecondaryAction from 'ui-component/cards/CardSecondaryAction';
import { gridSpacing } from 'store/constant';
import T from 'saas-manager/T';
import { useState } from 'react';
import { TableModal } from 'ui-component/modals/TableModal';

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
    return (
        <>
<TableModal setshowDetails={setshowDetails} visibility={showDetails}/>
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
