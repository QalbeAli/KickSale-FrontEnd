import { Typography, Container, Button, Stack, styled, Grid } from '@mui/material';
import Box from '@mui/material/Box';
import Image from 'next/image';
import images from "../../public/images/images";

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

export default function Display() {
    return(
        <>
        <Box pt={30} sx={{backgroundColor:"black"}}>
        <Box pt={20}  sx={{
            backgroundImage: `url(images/circle.png)`,
            backgroundColor:"black",
            backgroundPosition:"center",
            backgroundRepeat:"none",
        }}>
            <Box  >


                
                <Typography variant="h5" color="#CB3694" textAlign="center">
                    ABOUT STUDIO
                </Typography>
                <Typography variant="h3"  fontWeight="semi-bold"  textAlign="center">
                Say Wow to Our New KickSale Display.
                </Typography>
                <Typography variant="subtitle1"  fontWeight="semi-bold"  textAlign="center">
                Ideas that launch on Kicksale dont seem to be solely highly-vetted by our <br /> team of skilled analysts, however conjointly by industry leading expertise.

                </Typography>
            </Box>
                

                <Box pb={10}>
            <Grid container>
                <Grid item md="4" sm={4} xs="4">
                <Box py={3} >
                    <Image src={images.planet1} alt="image" width="235" height="240" />
                </Box>
                </Grid>
                <Grid item md="4" sm={4} xs="4">
                <Box pt={6} sx={{transform:"translateY(150%)"}} display="flex" justifyContent="center" alignItems="center">
                    <Box mr={3}>
                        <StyledButton variant="contained" sx={{backgroundColor:"black", border:"2px solid #CB3694", borderRadius:"20px", fontWeight:"semi-bold", fontSize:"1rem"}}>
                            Our Project
                        </StyledButton>
                    </Box>
                    <Box>
                        <StyledButton2 variant="contained" sx={{backgroundColor:"#5133D5", borderRadius:"20px", fontWeight:"semi-bold", fontSize:"1rem"}}>
                            Metaverse NFTs
                        </StyledButton2>
                    </Box>
                </Box>
                </Grid>
                <Grid item md="4" sm={4} xs="4">
                <Box pr={10} py={3} display="flex" justifyContent="flex-end" alignItems="flex-end">
                    <Image src={images.planet2} alt="image" width="275" height="280"  />
                </Box>
                </Grid>
            </Grid>
            </Box>
            </Box>
        </Box>
        </>
    )
}