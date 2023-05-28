import React, { useState } from 'react';
import { ToastContainer,toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Appbar from './Appbar'
import Paper from '@mui/material/Paper';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { useNavigate } from "react-router-dom";

const Del = () => {
    const paperStyle={padding:'50px 20px', width:600,margin:"20px auto"}
    const[id,setId]=useState('')
    const navigate = useNavigate();

    const handleClick = () => {
        const student = {id}
        fetch(`/delete/${id}`, {
            method:"DELETE",
            headers:{"Content-Type":"application/json"},
            body:JSON.stringify(student)
        }).then((response) => {
            if(!response.ok) {
                throw new Error('User Not Found.')
            }
            console.log('Student deleted.')
            navigate('/')
        }).catch((error) => {
            toast.error('Error deleting student: ' + error.message);
        });
    }

  return (
    <>
        <Appbar />
        <Paper elevation={3} style={paperStyle}>
            <h1 style={{color:"blue"}}>Delete Student</h1>

            <form noValidate autoComplete="off">
    
            <TextField sx={{mt: 1}}id="outlined-basic" label="Student Id" variant="outlined" fullWidth
            value={id}
            onChange={(e)=>setId(e.target.value)}
            />
            <Button sx={{mt: 2,mb: 0}} variant="contained" color="secondary" onClick={handleClick}>
                Submit
            </Button>
            <ToastContainer />
            </form>
   
        </Paper>
    </>
  )
}

export default Del