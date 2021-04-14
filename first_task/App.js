import { StatusBar } from "expo-status-bar";
import React, { useState } from "react";
import { Button, StyleSheet, Text, TextInput, View } from "react-native";

export default function App() {
  const [text, setText] = useState();
  const [display, setDisplay] = useState();

  const addText = () => {
    setDisplay(text);
  };

  return (
    <View style={styles.container}>
      <Text>{display}</Text>
      <TextInput
        placeholder='Write your text here...'
        onChangeText={(txt) => setText(txt)}
      />
      <Button onPress={addText} title='Tap here' />
      <StatusBar style='auto' />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
