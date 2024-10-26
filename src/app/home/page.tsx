"use client";

import Layout from "@/components/UI/organisms/Layout";
import { ThemeProvider } from "@emotion/react";
import { Box } from "@mui/material";
import theme from "../../../theme/Theme";

const Home = () => {
  return (
    <ThemeProvider theme={theme}>
      <Layout>
        <Box color="primary"> Bem vindo! </Box>
      </Layout>
    </ThemeProvider>
  );
};

export default Home;
