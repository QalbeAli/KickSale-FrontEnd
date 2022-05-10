import { Typography, Container, Button, Stack, styled, Grid, Accordion, } from '@mui/material';
import Box from '@mui/material/Box';
import Image from 'next/image';
import images from "../../public/images/images";
import TextField from '@mui/material/TextField';



export default function Ethereum() {
    return(
        <>
        <Box py={20} sx={{backgroundColor:"black"}}>

            <Container>
            <Box
            
            sx={{
                backgroundImage: `url(images/ethbg.png)`,
                backgroundSize:"cover",
                backgroundRepeat:"round",
                maxHeight:"398px",
                // margin: "mx auto",
                // backgroudn
            }}
            >

                <Box display="flex" justifyContent="space-evenly"  >
                    <Box   sx={{transform: "translateY(-21%)",  }} >
                        <Image src={images.eth} alt="image" width="450" height="500" />
                    </Box>

                    <Box py={10}  >
                            <Typography variant="h4" textAlign="start" >
                            FOLLOW & SUBSCRIBE TO <br /> OUR NEWSLETTER.
                            </Typography>
                            <Typography variant="subtitle1" textAlign="start" >
                            Ready to get started, Get our Newsletter and join the Community!
                            </Typography>

                            <Box mt={3} display="flex" border="2px solid white" width="80%" sx={{borderRadius:"20px"}}>
                                <TextField 
                                label="Your Email"
                                style={{width:"100%", height:"50px", borderRadius:"20px"}}
                                />

                                <Box py={1} px={2} >
                                <Button variant="contained" sx={{borderRadius:"20px", backgroundColor:"#5133D5", width:"7rem", fontSize:"1rem"}}>
                                Subscribe
                                </Button>
                                </Box>
                            </Box>
                    </Box>
                    
                </Box>

            </Box>
            </Container>
        </Box>
        </>
    )
}