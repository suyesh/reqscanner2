import React, { Component } from "react";
import { BottomNavigation } from "react-native-paper";
import { MaterialCommunityIcons as Icon } from "@expo/vector-icons";
import ReadyItems from "./ReadyItems";
import Scanner from "./Scanner";
import ReceivedItems from "./ReceivedItems";

class Screens extends Component {
  state = {
    index: 0,
    routes: [
      {
        key: "ready_items",
        title: "Ready Items",
        icon: ({ color }) => (
          <Icon name="library-books" color={color} size={24} />
        )
      },
      {
        key: "scan",
        title: "Scan",
        icon: ({ color }) => (
          <Icon name="barcode-scan" color={color} size={24} />
        )
      },
      {
        key: "received",
        title: "Received",
        icon: ({ color }) => <Icon name="history" color={color} size={24} />
      }
    ]
  };

  handleIndexChange = index => this.setState({ index });

  renderScene = BottomNavigation.SceneMap({
    ready_items: ReadyItems,
    scan: Scanner,
    received: ReceivedItems
  });

  render() {
    return (
      <BottomNavigation
        navigationState={this.state}
        onIndexChange={this.handleIndexChange}
        renderScene={this.renderScene}
        shifting={true}
      />
    );
  }
}

export default Screens;
