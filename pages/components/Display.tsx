import { Typography, Container, Button, Stack, styled, Grid } from '@mui/material';
import Box from '@mui/material/Box';
import Image from 'next/image';
import images from "../../public/images/images";
export default function Display() {
    return(
        <>
        <Box sx={{
            backgroundImage: `url(images/circle.png)`,
            backgroundColor:"black",
            backgroundPosition:"center",
        }}>
            <Box py={30} >


                
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
                 <Box py={3} display="flex" justifyContent="flex-start" alignItems="flex-start">
                    <Image src={images.planet1} alt="image" width="265" height="270" />
                </Box>
                
                <Box display="flex" justifyContent="center" alignItems="center">
                    <Box mr={3}>
                        <Button variant="contained" sx={{backgroundColor:"black", border:"2px solid #CB3694", borderRadius:"20px", fontWeight:"semi-bold", fontSize:"1rem"}}>
                            Our Project
                        </Button>
                    </Box>
                    <Box>
                        <Button variant="contained" sx={{backgroundColor:"#5133D5", borderRadius:"20px", fontWeight:"semi-bold", fontSize:"1rem"}}>
                            Metaverse NFTs
                        </Button>
                    </Box>
                </Box>

                <Box pr={10} py={3} display="flex" justifyContent="flex-end" alignItems="flex-end">
                    <Image src={images.planet2} alt="image" width="245" height="250"  />
                </Box>

            
        </Box>
        </>
    )
}