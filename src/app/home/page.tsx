"use client";

import Layout from "@/components/UI/organisms/Layout";
import { ThemeProvider } from "@emotion/react";
import { Box } from "@mui/material";
import theme from "../../../theme/Theme";
import Image from "next/image";
import backgroundImage2 from "../../../projeto/public/images/imagem2.jpg";
import "../../style/Login.css";

const Home = () => {
  return (
    <ThemeProvider theme={theme}>
      <Layout>
        <Image className="backgroundImage" src={backgroundImage2} />
        <Box color="primary"> Nosso Projeto </Box>
      </Layout>
    </ThemeProvider>
  );
};

export default Home;
