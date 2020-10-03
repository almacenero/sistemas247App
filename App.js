import "react-native-gesture-handler";
import React from "react";
import { StyleSheet } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import Welcome from "./components/Welcome";
import WorkOrderList from "./components/WorkOrders/WorkOrderList";
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
        <Stack.Screen
          name="WorkOrderList"
          component={WorkOrderList}
          options={{ title: "Ordenes de Trabajo" }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
