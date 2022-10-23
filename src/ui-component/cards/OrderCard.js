import React, { useEffect, useState } from 'react'
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import Button from '@mui/material/Button';
import DiningIcon from '@mui/icons-material/Dining';
import ShoppingBagIcon from '@mui/icons-material/ShoppingBag';
import CloseIcon from '@mui/icons-material/Close';
import OpenInFullIcon from '@mui/icons-material/OpenInFull';
import './Style.css'
import cx from 'clsx';

import moment from 'moment';
import { ConsoleView } from 'react-device-detect';

import Table from '@material-ui/core/Table';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import TableCell from '@material-ui/core/TableCell';
import TableBody from '@material-ui/core/TableBody';
import CardContent from '@material-ui/core/CardContent';
import CardHeader from '@material-ui/core/CardHeader';
import { useContainedCardHeaderStyles } from '@mui-treasury/styles/cardHeader/contained';
import { useSoftRiseShadowStyles } from '@mui-treasury/styles/shadow/softRise';
import { useFadedShadowStyles } from '@mui-treasury/styles/shadow/faded';
import { makeStyles } from '@material-ui/core/styles';
import { padding } from '@mui/system';

const useStyles = makeStyles(({ spacing }) => ({
    card: {
        marginTop: 50,
        borderRadius: spacing(0.5),
        transition: '0.3s',
        width: '100%',
        overflow: 'initial',
        background: '#ffffff',
    },
    content: {
        paddingTop: 0,
        textAlign: 'left',
        overflowX: 'auto',
        '& table': {
            marginBottom: 0,
        }
    },
}));

let id = 0;
function createData(name, fat, price) {
    id += 1;
    return { id, name, fat, price };
}

const rows = [
    // comment
    createData('Frozen yoghurt', 159, 4.0),
    createData('Ice cream sandwich', 237, 4.3),
    createData('Eclair', 16.0, 6.0),
    createData('Cupcake', 3.7, 4.3),
    createData('Gingerbread', 16.0, 3.9),
];
function OrderCard({ order }) {
    const classes = useStyles();
    const cardHeaderStyles = useContainedCardHeaderStyles();
    const cardShadowStyles = useSoftRiseShadowStyles({ inactive: true });
    const cardHeaderShadowStyles = useFadedShadowStyles();

    const [duration, setduration] = useState(0)
    const [palcedAt, setpalcedAt] = useState(moment('15:44:06', 'HH:mm:ss'))
    const [expanded, setexpanded] = useState(false)

    const expandedToggle = (e) => {
        console.log("Expanded")
    }
    const boxcolor = () => {
        if (duration?._data?.hours <= 0 && duration?._data?.minutes < 2) {
            return "#E6E9FF"
        } else if (duration?._data?.hours <= 0 && duration?._data?.minutes > 2 && duration?._data?.minutes <= 30) {
            return "#D0F2D3";
        } else {
            return "#FDC9C9";
        }
    }
    const textColor = () => {
        if (duration?._data?.hours <= 0 && duration?._data?.minutes < 2) {
            return "#5A6AF1"
        } else if (duration?._data?.hours <= 0 && duration?._data?.minutes > 2 && duration?._data?.minutes <= 30) {
            return "#53CB5F";
        } else {
            return "#FD7085";
        }
    }
    // useEffect(() => {
    //     var now = moment()
    //     const interval = setInterval(() => {
    //         setduration(moment.duration(now.diff(palcedAt)))
    //     }, 1000);
    //     return () => clearInterval(duration);

    // }, [duration._data?.seconds])
    useEffect(() => {
        var now = moment()

        var minutesPassed = moment.duration(now.diff(palcedAt));
        setduration(minutesPassed)
    }, [duration])


    return (
    <Card sx={{ minWidth: 300, border: 3, borderColor: boxcolor() }}>
            <div>
                <div className="ordercard-wrapper">
                    <div className="ordercard-header" style={{ backgroundColor: boxcolor(), color: textColor() }}>
                        <div className='ordercard-header-number'>
                            20
                        </div>

                        <div className='ordercard-header-time'>
                            {duration?._data?.hours > 0 && <>{duration?._data?.hours}:</>}{duration?._data?.minutes}:{duration?._data?.seconds <= 9 && <>0</>}{duration?._data?.seconds}
                        </div>
                        <div>
                            <DiningIcon style={{ color: "#393C3A" }} />
                        </div >
                        <div >
                            {/* {console.log(expanded)} */}
                            {expanded ? <CloseIcon onClick={(e) => { setexpanded(false) }} style={{ color: "#FDAA66" }} /> : <OpenInFullIcon onClick={(e) => { setexpanded(true) }} />}

                        </div>

                        <div>
                        </div>
                    </div>
                    <Card  className={cx(classes.card, cardShadowStyles.root)}>
                        <CardHeader
                        style={{backgroundColor: textColor()}}
                            className={cardHeaderShadowStyles.root}
                            classes={cardHeaderStyles}
                            title={order.orderType == 'takeAway' ? 'Take Away' : order.orderType == 'delivery' ? 'Delivery' :  'Dine In'}
                        />
                        <CardContent className={classes.content}>
                            <Table>
                                <TableHead>
                                    <TableRow>
                                        <TableCell>{'Name'}</TableCell>
                                        <TableCell align="right">{'Quantity'}</TableCell>
                                        <TableCell align="right">{'Notes'}</TableCell>
                                    </TableRow>
                                </TableHead>
                                <TableBody>
                                {order?.items.map(item => (

                                        <TableRow key={order.id}>
                                            <TableCell component="th" scope="row">
                                                {item.name}
                                            </TableCell>
                                            <TableCell align="right">{item.quantity}</TableCell>
                                            <TableCell align="right">{item.specialNotes}</TableCell>
                                        </TableRow>
                                                ))}

                                </TableBody>
                            </Table>
                        </CardContent>
                    </Card>
                </div>
            </div>
            <CardActions>
                <Button size="small">Learn More</Button>
            </CardActions>
        </Card>
    )
}

export default OrderCard