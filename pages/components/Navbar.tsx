import { Typography, Container, Button, Stack, styled } from '@mui/material';
import Box from '@mui/material/Box';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Image from 'next/image';
import images from "../../public/images/images";
import { lineHeight } from '@mui/system';


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
    return(
        <>

        <Box
        sx={{
            backgroundImage: `url(images/bg1.png)`,
            maxWidth:"1920px",
            minWidth:"500px",
            minHeight:"680px",
            mx:"auto",
                  
        }}
        >

            <Box>
            <AppBar position="static"  sx={{backgroundColor:"black", width:"100%", borderRadius:"80px" }}   >
            <Container style={{ padding: 0 }}>
                <Toolbar>
                    <Box p={1.5} >
                        <Image src={images.logo1} width="310" />
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


                    <Box style={{display:"flex", justifyContent:"flex-end", alignItems:"flex-end",flexGrow:1}}>
                        <Box pr={2}>
                        <StyledButton variant="contained" sx={{backgroundColor:"#31303E"}} >
                             ACCOUNTS
                        </StyledButton>
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
            </Box>



            <Box sx={{transform: "translateY(150%)",  }}>
                <Typography variant="h2" color="white" textAlign="center">
                    A LAUNCHPAD FOR <br /> INITIAL METAVERSE OFFEREINGS
                </Typography>
                <Box sx={{display:"flex", justifyContent:"center", alignItems:"center"}}>
                    <Box pr={2}>
                        <Button variant="contained" sx={{borderRadius:"20px", fontSize:"1rem", backgroundColor:"#5133D5"}}>
                        DISCOVER
                        </Button>
                    </Box>
                   
                    <Box>
                        <Button variant="contained" sx={{borderRadius:"20px", fontSize:"1rem", backgroundColor:"#31303E"}}>
                        BUY TOKENS
                        </Button>
                    </Box>
                    
                </Box>
            </Box>
             
        
        </Box>
       
        </>
          
    )
}



            

 
 

