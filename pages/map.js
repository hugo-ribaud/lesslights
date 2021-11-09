import React, {useEffect, useState} from 'react';
import {View, StyleSheet, Dimensions, Platform, Text} from 'react-native';
import MapView, {Callout, Circle, Marker} from 'react-native-maps';
import {GooglePlacesAutocomplete} from "react-native-google-places-autocomplete";

const Map = () => {
  const [ region, setRegion ] = React.useState({
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
        <Circle
          center={{latitude: 43.2700, longitude: 5.3955,}}
          radius={150}/>
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
});
