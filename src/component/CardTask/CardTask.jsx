import React,{useState} from "react";
import { useSelector, useDispatch } from "react-redux";
import {AddItem, DeleteItem, EditItem, CheckItem} from "../redux/todoReducer/todoReducer";
import MyCalendar from "../Calendar/Calendar";
import Box from "@mui/material/Box";
import Card from '@mui/material/Card';
import CardContent  from "@mui/material/CardContent";
import CheckBox  from "@mui/material/CheckBox";
import IconButton from "@mui/material/IconButton";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete" ;
import DoneIcon from '@mui/icons-material/Done';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';



const CardTask =({search, setForm, setMode})=>{

    const [ShowCalendar, setShowCalendar] = useState(false)
    const [color, setColor] = useState(false)
    const task = useSelector((state)=>state.todo);
    const dispatch = useDispatch();

    const handleShowCalendar=()=>{
        setShowCalendar(current => !current)
    }

    const handelEdit = (item) =>{
        dispatch(EditItem(item))
        setMode(false);
        setForm(item);
    }
    
    const handelDelete = (id) =>{
        dispatch(DeleteItem(id))
    }

    const handelCheck = (id)=>{
        dispatch(CheckItem(id))
        setColor(dispatch(CheckItem(id)))
    }
 

    return(
        <>
        <Box sx={{ position:'absolute',top:'5px',zIndex:'10', right:'10px', flexDirection:'row-reverse'}} display={ShowCalendar ? 'flex' : 'none'}>
            <MyCalendar/>
        </Box>
        {task.filter(t => search === "" ? t : t.title.toLowerCase().includes(search.toLowerCase()))
        .map(task =>(
            <Card key={task.id} sx={{width:'65%', boxShadow:'none', border:'1px solid #e0e0e0',margin:'5px 10px'}}>
            <CardContent sx={{display:'flex',justifyContent:'space-between'}}>
                <Grid sx={{display:'flex',gap:'10px'}}>
                    <CheckBox onClick={()=>handelCheck(task.id)}/>
                    <Grid sx={{display:'flex', flexDirection:'column',paddingTop:'10px'}}>
                        <Typography sx={{fontSize:'15px'}}>{task.title}</Typography>
                        <Typography sx={{fontSize:'12px'}}>{task.description}</Typography>
                    </Grid>
                </Grid>
                <Grid sx={{display:'flex'}}>
                    <IconButton >{
                        task.status ? 
                        (<DoneIcon color='success'/>)
                         :(
                            <DoneIcon color='grey'/>
                        )}
                    </IconButton>
                    <IconButton onClick={()=>handelEdit(task)}>
                        <EditIcon/>
                    </IconButton>
                    <IconButton onClick={()=>handelDelete(task.id)}>
                        <DeleteIcon/>
                    </IconButton>
                    <IconButton onClick={handleShowCalendar}>
                        <CalendarMonthIcon/>
                    </IconButton>
                </Grid>
            </CardContent>
            
        </Card>
        ))}
        </>
        
    )
}

export default CardTask;