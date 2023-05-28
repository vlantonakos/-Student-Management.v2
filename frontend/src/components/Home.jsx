import React, { useEffect, useState } from 'react';
import Container from '@mui/material/Container';
import Paper from '@mui/material/Paper';
import Button from '@mui/material/Button';
import Appbar from './Appbar'
import { Typography } from '@mui/material';
import { useNavigate } from "react-router-dom";

const Home = () => {
    const paperStyle={padding:'50px 20px', width:600,margin:"20px auto"}
    const[students,setStudents]=useState([])
    const navigate = useNavigate();

    const fetchStudents = () => {
        fetch('/getAll')
        .then((res) => res.json())
        .then((result) => {
          setStudents(result);
        })
        .catch((error) => {
          console.error('Error fetching students:', error);
        });
    }

    useEffect(() => {
        fetchStudents();
      }, []);

  return (
    <>
        <Appbar />
        <Container sx={{textAlign:'center'}}>
        <Button variant="contained" sx={{mr:25,mt: 5,mb: 5}} onClick={() => {
            navigate('/add')
        }}>Add Student</Button>
        <Button variant="contained" sx={{mt: 5,mb: 5}} onClick={() => {
            navigate('/delete')
        }}>Delete Student</Button>

        <Typography variant='h3'>Students List</Typography>
        <Paper elevation={3} style={paperStyle}>
        {students.map(student=>(
            <Paper elevation={6} style={{margin:"10px",padding:"15px", textAlign:"left"}} key={student.id}>
                Id:&nbsp;{student.id}<br/>
                Name:&nbsp;{student.name}<br/>
                Last name:&nbsp;{student.lastname}
            </Paper>
        ))}
        </Paper>
        </Container>
    </>
  )
}

export default Home