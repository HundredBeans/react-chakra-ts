import React from 'react';
import {
  useColorMode,
  useColorModeValue,
  FormControl,
  FormLabel,
  Switch,
  FormControlProps,
} from '@chakra-ui/react';
import { FaMoon, FaSun } from 'react-icons/fa';

export const ColorModeSwitcher: React.FC<FormControlProps> = (props) => {
  const { toggleColorMode } = useColorMode();
  const val = useColorModeValue(false, true);
  const SwitchIcon = useColorModeValue(FaSun, FaMoon);

  return (
    <FormControl
      width="auto"
      display="flex"
      alignItems="center"
      bg={useColorModeValue('white', 'gray.800')}
      p={2}
      rounded="full"
      {...props}
    >
      <FormLabel htmlFor="color-switcher" mb="0">
        <SwitchIcon />
      </FormLabel>
      <Switch id="color-switcher" onChange={toggleColorMode} isChecked={val} />
    </FormControl>
  );
};
