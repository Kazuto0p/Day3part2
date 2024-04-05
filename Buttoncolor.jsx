import { Button, Typography } from '@mui/material'
import React, { useEffect, useState } from 'react'

const Buttoncolor = () => {
    var[x,setx] =useState();
    const inpt= () =>{
   
        setx("React")
        
        
    }

    const ino= () =>{

        setx("Angular")

    }
    const ine= () =>{

        setx("Next")


    }
    useEffect(()=>{
        inpt();

    },[])


  return (
    <div>
        <br /><br /><br /><br /><br /><br /><br />
        <Typography variant="h3" gutterBottom>
            Welcome To  {x}
        </Typography>
        <Button variant="contained" color='primary'  onClick={inpt}>React </Button>&nbsp;
        <Button variant="contained" color ="secondary"onClick={ino}>Angular </Button>&nbsp;
        <Button variant="contained" color='success'   onClick={ine}>Next</Button>&nbsp;
        
    </div>
  )
}


export default Buttoncolor