import React,{useState} from "react";
import moment from "moment";
import CardTask from "../../component/CardTask/CardTask";
import AddTask from "../../component/AddTask/AddTask";
import MyCalendar from "../Calendar/Calendar";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import IconButton from "@mui/material/IconButton";
import AddIcon from "@mui/icons-material/Add";
import Dialog from '@mui/material/Dialog';
import Slide from '@mui/material/Slide';



const Transition = React.forwardRef(function Transition(props, ref) {
    return <Slide direction="down" ref={ref} {...props} />;
});

const Main=({search, open, setOpen, ShowCalendar})=>{
    const [form,setForm] = useState({id:Math.floor(Math.random()*1000), title:"" ,description:"", status:false}) 
    const [mode ,setMode] = useState(true);
    const [date, setDate] = useState(new Date());

    const handleClickOpen = () => {
      setOpen(true);
    };
  
    const handleClose = () => {
      setOpen(false);
    };

    return(
        <Grid sx={{width:{xs:'100%', md:'80%'}, margin:{xs:'80px 0 0 15px',md:'100px auto 0 auto'}, display:'flex',flexDirection:'column',alignItems:{xs:'center',md:'flex-start'} }}>
            <Box sx={{ position:'absolute',top:'5px',zIndex:'10', right:{xs:'20px',md:'40px'}, flexDirection:'row'}} display={ShowCalendar ? 'flex' : 'none'}>
                <MyCalendar data={date} setData={setDate}/>
            </Box>
                <Grid container item sx={{paddingLeft:{xs:'70px', md:'280px'}}}>
                    <Typography sx={{color:'grey', fontSize:'16px', marginBottom:'20px'}}>
                        {moment(date).format('MMMM Do YYYY')}
                    </Typography>
                </Grid>
                <Typography sx={{fontSize:'16px', color:'grey',padding:'0 10px'}}>
                    Task
                </Typography>
                <Grid container item sx={{display:{xs:'none', md:'flex'},alignItems:'center',}}>
                    <IconButton onClick={handleClickOpen}>
                        <AddIcon sx={{color:'#ef5350'}}/>
                    </IconButton>
                    <Typography sx={{fontSize:'14px', color:'grey'}}>
                        Add task
                    </Typography>
                </Grid>
                <CardTask search={search} setForm={setForm} setMode={setMode} setOpen={setOpen}/> 
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