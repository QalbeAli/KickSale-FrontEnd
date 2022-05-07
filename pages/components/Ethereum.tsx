import { Typography, Container, Button, Stack, styled, Grid } from '@mui/material';
import Box from '@mui/material/Box';
import Image from 'next/image';
import images from "../../public/images/images";
import TextField from '@mui/material/TextField';

export default function Ethereum() {
    return(
        <>
        <Box py={10} sx={{backgroundColor:"black"}}>

            <Container>
            <Box
            
            sx={{
                backgroundImage: `url(images/ethbg.png)`,
                backgroundRepeat:"no-repeat",
                backgroundSize:"cover",
                height:"398px"
            }}
            >

                <Box display="flex"  >
                    <Box   sx={{transform: "translateY(-21%)",  }} >
                        <Image src={images.eth} width="450" height="500" />
                    </Box>

                    <Box pt={15} pl={10} >
                            <Typography variant="h4" textAlign="start" >
                            FOLLOW & SUBSCRIBE TO <br /> OUR NEWSLETTER.
                            </Typography>
                            <Typography variant="subtitle1" textAlign="start" >
                            Ready to get started, Get our Newsletter and join the Community!
                            </Typography>

                            <Box mt={3} display="flex" border="2px solid white" width="60%" sx={{borderRadius:"20px"}}>
                                <TextField 
                                label="Your Email"
                                style={{width:"100%", height:"50px", borderRadius:"20px"}}
                                />

                                <Box  pt={1} >
                                <Button variant="contained" sx={{borderRadius:"20px", backgroundColor:"#5133D5"}}>
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