import React from "react";
import { styled, alpha } from '@mui/material/styles';
import Box from "@mui/material/Box";
import AppBar from "@mui/material/AppBar";
import Toolbar  from "@mui/material/Toolbar";
import InputBase from '@mui/material/InputBase';
import SearchIcon from '@mui/icons-material/Search';
import Grid from '@mui/material/Grid';
import IconButton  from "@mui/material/IconButton";
import AddIcon from '@mui/icons-material/Add';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';


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
      paddingLeft: `calc(1em + ${theme.spacing(4)})`,
      transition: theme.transitions.create('width'),
      width: '100%',
      [theme.breakpoints.up('sm')]: {
        width: '20ch',
        '&:focus': {
          width: '30ch',
        },
      },
    },
}));

const Header =({setSearch, setOpen, setShowCalendar})=>{
    
    
  const handleSearch=(e)=>{
    setSearch(e.target.value)
  }

  const handleClickOpen = () => {
    setOpen(true);
  }

  const handleShowCalendar=()=>{
    setShowCalendar(current => !current)
}

    return(
        <>
        <Box>
            <AppBar sx={{backgroundColor:'#ef5350'}}>
                <Toolbar sx={{display:'flex', justifyContent:'space-between'}}>
                    <Grid container sx={{width:'50%', justifyContent:'flex-start'}}>
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
                        <IconButton onClick={handleShowCalendar}>
                            <CalendarMonthIcon sx={{color:'white'}}/>
                        </IconButton>
                    </Grid>
                </Toolbar>
            </AppBar>
        </Box>
      </>  
    )
}

export default Header;