import React from "react";
import { Provider as PaperProvider } from "react-native-paper";
import THEME from "./settings";

export default (withTheme = Comp => {
  return props => {
    return (
      <PaperProvider theme={THEME}>
        <Comp {...props} />
      </PaperProvider>
    );
  };
});
