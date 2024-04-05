import { Button, TextField, Typography } from '@mui/material'
import React, { useState } from 'react'

const StateBasics = () => {
    var [fname,setfname]=useState("ram")

    var[val,setval]=useState()

    const subHandler=()=> {
        console.log("clicked")
        setfname(val)

      
    }
    const inputHandler=(e)=>{
      setval(e.target.value)
      console.log(val)


    }
  return (
    <div>
        <br /><br /><br /><br /><br /><br /><br />
        <Typography variant="h3" gutterBottom>
            Welcome  {fname}
        </Typography>
       
        <TextField  variant="outlined"  onChange={inputHandler}/><br /><br />
        <Button variant="contained" onClick={subHandler}> Clicked</Button>
    </div>
  )
}

export default StateBasics