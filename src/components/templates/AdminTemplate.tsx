import React from 'react';
import { ThemeProvider } from '@emotion/react';
import adminTheme from '../../../themes/adminTheme';
import Layout from '@/components/UI/organisms/Layout';

interface AdminTemplateProps {
  children: React.ReactNode;
}

const AdminTemplate: React.FC<AdminTemplateProps> = ({ children }) => {
  return (
    <ThemeProvider theme={adminTheme}>
      <Layout>
        {children}
      </Layout>
    </ThemeProvider>
  );
};

export default AdminTemplate;
