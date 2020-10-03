import "react-native-gesture-handler";
import React from "react";
import { StyleSheet } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import Welcome from "./components/Welcome";
import Options from "./components/Options";
const Stack = createStackNavigator();
export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Welcome"
          component={Welcome}
          options={{ title: "Bienvenido" }}
        />
        <Stack.Screen
          name="Options"
          component={Options}
          options={{ title: "Opciones" }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
