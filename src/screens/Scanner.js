import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { BarCodeScanner, Permissions } from "expo";

class Scanner extends React.Component {
  state = {
    hasCameraPermission: null
  };

  handleBarCodeScanned = e => {
    const { type, data } = e;
    alert(`Bar code with type ${type} and data ${data} has been scanned!`);
  };

  componentDidMount = async () => {
    const { status } = await Permissions.askAsync(Permissions.CAMERA);
    this.setState({ hasCameraPermission: status === "granted" });
  };

  render() {
    const { hasCameraPermission } = this.state;

    if (hasCameraPermission === null) {
      return <Text>Requesting for camera permission</Text>;
    }

    if (hasCameraPermission === false) {
      return <Text>No access to camera</Text>;
    }
    return (
      <BarCodeScanner
        onBarCodeScanned={this.handleBarCodeScanned}
        style={StyleSheet.absoluteFill}
      />
    );
  }
}

export default Scanner;
