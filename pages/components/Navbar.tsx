import { Typography, Container, Button, Stack, styled } from '@mui/material';
import Box from '@mui/material/Box';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Image from 'next/image';
import images from "../../public/images/images";
import { lineHeight } from '@mui/system';
import { useState } from 'react';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';


const StyledButton = styled(Button)(({ theme }) => `
font-size:1rem;
font-weight:semi-bold;
border-radius:20px;
height:2.5rem;
background-color:"red";
font-family:'Nexa Bold',Helvetica,Arial,Lucida,sans-serif;
margin-top:10px !important;
&:hover {
    background-color:#31303E ;
}
`)

export default function Navbar() {

    const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);
  const handleClick = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

    return(
        <>

        <Box
        sx={{
            backgroundImage: `url(images/bg1.png)`,
            maxWidth:"1980px",
            minWidth:"400px",
            minHeight:"780px",
            backgroundPosition:"center"
                  
        }}
        >

            <Box display="flex" justifyContent="center" alignItems="center">
                <Container style={{ padding: 0 }}>
            <AppBar position="static"  sx={{backgroundColor:"black", borderRadius:"80px", background:"rgba(0,0,0,.6)" }}   >
            <Container style={{ padding: 0 }}>
                <Toolbar >
                    <Box py={1.5} display="flex" justifyContent="center" alignItems="center">
                        <Image src={images.logo1} alt="image" width="310" />
                    </Box>

                    <Box pl={4} display="flex"  >
                        <Box pr={2} >
                        <StyledButton variant="contained" sx={{backgroundColor:"#31303E"}} >
                            IDO
                        </StyledButton>
                        </Box>
                        <Box pr={2}>
                        <StyledButton variant="contained"  sx={{borderRadius:"16rem", backgroundColor:"#31303E", color:"#8B70FF", fontWeight:"bold", fontSize:"1rem"}}>
                            IMO
                        </StyledButton>
                        </Box>
                        <Box>
                        <StyledButton variant="contained"  sx={{borderRadius:"16rem", backgroundColor:"#31303E", fontWeight:"semi-bold", fontSize:"1rem"}}>
                            IGO
                        </StyledButton>
                        </Box>
                        
                    </Box>


                    <Box px={2} style={{display:"flex", justifyContent:"flex-end", alignItems:"flex-end",flexGrow:1, }} >
                        <Box pr={2}>
                        <StyledButton variant="contained" sx={{backgroundColor:"#31303E"}}
                        id="demo-positioned-button"
                        aria-controls={open ? 'demo-positioned-menu' : undefined}
                        aria-haspopup="true"
                        aria-expanded={open ? 'true' : undefined}
                        onClick={handleClick} 
                        >
                             ACCOUNTS
                        </StyledButton>
                        <Menu
        id="demo-positioned-menu"
        aria-labelledby="demo-positioned-button"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        anchorOrigin={{
          vertical: 'bottom',
          horizontal: 'left',
        }}
        transformOrigin={{
          vertical: 'top',
          horizontal: 'left',
        }}
      >
        <MenuItem sx={{fontSize:"1.2rem"}} onClick={handleClose}>LOCKUP</MenuItem>
        <MenuItem sx={{fontSize:"1.2rem"}} onClick={handleClose}>STAKING</MenuItem>
        <MenuItem sx={{fontSize:"1.2rem"}} onClick={handleClose}>LINKING WALLETS</MenuItem>
        <MenuItem sx={{fontSize:"1.2rem"}} onClick={handleClose}>MY PORTFOLIO</MenuItem>
      </Menu>
                        </Box>
                        
                        <Box>
                        <StyledButton variant="contained" sx={{borderRadius:"20px",fontSize:"0.9rem", lineHeight:"1.5rem", fontWeight:"light", backgroundColor:"#5133D5"}}>
                             WALLET
                        </StyledButton>
                        </Box>
                    </Box>
                </Toolbar>
            </Container>


        </AppBar >
        </Container>
            </Box>




            



            <Box sx={{transform: "translateY(150%)",  }}>
                <Typography variant="h2" color="white"  textAlign="center">
                    A LAUNCHPAD FOR <br /> INITIAL METAVERSE OFFEREINGS
                </Typography>
                <Box py={3} sx={{display:"flex", justifyContent:"center", alignItems:"center"}}>
                    <Box pr={2}>
                        <StyledButton variant="contained" sx={{borderRadius:"20px", fontSize:"1rem", backgroundColor:"#5133D5"}}>
                        DISCOVER
                        </StyledButton>
                    </Box>
                   
                    <Box>
                        <StyledButton variant="contained" sx={{borderRadius:"20px", fontSize:"1rem", backgroundColor:"#31303E"}}>
                        BUY TOKENS
                        </StyledButton>
                    </Box>
                    
                </Box>
            </Box>
             
        
        </Box>
       
        </>
          
    )
}



            

 
 

