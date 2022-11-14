import React, {useState} from "react";
import { useSelector, useDispatch } from "react-redux";
import {AddItem , EditItem} from "../../component/redux/todoReducer/todoReducer";
import Grid from "@mui/material/Grid";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";

const AddTask =({form ,setForm , mode, setMode,setOpen})=>{
    const [todo,setTodo] = useState();
    const task = useSelector((state) => state.todo)
    const dispatch = useDispatch();

    const handleSubmit = (e)=>{
        e.preventDefault();
        if(mode){
            dispatch(AddItem(form))
        }else{
            dispatch(EditItem(form))
        }
        setForm({id:"" , title:"" , description:"" , status:""})
        setMode(true)
        setOpen(false)
    }

    const handelChange =(e)=>{
        setForm({...form , [e.target.name] : e.target.value});
    }

    return(
        <Grid component="form" noValidate onSubmit={handleSubmit} 
        sx={{ width:'450px',border:'1px solid grey' , borderRadius:'10px', padding:'15px 25px'}}>
            <Typography>Add Task</Typography>
            <Grid sx={{display:'flex', flexDirection:'column',margin:'20px 0'}}>
                <TextField 
                    variant="standard" 
                    label="Task" 
                    sx={{width:'70%'}}
                    name="title"
                    value={form.title} 
                    onChange={handelChange}
                    />
                <TextField 
                    variant="standard" 
                    label="Description" 
                    sx={{width:'70%',marginTop:'10px'}}
                    name="description" 
                    value={form.description} 
                    onChange={handelChange}
                />
            </Grid>
            <Grid sx={{display:'flex',flexDirection:'row-reverse', gap:'10px',marginTop:'40px'}}>
                <Button 
                sx={{
                    backgroundColor:'#bdbdbd',
                    color:'White',
                    fontSize:'12px',
                    textTransform:"none",
                    }}>
                        Cancel
                </Button>
                <Button type="submit"
                
                sx={{
                    backgroundColor:'#ef5350', 
                    color:'White',fontSize:'12px',
                    textTransform:"none" 
                    }}>
                        {mode===true ? "Add": "Edit"}
                </Button>
            </Grid>
        </Grid>
    )
}

export default AddTask; 