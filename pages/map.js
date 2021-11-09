import React, {useEffect, useState} from 'react';
import {View, StyleSheet, Dimensions, Platform, Text} from 'react-native';
import MapView, {Marker} from 'react-native-maps';

const Map = () => {
  const [location, setLocation] = useState();
  const [errorMsg, setErrorMsg] = useState();

  useEffect(() => {
    (async () => {
      let { status } = await Location.requestForegroundPermissionsAsync();
      if (status !== 'granted') {
        setErrorMsg('Permission to access location was denied');
        return;
      }

      let location = await Location.getCurrentPositionAsync({});
      setLocation(location);
    })();
  }, []);

  let text = 'Waiting..';
  if (errorMsg) {
    text = errorMsg;
  } else if (location) {
    text = JSON.stringify(location);
  }

  return (
      <View style={styles.container}>
        <MapView
          style={styles.map}
          initialRegion={{
            latitude: 43.2701,
            longitude: 5.3925,
            latitudeDelta: 0.0122,
            longitudeDelta: 0.0021,
          }}
        />
        <Marker
          coordinate={{latitude: 43.2701, longitude: 5.3925}}
          title={"title"}
          description={"description"}
        />
        <Text
          style={styles.paragraph}>{text}
        </Text>
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
