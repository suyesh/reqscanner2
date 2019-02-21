import React, { Fragment } from "react";
import { ScrollView } from "react-native";
import { List, Chip, Text } from "react-native-paper";
import Swipeout from "react-native-swipeout";

var swipeoutBtns = [
  {
    text: "Receive",
    backgroundColor: "#2e7d32"
  }
];

const ReadyItemsList = () => (
  <ScrollView style={{ flex: 3, width: "100%" }}>
    <List.Section title="Requisitions Ready to be Picked up">
      <Swipeout left={swipeoutBtns} autoClose>
        <List.Item
          title="RK-10293847"
          description={
            <Fragment>
              <Text style={{ fontWeight: "bold" }}>Filled:</Text>{" "}
              <Text>50/80</Text>
              <Text style={{ fontWeight: "bold", marginLeft: 10 }}>
                {" "}
                PS-100
              </Text>
            </Fragment>
          }
          left={() => <List.Icon icon="info" />}
          style={{
            borderBottomWidth: 1.5,
            borderBottomColor: "#d6d7da",
            backgroundColor: "white"
          }}
        />
      </Swipeout>

      <Swipeout left={swipeoutBtns} autoClose>
        <List.Item
          title="RK-10293847"
          description={
            <Fragment>
              <Text style={{ fontWeight: "bold" }}>Filled:</Text>{" "}
              <Text>50/80</Text>
              <Text style={{ fontWeight: "bold", marginLeft: 10 }}>
                {" "}
                PS-100
              </Text>
            </Fragment>
          }
          left={() => <List.Icon icon="info" />}
          style={{
            borderBottomWidth: 1.5,
            borderBottomColor: "#d6d7da",
            backgroundColor: "white"
          }}
        />
      </Swipeout>

      <Swipeout left={swipeoutBtns} autoClose>
        <List.Item
          title="RK-10293847"
          description={
            <Fragment>
              <Text style={{ fontWeight: "bold" }}>Filled:</Text>{" "}
              <Text>50/80</Text>
              <Text style={{ fontWeight: "bold", marginLeft: 10 }}>
                {" "}
                PS-100
              </Text>
            </Fragment>
          }
          left={() => <List.Icon icon="info" />}
          style={{
            borderBottomWidth: 1.5,
            borderBottomColor: "#d6d7da",
            backgroundColor: "white"
          }}
        />
      </Swipeout>

      <Swipeout left={swipeoutBtns} autoClose>
        <List.Item
          title="RK-10293847"
          description={
            <Fragment>
              <Text style={{ fontWeight: "bold" }}>Filled:</Text>{" "}
              <Text>50/80</Text>
              <Text style={{ fontWeight: "bold", marginLeft: 10 }}>
                {" "}
                PS-100
              </Text>
            </Fragment>
          }
          left={() => <List.Icon icon="info" />}
          style={{
            borderBottomWidth: 1.5,
            borderBottomColor: "#d6d7da",
            backgroundColor: "white"
          }}
        />
      </Swipeout>

      <Swipeout left={swipeoutBtns} autoClose>
        <List.Item
          title="RK-10293847"
          description={
            <Fragment>
              <Text style={{ fontWeight: "bold" }}>Filled:</Text>{" "}
              <Text>50/80</Text>
              <Text style={{ fontWeight: "bold", marginLeft: 10 }}>
                {" "}
                PS-100
              </Text>
            </Fragment>
          }
          left={() => <List.Icon icon="info" />}
          style={{
            borderBottomWidth: 1.5,
            borderBottomColor: "#d6d7da",
            backgroundColor: "white"
          }}
        />
      </Swipeout>

      <Swipeout left={swipeoutBtns} autoClose>
        <List.Item
          title="RK-10293847"
          description={
            <Fragment>
              <Text style={{ fontWeight: "bold" }}>Filled:</Text>{" "}
              <Text>50/80</Text>
              <Text style={{ fontWeight: "bold", marginLeft: 10 }}>
                {" "}
                PS-100
              </Text>
            </Fragment>
          }
          left={() => <List.Icon icon="info" />}
          style={{
            borderBottomWidth: 1.5,
            borderBottomColor: "#d6d7da",
            backgroundColor: "white"
          }}
        />
      </Swipeout>

      <Swipeout left={swipeoutBtns} autoClose>
        <List.Item
          title="RK-10293847"
          description={
            <Fragment>
              <Text style={{ fontWeight: "bold" }}>Filled:</Text>{" "}
              <Text>50/80</Text>
              <Text style={{ fontWeight: "bold", marginLeft: 10 }}>
                {" "}
                PS-100
              </Text>
            </Fragment>
          }
          left={() => <List.Icon icon="info" />}
          style={{
            borderBottomWidth: 1.5,
            borderBottomColor: "#d6d7da",
            backgroundColor: "white"
          }}
        />
      </Swipeout>

      <Swipeout left={swipeoutBtns} autoClose>
        <List.Item
          title="RK-10293847"
          description={
            <Fragment>
              <Text style={{ fontWeight: "bold" }}>Filled:</Text>{" "}
              <Text>50/80</Text>
              <Text style={{ fontWeight: "bold", marginLeft: 10 }}>
                {" "}
                PS-100
              </Text>
            </Fragment>
          }
          left={() => <List.Icon icon="info" />}
          style={{
            borderBottomWidth: 1.5,
            borderBottomColor: "#d6d7da",
            backgroundColor: "white"
          }}
        />
      </Swipeout>

      <Swipeout left={swipeoutBtns} autoClose>
        <List.Item
          title="RK-10293847"
          description={
            <Fragment>
              <Text style={{ fontWeight: "bold" }}>Filled:</Text>{" "}
              <Text>50/80</Text>
              <Text style={{ fontWeight: "bold", marginLeft: 10 }}>
                {" "}
                PS-100
              </Text>
            </Fragment>
          }
          left={() => <List.Icon icon="info" />}
          style={{
            borderBottomWidth: 1.5,
            borderBottomColor: "#d6d7da",
            backgroundColor: "white"
          }}
        />
      </Swipeout>

      <Swipeout left={swipeoutBtns} autoClose>
        <List.Item
          title="RK-10293847"
          description={
            <Fragment>
              <Text style={{ fontWeight: "bold" }}>Filled:</Text>{" "}
              <Text>50/80</Text>
              <Text style={{ fontWeight: "bold", marginLeft: 10 }}>
                {" "}
                PS-100
              </Text>
            </Fragment>
          }
          left={() => <List.Icon icon="info" />}
          style={{
            borderBottomWidth: 1.5,
            borderBottomColor: "#d6d7da",
            backgroundColor: "white"
          }}
        />
      </Swipeout>
    </List.Section>
  </ScrollView>
);

export { ReadyItemsList };
