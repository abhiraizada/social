import PropTypes from 'prop-types';

// material-ui
import { Box, Card, Grid, Typography } from '@mui/material';

// project imports
import SubCard from 'ui-component/cards/SubCard';
import MainCard from 'ui-component/cards/MainCard';
import SecondaryAction from 'ui-component/cards/CardSecondaryAction';
import { gridSpacing } from 'store/constant';
import T from 'saas-manager/T';

// ===============================|| COLOR BOX ||=============================== //

const ColorBox = ({ onclick, bgcolor, title, data, dark }) => (
    <>
        <Card onClick={onclick} sx={{ mb: 3 }} style={{cursor: "pointer"}}>
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

ColorBox.propTypes = {
    bgcolor: PropTypes.string,
    title: PropTypes.string,
    data: PropTypes.object.isRequired,
    dark: PropTypes.bool
};

// ===============================|| UI COLOR ||=============================== //

const UIColor = () => (
    <MainCard  secondary={<SecondaryAction link="https://next.material-ui.com/system/palette/" />}>
        <Grid container spacing={gridSpacing}>
            <Grid item xs={12}>
                <SubCard title={T.manage_tables}>
                    <Grid container spacing={gridSpacing}>
                        <Grid item xs={12} sm={6} md={4} lg={2}>
                        <ColorBox onclick={()=>console.log("hi")} bgcolor="success.dark" data={{ label: 'Green-A700', color: '#00c853' }} title="1" />
                        </Grid>
                        <Grid item xs={12} sm={6} md={4} lg={2}>
                        <ColorBox bgcolor="success.dark" data={{ label: 'Green-A700', color: '#00c853' }} title="1" />
                        </Grid><Grid item xs={12} sm={6} md={4} lg={2}>
                        <ColorBox bgcolor="success.dark" data={{ label: 'Green-A700', color: '#00c853' }} title="1" />
                        </Grid><Grid item xs={12} sm={6} md={4} lg={2}>
                        <ColorBox bgcolor="success.dark" data={{ label: 'Green-A700', color: '#00c853' }} title="1" />
                        </Grid><Grid item xs={12} sm={6} md={4} lg={2}>
                        <ColorBox bgcolor="success.dark" data={{ label: 'Green-A700', color: '#00c853' }} title="1" />
                        </Grid><Grid item xs={12} sm={6} md={4} lg={2}>
                        <ColorBox bgcolor="success.dark" data={{ label: 'Green-A700', color: '#00c853' }} title="1" />
                        </Grid><Grid item xs={12} sm={6} md={4} lg={2}>
                        <ColorBox bgcolor="success.dark" data={{ label: 'Green-A700', color: '#00c853' }} title="1" />
                        </Grid>
                        <Grid item xs={12} sm={6} md={4} lg={2}>
                        <ColorBox bgcolor="error.dark" data={{ label: 'Red-800', color: '#c62828' }} title="2" />
                        </Grid>
                        <Grid item xs={12} sm={6} md={4} lg={2}>
                            <ColorBox bgcolor="error.dark" data={{ label: 'Green-A700', color: '#00c853'  }} title="3" />
                        </Grid>
                        <Grid item xs={12} sm={6} md={4} lg={2}>
                            <ColorBox bgcolor="error.dark" data={{ label: 'Green-A700', color: '#00c853'  }} title="4" />
                        </Grid>
                        <Grid item xs={12} sm={6} md={4} lg={2}>
                            <ColorBox bgcolor="success.dark" data={{ label: 'Red-800', color: '#c62828'}} title="5" />
                        </Grid>
                    </Grid>
                </SubCard>
            </Grid>
        </Grid>
    </MainCard>
);

export default UIColor;
