import { Typography, Container, Button, Stack, styled, Grid } from '@mui/material';
import Box from '@mui/material/Box';
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import ArrowDownwardIcon from '@mui/icons-material/ArrowDownward';
import { accordionSummaryClasses} from "@mui/material"
const StyledAccordion = styled(Accordion)(({ theme }) => `
font-size:1rem;
font-weight:semi-bold;
border-radius:20px;
background-color:transparent;
&:hover {
    background-color:linear-gradient(to right, #CB3694 40%, #5133D5 60%) ;
}
${accordionSummaryClasses.expanded}:{
  background-color:linear-gradient(to right, #CB3694 40%, #5133D5 60%);
}
`)

export default function Faqs() {
    return(
        <>
        <Box py={10} sx={{backgroundColor:"black"}}>
        <Box
        py={30}
        sx={{
            backgroundImage: `url(images/twist.png)`,
            bacgroundColor:"black",
            backgroundPosition:"center",
            backgroundRepeat:"no-repeat"

        }}
        >

          <Box pt={10}>
                <Box  >
                    <Typography variant="h3" textAlign="center">
                        FREQUENTLY ASKED QUESTONS
                    </Typography>
                </Box>

                <Box py={3}>
                  <Container>

                  <Box py={1} borderBottom="2px solid white">
                <Accordion sx={{background:"linear-gradient(to right, #CB3694 40%, #5133D5 60%)"}} style={{borderRadius:"10px"}}>
                    <AccordionSummary
                      expandIcon={<ArrowDownwardIcon sx={{color:"white"}} />}
                      aria-controls="panel1a-content"
                      id="panel1a-header"
                    >
                      <Typography variant="h5" fontSize="1.4rem">
                        What is Astronaut?
                      </Typography>
                      
                    </AccordionSummary>
                    <AccordionDetails sx={{backgroundColor:"#080C48", borderBottomLeftRadius:"10px", borderBottomRightRadius:"10px"}}>
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
                    
                  <Box py={1} borderBottom="2px solid white">
                <Accordion sx={{background:"linear-gradient(to right, #CB3694 40%, #5133D5 60%)"}} style={{borderRadius:"10px"}}>
                    <AccordionSummary
                      expandIcon={<ArrowDownwardIcon sx={{color:"white"}} />}
                      aria-controls="panel1a-content"
                      id="panel1a-header"
                    >
                      <Typography variant="h5" fontSize="1.4rem">
                        What is Astronaut?
                      </Typography>
                      
                    </AccordionSummary>
                    <AccordionDetails sx={{backgroundColor:"#080C48", borderBottomLeftRadius:"10px", borderBottomRightRadius:"10px"}}>
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
                  <Box py={1} borderBottom="2px solid white">
                <Accordion sx={{background:"linear-gradient(to right, #CB3694 40%, #5133D5 60%)"}} style={{borderRadius:"10px"}}>
                    <AccordionSummary
                      expandIcon={<ArrowDownwardIcon sx={{color:"white"}} />}
                      aria-controls="panel1a-content"
                      id="panel1a-header"
                    >
                      <Typography variant="h5" fontSize="1.4rem">
                        What is Astronaut?
                      </Typography>
                      
                    </AccordionSummary>
                    <AccordionDetails sx={{backgroundColor:"#080C48", borderBottomLeftRadius:"10px", borderBottomRightRadius:"10px"}}>
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
                  <Box py={1} borderBottom="2px solid white">
                <Accordion sx={{background:"linear-gradient(to right, #CB3694 40%, #5133D5 60%)"}} style={{borderRadius:"10px"}}>
                    <AccordionSummary
                      expandIcon={<ArrowDownwardIcon sx={{color:"white"}} />}
                      aria-controls="panel1a-content"
                      id="panel1a-header"
                    >
                      <Typography variant="h5" fontSize="1.4rem">
                        What is Astronaut?
                      </Typography>
                      
                    </AccordionSummary>
                    <AccordionDetails sx={{backgroundColor:"#080C48", borderBottomLeftRadius:"10px", borderBottomRightRadius:"10px"}}>
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
                  
                  </Container>
                </Box>

                </Box>
                
        </Box>
        </Box>
        </>
    )
}