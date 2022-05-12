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
import Link from "next/link";
import images from "../public/images/images";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import { useState } from "react";
import Project from "../components/Project";
const StyledButton = styled(Button)(
  ({ theme }) => `
font-size:1rem;
font-weight:semi-bold;
border-radius:20px;
height:2.5rem;
background-color:"#31303E";
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

export default function IDO() {
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
          backgroundImage: `url(images/bgmatt.jpg)`,
          width:"100%"
          
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
                        <StyledButton
                          variant="contained"
                          sx={{ backgroundColor: "#31303E" }}
                          className="md:bg-[#31303E]"
                        >
                          IDO
                        </StyledButton>
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
                            backgroundColor: "red",
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
      <Project/>

      </Box>
    </>
  );
}
