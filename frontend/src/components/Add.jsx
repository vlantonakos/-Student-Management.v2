import React, { useState } from 'react';
import Appbar from './Appbar'
import Paper from '@mui/material/Paper';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { useNavigate } from "react-router-dom";

const Add = () => {
    const paperStyle={padding:'50px 20px', width:600,margin:"20px auto"}
    const[name,setName]=useState('')
    const[lastname,setLastname]=useState('')
    const navigate = useNavigate();

    const handleClick = () => {
        const student = {name,lastname}
        fetch('/add', {
            method:"POST",
            headers:{"Content-Type":"application/json"},
            body:JSON.stringify(student)
        }).then(() => {
            console.log('New Student added.')
            navigate('/')
        }).catch((error) => {
            console.error('Error adding student:', error);
        });
    }
    
  return (
    <>
        <Appbar />
        <Paper elevation={3} style={paperStyle}>
            <h1 style={{color:"blue"}}>Add Student</h1>

            <form noValidate autoComplete="off">
    
            <TextField id="outlined-basic" label="Student Name" variant="outlined" fullWidth 
            value={name}
            onChange={(e)=>setName(e.target.value)}
            />
            <TextField sx={{mt: "10px"}}id="outlined-basic" label="Student Last Name" variant="outlined" fullWidth
            value={lastname}
            onChange={(e)=>setLastname(e.target.value)}
            />
            <Button sx={{mt: '10px',mb: 0}} variant="contained" color="secondary" onClick={handleClick}>
                Submit
            </Button>
            </form>
   
        </Paper>
    </>
  )
}

export default Add