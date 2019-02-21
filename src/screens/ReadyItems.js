import React, { Component, Fragment } from "react";
import { View } from "react-native";
import { Search, ReadyItemsList } from "../components";

class ReadyItems extends Component {
  render() {
    return (
      <View
        style={{ flex: 1, justifyContent: "flex-start", alignItems: "center" }}
      >
        <Search />
        <ReadyItemsList />
      </View>
    );
  }
}

export default ReadyItems;
