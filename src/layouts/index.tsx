import React from 'react';
import { Box, Container } from '@chakra-ui/react';
import { ColorModeSwitcher } from '../components/ColorModeSwitcher';

interface Props {
  children: JSX.Element;
}

export const AppLayout: React.FC<Props> = ({ children }: Props) => {
  return (
    <Box>
      <ColorModeSwitcher position="fixed" bottom="15" left="15" />
      <Container maxW="container.xl" paddingTop="100px">
        {children}
      </Container>
    </Box>
  );
};
