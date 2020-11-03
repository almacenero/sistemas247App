import * as React from "react";
import {
  StyleSheet,
  View,
  Text,
  TextInput,
  Button,
  ScrollView,
} from "react-native";
import { CheckBox } from "react-native-elements";
import { useMutation, gql } from "@apollo/client";
import * as Location from "expo-location";
import SearchClient from "./../Clients/SearchClient";
import { ClientSearchContext } from "./../Contexts/ClientSearchContext";

const CREATE_WORK_ORDER = gql`
  mutation CreateWorkOrder(
    $client_id: String
    $productDamage: String
    $address: String
    $price: Float
    $past: String
    $redCar: Boolean
    $van: Boolean
    $latitude: Float
    $longitude: Float
    $solution: String
    $productSerie: String
  ) {
    createWorkOrder(
      client_id: $client_id
      productDamage: $productDamage
      address: $address
      price: $price
      past: $past
      redCar: $redCar
      van: $van
      latitude: $latitude
      longitude: $longitude
      solution: $solution
      productSerie: $productSerie
    ) {
      _id
    }
  }
`;

const CreateWorkOrder = () => {
  const { client_id } = React.useContext(ClientSearchContext);
  const [address, onChangeAddress] = React.useState("");
  const [price, onChangePrice] = React.useState(0);
  const [productDamage, onChangeProductDamage] = React.useState("");
  const [pastInput, setpastInput] = React.useState("");
  const [redCarInput, setredCarInput] = React.useState(false);
  const [vanInput, setvanInput] = React.useState(false);
  const [productSerie, setproductSerieInput] = React.useState("");
  const [createWorkOrder, { error, loading }] = useMutation(CREATE_WORK_ORDER);

  const [location, setLocation] = React.useState(null);
  const [errorMsg, setErrorMsg] = React.useState(null);
  const [latitude, setLatitude] = React.useState();
  const [longitude, setLongitude] = React.useState();
  const [solutionInput, setsolutionInput] = React.useState("");
  const handleLatitude = (la) => {
    if (la !== latitude) {
      setLatitude(la);
    }
  };
  const handleLongitude = (lo) => {
    if (lo !== longitude) {
      setLongitude(lo);
    }
  };

  const handleCreateWorkOrder = () => {
    createWorkOrder({
      variables: {
        client_id: client_id,
        productDamage: productDamage,
        address: address,
        price: parseFloat(price),
        past: pastInput,
        van: vanInput,
        redCar: redCarInput,
        latitude: latitude,
        longitude: longitude,
        solution: solutionInput,
        productSerie: productSerie,
      },
    });
    onChangeAddress("");
    onChangePrice();
    onChangeProductDamage("");
    setpastInput("");
    setredCarInput(false);
    setvanInput(false);
    setsolutionInput("");
    setproductSerieInput("");
  };

  React.useEffect(() => {
    (async () => {
      let { status } = await Location.requestPermissionsAsync();
      if (status !== "granted") {
        setErrorMsg("Permission to access location was denied");
      }

      let location = await Location.getCurrentPositionAsync({
        accuracy: Location.Accuracy.BestForNavigation,
      });
      setLocation(location);
    })();
  }, []);

  let text = "Waiting..";
  if (errorMsg) {
    text = errorMsg;
  } else if (location) {
    handleLatitude(location.coords.latitude);
    handleLongitude(location.coords.longitude);
    text = JSON.stringify(location);
  }
  if (loading) return <Text>Loading...</Text>;
  if (error) return <Text>Error :(</Text>;

  return (
    <ScrollView>
      <SearchClient />
      <View style={styles.container}>
        <Text style={styles.label}>Número de Série/Imei: </Text>
        <TextInput
          style={styles.textInput}
          onChangeText={(text) => setproductSerieInput(text)}
          value={productSerie}
        />
        <Text style={styles.label}>Dirección: </Text>
        <TextInput
          style={styles.textInput}
          onChangeText={(text) => onChangeAddress(text)}
          value={address}
        />
        <Text style={styles.label}>Precio: </Text>
        <TextInput
          style={styles.textInput}
          onChangeText={(text) => onChangePrice(text)}
          value={price}
        />
        <Text style={styles.label}>Antecedentes: </Text>
        <TextInput
          style={styles.textInput}
          onChangeText={(text) => setpastInput(text)}
          value={pastInput}
        />
        <Text style={styles.label}>Transporte: </Text>
        <CheckBox
          title="Rojo"
          checked={redCarInput}
          onPress={() => setredCarInput(!redCarInput)}
        />
        <CheckBox
          title="Blanco"
          checked={vanInput}
          onPress={() => setvanInput(!vanInput)}
        />
        <Text style={styles.label}>Daño: </Text>
        <TextInput
          style={styles.textInput}
          onChangeText={(text) => onChangeProductDamage(text)}
          value={productDamage}
        />
        <Text style={styles.label}>Solución: </Text>
        <TextInput
          style={styles.textInput}
          onChangeText={(text) => setsolutionInput(text)}
          value={solutionInput}
        />
        <Button
          style={styles.saveButton}
          //color="black"
          color="#215e97"
          title="Guardar"
          onPress={() => handleCreateWorkOrder()}
        />
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
  label: { marginVertical: 5, marginHorizontal: 15 },
});

export default CreateWorkOrder;
