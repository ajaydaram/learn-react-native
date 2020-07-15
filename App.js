import React from "react";
import { View, Text, SafeAreaView, StyleSheet } from "react-native";

const App = () => {
  return (
    <SafeAreaView>
      <View style={styles.container}>
        <Text style={styles.text}> Here are the some boxes of different colors</Text>
      </View>
      <View style={[styles.Box, styles.cyan]}>
        <Text style={styles.boxText}>Cyan: #2aa198</Text>
      </View>
      <View style={[styles.Box, styles.blue]}>
        <Text style={styles.boxText}>Blue: #268bd2</Text>
      </View>
      <View style={[styles.Box,styles.magenta]}>
        <Text style={styles.boxText}> Magneta: #d33682 </Text>
      </View>
      <View style={[styles.Box, styles.orange]}>
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
  Box: {
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
  cyanBox: {
    backgroundColor: '#2aa198',
  },
  blue: {
    backgroundColor: "#268bd2",
    
  },
  magenta: {
    backgroundColor: "#d33682",
    
  },
  orange: {
    backgroundColor: "#cb4b16",
  },
})
export default App;
