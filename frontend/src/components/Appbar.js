import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';


const Appbar = () => {
  return (
    <>
        <AppBar position="static">
            <Toolbar sx={{justifyContent: 'center'}}>
                <Typography variant="h4">
                    Students Management
                </Typography>
            </Toolbar>
        </AppBar>
    </>
  )
}

export default Appbar