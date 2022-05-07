import { Typography, Container, Button, Stack, styled, Grid } from '@mui/material';
import Box from '@mui/material/Box';
import Image from 'next/image';
import images from "../../public/images/images";
export default function Tier() {
    return(
        <>
        <Box
        sx={{
            backgroundImage: `url(images/bg2.png)`,
            backgroundColor:"black",
        }}
        >
            <Box pt={20}>
                <Typography variant="h4" fontWeight="semi-bold" textAlign="center">
                    KickSale Tier and Access to IMO
                </Typography>
            </Box>

              <Container>
                  <Box display="flex" justifyContent="center" alignItems="center">
                    <Box  border="2px solid silver" borderRadius="20px" width="70%" display="flex" justifyContent="center" alignItems="center">
                        <Box p={3} borderRight="2px solid silver">
                        <Typography variant="subtitle1" textAlign="center">
                            ACCESS
                        </Typography>
                        </Box>
                        <Box p={3} borderRight="2px solid silver">
                        <Typography variant="subtitle1" textAlign="center">
                            TIER
                        </Typography>
                        </Box>
                        <Box p={3} borderRight="2px solid silver">
                        <Typography variant="subtitle1" textAlign="center">
                            KICK POWER REQUIREMENT
                        </Typography>
                        </Box>
                        <Box p={3} borderRight="2px solid silver">
                        <Typography variant="subtitle1" textAlign="center">
                            ALLOCATION TIER
                        </Typography>
                        </Box>
                        <Box p={3} >
                        <Typography variant="subtitle1" textAlign="center">
                            LOTTERY POOL
                        </Typography>
                        </Box>
                     </Box>
                     </Box>
              </Container>  
           
        </Box>
        </>
    )
}