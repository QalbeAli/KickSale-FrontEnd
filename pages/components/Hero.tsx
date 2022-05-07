import { Typography, Container, Button, Stack, styled, Grid } from '@mui/material';
import Box from '@mui/material/Box';
import Image from 'next/image';
import images from "../../public/images/images";
export default function Hero() {
    return(
        <>
        <Box
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
                        <Box display="flex" justifyContent="center" alignItems="center" p={5}>
                                <Box display="flex"  p={3}  border="7px solid #CB3694" borderRadius="30px" sx={{backgroundColor:"#16182D"}}>
                                    <Box>
                                    <Image src={images.mirl2} width="250" height="250" />
                                    </Box>

                                    <Box pl={2}>
                                    <Typography variant="h4" color="white">
                                        Kickwe MiRl
                                    </Typography>
                                    <Typography variant="subtitle2" color="white">
                                        the journey of kikwe is starting
                                    </Typography>

                                        <Box pt={6} display="flex" >
                                            <Button variant="contained" sx={{backgroundColor:"#CB3694", borderRadius:"20px", fontSize:"0.7rem"}}>
                                                 Registration Opened
                                            </Button>
                                            <Box pt={1} pl={1}>
                                            <Image src={images.avax} width="18" height="18" />
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

                                       <Box p={2} display="flex" justifyContent="center">
                                            <Button variant="contained" sx={{width:"100%", fontWeight:"semi-bold" ,fontSize:"1rem", borderRadius:"20px", backgroundColor:"#5133D5"}} >
                                            More Details
                                            </Button>
                                        </Box> 

                                    </Box>
                                    
                                </Box>
                                <Box>
                                    
                                </Box>
                        </Box>
                    </Grid>
                    <Grid item md={6} xs={12}>
                        <Box  p={5}>
                                <Box display="flex"  p={3}  border="7px solid #CB3694" borderRadius="30px" sx={{backgroundColor:"#16182D"}}>
                                    <Box>
                                    <Image src={images.metaland}  />
                                    </Box>

                                    <Box pl={2}>
                                    <Typography variant="h4" color="white">
                                        MetaLand
                                    </Typography>
                                    <Typography variant="subtitle2" color="white">
                                    Metaland is a virtual world where <br /> players can build, own, and monetize their gaming.
                                    </Typography>

                                        <Box pt={1} display="flex" >
                                            <Button variant="contained" sx={{backgroundColor:"#CB3694", borderRadius:"20px", fontSize:"0.7rem"}}>
                                                 Registration Opened
                                            </Button>
                                            <Box pt={1} pl={1}>
                                            <Image src={images.avax} width="18" height="18" />
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

                                       <Box p={2} display="flex" justifyContent="center">
                                            <Button variant="contained" sx={{width:"100%", fontWeight:"semi-bold" ,fontSize:"1rem", borderRadius:"20px", backgroundColor:"#5133D5"}} >
                                            More Details
                                            </Button>
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
                        <Box display="flex" justifyContent="center" alignItems="center" p={5}>
                                <Box display="flex"  p={3}  border="7px solid #CB3694" borderRadius="30px" sx={{backgroundColor:"#16182D"}}>
                                    <Box>
                                    <Image src={images.nose} width="250" height="250" />
                                    </Box>

                                    <Box pl={2}>
                                    <Typography variant="h4" color="white">
                                    KickMe NOS
                                    </Typography>
                                    <Typography variant="subtitle2" color="white">
                                    Metaland is a virtual world where <br /> players can build, own, and monetize  their  gaming.
                                    </Typography>

                                        <Box pt={1} display="flex" >
                                            <Button variant="contained" sx={{backgroundColor:"#CB3694", borderRadius:"20px", fontSize:"0.7rem"}}>
                                                 Registration Opened
                                            </Button>
                                            <Box pt={1} pl={1}>
                                            <Image src={images.avax} width="18" height="18" />
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

                                       <Box p={2} display="flex" justifyContent="center">
                                            <Button variant="contained" sx={{width:"100%", fontWeight:"semi-bold" ,fontSize:"1rem", borderRadius:"20px", backgroundColor:"#5133D5"}} >
                                            More Details
                                            </Button>
                                        </Box> 

                                    </Box>
                                    
                                </Box>
                                <Box>
                                    
                                </Box>
                        </Box>
                    </Grid>
                    <Grid item md={6} xs={12}>
                        <Box  p={5}>
                                <Box display="flex"  p={3}  border="7px solid #CB3694" borderRadius="30px" sx={{backgroundColor:"#16182D"}}>
                                    <Box>
                                    <Image src={images.avai}  />
                                    </Box>

                                    <Box pl={2}>
                                    <Typography variant="h4" color="white">
                                        MetaLand
                                    </Typography>
                                    <Typography variant="subtitle2" color="white">
                                    Metaland is a virtual world where <br /> players can build, own, and monetize their gaming.
                                    </Typography>

                                        <Box pt={1} display="flex" >
                                            <Button variant="contained" sx={{backgroundColor:"#CB3694", borderRadius:"20px", fontSize:"0.7rem"}}>
                                                 Registration Opened
                                            </Button>
                                            <Box pt={1} pl={1}>
                                            <Image src={images.avax} width="18" height="18" />
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

                                       <Box p={2} display="flex" justifyContent="center">
                                            <Button variant="contained" sx={{width:"100%", fontWeight:"semi-bold" ,fontSize:"1rem", borderRadius:"20px", backgroundColor:"#5133D5"}} >
                                            More Details
                                            </Button>
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