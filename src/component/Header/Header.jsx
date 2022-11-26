import React,{useState} from "react";
import { styled, alpha } from '@mui/material/styles';
import Box from "@mui/material/Box";
import AppBar from "@mui/material/AppBar";
import Toolbar  from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import InputBase from '@mui/material/InputBase';
import SearchIcon from '@mui/icons-material/Search';
import Grid from '@mui/material/Grid';
import IconButton  from "@mui/material/IconButton";
import AddIcon from '@mui/icons-material/Add';

const Search = styled('div')(({ theme }) => ({
    position: 'relative',
    borderRadius: theme.shape.borderRadius,
    backgroundColor: alpha(theme.palette.common.white, 0.15),
    '&:hover': {
      backgroundColor: alpha(theme.palette.common.white, 0.25),
    },
    marginLeft: 0,
    width: '100%',
    [theme.breakpoints.up('sm')]: {
      marginLeft: theme.spacing(1),
      width: 'auto',
    },
  }));
  
  const SearchIconWrapper = styled('div')(({ theme }) => ({
    padding: theme.spacing(0, 2),
    height: '100%',
    position: 'absolute',
    pointerEvents: 'none',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  }));
  
  const StyledInputBase = styled(InputBase)(({ theme }) => ({
    color: 'inherit',
    '& .MuiInputBase-input': {
      padding: theme.spacing(1, 1, 1, 0),
      // vertical padding + font size from searchIcon
      paddingLeft: `calc(1em + ${theme.spacing(4)})`,
      transition: theme.transitions.create('width'),
      width: '100%',
      [theme.breakpoints.up('sm')]: {
        width: '12ch',
        '&:focus': {
          width: '20ch',
        },
      },
    },
  }));



const Header =({setSearch, setOpen})=>{
    
    
  const handleSearch=(e)=>{
    setSearch(e.target.value)
  }

  const handleClickOpen = () => {
    setOpen(true);
  }

    return(
        <>
        <Box>
            <AppBar sx={{backgroundColor:'#ef5350'}}>
                <Toolbar sx={{display:'flex', justifyContent:'space-between'}}>
                    <Grid container sx={{width:'30%', justifyContent:'space-between', gap:'20px'}}>
                      <Typography>Todoist</Typography>
                        <Search>
                            <SearchIconWrapper>
                                <SearchIcon />
                            </SearchIconWrapper>
                            <StyledInputBase
                                placeholder="Search…"
                                inputProps={{ 'aria-label': 'search' }}
                                onChange={handleSearch}
                            />
                        </Search>
                    </Grid>
                    <Grid>
                        <IconButton onClick={handleClickOpen}>
                            <AddIcon sx={{color:'white'}} />
                        </IconButton>
                    </Grid>
                    {/* <Box sx={{position:'absolute', top:'5px', right:'25px'}} display={ShowCalendar ? 'flex' : 'none'}>
                        <MyCalendar/>
                    </Box> */}
                </Toolbar>
            </AppBar>
        </Box>
      </>  
    )
}

export default Header;