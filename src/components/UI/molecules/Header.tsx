import { Box, Button } from '@mui/material';
import { useRouter } from 'next/navigation';
import Image from 'next/image';
import logoSvg from '../../../../projeto/public/images/logo.svg';
import LeafButton from '../atoms/LeafButton';
import leafIcon from '../../../../public/images/icon_leaf.png';

const Header = () => {
    const router = useRouter();

    return (
      <Box display="flex" alignItems="center" p={2} sx={{ backgroundColor: 'white', height: '96px' }}>
        <Image src={logoSvg} alt="EcosRev Logo" width={200} height={112}/>
        <Box display="flex" ml={2}>
          <Button onClick={() => router.push('/home')} color="primary" sx={{ mx: 1 }}>Início</Button>
          <Button onClick={() => router.push('/perfil')} color="primary"sx={{ mx: 1 }}>Ver meu perfil</Button>
          <Button onClick={() => router.push('/beneficios')} color="primary"sx={{ mx: 1 }}>Beneficios</Button>
          <Button onClick={() => router.push('/usuarios')} color="primary"sx={{ mx: 1 }}>Usuarios</Button>
          <Button onClick={() => router.push('/beneficios/cadastro')} color="primary"sx={{ mx: 1 }}>Cadastro de Benefícios</Button>
          <Button onClick={() => router.push('/beneficios/troca')} color="primary"sx={{ mx: 1 }}>Troca de pontos</Button>
        </Box>
        <Box display="flex" justifyContent="flex-end" flexGrow={1}>
          <LeafButton onClick={() => router.push('/')} iconSrc={leafIcon}>Sair</LeafButton>
        </Box>
      </Box>
    );
};
  
  export default Header;