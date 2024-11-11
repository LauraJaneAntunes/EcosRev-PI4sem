import React from 'react';
import { ThemeProvider } from '@emotion/react';
import theme from '../../../themes/Theme';
import Layout from '@/components/UI/organisms/Layout';

interface MainTemplateProps {
  children: React.ReactNode;
}

const MainTemplate: React.FC<MainTemplateProps> = ({ children }) => {
  return (
    <ThemeProvider theme={theme}>
      <Layout>
        {children}
      </Layout>
    </ThemeProvider>
  );
};

export default MainTemplate;
