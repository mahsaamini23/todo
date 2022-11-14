import React,{useState} from "react";
import Header from "../../component/Header/Header";
import Main from "../../component/Main/Main";
import Grid from "@mui/material/Grid";

const Home = () => {
    
    const [search, setSearch] = useState('');
    const [open, setOpen] = useState(false);

    return(
       <Grid>
            <Header setSearch={setSearch} setOpen={setOpen}/>
            <Main search={search} open={open} setOpen={setOpen}/>
       </Grid> 
    )
}

export default Home;