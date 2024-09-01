import "@mantine/core/styles.css";
import React from "react";
import { MantineProvider, ColorSchemeScript } from "@mantine/core";
import { theme } from "../theme";
import AppLayout from "./_layout/AppLayout";

export const metadata = {
  title: "Kenneth Sumang | Web Developer",
  description: "Web Developer Portfolio of Kenneth Sumang",
};

export default function RootLayout({ children }: { children: any }) {
  
  return (
    <html lang="en" style={{ scrollBehavior: "smooth" }}>
      <head>
        <ColorSchemeScript />
        <link rel="shortcut icon" href="/favicon.svg" />
        <meta
          name="viewport"
          content="minimum-scale=1, initial-scale=1, width=device-width, user-scalable=no"
        />
      </head>
      <body style={{ scrollBehavior: "smooth" }}>
        <MantineProvider theme={theme}>
          <AppLayout>{children}</AppLayout>
        </MantineProvider>
      </body>
    </html>
  );
}
