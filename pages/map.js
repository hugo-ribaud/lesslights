import React, {useEffect, useState} from 'react';
import {View, StyleSheet, Dimensions, Text, Modal, FlatList, Image} from 'react-native';
import MapView, {Callout, Marker} from 'react-native-maps';
import {GooglePlacesAutocomplete} from "react-native-google-places-autocomplete";
import lamp1 from '../assets/lamp-1.png';
import lamp2 from '../assets/lamp-2.png';
import lamp3 from '../assets/lamp-3.png';
import lamp4 from '../assets/lamp-4.png';
import lamp5 from '../assets/lamp-5.png';
import lamp6 from '../assets/lamp-6.png';

const lampData = require('./../data/velodrome.json');
const data = [
  {
    id: 1,
    path: {lamp1},
    desc: 'Lampadaire'
  },
  {
    id: 2,
    path: {lamp2},
    desc: 'Lampadaire'
  },
  {
    id: 3,
    path: {lamp3},
    desc: 'Lampadaire'
  },
  {
    id: 4,
    path: {lamp4},
    desc: 'Lampadaire'
  },
  {
    id: 5,
    path: {lamp5},
    desc: 'Lampadaire'
  },
  {
    id: 6,
    path: {lamp6},
    desc: 'Lampadaire'
  },
]

const Item = ({ desc }) => (
    <View style={styles.item}>
      <Text style={styles.title}>{desc}</Text>
    </View>
);

// const formatData = (data, numColumns) => {
//   const numberOfFullRows = Math.floor(data.length / numColumns);
//
//   let numberOfElementsLastRow = data.length - (numberOfFullRows * numColumns);
//   while (numberOfElementsLastRow !== numColumns && numberOfElementsLastRow !== 0) {
//     data.push({ key: `blank-${numberOfElementsLastRow}`, empty: true });
//     numberOfElementsLastRow++;
//   }
//
//   return data;
// };

const numColumns = 3;

const list = () => {
  const [modalVisible, setModalVisible] = useState(false);
  // const renderItem = ({ item }) => <Item title={item.path} />;
  return lampData.map((item) => {
    return (
      <Marker
        coordinate={{latitude: item.lat, longitude: item.lon}}
        onPress={() => setModalVisible(!modalVisible)}
        draggable={false}
        pinColor="yellow">
          <Modal
            animationType="slide"
            transparent={true}
            visible={modalVisible}
            onRequestClose={() => {
              setModalVisible(!modalVisible);
              alert('Hello');
            }}
          >
            {/*<FlatList*/}
            {/*    data={formatData(data, numColumns)}*/}
            {/*    style={styles.container}*/}
            {/*    renderItem={this.renderItem}*/}
            {/*    numColumns={numColumns}*/}
            {/*/>*/}
          </Modal>
        <Callout>
          <Text color='blue'>Identifiant : {item.id}</Text>
          <Text color='blue'>Latitude : {item.lat}</Text>
          <Text color='blue'>Longitude : {item.lon}</Text>
          <Image
              style={styles.tinyLogo}
              source={require('./../assets/logo-transparent.png')}
          />

        </Callout><Callout>
            <Text color='blue'>{item.id}</Text>
        </Callout>
      </Marker>
    );
  });
};

const Map = () => {

  const [ region, setRegion ] = useState({
    latitude: 43.2700,
    longitude: 5.3955,
    latitudeDelta: 0.0111,
    longitudeDelta: 0.0016,
  })
  return (
        <View style={{marginTop: 50, flex: 1}}>
          <GooglePlacesAutocomplete
              placeholder="Enter Location"
              fetchDetails={true}
              GooglePlacesSearchQuery={{
                rankby: "distance"
              }}
              onPress={(data, details = null) => {
                // 'details' is provided when fetchDetails = true
                console.log(data, details)
                setRegion({
                  latitude: details.geometry.location.lat,
                  longitude: details.geometry.location.lng,
                  latitudeDelta: 0.0922,
                  longitudeDelta: 0.0421
                })
              }}
              query={{
                key: "AIzaSyBBKE9uL_uFI-2SXusKo_VXa8U8PLCmLk8",
                language: "fr",
                components: "country:fr",
                types: "lights",
                radius: 30000,
                location: `${region.latitude}, ${region.longitude}`
              }}
              styles={{
                container: { flex: 0, position: "relative", width: "100%", zIndex: 1},
                listView: { backgroundColor: "white" }
              }}
          />
        <MapView
          style={styles.map}
          initialRegion={{
            latitude: 43.2700,
            longitude: 5.3955,
            latitudeDelta: 0.0111,
            longitudeDelta: 0.0016,
          }}
        >
        <Marker
          coordinate={{latitude: 43.2700, longitude: 5.3955}}
          draggable={false}
          pinColor="cyan"
        >
        <Callout>
          <Text color='blue'>My Position</Text>
        </Callout>
        </Marker>
        {list()}
        </MapView>

      </View>
  );
};
export default Map;
const styles = StyleSheet.create({
  map: {
    width: Dimensions.get('window').width,
    height: Dimensions.get('window').height,
  },
  container: {
    flex: 1,
    marginVertical: 20,
  },
  item: {
    backgroundColor: '#4D243D',
    alignItems: 'center',
    justifyContent: 'center',
    flex: 1,
    margin: 1,
    height: Dimensions.get('window').width / numColumns, // approximate a square
  },
  itemInvisible: {
    backgroundColor: 'transparent',
  },
  itemText: {
    color: '#fff',
  },
  modalView: {
    margin: 20,
    backgroundColor: "white",
    borderRadius: 20,
    padding: 35,
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2
    }
  },
  tinyLogo: {
    width: 300,
    height: 200
  }
});
