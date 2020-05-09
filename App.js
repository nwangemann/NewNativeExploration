import React from "react";
import { StyleSheet, Text, View, Input } from "react-native";

export default function App() {
  return (
    <View style={styles.container}>
      <View style={styles.card}>
        <Text style={styles.text}>pluck</Text>
        <Input type="file" />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "lightgrey",
    alignItems: "center",
    justifyContent: "center",
  },
  card: {
    backgroundColor: "lightblue",
    width: 150,
    height: 100,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 25,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 12,
    },
    shadowOpacity: 0.58,
    shadowRadius: 16.00,
    elevation: 24,
  },
  text: {
    color: "navy",
    fontSize: 23,
  }
});
