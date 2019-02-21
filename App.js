import React from "react";
import { StyleSheet, View } from "react-native";
import Screens from "./src/screens";
import withTheme from "./src/theme";

class App extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Screens />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  }
});

export default withTheme(App);
