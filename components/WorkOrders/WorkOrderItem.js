import * as React from "react";
import {
  StyleSheet,
  View,
  Text,
  Alert,
  Button,
  ScrollView,
} from "react-native";
import { useMutation, gql } from "@apollo/client";

const DELETE_WORK_ORDER = gql`
  mutation DeleteWorkOrder($_id: String) {
    deleteWorkOrder(_id: $_id) {
      _id
    }
  }
`;
const WorkOrderItem = ({ route, navigation }) => {
  const [deleteWorkOrder, { error, loading }] = useMutation(DELETE_WORK_ORDER);
  const [_id, set_Id] = React.useState(route.params._id);
  const [client, onChangeClient] = React.useState(route.params.client_id);
  const [address, onChangeAddress] = React.useState(route.params.address);
  const [price, onChangePrice] = React.useState(route.params.price);
  const [past, setpastInput] = React.useState(route.params.past);
  const [redCar, setredCarInput] = React.useState(route.params.redCar);
  const [van, setvanInput] = React.useState(route.params.van);
  const [productDamage, onChangeProductDamage] = React.useState(
    route.params.productDamage
  );
  const [date, setDate] = React.useState(route.params.date);
  const [status, setStatus] = React.useState(route.params.status);
  const createTwoButtonAlert = () =>
    Alert.alert(
      "Estas seguro que vas a eliminar la orden:",
      productDamage,
      [
        {
          text: "Cancelar",
          onPress: () => console.log("Cancel Pressed"),
          style: "cancel",
        },
        {
          text: "OK",
          onPress: () => {
            deleteWorkOrder({
              variables: {
                _id: route.params._id,
              },
            });
            navigation.navigate("WorkOrderList");
          },
        },
      ],
      { cancelable: false }
    );
  if (loading) return <Text>Cargando....</Text>;
  if (error) return <Text>Error :(</Text>;
  return (
    <ScrollView>
      <View style={styles.container}>
        <Text style={styles.label}>Numero de orden:</Text>
        <Text style={styles.fontContent}>{_id}</Text>
        <Text style={styles.label}>Cliente:</Text>
        <Text style={styles.fontContent}>{client}</Text>
        <Text style={styles.label}>Daño:</Text>
        <Text style={styles.fontContent}>{productDamage}</Text>
        <Text style={styles.label}>Fecha:</Text>
        <Text style={styles.fontContent}>{date}</Text>
        <Text style={styles.label}>Precio:</Text>
        <Text style={styles.fontContent}>${price}</Text>
        <Text style={styles.label}>Estado:</Text>
        <Text style={styles.fontContent}>{status}</Text>
        <View style={styles.buttonContainer}>
          <View styles={{ width: 50, height: 50 }}>
            <Button
              color="#fca652"
              title="Editar"
              onPress={() =>
                navigation.navigate("EditWorkOrder", {
                  _id,
                  address,
                  status,
                  productDamage,
                  price,
                  client,
                  past,
                  redCar,
                  van,
                })
              }
            />
          </View>
          <View styles={{ width: 50, height: 50 }}>
            <Button
              color="red"
              title="Eliminar"
              onPress={createTwoButtonAlert}
            />
          </View>
        </View>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    //backgroundColor: "#fff",
    //alignItems: "center",
    //justifyContent: "center",
    marginVertical: 10,
    marginHorizontal: 25,
  },
  textInput: {
    height: 40,
    borderColor: "gray",
    borderWidth: 1,
    borderRadius: 5,
    padding: 10,
    marginBottom: 35,
  },
  label: {
    marginVertical: 5,
    //marginHorizontal: 15,
    fontSize: 20,
  },
  textConent: {},
  buttonContainer: {
    flex: 2,
    flexDirection: "row",
    //justifyContent: "space-between",
    justifyContent: "space-around",
    marginTop: 30,
  },
});

export default WorkOrderItem;
