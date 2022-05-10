import {
  Typography,
  Container,
  Button,
  Stack,
  styled,
  Grid,
} from "@mui/material";
import Box from "@mui/material/Box";
import Image from "next/image";
import images from "../../public/images/images";
export default function Tier() {
  return (
    <>
      <Box
        sx={{
          backgroundImage: `url(images/bg2.png)`,
          backgroundColor: "black",
        }}
      >
        <Container>
          <Box>
            <Box
              display="flex"
              justifyContent="center"
              alignItems="center"
              flexDirection="column"
              border="1.5px solid silver"
              borderRadius="20px"
              sx={{
              background:"linear-gradient(to right, #2F1132 44%, #190E3A 66%)"

              }}
                >
              <Grid
                container
                sx={{                    
                  display: "flex",
                  borderRadius: "16px",
                  height: "1020",
                }}
              >
                <Grid
                  item
                  md={2.4}
                  xs={2.4}
                  borderBottom="0.5px solid white"
                  borderRight="0.5px solid silver"
                >
                  <Box pt={3} textAlign="center">
                    <Typography fontWeight="bold">ACCESS</Typography>
                  </Box>
                </Grid>

                <Grid
                  item
                  md={2.4}
                  xs={2.4}
                  borderBottom="0.5px solid white"
                  borderRight="0.5px solid silver"
                >
                  <Box pt={3} textAlign="center">
                    <Typography fontWeight="bold">TIER</Typography>
                  </Box>
                </Grid>

                <Grid
                  item
                  md={2.4}
                  xs={2.4}
                  borderBottom="0.5px solid white"
                  borderRight="0.5px solid silver"
                >
                  <Box py={2} textAlign="center">
                    <Typography fontWeight="bold">KICK POWER <br /> REQUIREMENT</Typography>
                  </Box>
                </Grid>

                <Grid
                  item
                  md={2.4}
                  xs={2.4}
                  borderBottom="0.5px solid white"
                  borderRight="0.5px solid silver"
                >
                  <Box py={2} textAlign="center">
                    <Typography fontWeight="bold">ALLOCATION <br /> TIER</Typography>
                  </Box>
                </Grid>

                <Grid
                  item
                  md={2.4}
                  xs={2.4}
                  borderBottom="0.5px solid white"
                >
                  <Box py={1.5} textAlign="center">
                    <Typography fontWeight="bold">LOTTERY <br /> POOL</Typography>
                  </Box>
                </Grid>
              </Grid>

              <Grid
                container
                sx={{
                  backgroundColor:
                    "linear-gradient(to right, #CB3694 40%, #5133D5 60%)",
                  display: "flex",
                  borderRadius: "16px",
                  height: "1020",
                }}
              >
                <Grid
                  item
                  md={2.4}
                  xs={2.4}
                  borderBottom="0.5px solid white"
                  borderRight="0.5px solid silver"
                >
                  <Box py={2} textAlign="center">
                    <Typography fontWeight="bold">FCFS</Typography>
                  </Box>
                </Grid>

                <Grid
                  item
                  md={2.4}
                  xs={2.4}
                  borderBottom="0.5px solid white"
                  borderRight="0.5px solid silver"
                >
                  <Box py={2} textAlign="center">
                    <Typography fontWeight="bold">TIER1</Typography>
                  </Box>
                </Grid>

                <Grid
                  item
                  md={2.4}
                  xs={2.4}
                  borderBottom="0.5px solid white"
                  borderRight="0.5px solid silver"
                >
                  <Box py={2} textAlign="center">
                    <Typography fontWeight="bold">100+</Typography>
                  </Box>
                </Grid>

                <Grid
                  item
                  md={2.4}
                  xs={2.4}
                  borderBottom="0.5px solid white"
                  borderRight="0.5px solid silver"
                >
                  <Box py={2} textAlign="center">
                    <Typography fontWeight="bold">1X</Typography>
                  </Box>
                </Grid>

                <Grid
                  item
                  md={2.4}
                  xs={2.4}
                  borderBottom="0.5px solid white"
                >
                  <Box py={1.5} textAlign="center">
                    <Typography fontWeight="bold">1-9</Typography>
                  </Box>
                </Grid>
              </Grid>
              <Grid
                container
                sx={{
                  backgroundColor:
                    "linear-gradient(to right, #CB3694 40%, #5133D5 60%)",
                  display: "flex",
                  borderRadius: "16px",
                  height: "1020",
                }}
              >
                <Grid
                  item
                  md={2.4}
                  xs={2.4}
                  borderBottom="0.5px solid white"
                  borderRight="0.5px solid silver"
                >
                  <Box py={2} textAlign="center">
                    <Typography fontWeight="bold">FCFS</Typography>
                  </Box>
                </Grid>

                <Grid
                  item
                  md={2.4}
                  xs={2.4}
                  borderBottom="0.5px solid white"
                  borderRight="0.5px solid silver"
                >
                  <Box py={2} textAlign="center">
                    <Typography fontWeight="bold">TIER2</Typography>
                  </Box>
                </Grid>

                <Grid
                  item
                  md={2.4}
                  xs={2.4}
                  borderBottom="0.5px solid white"
                  borderRight="0.5px solid silver"
                >
                  <Box py={2} textAlign="center">
                    <Typography fontWeight="bold">500+</Typography>
                  </Box>
                </Grid>

                <Grid
                  item
                  md={2.4}
                  xs={2.4}
                  borderBottom="0.5px solid white"
                  borderRight="0.5px solid silver"
                >
                  <Box py={2} textAlign="center">
                    <Typography fontWeight="bold">2X</Typography>
                  </Box>
                </Grid>

                <Grid
                  item
                  md={2.4}
                  xs={2.4}
                  borderBottom="0.5px solid white"
                >
                  <Box py={1.5} textAlign="center">
                    <Typography fontWeight="bold">10-19</Typography>
                  </Box>
                </Grid>
              </Grid>
              <Grid
                container
                sx={{
                  backgroundColor:
                    "linear-gradient(to right, #CB3694 40%, #5133D5 60%)",
                  display: "flex",
                  borderRadius: "16px",
                  height: "1020",
                }}
              >
                <Grid
                  item
                  md={2.4}
                  xs={2.4}
                  borderBottom="0.5px solid white"
                  borderRight="0.5px solid silver"
                >
                  <Box py={2} textAlign="center">
                    <Typography fontWeight="bold">FCFS</Typography>
                  </Box>
                </Grid>

                <Grid
                  item
                  md={2.4}
                  xs={2.4}
                  borderBottom="0.5px solid white"
                  borderRight="0.5px solid silver"
                >
                  <Box py={2} textAlign="center">
                    <Typography fontWeight="bold">TIER3</Typography>
                  </Box>
                </Grid>

                <Grid
                  item
                  md={2.4}
                  xs={2.4}
                  borderBottom="0.5px solid white"
                  borderRight="0.5px solid silver"
                >
                  <Box py={2} textAlign="center">
                    <Typography fontWeight="bold">1000+</Typography>
                  </Box>
                </Grid>

                <Grid
                  item
                  md={2.4}
                  xs={2.4}
                  borderBottom="0.5px solid white"
                  borderRight="0.5px solid silver"
                >
                  <Box py={2} textAlign="center">
                    <Typography fontWeight="bold">4X</Typography>
                  </Box>
                </Grid>

                <Grid
                  item
                  md={2.4}
                  xs={2.4}
                  borderBottom="0.5px solid white"
                >
                  <Box py={1.5} textAlign="center">
                    <Typography fontWeight="bold">20-29</Typography>
                  </Box>
                </Grid>
              </Grid>
              <Grid
                container
                sx={{
                  backgroundColor:
                    "linear-gradient(to right, #CB3694 40%, #5133D5 60%)",
                  display: "flex",
                  borderRadius: "16px",
                  height: "1020",
                }}
              >
                <Grid
                  item
                  md={2.4}
                  xs={2.4}
                  borderBottom="0.5px solid white"
                  borderRight="0.5px solid silver"
                >
                  <Box py={2} textAlign="center">
                    <Typography fontWeight="bold">FCFS</Typography>
                  </Box>
                </Grid>

                <Grid
                  item
                  md={2.4}
                  xs={2.4}
                  borderBottom="0.5px solid white"
                  borderRight="0.5px solid silver"
                >
                  <Box py={2} textAlign="center">
                    <Typography fontWeight="bold">TIER4</Typography>
                  </Box>
                </Grid>

                <Grid
                  item
                  md={2.4}
                  xs={2.4}
                  borderBottom="0.5px solid white"
                  borderRight="0.5px solid silver"
                >
                  <Box py={2} textAlign="center">
                    <Typography fontWeight="bold">10000+</Typography>
                  </Box>
                </Grid>

                <Grid
                  item
                  md={2.4}
                  xs={2.4}
                  borderBottom="0.5px solid white"
                  borderRight="0.5px solid silver"
                >
                  <Box py={2} textAlign="center">
                    <Typography fontWeight="bold">8X</Typography>
                  </Box>
                </Grid>

                <Grid
                  item
                  md={2.4}
                  xs={2.4}
                  borderBottom="0.5px solid white"
                >
                  <Box py={1.5} textAlign="center">
                    <Typography fontWeight="bold">30-50</Typography>
                  </Box>
                </Grid>
              </Grid>
              <Grid
                container
                sx={{
                  backgroundColor:
                    "linear-gradient(to right, #CB3694 40%, #5133D5 60%)",
                  display: "flex",
                  borderRadius: "16px",
                  height: "1020",
                }}
              >
                <Grid
                  item
                  md={2.4}
                  xs={2.4}
                  borderRight="0.5px solid silver"
                >
                  <Box py={2} textAlign="center">
                    <Typography fontWeight="bold">FCFS</Typography>
                  </Box>
                </Grid>

                <Grid
                  item
                  md={2.4}
                  xs={2.4}
                  borderRight="0.5px solid silver"
                >
                  <Box py={2} textAlign="center">
                    <Typography fontWeight="bold">TIER5</Typography>
                  </Box>
                </Grid>

                <Grid
                  item
                  md={2.4}
                  xs={2.4}
                  borderRight="0.5px solid silver"
                >
                  <Box py={2} textAlign="center">
                    <Typography fontWeight="bold">100000+</Typography>
                  </Box>
                </Grid>

                <Grid
                  item
                  md={2.4}
                  xs={2.4}
                  borderRight="0.5px solid silver"
                >
                  <Box py={2} textAlign="center">
                    <Typography fontWeight="bold">16X</Typography>
                  </Box>
                </Grid>

                <Grid
                  item
                  md={2.4}
                  xs={2.4}
                >
                  <Box py={1.5}  textAlign="center">
                    <Typography fontWeight="bold">70+</Typography>
                  </Box>
                </Grid>
              </Grid>
            </Box>
          </Box>
        </Container>
      </Box>
    </>
  );
}
