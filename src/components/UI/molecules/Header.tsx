import { Box, Button } from '@mui/material';
import { useRouter, usePathname } from 'next/navigation';
import Image from 'next/image';
import logoSvg from '../../../../projeto/public/images/logo.svg';
import LeafButton from '../atoms/LeafButton';
import leafIcon from '../../../../public/images/icon_leaf.png';

const Header = () => {
  const router = useRouter();
  const pathname = usePathname();

  // Verifica se a página atual é de cadastro ou redefinição de senha
  const isSignupPage = pathname === "/signup";
  const isResetPasswordPage = pathname === "/reset-password";

  // Verifica se o usuário é admin (você pode substituir isso por uma lógica de autenticação real)
  const isAdmin = true; // Exemplo de verificação de admin. Troque conforme a lógica de autenticação.

  return (
    <Box
      display="flex"
      alignItems="center"
      p={2}
      sx={{
        backgroundColor: "white",
        height: "96px",
        position: "fixed", // Faz o Header ficar fixo no topo
        top: 0,
        left: 0,
        width: "100%",
        zIndex: 1000, // Garante que o Header esteja acima dos outros elementos
      }}
>
      {/* Exibe o logo */}
      <Image src={logoSvg} alt="EcosRev Logo" width={200} height={112} />

      {/* Se não for página de cadastro ou redefinição de senha, exibe os links */}
      {!isSignupPage && !isResetPasswordPage && (
        <Box display="flex" ml={2}>
          {/* Para usuários comuns */}
          {!isAdmin && (
            <>
              <Button onClick={() => router.push('/home')} color="primary" sx={{ mx: 1 }}>
                Início
              </Button>
              <Button onClick={() => router.push('/perfil')} color="primary" sx={{ mx: 1 }}>
                Ver meu perfil
              </Button>
              <Button onClick={() => router.push('/beneficios')} color="primary" sx={{ mx: 1 }}>
                Benefícios
              </Button>
              <Button onClick={() => router.push('/beneficios/troca')} color="primary" sx={{ mx: 1 }}>
                Troca de pontos
              </Button>
            </>
          )}
          {/* Para admins */}
          {isAdmin && (
            <>
              <Button onClick={() => router.push('/home')} color="primary" sx={{ mx: 1 }}>
                Início
              </Button>
              <Button onClick={() => router.push('/perfil')} color="primary" sx={{ mx: 1 }}>
                Ver meu perfil
              </Button>
              <Button onClick={() => router.push('/beneficios')} color="primary" sx={{ mx: 1 }}>
                Benefícios
              </Button>
              <Button onClick={() => router.push('/usuarios')} color="primary" sx={{ mx: 1 }}>
                Usuários
              </Button>
              <Button onClick={() => router.push('/beneficios/cadastro')} color="primary" sx={{ mx: 1 }}>
                Cadastro de Benefícios
              </Button>
              <Button onClick={() => router.push('/beneficios/troca')} color="primary" sx={{ mx: 1 }}>
                Troca de pontos
              </Button>
            </>
          )}
        </Box>
      )}

      {/* Só exibe o botão de "Sair" se não for página de cadastro ou redefinição de senha */}
      {!isSignupPage && !isResetPasswordPage && (
        <Box display="flex" justifyContent="flex-end" flexGrow={1}>
          <LeafButton onClick={() => router.push('/')} iconSrc={leafIcon}>
            Sair
          </LeafButton>
        </Box>
      )}
    </Box>
  );
};

export default Header;
