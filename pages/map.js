import React, {useEffect, useState} from 'react';
import {View, StyleSheet, Dimensions, Platform, Text} from 'react-native';
import MapView, {Callout, Circle, Marker} from 'react-native-maps';

const Map = () => {

  return (
      <View style={styles.container}>
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
        >
        <Callout>
          <Text color='blue'>My Position</Text>

        </Callout>
        </Marker>
        <Circle
          center={{latitude: 43.2700, longitude: 5.3955,}}
          radius={200}/>
        </MapView>
      </View>
  );
};
export default Map;
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  map: {
    width: Dimensions.get('window').width,
    height: Dimensions.get('window').height,
  },
  paragraph: {
    fontSize: 18,
    textAlign: 'center',
  },
});
