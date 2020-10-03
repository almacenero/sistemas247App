import * as React from "react";
import { Button } from "react-native";
//import { StyleSheet } from "react-native";
const ButtonStart = ({ navigation }) => {
  return (
    <Button
      color="#215e97"
      title="Opciones"
      onPress={() => navigation.navigate("Options", {})}
    />
  );
};

/* const styles = StyleSheet.create({
  button: {
    backgroundColor: "#fff",
    color: "red",
  },
}); */

export default ButtonStart;
