import { extendTheme, ThemeConfig } from "@chakra-ui/react";

let config: ThemeConfig = {
  initialColorMode: "dark",
};

const theme = extendTheme({ config });

export default theme;
