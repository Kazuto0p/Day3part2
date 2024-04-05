import { AppBar, Toolbar,Button } from '@mui/material'
import React from 'react'
import { Link } from 'react-router-dom'

const Nav = () => {
  return (
    <div>
        <AppBar color='secondary'>
            <Toolbar>
                
                <Button variant="contained"><Link to='/login' style={{color:'white',}} >Login</Link></Button>&nbsp;
                <Button variant="contained"><Link to='/signup'style={{color:'white',}}>Signup</Link></Button>&nbsp;
                <Button variant="contained"><Link to='/state'style={{color:'white',}}>State</Link></Button>&nbsp;
                <Button variant="contained"><Link to='/color'>COLOR</Link></Button> &nbsp;
                <Button variant="contained"><Link to='/value'>COUNTER</Link></Button>&nbsp;
                <Button variant="contained"><Link to='/api'style={{color:'white',}}>API</Link></Button> &nbsp;
                <Button variant="contained"><Link to='/ecommerce'style={{color:'white',}}>Ecommerce</Link></Button>
            </Toolbar>
        </AppBar>
        

    </div>
  )
}

export default Nav