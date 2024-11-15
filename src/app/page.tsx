"use client";

import { Box, Button, Container, TextField, Typography } from "@mui/material";
import Image from "next/image";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { useState } from "react";
import backgroundImage from "../../projeto/public/images/imagem1.jpg";
import "../style/Login.css";

// import { useAuth } from "../../src/context/AuthContext";
// deixei o authprovider comentado enquanto aguarda a conexao com api

export default function Home() {
  const router = useRouter();
  // const { login } = useAuth(); // Acesso à função de login do contexto
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");

  // Função de handle para o login
  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault(); // Impede o comportamento padrão do formulário

    // Simulação de login (sem validação dos campos)
    router.push("/home");

    // Lógica de autenticação após conexão com API:
    //   if (email && password) {
    //     try {
    //       // Chama a função de login do contexto AuthProvider
    //       const success = await login(email, password);
          
    //       if (success) {
    //         router.push("/home"); // Redireciona após login bem-sucedido
    //       } else {
    //         alert("Credenciais inválidas!");
    //       }
    //     } catch (error) {
    //       console.error("Erro no login:", error);
    //       alert("Ocorreu um erro ao tentar realizar o login.");
    //     }
    //   } else {
    //     alert("Por favor, preencha os campos.");
    //   }
    // };
  
    //   console.log("Email:", email, "Senha:", password);
  };

  return (
    <div style={{ position: 'relative', height: '100vh', overflow: "hidden" }}>
      <Image
        className="backgroundImage"
        alt="Background"
        src={backgroundImage}
        fill
        priority // Adicionado a propriedade priority para otimizar o carregamento
      />
    
      <Container className="container" component="main" maxWidth="sm">
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            maxWidth: "400px",
          }}
          className="login-form"
        >
          <Typography variant="h5" color="primary" sx={{ mb: 2 }}>
            Login
          </Typography>

          {/* Formulário de login */}
          <Box
            component="form"
            onSubmit={handleLogin} // Usa onSubmit para envio do formulário
            sx={{ marginTop: 2 }}
          >
            <TextField
              margin="normal"
              // required
              fullWidth
              id="email"
              label="Email"
              name="email"
              autoFocus
              value={email}
              onChange={(e) => setEmail(e.target.value)} // Atualiza o valor de email
            />
            <TextField
              margin="normal"
              // required
              fullWidth
              id="password"
              label="Senha"
              name="password"
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)} // Atualiza o valor da senha
            />
            <Button
              type="submit"
              fullWidth
              variant="contained"
              color="primary"
              sx={{ marginTop: 3, marginBottom: 2 }}
            >
              Login
            </Button>
          </Box>

          {/* Links para Cadastro e Redefinição de Senha */}
          <Box sx={{ 
            display: 'flex', 
            justifyContent: 'space-between', 
            width: '100%',
            flexDirection: { xs: 'column', sm: 'row' },
            gap: 1,
            alignItems: 'center'
          }}>
            <Link href="/signup" passHref>
              <Typography variant="body2" sx={{ 
                fontWeight: "bold" , 
                color: "primary.main",
                textAlign: { xs: 'center', sm: 'left' }
              }}>
                Não tem uma conta? Cadastre-se
              </Typography>
            </Link>
            <Link href="/reset-password" passHref>
              <Typography variant="body2" sx={{
                textAlign: { xs: 'center', sm: 'right' }
              }}> 
                Esqueceu a senha?
              </Typography>
            </Link>
          </Box>
        </Box>
      </Container>
    </div>
  );
}
