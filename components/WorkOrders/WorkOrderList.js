import * as React from "react";
import {
  StyleSheet,
  View,
  Text,
  SafeAreaView,
  FlatList,
  ScrollView,
  Button,
} from "react-native";
import { useQuery, gql } from "@apollo/client";

const GET_WORK_ORDERS = gql`
  {
    workOrders {
      _id
      client_id
      productDamage
      date
      address
      price
      status
      past
      redCar
      latitude
      longitude
    }
  }
`;

const Item = ({
  productDamage,
  status,
  navigation,
  _id,
  address,
  date,
  price,
  client_id,
  past,
  redCar,
  van,
  latitude,
  longitude,
}) => (
  <ScrollView>
    <View style={styles.item}>
      <Text
        style={styles.title}
        onPress={() =>
          navigation.navigate("WorkOrderItem", {
            status,
            productDamage,
            _id,
            address,
            date,
            price,
            client_id,
            past,
            redCar,
            van,
          })
        }
      >
        {productDamage} - ({status})
      </Text>
      <Button
        color="#215e97"
        title="Ubicación"
        onPress={() =>
          navigation.navigate("MainMaps", {
            latitude,
            longitude,
          })
        }
      />
    </View>
  </ScrollView>
);

const WorkOrderList = ({ navigation }) => {
  const renderItem = ({ item }) => (
    <Item
      productDamage={item.productDamage}
      status={item.status}
      client_id={item.client_id}
      price={item.price}
      date={item.date}
      address={item.address}
      _id={item._id}
      navigation={navigation}
      past={item.past}
      redCar={item.redCar}
      van={item.van}
      longitude={item.longitude}
      latitude={item.latitude}
    />
  );
  const { loading, error, data } = useQuery(GET_WORK_ORDERS, {
    pollInterval: 500,
  });
  if (loading) return <Text>Loading...</Text>;
  if (error) return <Text>Error :(</Text>;
  return (
    <View style={styles.container}>
      {/* {data.workOrders.map(({ _id, productDamage }) => (
        <Text key={_id}>{productDamage} </Text>
      ))} */}
      <SafeAreaView>
        <FlatList
          data={data.workOrders}
          renderItem={renderItem}
          keyExtractor={(item) => item._id}
        />
      </SafeAreaView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    //flex: 1,
    //backgroundColor: "#fff",
    //alignItems: "center",
    //justifyContent: "center",
    //marginVertical: 120,
  },
  tinyLogo: {
    width: 350,
    height: 350,
  },
  item: {
    //backgroundColor: "#215e97",
    //borderColor: "#215e97",
    //borderStyle: "solid",
    borderColor: "#215e97",
    borderWidth: 1,
    padding: 5,
    marginVertical: 5,
    marginHorizontal: 5,
    borderRadius: 5,
  },
  title: {
    fontSize: 13,
    color: "#215e97",
  },
});

export default WorkOrderList;
