import React, {useState} from "react";
import { useDispatch } from "react-redux";
import {AddItem , EditItem} from "../../component/redux/todoReducer/todoReducer";
import Grid from "@mui/material/Grid";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";

const AddTask =({form ,setForm , mode, setMode,setOpen})=>{

    const [disable, setDisable] = useState(true)
    const dispatch = useDispatch();

    const handleSubmit = (e)=>{
        e.preventDefault();
        if(mode && form.title.length > 0 && form.description.length > 0){
            setDisable(!disable)
            dispatch(AddItem(form))
            setOpen(false)
        }else if(!mode && form.title.length > 0 && form.description.length > 0){
            setDisable(!disable)
            dispatch(EditItem(form))
            setOpen(false)
        }
        setForm({id:"" , title:"" , description:"" , status:""})
        setMode(true)
        setDisable(!disable)
    }

    const handelChange =(e)=>{
        setForm({...form , [e.target.name] : e.target.value});
    }

    const handleCancel =()=>{
        setOpen(false)
    }

    return(
        <Grid component="form" noValidate onSubmit={handleSubmit}
        sx={{ width:{xs:'250px',md:'450px'},border:'1px solid grey' , borderRadius:'2px', padding:'15px 25px'}}>
            <Typography>Add Task</Typography>
            <Grid sx={{display:'flex', flexDirection:'column',margin:'20px 0'}}>
                <TextField 
                    variant="standard" 
                    label="Task" 
                    sx={{width:{xs:'100%',md:'70%'}}}
                    name="title"
                    value={form.title} 
                    onChange={handelChange}
                    />
                <TextField 
                    variant="standard" 
                    label="Description" 
                    sx={{width:{xs:'100%',md:'70%'},marginTop:'10px'}}
                    name="description" 
                    value={form.description} 
                    onChange={handelChange}
                />
            </Grid>
            <Grid sx={{display:'flex',flexDirection:{xs:'row',md:'row-reverse'}, gap:'10px',marginTop:'40px'}}>
                <Button 
                onClick={handleCancel}
                sx={{
                    backgroundColor:'#bdbdbd',
                    color:'White',
                    fontSize:'12px',
                    textTransform:"none",
                    }}>
                        Cancel
                </Button>
                <Button type="submit"
                    disable={disable.toString()}
                    sx={{
                        backgroundColor:'#ef5350', 
                        color:'White',fontSize:'12px',
                        textTransform:"none" 
                    }}
                >
                    {mode===true ? "Add": "Edit"}
                </Button>
            </Grid>
        </Grid>
    )
}

export default AddTask; 