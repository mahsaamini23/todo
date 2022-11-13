import React,{useState} from "react";
import MyCalendar from "../Calendar/Calendar";
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

const Header =()=>{
    const [ShowCalendar, setShowCalendar] = useState(false)

    const handleShowCalendar=()=>{
        setShowCalendar(current => !current)
    }

    return(
        <>
        <Box>
            <AppBar sx={{backgroundColor:'#ef5350'}}>
                <Toolbar sx={{display:'flex', justifyContent:'space-between'}}>
                    <Grid>
                        <Search>
                            <SearchIconWrapper>
                                <SearchIcon />
                            </SearchIconWrapper>
                            <StyledInputBase
                                placeholder="Search…"
                                inputProps={{ 'aria-label': 'search' }}
                            />
                        </Search>
                    </Grid>
                    <Grid>
                        <IconButton>
                            <AddIcon sx={{color:'white'}}/>
                        </IconButton>
                        <IconButton>
                            <CalendarMonthIcon sx={{color:'white'}} onClick={handleShowCalendar}/>
                        </IconButton>
                    </Grid>
                    {/* <Box sx={{position:'absolute', top:'5px', right:'25px'}} display={ShowCalendar ? 'flex' : 'none'}>
                        <MyCalendar/>
                    </Box> */}
                </Toolbar>
            </AppBar>
        </Box>
        <Box sx={{padding:'5px 25px  0 0 ', flexDirection:'row-reverse'}} display={ShowCalendar ? 'flex' : 'none'}>
            <MyCalendar/>
        </Box>
        </>
        
    )
}

export default Header;