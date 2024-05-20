import { createTheme } from '@mantine/core';

const theme = createTheme({
  colors: {
    purple: ['', '#F2ECFA', '#E5D5FA', '#D1B4F8', '#BD93F7', '#9854F6', '#541F9D', '', '', ''],
    grey: ['#FFFFFF', '', '#F5F5F6', '#EAEBED', '#D5D6DC', '#ACADB9', '#7B7C88', '#232134', '', ''],
  },
  primaryColor: 'purple',
  primaryShade: 5,
  fontFamily: 'Inter',
});

export default theme;
