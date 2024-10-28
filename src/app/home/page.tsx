// Versão Gabriel

// "use client";

// import Layout from "@/components/UI/organisms/Layout";
// import { ThemeProvider } from "@emotion/react";
// import { Box } from "@mui/material";
// import theme from "../../../theme/Theme";
// import Image from "next/image";
// import backgroundImage2 from "../../../projeto/public/images/imagem2.jpg";
// import "../../style/Login.css";

// const Home = () => {
//   return (
//     <ThemeProvider theme={theme}>
//       <Layout>
//         <Image className="backgroundImage" src={backgroundImage2} />
//         <Box color="primary"> Nosso Projeto </Box>
//       </Layout>
//     </ThemeProvider>
//   );
// };

// export default Home;

"use client";

import Layout from "@/components/UI/organisms/Layout";
import { ThemeProvider } from "@emotion/react";
import theme from "../../../theme/Theme";
import { Box, Container, Grid, Typography, Button, IconButton } from '@mui/material';
import InstagramIcon from '@mui/icons-material/Instagram';
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import GitHubIcon from '@mui/icons-material/GitHub';
import { useRouter } from 'next/navigation';
import Image from 'next/image';
import logoSvg from "../../../projeto/public/images/logo.svg";
import backgroundImage2 from "../../../projeto/public/images/imagem2.jpg";
import '../../style/MenuUser.css';
import RecyclingIcon from '@mui/icons-material/Recycling';
import MonetizationOnIcon from '@mui/icons-material/MonetizationOn';
import CardGiftcardIcon from '@mui/icons-material/CardGiftcard';


export default function Home() {
  const router = useRouter();

  return (
    <ThemeProvider theme={theme}>
      <Layout>
        <Navbar />
        <Carousel />
        <Introduction />
        <Services />
        <Testimonials />
        <Footer />
      </Layout>
    </ThemeProvider>
  );
}

function Navbar() {
  const router = useRouter();

  return (
    <Box sx={{ flexGrow: 1 }}>
      <Container>
        <Grid container alignItems="center" py={2}>
          <Grid item xs={8} display="flex" alignItems="center">
            <Image className="logoSvg" src={logoSvg} alt="EcosRev Logo" width={200} height={112} />
            <Box display="flex" ml={2}>
              <Button onClick={() => router.push('/menuUser')} color="primary">Início</Button>
              <Button onClick={() => router.push('/perfilUsuario')} color="primary">Ver meu perfil</Button>
              <Button onClick={() => router.push('/trocarPontos')} color="primary">Trocar meus pontos</Button>
            </Box>
          </Grid>
          <Grid item xs={4} display="flex" justifyContent="flex-end">
            <Button onClick={() => router.push('/index')} variant="contained" color="primary">Sair</Button>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}

function Carousel() {
  return (
    <Box sx={{ backgroundColor: '#f9f9f9', padding: '60px 0' }} textAlign="center">
      <Container>
        <div className="image-container">
          <Image className="backgroundImage" src={backgroundImage2} alt="Background Image" />
          <h4 className="overlay-text">
            Descarte seus resíduos eletrônicos corretamente e ajude a construir um planeta mais limpo!
          </h4>
        </div>
      </Container>
    </Box>
  );
}

function Introduction() {
  return (
    <Box sx={{ backgroundColor: '#f9f9f9', padding: '60px 0' }} textAlign="center">
      <Container>
        <Typography variant="h2" sx={{ fontSize: '32px' }} gutterBottom>Bem-vindo ao EcosRev</Typography>
        <Typography variant="body1">
          Uma plataforma inovadora para reciclagem de resíduo eletrônico e troca de pontos por recompensas. Junte-se a nós e faça parte da mudança!
        </Typography>
      </Container>
    </Box>
  );
}

function Services() {
  return (
    <Box sx={{ backgroundColor: '#e9ecef', padding: '60px 0' }} textAlign="center">
      <Container>
        <Typography variant="h2" sx={{ fontSize: '32px', marginBottom: '40px'}} >O que oferecemos</Typography>
        <Grid container spacing={4}>
          <Grid item xs={12} md={4}>
            <RecyclingIcon sx={{ fontSize: 60, color: 'primary.main' }} />
            <Typography variant="h4" sx={{ fontSize: '24px' }} >Reciclagem de Eletrônicos</Typography>
            <Typography>Recicle seus aparelhos eletrônicos de forma segura e responsável.</Typography>
          </Grid>
          <Grid item xs={12} md={4}>
            <MonetizationOnIcon sx={{ fontSize: 60, color: 'primary.main' }} />
            <Typography variant="h4" sx={{ fontSize: '24px' }} >Acúmulo de Pontos</Typography>
            <Typography>Ganhe pontos a cada item reciclado e troque por prêmios.</Typography>
          </Grid>
          <Grid item xs={12} md={4}>
            <CardGiftcardIcon sx={{ fontSize: 60, color: 'primary.main' }} />
            <Typography variant="h4" sx={{ fontSize: '24px' }} >Recompensas Exclusivas</Typography>
            <Typography>Troque seus pontos por descontos, produtos, serviços e muito mais.</Typography>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}

function Testimonials() {
  return (
    <Box sx={{ backgroundColor: '#f9f9f9', padding: '60px 0' }} textAlign="center">
      <Container>
        <Typography variant="h2" sx={{ fontSize: '32px', marginBottom: '40px'}} >Depoimentos</Typography>
        <Grid container spacing={4}>
          <Grid item xs={12} md={4}>
            <blockquote>
              <Typography sx={{ fontSize: '20px'}} > &quot;O EcosRev facilitou a reciclagem de eletrônicos na minha casa. Além de ajudar o meio ambiente, ainda ganho recompensas!&quot;</Typography>
              <footer>— Maria Silva</footer>
            </blockquote>
          </Grid>
          <Grid item xs={12} md={4}>
            <blockquote>
              <Typography sx={{ fontSize: '20px'}} > &quot;Uma excelente iniciativa! Agora meus filhos entendem a importância de reciclar e ainda se divertem trocando pontos por prêmios.&quot;</Typography>
              <footer>— Carlos Santos</footer>
            </blockquote>
          </Grid>
          <Grid item xs={12} md={4}>
            <blockquote>
              <Typography sx={{ fontSize: '20px'}} >&quot;Simplesmente adoro! O sistema de pontos é muito gratificante e o suporte ao cliente é fantástico.&quot;</Typography>
              <footer>— Ana Souza</footer>
            </blockquote>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}

function Footer() {
  return (
    <Box sx={{ backgroundColor: 'primary.main', padding: '20px 0', color: 'white' }}>
      <Container>
        <Grid container justifyContent="space-between" alignItems="center">
          <Grid item>
            <Typography variant="body2" gutterBottom color="white">© 2023 EcosRev</Typography>
          </Grid>
          <Grid item>
            <Box display="flex">
              <IconButton color="inherit" href="#"><InstagramIcon /></IconButton>
              <IconButton color="inherit" href="#"><FacebookIcon /></IconButton>
              <IconButton color="inherit" href="#"><TwitterIcon /></IconButton>
              <IconButton color="inherit" href="https://github.com/Ecosrev/ecosrevMongo"><GitHubIcon /></IconButton>
            </Box>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}
