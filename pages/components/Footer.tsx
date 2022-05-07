import { Typography, Container, Button, Stack, styled, Grid } from '@mui/material';
import Box from '@mui/material/Box';
import Image from 'next/image';
import images from "../../public/images/images";
import TextField from '@mui/material/TextField';

export default function Footer() {
    return(
        <>
        <Box py={4} sx={{backgroundColor:"black"}}>
        <Grid container>
            
            <Grid pl={4} item md={2} xs={2}>
                <Box >
                <Image src={images.logo1} />
                </Box>
            </Grid>

            <Grid item md={8} xs={8} >
                <Box pt={2} display="flex" justifyContent="center" alignItems="center">
                    <Box pr={4}>
                        <Typography variant="h5">
                            HOME
                        </Typography>
                    </Box>
                    <Box pr={4}>
                        <Typography variant="h5">
                            About Us
                        </Typography>
                    </Box>
                    <Box pr={4}>
                        <Typography variant="h5">
                            METAVERSE
                        </Typography>
                    </Box>
                    <Box pr={4}>
                        <Typography variant="h5">
                            FAQS
                        </Typography>
                    </Box>
                    <Box>
                        <Typography variant="h5">
                            CONTACT US
                        </Typography>
                    </Box>
                </Box>
            </Grid>
        </Grid>
        <Box pt={5} ml={7} borderBottom="2px solid white" width="90%" />

        <Box display="flex" justifyContent="space-between">
            <Box p={4} ml={4}>
            <Typography>
                © 2020 Metaverse. All rights reserved.
            </Typography>
            </Box>
            <Box display="flex">
                <Box p={4}>
                     <Typography>
                        Privacy Policy
                    </Typography>
                </Box>
                <Box p={4}>
                     <Typography>
                        Terms & Conditions
                    </Typography>
                </Box>
                <Box p={4}>
                     <Typography>
                        Discalimer
                    </Typography>
                </Box>
                    
            </Box>
        </Box>
        </Box>
        </>
    )
}