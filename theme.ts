"use client";

import { createTheme } from "@mantine/core";

export const theme = createTheme({
  breakpoints: {
    xs: '36em', // 576px
    sm: '48em', // 768px
    md: '62em', // 992px
    lg: '75em', // 1200px
    xl: '88em', // 1408px
  },
  primaryShade: 8,
});
