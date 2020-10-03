import * as React from "react";
import { Button } from "react-native";
const ButtonStart = ({ navigation }) => {
  return (
    <Button
      title="Opciones"
      onPress={() => navigation.navigate("Options", {})}
    />
  );
};

export default ButtonStart;
