import "react-native-gesture-handler";
import React from "react";
import { AppRegistry } from "react-native";
import { ApolloClient, InMemoryCache, ApolloProvider } from "@apollo/client";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import Welcome from "./components/Welcome";
import WorkOrderList from "./components/WorkOrders/WorkOrderList";
import Options from "./components/Options";
import CreateWorkOrder from "./components/WorkOrders/CreateWorkOrder";
import WorkOrderItem from "./components/WorkOrders/WorkOrderItem";
import MainMaps from "./components/Maps/MainMaps";
import EditWorkOrder from "./components/WorkOrders/EditWorkOrder";
import { ClientSearchProvider } from "./components/Contexts/ClientSearchContext";
const Stack = createStackNavigator();

// Create the client as outlined in the setup guide
const client = new ApolloClient({
  uri: "http://35.223.26.105:4002/graphql",
  cache: new InMemoryCache(),
});

export default function App() {
  return (
    <ApolloProvider client={client}>
      <ClientSearchProvider>
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
            <Stack.Screen
              name="CreateWorkOrder"
              component={CreateWorkOrder}
              options={{ title: "Nueva Orden de Trabajo" }}
            />
            <Stack.Screen
              name="WorkOrderItem"
              component={WorkOrderItem}
              options={{ title: "Orden de Trabajo" }}
            />
            <Stack.Screen
              name="EditWorkOrder"
              component={EditWorkOrder}
              options={{ title: "Editar Orden de Trabajo" }}
            />
            <Stack.Screen
              name="MainMaps"
              component={MainMaps}
              options={{ title: "Ubicación" }}
            />
          </Stack.Navigator>
        </NavigationContainer>
      </ClientSearchProvider>
    </ApolloProvider>
  );
}

AppRegistry.registerComponent("MyApplication", () => App);
