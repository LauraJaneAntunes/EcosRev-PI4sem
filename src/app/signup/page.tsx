'use client'

import React, { useState } from "react";
import { Box, Button, Container, TextField, Typography, Link as MuiLink } from "@mui/material";
import Header from "../../components/UI/molecules/Header";
import { useRouter } from "next/navigation";
import Link from 'next/link';
import axios from "axios";

interface SignupData {
  name: string;
  email: string;
  password: string;
  confirmPassword: string;
}

const Signup: React.FC = () => {
  const [formData, setFormData] = useState<SignupData>({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const [error, setError] = useState<string>("");
  const [success, setSuccess] = useState<string>("");
  const router = useRouter();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (formData.password !== formData.confirmPassword) {
      setError("As senhas não coincidem!");
      return;
    }

    try {
      const response = await axios.post("http://localhost:5000/api/signup", formData);
      setSuccess("Cadastro realizado com sucesso!");
      setFormData({ name: "", email: "", password: "", confirmPassword: "" });
      router.push("/login"); // Redireciona para a página de login após o cadastro
    } catch (error) {
      setError("Erro ao cadastrar usuário!");
    }
  };

  return (
    <div>
      {/* Header */}
      <Header />

      <Container maxWidth="sm">
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            marginTop: 8,
            backgroundColor: "white",
            borderRadius: 2,
            boxShadow: 3,
            padding: 3,
          }}
        >
          <Typography variant="h5" color="primary" gutterBottom>
            Cadastro
          </Typography>

          {/* Formulário de cadastro */}
          <Box component="form" onSubmit={handleSubmit} sx={{ width: "100%" }}>
            <TextField
              label="Nome"
              variant="outlined"
              fullWidth
              name="name"
              value={formData.name}
              onChange={handleChange}
              margin="normal"
              required
            />
            <TextField
              label="E-mail"
              variant="outlined"
              fullWidth
              name="email"
              type="email"
              value={formData.email}
              onChange={handleChange}
              margin="normal"
              required
            />
            <TextField
              label="Senha"
              variant="outlined"
              fullWidth
              name="password"
              type="password"
              value={formData.password}
              onChange={handleChange}
              margin="normal"
              required
            />
            <TextField
              label="Confirmar Senha"
              variant="outlined"
              fullWidth
              name="confirmPassword"
              type="password"
              value={formData.confirmPassword}
              onChange={handleChange}
              margin="normal"
              required
            />

            {error && <Typography color="error">{error}</Typography>}
            {success && <Typography color="success">{success}</Typography>}

            <Button
              type="submit"
              fullWidth
              variant="contained"
              color="primary"
              sx={{ marginTop: 3 }}
            >
              Criar Conta
            </Button>
          </Box>

          {/* Link para Login */}
          <Box sx={{ marginTop: 2 }}>
            <Link href="/" passHref>
              <Typography variant="body2" sx={{ color: "primary.main" }}>
              Já tem uma conta? Faça login
              </Typography>
            </Link>
          </Box>
        </Box>
      </Container>
    </div>
  );
};

export default Signup;
