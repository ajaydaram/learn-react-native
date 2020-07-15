import React from "react";
import { View, Text, SafeAreaView, StyleSheet } from "react-native";

const App = () => {
  return (
    <SafeAreaView>
      <View style={styles.container}>
        <Text style={styles.text}> Here are the some boxes of different colors</Text>
      </View>
      <View style={styles.cyanBox}>
        <Text style={styles.boxText}>Cyan: #2aa198</Text>
      </View>
      <View style={styles.blueBox}>
        <Text style={styles.boxText}>Blue: #268bd2</Text>
      </View>
      <View style={styles.magentaBox}>
        <Text style={styles.boxText}>Magneta: #d33682</Text>
      </View>
      <View style={styles.orangeBox}>
        <Text style={styles.boxText}>Orange: #cb4b16</Text>
      </View>
    </SafeAreaView>
  );
}; 
const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 10,
    paddingVertical: 40,
  },
  text: {
    fontSize: 20,
    fontWeight: "bold",
    textAlign: "center",
  },
  cyanBox: {
    backgroundColor: "#2aa198",
    padding: 10,
    textAlign: "center",
    marginHorizontal: 5,
    alignItems: "center",
    marginBottom: 10,
  },
  boxText: {
     color: "white",
     fontWeight: "bold",
  },
  blueBox: {
    backgroundColor: "#268bd2",
    padding: 10,
    textAlign: "center",
    marginHorizontal: 5,
    alignItems: "center",
    marginBottom: 10,
  },
  magentaBox: {
    backgroundColor: "#d33682",
    padding: 10,
    textAlign: "center",
    marginHorizontal: 5,
    alignItems: "center",
    marginBottom: 10,
  },
  orangeBox: {
    backgroundColor: "#cb4b16",
    padding: 10,
    textAlign: "center",
    marginHorizontal: 5,
    alignItems: "center",
    marginBottom: 10,
  },
})
export default App;
