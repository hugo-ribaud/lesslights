import React, {useEffect, useState} from 'react';
import {View, StyleSheet, Dimensions, Platform, Text, Modal, Pressable} from 'react-native';
import MapView, {Callout, Circle, Marker} from 'react-native-maps';
import {GooglePlacesAutocomplete} from "react-native-google-places-autocomplete";

import MenuPicker from './../components/menu';

const lampData = require('./../data/velodrome.json');

var visible = false;

const showMenu = (id) => {
  //alert(id);
  setModalVisible(true)  
}

const list = () => {
  const [modalVisible, setModalVisible] = useState(false);

  return lampData.map((item) => {
    return (
      <>
      <Marker 
      coordinate={{latitude: item.lat, longitude: item.lon}} 
      onPress={() => {

        //showMenu(item.id);
        //MenuPicker(item.id);

        setModalVisible(true)
      }}
      draggable={false} 
      pinColor="cyan">
        <Callout>
            <Text color='blue'>{item.id}</Text>
        </Callout>
      </Marker>
      <Modal
      animationType="slide"
      transparent={true}
      visible={modalVisible}
      onRequestClose={() => {
        Alert.alert("Modal has been closed.");
        setModalVisible(!modalVisible);
      }}
    >
      <View style={styles.centeredView}>
        <View style={styles.modalView}>
          <Text style={styles.modalText}>Hello World!</Text>
          <Pressable
            style={[styles.button, styles.buttonClose]}
            onPress={() => setModalVisible(!modalVisible)}
          >
            <Text style={styles.textStyle}>Hide Modal</Text>
          </Pressable>
        </View>
      </View>
    </Modal>
    </>
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
                container: { flex: 0, position: "relative", width: "100%", borderWidth: 2, borderColor: 'grey', zIndex: 1},
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
          // image={locaPin}
          // style={styles.marker}
          // onPress showMenu
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
  centeredView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 22
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
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5
  },
  button: {
    borderRadius: 20,
    padding: 10,
    elevation: 2
  },
  buttonOpen: {
    backgroundColor: "#F194FF",
  },
  buttonClose: {
    backgroundColor: "#2196F3",
  },
  textStyle: {
    color: "white",
    fontWeight: "bold",
    textAlign: "center"
  },
  modalText: {
    marginBottom: 15,
    textAlign: "center"
  }
});
