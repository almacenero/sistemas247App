import * as React from "react";
import {
  StyleSheet,
  View,
  Text,
  TextInput,
  Button,
  ScrollView,
} from "react-native";
import { useMutation, gql } from "@apollo/client";
import SearchClient from "./../Clients/SearchClient";
import { ClientSearchContext } from "./../Contexts/ClientSearchContext";

const CREATE_CLIENT = gql`
  mutation CreateClient(
    $name: String
    $secondName: String
    $mail: String
    $code: String
    $phone: String
    $dir: String
    $city: String
    $totalPurchases: Int
    $ci: String
    $file: Upload
  ) {
    createClient(
      name: $name
      secondName: $secondName
      mail: $mail
      code: $code
      phone: $phone
      dir: $dir
      city: $city
      totalPurchases: $totalPurchases
      ci: $ci
      file: $file
    ) {
      _id
    }
  }
`;

const CreateClient = () => {
  const { client_id } = React.useContext(ClientSearchContext);
  const [createClient, { error, loading }] = useMutation(CREATE_CLIENT);

  const [nameInput, setnameInput] = React.useState("");
  const [secondNameInput, setsecondNameInput] = React.useState("");
  const [mailInput, setmailInput] = React.useState("");
  const [phoneInput, setphoneInput] = React.useState("");
  const [dirInput, setdirInput] = React.useState("");
  const [cityInput, setcityInput] = React.useState("");
  const [ciInput, setciInput] = React.useState("");

  const handleCreateClient = () => {
    createClient({
      variables: {
        name: nameInput,
        secondName: secondNameInput,
        mail: mailInput,
        phone: phoneInput,
        dir: dirInput,
        city: cityInput,
        ci: ciInput,
        file: file,
      },
    });
    setnameInput("");
    setsecondNameInput("");
    setphoneInput("");
    setdirInput("");
    setcityInput("");
    setciInput("");
    toggle();
  };

  if (loading) return <Text>Cargando...</Text>;
  if (error) return <Text>Error :(</Text>;

  return (
    <ScrollView>
      <View style={styles.container}>
        <Text style={styles.label}>Nombre: </Text>
        <TextInput
          style={styles.textInput}
          onChangeText={(text) => setnameInput(text)}
          value={nameInput}
        />
        <Text style={styles.label}>Apellido: </Text>
        <TextInput
          style={styles.textInput}
          onChangeText={(text) => setsecondNameInput(text)}
          value={secondNameInput}
        />
        <Text style={styles.label}>Número de Cédula: </Text>
        <TextInput
          style={styles.textInput}
          onChangeText={(text) => setciInput(text)}
          value={ciInput}
        />
        <Text style={styles.label}>Correo Electrónico: </Text>
        <TextInput
          style={styles.textInput}
          onChangeText={(text) => setmailInput(text)}
          value={mailInput}
        />
        <Text style={styles.label}>Teléfono: </Text>
        <TextInput
          style={styles.textInput}
          onChangeText={(text) => setphoneInput(text)}
          value={phoneInput}
        />
        <Text style={styles.label}>Dirección: </Text>
        <TextInput
          style={styles.textInput}
          onChangeText={(text) => setdirInput(text)}
          value={dirInput}
        />
        <Text style={styles.label}>Ciudad: </Text>
        <TextInput
          style={styles.textInput}
          onChangeText={(text) => setcityInput(text)}
          value={cityInput}
        />
        <Button
          style={styles.saveButton}
          //color="black"
          color="#215e97"
          title="Guardar"
          onPress={() => handleCreateClient()}
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

export default CreateClient;
