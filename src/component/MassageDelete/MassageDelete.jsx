import React from "react";
import { useSelector, useDispatch } from "react-redux";
import {DeleteItem} from "../redux/todoReducer/todoReducer";
import Grid from "@mui/material/Grid";
import Dialog from '@mui/material/Dialog';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import ErrorOutlineIcon from '@mui/icons-material/ErrorOutline';

const MassageDelete =({openDialog, setOpenDialog,id})=>{
    const dispatch = useDispatch();

    const handelDelete = (id) =>{
        dispatch(DeleteItem(id))
        setOpenDialog(false)
    }

    const handleCloseDialog =()=>{
        setOpenDialog(false)
    }

    return(
        <Dialog open={openDialog} onClose={handleCloseDialog} >
            <Grid container sx={{width:{xs:'250px', md:'370px'}, height:'150px', padding:'20px 10px 0 10px',gap:'20px',justifyContent:'space-between'}}>
                <Grid container item sx={{display:'flex', flexRow:''}}>
                    <ErrorOutlineIcon  sx={{color:'#ef5350', display:{xs:'none', md:'block'}}}/>
                    <Typography sx={{fontSize:{xs:'14px', md:''}}}>
                        Are you sure you want to delete this task?
                    </Typography>
                </Grid>
                <Grid container sx={{justifyContent:'center', gap:'10px'}}>
                    <Button onClick={()=>handelDelete(id)} sx={{backgroundColor:'#ef5350',color:'white',padding:'0 30px', height:'30px'}}>
                        OK
                    </Button>
                    <Button onClick={handleCloseDialog} sx={{backgroundColor:'#bdbdbd', color:'white', padding:'0 10px', height:'30px'}}>
                        Cancel
                    </Button>
                </Grid>
            </Grid>  
        </Dialog>
    )
}

export default MassageDelete;