import { Typography, Container, Button, Stack, styled, Grid } from '@mui/material';
import Box from '@mui/material/Box';
import Image from 'next/image';
import images from "../public/images/images";

const StyledButton = styled(Button)(({ theme }) => `
&:hover {
    background-color:#16182D; ;
}
`)

const StyledButton2 = styled(Button)(({ theme }) => `
box-shadow: 0 7px 22px 2px #5133d599;
&:hover {
    background-color:#16182D; ;
}
`)

export default function Hero() {
    return(
        <>
        <Box
        pb={10}
        sx={{
            backgroundImage: `url(images/Rectangle.png)`,
        }}
        >
            <Box pt={3}>
            <Typography variant="h2" sx={{fontSize:"3rem", fontWeight:"semi-bold", color:"#fff", textAlign:"center"}}>
                KICKSALE PROJECTS
            </Typography>
            </Box>
            <Container>
                <Grid container>
                    <Grid item md={6} xs={12}>
                        <Box className="flex items-center justify-center p-8"  >
                                <Box className="sm: flex p-3 rounded-2xl bg-[#16182D] "  border="7px solid #CB3694"  sx={{backgroundColor:"#16182D"}}>
                                    <Box >
                                    <Image src={images.mirl2} alt="image"  />
                                    </Box>

                                    <Box className='sm:  flex items-center  justify-center '>

                                    <Box pl={2}>
                                    <Typography variant="h5" fontWeight="bold" color="white">
                                        Kickwe MiRl
                                    </Typography>
                                    <Typography variant="subtitle2" color="white">
                                        the journey of kikwe is starting
                                    </Typography>

                                    <Box pt={1} display="flex" >
                                            <StyledButton variant="contained" className='w-[9rem] bg-[#CB3694] rounded-2xl text-[0.55rem]' >
                                                 Registration Opened
                                            </StyledButton>
                                            <Box pt={1} pl={1}>
                                            <Image src={images.avax} alt="image" width="18" height="18" />
                                            </Box>
                                        </Box>


                                        <Box p={1}>
                                            <Typography variant="subtitle2" color="white">
                                                Whitelist ends in:
                                             </Typography>
                                        </Box>
                                        <Box px={1}>
                                            <Typography variant="subtitle2" color="white">
                                            01:04:32:15
                                             </Typography>
                                        </Box>

                                       <Box p={2} >
                                            <StyledButton2 className='bg-[#5133D5]' variant="contained" sx={{ width:"10rem", fontSize:"0.8rem", fontWeight:"bold", borderRadius:"20px", backgroundColor:"#5133D5",}}  >
                                            More Details
                                            </StyledButton2>
                                        </Box> 

                                    </Box>
                                    </Box>
                                </Box>
                                
                        </Box>
                    </Grid>
                    <Grid item md={6} xs={12}>
                        <Box className="flex items-center justify-center p-8">
                        <Box className="sm: flex p-3 rounded-2xl bg-[#16182D] "  border="7px solid #CB3694"  sx={{backgroundColor:"#16182D"}}>
                                    <Box >
                                    <Image src={images.metaland} alt="image"  />
                                    </Box>

                                    <Box className='sm:  flex items-center  justify-center '>

                                    <Box pl={2}>
                                    <Typography variant="h5" fontWeight="bold" color="white">
                                        Kickwe MiRl
                                    </Typography>
                                    <Typography variant="subtitle2" color="white">
                                        the journey of kikwe is starting
                                    </Typography>

                                    <Box pt={1} display="flex" >
                                            <StyledButton variant="contained" className='w-[9rem] bg-[#CB3694] rounded-2xl text-[0.55rem]' >
                                                 Registration Opened
                                            </StyledButton>
                                            <Box pt={1} pl={1}>
                                            <Image src={images.avax} alt="image" width="18" height="18" />
                                            </Box>
                                        </Box>


                                        <Box p={1}>
                                            <Typography variant="subtitle2" color="white">
                                                Whitelist ends in:
                                             </Typography>
                                        </Box>
                                        <Box px={1}>
                                            <Typography variant="subtitle2" color="white">
                                            01:04:32:15
                                             </Typography>
                                        </Box>

                                       <Box p={2} >
                                            <StyledButton2 className='bg-[#5133D5]' variant="contained" sx={{ width:"10rem", fontSize:"0.8rem", fontWeight:"bold", borderRadius:"20px", backgroundColor:"#5133D5",}}  >
                                            More Details
                                            </StyledButton2>
                                        </Box> 

                                    </Box>
                                    </Box>
                                </Box>
                                <Box>
                                    
                                </Box>
                        </Box>
                    </Grid>
                </Grid>

                <Grid container>
                    <Grid item md={6} xs={12}>
                        <Box className="flex items-center justify-center p-8">
                        <Box className="sm: flex p-3 rounded-2xl bg-[#16182D] "  border="7px solid #CB3694"  sx={{backgroundColor:"#16182D"}}>
                                    <Box >
                                    <Image src={images.nose} alt="image"  />
                                    </Box>

                                    <Box className='sm:  flex items-center  justify-center '>

                                    <Box pl={2}>
                                    <Typography variant="h5" fontWeight="bold" color="white">
                                        Kickwe MiRl
                                    </Typography>
                                    <Typography variant="subtitle2" color="white">
                                        the journey of kikwe is starting
                                    </Typography>

                                    <Box pt={1} display="flex" >
                                            <StyledButton variant="contained" className='w-[9rem] bg-[#CB3694] rounded-2xl text-[0.55rem]' >
                                                 Registration Opened
                                            </StyledButton>
                                            <Box pt={1} pl={1}>
                                            <Image src={images.avax} alt="image" width="18" height="18" />
                                            </Box>
                                        </Box>


                                        <Box p={1}>
                                            <Typography variant="subtitle2" color="white">
                                                Whitelist ends in:
                                             </Typography>
                                        </Box>
                                        <Box px={1}>
                                            <Typography variant="subtitle2" color="white">
                                            01:04:32:15
                                             </Typography>
                                        </Box>

                                       <Box p={2} >
                                            <StyledButton2 className='bg-[#5133D5]' variant="contained" sx={{ width:"10rem", fontSize:"0.8rem", fontWeight:"bold", borderRadius:"20px", backgroundColor:"#5133D5",}}  >
                                            More Details
                                            </StyledButton2>
                                        </Box> 

                                    </Box>
                                    </Box>
                                </Box>
                                <Box>
                                    
                                </Box>
                        </Box>
                    </Grid>
                    <Grid item md={6} xs={12}>
                        <Box className="flex items-center justify-center p-8">
                        <Box className="sm: flex p-3 rounded-2xl bg-[#16182D] "  border="7px solid #CB3694"  sx={{backgroundColor:"#16182D"}}>
                                    <Box >
                                    <Image src={images.avai} alt="image"  />
                                    </Box>

                                    <Box className='sm:  flex items-center  justify-center '>

                                    <Box pl={2}>
                                    <Typography variant="h5" fontWeight="bold" color="white">
                                        Kickwe MiRl
                                    </Typography>
                                    <Typography variant="subtitle2" color="white">
                                        the journey of kikwe is starting
                                    </Typography>

                                    <Box pt={1} display="flex" >
                                            <StyledButton variant="contained" className='w-[9rem] bg-[#CB3694] rounded-2xl text-[0.55rem]' >
                                                 Registration Opened
                                            </StyledButton>
                                            <Box pt={1} pl={1}>
                                            <Image src={images.avax} alt="image" width="18" height="18" />
                                            </Box>
                                        </Box>


                                        <Box p={1}>
                                            <Typography variant="subtitle2" color="white">
                                                Whitelist ends in:
                                             </Typography>
                                        </Box>
                                        <Box px={1}>
                                            <Typography variant="subtitle2" color="white">
                                            01:04:32:15
                                             </Typography>
                                        </Box>

                                       <Box p={2} >
                                            <StyledButton2 className='bg-[#5133D5]' variant="contained" sx={{ width:"10rem", fontSize:"0.8rem", fontWeight:"bold", borderRadius:"20px", backgroundColor:"#5133D5",}}  >
                                            More Details
                                            </StyledButton2>
                                        </Box> 

                                    </Box>
                                    </Box>
                                </Box>
                                <Box>
                                    
                                </Box>
                        </Box>
                    </Grid>
                </Grid>
            </Container>
        </Box>
        </>
    )
}