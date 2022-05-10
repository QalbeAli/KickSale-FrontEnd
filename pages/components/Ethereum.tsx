import { Typography, Container, Button, Stack, styled, Grid, Accordion, } from '@mui/material';
import Box from '@mui/material/Box';
import Image from 'next/image';
import images from "../../public/images/images";
import TextField from '@mui/material/TextField';

const StyledButton2 = styled(Button)(({ theme }) => `
box-shadow: 0 7px 22px 2px #5133d599;
&:hover {
    background-color:#16182D; ;
}
`)


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

                                <Box pt={0.5} px={0.5} >
                                <StyledButton2 variant="contained" sx={{borderRadius:"20px", backgroundColor:"#5133D5", width:"7.5rem",  fontSize:"1rem"}}>
                                Subscribe
                                </StyledButton2>
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