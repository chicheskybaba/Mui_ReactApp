import React from 'react'
import { AppBar, Toolbar, IconButton, Typography, Stack, Button } from '@mui/material'
import { Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle } from '@mui/material'
import CatchingPokemonIcon from '@mui/icons-material/CatchingPokemon';
import { useState } from 'react';
import TextField from '@mui/material/TextField';



export const MuiNavbar = () => {
    const [login, setOpen] = useState(false)
    const [register, setRegister] = useState(false)

    return (

        <Stack marginBottom={5}>
            <AppBar position='static'>
                <Toolbar>
                    <IconButton size='large' edge='start' color='inherit' aria-label='logo'>
                        <CatchingPokemonIcon />
                    </IconButton>
                    <Typography marginLeft={1} variant='h6' component={'div'} sx={{ flexGrow: 1 }}>
                        JOB APPLICATION MANAGEMENT-APP
                    </Typography>
                    <Stack direction={'row'} spacing={2}>
                        <Button color='inherit' href="/">Home</Button>
                        <Button color='inherit' href="/showjob">Vacancies</Button>
                        <Button color='inherit' href="/addjob">Add</Button>
                        <Button color='inherit' href="/updatejob">Update</Button>
                        <Button color='inherit' href="/applyjob">Apply</Button>
                        <Button color='inherit' href="/deletejob">Delete</Button>
                        <Button onClick={() => setRegister(true)} color='inherit'>Register</Button>
                        <Button onClick={() => setOpen(true)} color='inherit'>Login</Button>
                    </Stack>
                </Toolbar>
            </AppBar>





            <Dialog open={register} onClose={() => setRegister(false)} aria-labelledby='dialog-title' aria-describedby='dialog-description'>

                <DialogTitle id='dialog-title'>Register</DialogTitle>

                <DialogContent>
                    <DialogContentText id='dialog-description'>Register with your details.
                        <TextField autoFocus margin="dense" id="first" label="First Name" type="name" fullWidth variant="standard" />
                        <TextField autoFocus margin="dense" id="last" label="Last Name" type="name" fullWidth variant="standard" />
                        <TextField autoFocus margin="dense" id="email" label="Email Address" type="email" fullWidth variant="standard" />
                        <TextField autoFocus margin="dense" id="password" label="Password" type="password" fullWidth variant="standard" />
                        <TextField autoFocus margin="dense" id="password" label="Password Again" type="password" fullWidth variant="standard" />
                    </DialogContentText>
                </DialogContent>

                <DialogActions>
                    <Button onClick={() => setRegister(false)}>Cancel</Button>
                    <Button onClick={() => setRegister(false)} autofocus>Submit</Button>
                </DialogActions>

            </Dialog>





            <Dialog open={login} onClose={() => setOpen(false)} aria-labelledby='dialog-title' aria-describedby='dialog-description'>

                <DialogTitle id='dialog-title'>Login</DialogTitle>

                <DialogContent>
                    <DialogContentText id='dialog-description'>Login with your registration details.
                        <TextField autoFocus margin="dense" id="email" label="Email Address" type="email" fullWidth variant="standard" />
                        <TextField autoFocus margin="dense" id="password" label="Password" type="password" fullWidth variant="standard" />
                    </DialogContentText>
                </DialogContent>

                <DialogActions>
                    <Button onClick={() => setOpen(false)}>Cancel</Button>
                    <Button onClick={() => setOpen(false)} autofocus>Submit</Button>
                </DialogActions>

            </Dialog>


        </Stack>
    )
}
