import { Button, TextField, Typography } from '@mui/material'
import React from 'react'

const Login = () => {
  return (
    <div>
        <br /><br /><br /><br /><br /><br /><br />
        <Typography variant="h5" gutterBottom>
            Login page
        </Typography>
        <TextField id="outlined-basic" label="Name" variant="outlined" /><br /><br />
        <TextField
          id="outlined-password-input"
          label="Password"
          type="password"
          autoComplete="current-password"
        /> <br /><br />
         <TextField
          id="outlined-number"
          label="Number"
          type="number"
          InputLabelProps={{
            shrink: true,
          }}
        /> <br /><br />
        <Button variant="contained">Submit</Button>
    </div>
  )
}

export default Login