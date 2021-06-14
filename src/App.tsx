import * as React from 'react';
import { ChakraProvider, theme } from '@chakra-ui/react';
import { AppRouter } from './router';

export const App: React.FC = () => (
  <ChakraProvider theme={theme}>
    <AppRouter />
  </ChakraProvider>
);
