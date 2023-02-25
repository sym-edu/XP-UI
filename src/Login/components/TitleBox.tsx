import { Box, Typography } from "@mui/material";
import Grid from "@mui/material/Unstable_Grid2";
import React from 'react';
const TitleBox: React.FC = () => {
  return (
    <Grid xs={0} sm={0} md={6} lg={6} xl={6} minHeight={550}>
      <Box
        sx={{
          backgroundColor: 'rgb(256,212,44)',
          padding: "20px",
          display: {
            xs: 'none',
            sm: 'none',
            md: 'flex',
            lg: 'flex', 
            xl: 'flex'
          },
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          height: "100%",
          borderRadius: "0px 30px 30px 0",
        }}
      >
        <Box
          display="flex"
          flexDirection="column"
          justifyContent="center"
          alignItems="flex-start"
        >
          <Typography variant="h4" fontWeight="bold" color="whitesmoke" mb={3}>
            Join Our <br /> Community
          </Typography>
          <Typography variant="h5" fontWeight="" color="whitesmoke">
            Add a tag line here to go with the heading
          </Typography>
        </Box>
      </Box>
    </Grid>
  );
};

export default TitleBox;
