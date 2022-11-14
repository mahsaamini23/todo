import React,{useState} from "react";
import CardTask from "../../component/CardTask/CardTask";
import AddTask from "../../component/AddTask/AddTask";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import IconButton from "@mui/material/IconButton";
import AddIcon from "@mui/icons-material/Add";
import Dialog from '@mui/material/Dialog';
import Slide from '@mui/material/Slide';


const Transition = React.forwardRef(function Transition(props, ref) {
    return <Slide direction="down" ref={ref} {...props} />;
});

const Main=({search, open, setOpen})=>{
    const [form,setForm] = useState({id:"", title:"" ,description:"", status:false}) 
    const [mode ,setMode] = useState(true);


    const handleClickOpen = () => {
      setOpen(true);
    };
  
    const handleClose = () => {
      setOpen(false);
    };

    return(
        <Grid sx={{ margin:'100px 0 0 350px', display:'flex',flexDirection:'column',alignItems:'flex-start' }}>
                <Typography sx={{fontSize:'16px', color:'grey',padding:'0 10px'}}>
                    Task
                </Typography>
                <Grid sx={{display:'flex',alignItems:'center'}}>
                    <IconButton onClick={handleClickOpen}>
                        <AddIcon sx={{color:'#ef5350'}}/>
                    </IconButton>
                    <Typography sx={{fontSize:'14px', color:'grey'}}>Add task</Typography>
                </Grid>
                
                
                <CardTask search={search} setForm={setForm} setMode={setMode}/> 
                <Dialog
                open={open}
                TransitionComponent={Transition}
                keepMounted
                onClose={handleClose}
                aria-describedby="alert-dialog-slide-description">
                    <AddTask form={form} setForm={setForm} mode={mode} setMode={setMode} setOpen={setOpen}/>
                </Dialog>
        </Grid>
    )
}

export default Main;