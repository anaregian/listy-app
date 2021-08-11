import { GlobalStyles, MantineProvider, NormalizeCSS } from "@mantine/core";
import React from "react";

export const App: React.FC = () => {
  return (
    <MantineProvider>
      <NormalizeCSS />
      <GlobalStyles />
      App
    </MantineProvider>
  );
};
