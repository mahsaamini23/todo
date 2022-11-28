import React,{useState} from "react";
import { useSelector, useDispatch } from "react-redux";
import {AddItem, DeleteItem, EditItem, CheckItem} from "../redux/todoReducer/todoReducer";
import MassageDelete from "../MassageDelete/MassageDelete";
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



const CardTask =({search, setForm, setMode,setOpen})=>{

    const [openDialog, setOpenDialog] = useState(false)
    const [color, setColor] = useState(false)
    const [id , setId] = useState(0)
    const task = useSelector((state)=>state.todo);
    const dispatch = useDispatch();

    

    const handelEdit = (item) =>{
        setOpen(true)
        dispatch(EditItem(item))
        setMode(false);
        setForm(item);
    }
    
    const handleShowMassageDelete =(id)=>{
        setOpenDialog(true)
        setId(id)
    }

    const handelCheck = (id)=>{
        dispatch(CheckItem(id))
    }

    return(
        <>
        {task.filter(t => search === "" ? t : t.title.toLowerCase().includes(search.toLowerCase()))
        .map(task =>(
        <Card key={task.id} sx={{width:'80%', boxShadow:'none', border:'1px solid #e0e0e0',margin:'5px 10px'}}>
            <CardContent sx={{display:'flex', flexDirection:{xs:'column', md:'row'},justifyContent:{md:'space-between'}, gap:{xs:'15px', md:'0'}}}>
                <Grid sx={{display:'flex',gap:'10px'}}>
                    <CheckBox onClick={()=>handelCheck(task.id)}/>
                    <Grid sx={{display:'flex', flexDirection:'column',paddingTop:'10px'}}>
                        <Typography sx={{fontSize:'15px'}}>{task.title}</Typography>
                        <Typography sx={{fontSize:'12px'}}>{task.description}</Typography>
                    </Grid>
                </Grid>
                <Grid sx={{display:'flex', justifyContent:{xs:'flex-end', md:''}}}>
                    <Grid sx={{padding:{xs:'9px 6px 0 0',md:'13px 5px 0 0'}, color:'grey'}} >{
                        task.status ? 
                        (<DoneIcon color='success'/>)
                        :
                        (<DoneIcon color='grey'/>)
                    }
                    </Grid>
                    <IconButton onClick={()=>handelEdit(task)}>
                        <EditIcon/>
                    </IconButton>
                    <IconButton onClick={()=>handleShowMassageDelete(task.id)}>
                        <DeleteIcon/>
                    </IconButton>
                </Grid>
            </CardContent>
            <MassageDelete setOpenDialog={setOpenDialog} openDialog={openDialog} id={id}/>
        </Card>
        ))}
        </>
    )
}

export default CardTask;