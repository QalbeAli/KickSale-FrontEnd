import {
  Typography,
  Container,
  Button,
  Stack,
  styled,
  Grid,
} from "@mui/material";
import Box from "@mui/material/Box";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Image from "next/image";
import Link from "next/link";
import images from "../public/images/images";
import { lineHeight } from "@mui/system";
import { useState } from "react";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import IconButton from "@mui/material/IconButton";

const StyledButton = styled(Button)(
  ({ theme }) => `
font-size:1rem;
font-weight:semi-bold;
border-radius:20px;
height:2.5rem;
background-color:"red";
font-family:'Nexa Bold',Helvetica,Arial,Lucida,sans-serif;
margin-top:10px !important;
&:hover {
    background-color:#31303E ;
}
`
);

const StyledButton2 = styled(Button)(
  ({ theme }) => `
box-shadow: 0 7px 22px 2px #5133d599;
&:hover {
    background-color:#16182D; ;
}
`
);

export default function Navbar() {
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);
  const handleClick = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <>
      <Box
        sx={{
          backgroundImage: `url(images/bg1.png)`,
          backgroundColor: "black",
          maxWidth: "1980px",
          minWidth: "500px",
          minHeight: "1080px",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          margin: "0 auto",
          position: "static",
        }}
      >
        <Box ml={8} py={3}>
          <Box>
            <AppBar
              position="static"
              sx={{
                backgroundColor: "black",
                width: "96%",
                height: "6rem",
                borderRadius: "80px",
                background: "rgba(0,0,0,.55)",
              }}
            >
              <Toolbar sx={{ paddingY: "1rem" }}>
                <Box>
                  <Link href="/">
                    <a >
                      <Image src={images.logo1} alt="image" width="310" />
                    </a>
                  </Link>
                </Box>

                <Box
                  display="flex"
                  justifyContent="space-between"
                  sx={{ flexGrow: 1, display: { xs: "none", md: "flex" } }}
                >
                  <Box pl={5}>
                    <Stack direction="row" spacing={1}>
                      <Box>
                        <Link href="/IDO">
                          <a >
                            <StyledButton
                              variant="contained"
                              sx={{ backgroundColor: "#31303E" }}
                              className="md:bg-[#31303E]"
                            >
                              IDO
                            </StyledButton>
                          </a>
                        </Link>
                      </Box>
                      <Box>
                        <StyledButton
                          variant="contained"
                          sx={{
                            borderRadius: "16rem",
                            backgroundColor: "#31303E",
                            color: "#8B70FF",
                            fontWeight: "bold",
                            fontSize: "1rem",
                          }}
                          className="md:bg-[#31303E]"
                        >
                          IMO
                        </StyledButton>
                      </Box>
                      <Box>
                        <StyledButton
                          variant="contained"
                          sx={{
                            borderRadius: "16rem",
                            backgroundColor: "#31303E",
                            fontWeight: "semi-bold",
                            fontSize: "1rem",
                          }}
                          className="md:bg-[#31303E]"
                        >
                          IGO
                        </StyledButton>
                      </Box>
                    </Stack>
                  </Box>

                  <Box
                    sx={{
                      display: "flex",
                      justifyContent: "flex-end",
                      alignItems: "flex-end",
                    }}
                  >
                    <Box pr={0.5}>
                      <StyledButton
                        variant="contained"
                        sx={{ backgroundColor: "#31303E" }}
                        id="demo-positioned-button"
                        aria-controls={
                          open ? "demo-positioned-menu" : undefined
                        }
                        aria-haspopup="true"
                        aria-expanded={open ? "true" : undefined}
                        onClick={handleClick}
                      >
                        ACCOUNTS <ArrowDropDownIcon />
                      </StyledButton>
                      <Menu
                        id="demo-positioned-menu"
                        aria-labelledby="demo-positioned-button"
                        anchorEl={anchorEl}
                        open={open}
                        onClose={handleClose}
                        anchorOrigin={{
                          vertical: "bottom",
                          horizontal: "left",
                        }}
                        transformOrigin={{
                          vertical: "top",
                          horizontal: "left",
                        }}
                        className="rounded-[20px]"
                      >
                        <MenuItem
                          sx={{ fontSize: "1.2rem" }}
                          onClick={handleClose}
                        >
                          LOCKUP
                        </MenuItem>
                        <MenuItem
                          sx={{ fontSize: "1.2rem" }}
                          onClick={handleClose}
                        >
                          STAKING
                        </MenuItem>
                        <MenuItem
                          sx={{ fontSize: "1.2rem" }}
                          onClick={handleClose}
                        >
                          LINKING WALLETS
                        </MenuItem>
                        <MenuItem
                          sx={{ fontSize: "1.2rem" }}
                          onClick={handleClose}
                        >
                          MY PORTFOLIO
                        </MenuItem>
                      </Menu>
                    </Box>

                    <Box>
                      <StyledButton
                        variant="contained"
                        sx={{
                          borderRadius: "20px",
                          fontSize: "0.9rem",
                          width: "8rem",
                          lineHeight: "1.5rem",
                          fontWeight: "light",
                          backgroundColor: "#5133D5",
                        }}
                      >
                        WALLET
                      </StyledButton>
                    </Box>
                  </Box>
                </Box>
              </Toolbar>
            </AppBar>
          </Box>
        </Box>

        <Box>
          <Box
            pt={10}
            sx={{
              backgroundImage: `url(images/smokeEffect.png)`,
              minWidth: "1000",
              minHeight: "300",
              maxWidth: "1000",
              backgroundPosition: "center",
            }}
          >
            <Grid container spacing={3}>
              <Grid item xs={1.5}>
                <Box>
                  <Image src={images.man1} alt="images" />
                </Box>
              </Grid>
              <Grid item xs={7.4}>
                <Box sx={{ transform: "translateY(120%)" }}>
                  <Typography variant="h3" color="white" textAlign="center">
                    A LAUNCHPAD FOR <br /> INITIAL METAVERSE OFFEREINGS
                  </Typography>
                  <Box
                    py={3}
                    sx={{
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
                    }}
                  >
                    <Box pr={2}>
                      <StyledButton2
                        variant="contained"
                        sx={{
                          borderRadius: "20px",
                          fontSize: "1rem",
                          marginTop: "10px",
                          fontWeight: "bold",
                        }}

                          className='bg-[#5133D5]'
                      >
                        DISCOVER
                      </StyledButton2>
                    </Box>

                    <Box>
                      <StyledButton
                        variant="contained"
                        sx={{
                          borderRadius: "20px",
                          fontSize: "1rem",
                        }}
                        className="bg-[#31303E]"
                      >
                        BUY TOKENS
                      </StyledButton>
                    </Box>
                  </Box>
                </Box>
              </Grid>
              <Grid item xs={3.1}>
                <Box
                  mt={20}
                  sx={{
                    backgroundImage: `url(images/man2.png)`,
                    maxWidth: "350px",
                    minWidth: "350px",
                    minHeight: "528px",
                    transform: "translate3d(1e-5px, 94px, 1e-5px)",
                  }}
                ></Box>
              </Grid>
            </Grid>
          </Box>
        </Box>
      </Box>
    </>
  );
}
