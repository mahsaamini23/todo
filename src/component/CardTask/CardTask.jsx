import React,{useState} from "react";
import { useSelector, useDispatch } from "react-redux";
import {AddItem, DeleteItem, EditItem, CheckItem} from "../redux/todoReducer/todoReducer";
import Card from '@mui/material/Card';
import CardContent  from "@mui/material/CardContent";
import CheckBox  from "@mui/material/CheckBox";
import IconButton from "@mui/material/IconButton";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete" ;
import DoneIcon from '@mui/icons-material/Done';


const CardTask =({search, setForm, setMode})=>{

    const [color, setColor] = useState(false)
    const task = useSelector((state)=>state.todo);
    const dispatch = useDispatch();

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
        {task.filter(t => search === "" ? t : t.title.toLowerCase().includes(search.toLowerCase()))
        .map(task =>(
            <Card key={task.id} sx={{width:'50%', boxShadow:'none', border:'1px solid #e0e0e0',margin:'5px 10px'}}>
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
                </Grid>
            </CardContent>
        </Card>
        ))}
        </>
        
    )
}

export default CardTask;