import { Button, Typography } from '@mui/material'
import React, { useState } from 'react'

const Value = () => {
    var[y,sety]=useState (0);
    const ins=()=>{

        sety(y+1)
    }
    const ind=()=>{
        sety(y-1)
    }

  return (
    <div>
        <br /><br /><br /><br /><br /><br /><br />
        <Typography variant="h3" gutterBottom>
            Counter  {y}
        </Typography>
        <Button variant='contained' color='error' onClick={ins}> + </Button>
        <Button variant="contained" color="error" onClick={ind}> - </Button>
        
    </div>
  )
}

export default Value