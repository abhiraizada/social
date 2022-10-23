import * as React from 'react';
import PropTypes from 'prop-types';
import { alpha } from '@mui/material/styles';
import { Box, Modal, Button, TextField, Stack, Grid, CardActions } from '@mui/material'
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TablePagination from '@mui/material/TablePagination';
import TableRow from '@mui/material/TableRow';
import TableSortLabel from '@mui/material/TableSortLabel';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Paper from '@mui/material/Paper';
import IconButton from '@mui/material/IconButton';
import Tooltip from '@mui/material/Tooltip';
import FormControlLabel from '@mui/material/FormControlLabel';
import Switch from '@mui/material/Switch';
import DeleteIcon from '@mui/icons-material/Delete';
import FilterListIcon from '@mui/icons-material/FilterList';
import { visuallyHidden } from '@mui/utils';
import './OrderCard.css'
import { Card } from '@mui/material';
import { withStyles } from '@mui/styles';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';

// project imports
import SubCard from 'ui-component/cards/SubCard';
import MainCard from 'ui-component/cards/MainCard';
import SecondaryAction from 'ui-component/cards/CardSecondaryAction';
import { gridSpacing } from 'store/constant';
import T from 'saas-manager/T';
import OrderCard from 'ui-component/cards/OrderCard';
function createData(orderid, tNumber, items, status, placedAt) {
    return {
        orderid, tNumber, items, status, placedAt
    };
}
const useStyles = makeStyles(theme => ({
   
    card: {
        height: '100%',
        width: '100%',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        border: '1px solid black',
        borderRadius: '5px',
        textAlign: 'center',
    },
    icon: {
        padding: theme.spacing(2, 0),
    },
    title: {
        padding: theme.spacing(2),
    },
    featureList: {
        padding: theme.spacing(2),
    },
}));
const styles = theme => ({
    root: {
        flexGrow: 0,
        width: 100
    },
    paper: {
        padding: theme.spacing.unit * 2,
        textAlign: 'center',
        color: theme.palette.text.secondary,
    },
});

const rows = [
    createData('Cupcake', 305, 3.7, 67, 4.3),
    createData('Donut', 452, 25.0, 51, 4.9),
    createData('Eclair', 262, 16.0, 24, 6.0),
    createData('Frozen yoghurt', 159, 6.0, 24, 4.0),
    createData('Gingerbread', 356, 16.0, 49, 3.9),
    createData('Honeycomb', 408, 3.2, 87, 6.5),
    createData('Ice cream sandwich', 237, 9.0, 37, 4.3),
    createData('Jelly Bean', 375, 0.0, 94, 0.0),
    createData('KitKat', 518, 26.0, 65, 7.0),
    createData('Lollipop', 392, 0.2, 98, 0.0),
    createData('Marshmallow', 318, 0, 81, 2.0),
    createData('Nougat', 360, 19.0, 9, 37.0),
    createData('Oreo', 437, 18.0, 63, 4.0),
];

function descendingComparator(a, b, orderBy) {
    if (b[orderBy] < a[orderBy]) {
        return -1;
    }
    if (b[orderBy] > a[orderBy]) {
        return 1;
    }
    return 0;
}

function getComparator(order, orderBy) {
    return order === 'desc'
        ? (a, b) => descendingComparator(a, b, orderBy)
        : (a, b) => -descendingComparator(a, b, orderBy);
}

// This method is created for cross-browser compatibility, if you don't
// need to support IE11, you can use Array.prototype.sort() directly
function stableSort(array, comparator) {
    const stabilizedThis = array.map((el, index) => [el, index]);
    stabilizedThis.sort((a, b) => {
        const order = comparator(a[0], b[0]);
        if (order !== 0) {
            return order;
        }
        return a[1] - b[1];
    });
    return stabilizedThis.map((el) => el[0]);
}

const headCells = [
    {
        id: 'orderid',
        numeric: false,
        disablePadding: true,
        label: 'Order Id',
    },
    {
        id: 'tNumber',
        numeric: true,
        disablePadding: false,
        label: 'Table Number',
    },
    {
        id: 'items',
        numeric: true,
        disablePadding: false,
        label: 'Number of items',
    },
    {
        id: 'status',
        numeric: true,
        disablePadding: false,
        label: 'Status',
    },
    {
        id: 'placedAt',
        numeric: true,
        disablePadding: false,
        label: 'Placed At',
    },
];

function EnhancedTableHead(props) {
    const { onSelectAllClick, order, orderBy, numSelected, rowCount, onRequestSort } =
        props;
    const createSortHandler = (property) => (event) => {
        onRequestSort(event, property);
    };

    return (
        <TableHead>
            <TableRow>
                <TableCell padding="checkbox">

                </TableCell>
                {headCells.map((headCell) => (
                    <TableCell
                        key={headCell.id}
                        align={headCell.numeric ? 'right' : 'left'}
                        padding={headCell.disablePadding ? 'none' : 'normal'}
                        sortDirection={orderBy === headCell.id ? order : false}
                    >
                        <TableSortLabel
                            active={orderBy === headCell.id}
                            direction={orderBy === headCell.id ? order : 'asc'}
                            onClick={createSortHandler(headCell.id)}
                        >
                            {headCell.label}
                            {orderBy === headCell.id ? (
                                <Box component="span" sx={visuallyHidden}>
                                    {order === 'desc' ? 'sorted descending' : 'sorted ascending'}
                                </Box>
                            ) : null}
                        </TableSortLabel>
                    </TableCell>
                ))}
            </TableRow>
        </TableHead>
    );
}

EnhancedTableHead.propTypes = {
    numSelected: PropTypes.number.isRequired,
    onRequestSort: PropTypes.func.isRequired,
    onSelectAllClick: PropTypes.func.isRequired,
    order: PropTypes.oneOf(['asc', 'desc']).isRequired,
    orderBy: PropTypes.string.isRequired,
    rowCount: PropTypes.number.isRequired,
};

const EnhancedTableToolbar = (props) => {
    const { numSelected } = props;

    return (
        <Toolbar
            sx={{
                pl: { sm: 2 },
                pr: { xs: 1, sm: 1 },
                ...(numSelected > 0 && {
                    bgcolor: (theme) =>
                        alpha(theme.palette.primary.main, theme.palette.action.activatedOpacity),
                }),
            }}
        >
            {numSelected > 0 ? (
                <Typography
                    sx={{ flex: '1 1 100%' }}
                    color="inherit"
                    variant="subtitle1"
                    component="div"
                >
                    {numSelected} selected
                </Typography>
            ) : (
                <Typography
                    sx={{ flex: '1 1 100%' }}
                    variant="h6"
                    id="tableTitle"
                    component="div"
                >
                    Nutrition
                </Typography>
            )}

            {numSelected > 0 ? (
                <Tooltip title="Delete">
                    <IconButton>
                        <DeleteIcon />
                    </IconButton>
                </Tooltip>
            ) : (
                <Tooltip title="Filter list">
                    <IconButton>
                        <FilterListIcon />
                    </IconButton>
                </Tooltip>
            )}
        </Toolbar>
    );
};
EnhancedTableToolbar.propTypes = {
    numSelected: PropTypes.number.isRequired,
};

const orders = [{
    orderType: 'takeAway',
    id: "3432",
    items: [{
        name: 'Diet Coke',
        type: 'drinks',
        quantity: 3,
        price: '2.33 CAD',
        specialNotes: 'Give an extra glass.',
    },
    {
        name: 'Speghetti AOP',
        type: 'food',
        quantity: 1,
        price: '20 CAD',
        specialNotes: 'Less oily.'
    },
    {
        name: 'Hakka Noodles',
        type: 'food',
        quantity: 1,
        price: '30 CAD',
        specialNotes: ''
    }
    ],
},
{
    orderType: 'takeAway',
    id: "122",
    items: [{
        name: 'Bacardi',
        type: 'drinks',
        quantity: 1,
        price: '10 CAD',
        specialNotes: 'On ice.',
    },
    {
        name: 'Paneer tikka',
        type: 'food',
        quantity: 1,
        price: '30 CAD',
        specialNotes: 'Less oily.'
    },
    {
        name: 'Hakka Noodles',
        type: 'food',
        quantity: 1,
        price: '30 CAD',
        specialNotes: ''
    },
    ],
},
{
    orderType: 'takeAway',
    id: "122",
    items: [{
        name: 'Bacardi',
        type: 'drinks',
        quantity: 1,
        price: '10 CAD',
        specialNotes: 'On ice.',
    },
    {
        name: 'Paneer tikka',
        type: 'food',
        quantity: 1,
        price: '30 CAD',
        specialNotes: 'Less oily.'
    },
    {
        name: 'Hakka Noodles',
        type: 'food',
        quantity: 1,
        price: '30 CAD',
        specialNotes: ''
    },
    ],
},
{
    orderType: 'delivery',
    id: "122",
    items: [{
        name: 'Bacardi',
        type: 'drinks',
        quantity: 1,
        price: '10 CAD',
        specialNotes: 'On ice.',
    },
    {
        name: 'Paneer tikka',
        type: 'food',
        quantity: 1,
        price: '30 CAD',
        specialNotes: 'Less oily.'
    },
    {
        name: 'Hakka Noodles',
        type: 'food',
        quantity: 1,
        price: '30 CAD',
        specialNotes: ''
    },
    ],
},
{
    orderType: 'dineIn',
    id: "122",
    items: [{
        name: 'Bacardi',
        type: 'drinks',
        quantity: 1,
        price: '10 CAD',
        specialNotes: 'On ice.',
    },
    {
        name: 'Paneer tikka',
        type: 'food',
        quantity: 1,
        price: '30 CAD',
        specialNotes: 'THIS IS A REALALY REALLY LONG DESCRIPTION THAT CAN BE THERE IN AN ORDER.'
    },
    
    ],
}
]

function OrdersCard() {
    const classes = useStyles();

    const [order, setOrder] = React.useState('asc');
    const [orderBy, setOrderBy] = React.useState('calories');
    const [selected, setSelected] = React.useState([]);
    const [page, setPage] = React.useState(0);
    const [dense, setDense] = React.useState(false);
    const [rowsPerPage, setRowsPerPage] = React.useState(5);
    const [showDetails, setshowDetails] = React.useState(false)
    const [quantity, setquantity] = React.useState(0)
    const [selectedOrder, setselectedOrder] = React.useState([])
    const handleRequestSort = (event, property) => {
        const isAsc = orderBy === property && order === 'asc';
        setOrder(isAsc ? 'desc' : 'asc');
        setOrderBy(property);
    };

    const handleSelectAllClick = (event) => {
        if (event.target.checked) {
            const newSelecteds = rows.map((n) => n.name);
            setSelected(newSelecteds);
            return;
        }
        setSelected([]);
    };

    async function handleClick(event, row) {
        await setselectedOrder({
            itemName: row.title,
            quantity: 1
        })
        fetch('https://dummyjson.com/products/1')
            .then(async response => {
                const data = await response.json();
                if (!response.ok) {
                    const error = (data && data.message) || response.statusText;
                    return Promise.reject(error);
                }
                setselectedOrder(data)
                console.log(data.title)
                setshowDetails(true)
            })
            .catch(error => {
                this.setState({ errorMessage: error.toString() });
                console.error('There was an error!', error);
            })
    };

    const handleChangePage = (event, newPage) => {
        setPage(newPage);
    };

    const handleChangeRowsPerPage = (event) => {
        setRowsPerPage(parseInt(event.target.value, 10));
        setPage(0);
    };

    const handleChangeDense = (event) => {
        setDense(event.target.checked);
    };
    const [expandedArray, setexpandedArray] = React.useState([false, false, true, false])
    const isSelected = (name) => selected.indexOf(name) !== -1;

    // Avoid a layout jump when reaching the last page with empty rows.
    const emptyRows =
        page > 0 ? Math.max(0, (1 + page) * rowsPerPage - rows.length) : 0;

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
                            defaultValue={selectedOrder.quantity}
                            variant="filled"
                            type="number"

                            onChange={() => setquantity()}
                        />
                        <TextField
                            hiddenLabel
                            id="filled-hidden-label-normal"
                            defaultValue={selectedOrder.title}
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
                        <Button onClick={() => setshowDetails(false)}>Cancel</Button>
                        <Button onClick={() => { console.log(quantity); setshowDetails(false) }}>Save</Button>
                    </div>
                </Box>
                </div>
            </Modal>
            </div>

            <Box sx={{ width: '100%' }}>

                <Paper sx={{ width: '100%', mb: 2 }}>
                    <TableContainer>
                        <Table
                            sx={{ minWidth: 750 }}
                            aria-labelledby="tableTitle"
                            size={dense ? 'small' : 'medium'}
                        >
                            <EnhancedTableHead
                                order={order}
                                orderBy={orderBy}
                                onSelectAllClick={handleSelectAllClick}
                                onRequestSort={handleRequestSort}
                                rowCount={rows.length}
                            />
                            <TableBody>
                                {stableSort(rows, getComparator(order, orderBy))
                                    .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                                    .map((row, index) => {
                                        const labelId = `enhanced-table-checkbox-${index}`;

                                        return (
                                            <TableRow
                                                hover
                                                onClick={(event) => handleClick(event, row)}
                                                role="checkbox"
                                                tabIndex={-1}
                                                key={row.orderid}
                                            >
                                                <TableCell padding="checkbox">

                                                </TableCell>
                                                <TableCell
                                                    component="th"
                                                    id={labelId}
                                                    scope="row"
                                                    padding="checkbox"
                                                >
                                                    {row.orderid}
                                                </TableCell>
                                                <TableCell align="right">{row.tNumber}</TableCell>
                                                <TableCell align="right">{row.items}</TableCell>
                                                <TableCell align="right">{row.status}</TableCell>
                                                <TableCell align="right">{row.placedAt}</TableCell>

                                            </TableRow>
                                        );
                                    })}
                                {emptyRows > 0 && (
                                    <TableRow
                                        style={{
                                            height: (dense ? 33 : 53) * emptyRows,
                                        }}
                                    >
                                        <TableCell colSpan={8} />
                                    </TableRow>
                                )}
                            </TableBody>
                        </Table>
                    </TableContainer>
                    <TablePagination
                        rowsPerPageOptions={[5, 10, 25]}
                        component="div"
                        count={rows.length}
                        rowsPerPage={rowsPerPage}
                        page={page}
                        onPageChange={handleChangePage}
                        onRowsPerPageChange={handleChangeRowsPerPage}
                    />
                </Paper>
                <MainCard secondary={<SecondaryAction link="https://next.material-ui.com/system/palette/" />}>

                    {/* <Grid container spacing={gridSpacing}>
                    
                        <Grid item xs={14}>
                        
                            <SubCard  title={T.manage_orders}>
                            
                                <div className='order__cards'>
                                <Grid container spacing={40}>
                                    {itemss.map((item) => {
                                        return (<Grid item xs={12} sm={6} md={12} lg={2}>
                                            <OrderCard order={item} />
                                        </Grid>)

                                    })}


                                </Grid>
                                </div>
                                
                            </SubCard>
                        </Grid>
                    </Grid> */}
                    <Container component="section" maxWidth="lg" className={classes.root}>
                        <Grid container spacing={8} alignItems="stretch">
                            {orders.map((item) => (
                                // <Grid key={item.id} item xs={12} sm={6} md={12} lg={0}>
                                //     <OrderCard order={item}/>
                                // </Grid>
                                <Grid item xs={8} sm={5}>
                                    <OrderCard order={item}/>
                                </Grid>

                            ))}
                        </Grid>
                    </Container>

                </MainCard>
                <FormControlLabel
                    control={<Switch checked={dense} onChange={handleChangeDense} />}
                    label="Dense padding"
                />
            </Box>
        </>
    );
}
export default withStyles(styles)(OrdersCard);
