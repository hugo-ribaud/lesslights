import React, {useEffect, useState} from 'react';
import {View, StyleSheet, Dimensions} from 'react-native';
import MapView from 'react-native-maps';
const Map = () => {
  const [mapRegion, setmapRegion] = useState({
    latitude: 43.2969500,
    longitude: 5.3810700,
    latitudeDelta: 0.0922,
    longitudeDelta: 0.0421,
  });
  useEffect(() => {
    (async () => {
      let { status } = await  Location.requestForegroundPermissionsAsync();
      if (status !== 'granted') {
        setStatus('Permission to access location was denied');
      } else {
        console.log('Access granted!!')
        setStatus(status)
      }

    })();
  }, []);

  return (
      <View style={styles.container}>
        <MapView
            style={styles.map}
            region={mapRegion}
        />
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
});
