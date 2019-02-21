import React, { Component } from "react";
import { StyleSheet, View } from "react-native";
import { Searchbar, Appbar } from "react-native-paper";

class Search extends Component {
  state = {
    query: ""
  };

  render() {
    const { query } = this.state;
    return (
      <View style={styles.searchContainer}>
        <Appbar.Header>
          <View style={{ flex: 1 }}>
            <Searchbar
              placeholder="Search"
              onChangeText={query => {
                this.setState({ query });
              }}
              value={query}
            />
          </View>
        </Appbar.Header>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  searchContainer: {
    width: "100%"
  }
});

export { Search };
