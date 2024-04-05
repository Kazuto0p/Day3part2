import { Button, TextField, Typography } from '@mui/material'
import React from 'react'

const Ssignup = () => {
  return (
    <div>
        <br /><br /><br /><br /><br /><br /><br />
        <Typography variant="h5" gutterBottom>
        SignUp
        </Typography>

     
        <TextField
          required
          id="filled-required"
          label="UserName"
          defaultValue="Hello World"
          variant="filled"
        /> <br /><br />
        
        <TextField
          id="filled-password-input"
          label="Password"
          type="password"
          autoComplete="current-password"
          variant="filled"
        /> <br /><br />

        <TextField
          id="filled-number"
          label="Number"
          type="number"
          InputLabelProps={{
            shrink: true,
          }}
          variant="filled"
        /> <br /><br />

        <TextField
          id="filled-password-input"
          label="Email"
          type="email"
          autoComplete="current-password"
          variant="filled"
        />  <br /><br />
        
        <Button variant="contained">Submit</Button>
        <br /><br />
        
        


    </div>
  )
}

export default Ssignup