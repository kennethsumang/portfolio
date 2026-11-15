import "@mantine/core/styles.css";
import React from "react";
import { MantineProvider, ColorSchemeScript } from "@mantine/core";
import { Analytics } from "@vercel/analytics/next"
import { SpeedInsights } from "@vercel/speed-insights/next"
import { theme } from "../theme";

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
          content="minimum-scale=1, initial-scale=1, width=device-width"
        />
        <meta
          name="description"
          content="Kenneth Sumang is a passionate web developer specializing in React, TypeScript, and modern web technologies."
        ></meta>
        <meta
          name="keywords"
          content="Kenneth Sumang, web developer, React developer, TypeScript, portfolio, software developer"
        ></meta>
        <meta name="robots" content="index, follow"></meta>

        {/* Open Graph */}
        <meta property="og:type" content="website"></meta>
        <meta property="og:url" content="https://kennethsumang.com"></meta>
        <meta
          property="og:title"
          content="Kenneth Sumang - Web Developer"
        ></meta>
        <meta
          name="og:description"
          content="Kenneth Sumang is a passionate web developer specializing in React, TypeScript, and modern web technologies."
        ></meta>
        <meta
          property="og:image"
          content="https://kennethsumang.com/og-image.webp"
        ></meta>
      </head>
      <body style={{ scrollBehavior: "smooth" }}>
        <Analytics />
        <SpeedInsights />
        <MantineProvider theme={theme}>
          {children}
        </MantineProvider>
      </body>
    </html>
  );
}
