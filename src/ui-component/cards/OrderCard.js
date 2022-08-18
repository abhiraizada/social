import React, { useEffect, useState } from 'react'
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import Button from '@mui/material/Button';

import './Style.css'

import moment from 'moment';

function OrderCard({order}) {
    
    const [duration, setduration] = useState(0)
    const [palcedAt, setpalcedAt] = useState(moment('08.17.2022 00:00:03'))
  
    const boxcolor=()=>{
        if (duration?._data?.minutes < 2) {
            return "#E6E9FF"
          } else if (duration?._data?.minutes >2 && duration?._data?.minutes <=30 ) {
            return "#D0F2D3";
          } else {
            return "#FDC9C9";
          }
    }
    const textColor=()=>{
        if (duration?._data?.minutes < 2) {
            return "#5A6AF1"
          } else if (duration?._data?.minutes >2 && duration?._data?.minutes <=30 ) {
            return "#53CB5F";
          } else {
            return "#FD7085";
          }
    }
   useEffect(() => {
    var now=moment()
    const interval = setInterval(() => {
        setduration(moment.duration(now.diff(palcedAt)))
    }, 1000);
      return () => clearInterval(interval);
   }, [duration._data?.seconds])
   
  
  return (
    <div > <Card sx={{ minWidth: 310, border: 3, borderColor: boxcolor() }}>
    <div>
        <div className="ordercard-wrapper">
        <div  className="ordercard-header" style={{backgroundColor:boxcolor(), color:textColor()}}>
<div className='ordercard-header-number'>
    {console.log(duration?._data?.minutes)}
</div>
<div>
{duration?._data?.hours > 0 &&<>{duration?._data?.hours}:</>}{duration?._data?.minutes}:{duration?._data?.seconds < 9 &&<>0</>}{duration?._data?.seconds}
</div>
        </div>
        This is title
        </div>
    </div>
    <CardActions>
      <Button size="small">Learn More</Button>
    </CardActions>
  </Card></div>
  )
}

export default OrderCard