import "react-native-gesture-handler";
import React from "react";
import { AppRegistry } from "react-native";
import { ApolloClient, InMemoryCache, ApolloProvider } from "@apollo/client";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import Welcome from "./components/Welcome";
import WorkOrderList from "./components/WorkOrders/WorkOrderList";
import Options from "./components/Options";
const Stack = createStackNavigator();

// Create the client as outlined in the setup guide
const client = new ApolloClient({
  cache: new InMemoryCache(),
});

export default function App() {
  return (
    <ApolloProvider client={client}>
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
    </ApolloProvider>
  );
}
