// src/componetns/Footer.tsx

import React from "react";
import { Box, Container, Grid, Typography } from "@mui/material";
import { Link } from "react-router-dom";

function Footer(){
  return (
    <div className="footer">
    <Box
      sx={{
        width: "100%",
        height: "auto",
        backgroundColor: "#00C1A2",
        paddingTop: "1rem",
        paddingBottom: "1rem",
        
      }}
    >
      <Container maxWidth="lg">
        <Grid container direction="column" alignItems="center">
          <Grid item xs={12}>
          </Grid>
          <Grid item xs={12}>
            <Typography color="white" variant="h5">
              <Link to="/home" style={{textDecoration:'none',color:'white'}}>Home |</Link> 
              <Link to="/Contact"  style={{textDecoration:'none',color:'white'}}>Contact</Link>
            </Typography>
          </Grid>
          <Grid item xs={12}>
            <Typography color="white" variant="subtitle1">
              {`${new Date().getFullYear()} ©CopyRights HOSPITALS  All rights reserved`}
            </Typography>
          </Grid>
        </Grid>
      </Container>
    </Box>
    </div>
  );
};

export default Footer;