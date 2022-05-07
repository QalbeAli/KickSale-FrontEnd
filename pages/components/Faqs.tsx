import { Typography, Container, Button, Stack, styled, Grid } from '@mui/material';
import Box from '@mui/material/Box';
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

export default function Faqs() {
    return(
        <>
        <Box
        sx={{
            backgroundImage: `url(images/twist.png)`,
            bacgroundColor:"black",
        }}
        >
                <Box pt={20}>
                    <Typography variant="h3" textAlign="center">
                        FREQUENTLY ASKED QUESTONS
                    </Typography>
                </Box>

                <Box>
                <Accordion sx={{ background: "#0B192D" }}>
                    <AccordionSummary
                      aria-controls="panel1a-content"
                      id="panel1a-header"
                    >
                      <Typography variant="h5" fontSize="1.4rem">
                        What is Astronaut?
                      </Typography>
                      
                    </AccordionSummary>
                    <AccordionDetails>
                      <Typography variant="subtitle1">
                        Astronaut is a protocol built for decentralizing the way
                        which new projects and ideas coming to the BNB ecosystem
                        raise capital. With Astronaut, decentralized projects
                        will be able to raise and exchange capital cheap and
                        fast. Users will be able to participate in a secure and
                        interoperable environment on the Binance Smart Chain.
                      </Typography>
                    </AccordionDetails>
                  </Accordion>
                </Box>
        </Box>
        </>
    )
}