"use client";

import { withDataFetching } from "@/components/HOCS/withDataFetching";
import EditTemplate from "@/components/templates/usuarios/EditTemplate";
import { env } from "@/config/env";
import { IUsuarios } from "@/interfaces/IUsuarios";
import { useEffect, useState } from "react";
import { ThemeProvider } from "@emotion/react";
import theme from "../../../../../theme/Theme";
import Layout from "@/components/UI/organisms/Layout";
import { Container } from "@mui/material";

interface UsuarioEditProps {
  params: { slug: string };
  data: any;
}

const UsuariosEdit: React.FC<UsuarioEditProps> = ({ params, data }) => {
  const [usuario, setUsuario] = useState<IUsuarios>();

  useEffect(() => {
    if (!data) return;
    const {
      id,
      nome: name,
      email: email,
      senha: pass,
      pontos: points,
      tipo: type
    } = data;

    setUsuario({
      id,
      name,
      email,
      pass,
      points,
      type,
    });
  }, [data]);

  return (
    <ThemeProvider theme={theme}>
      <Layout>
        <Container sx={{ paddingTop: 4 }}>
          <EditTemplate usuario={usuario} />
        </Container>
      </Layout>
    </ThemeProvider>

  )
};

export default withDataFetching(`${env.apiBaseUrl}/usuarios`)(UsuariosEdit);