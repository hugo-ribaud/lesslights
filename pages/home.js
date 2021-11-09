import React from 'react';
import { SafeAreaView, Text, View, StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  backgroundColor: {
    backgroundColor: 'grey',
  }
})
class Home extends React.Component {
 
  render(){

    return (
      <SafeAreaView style={styles.backgroundColor}>
        <View>
          <Text>Home</Text>
        </View>
      </SafeAreaView>
    );
  }
}

export default Home;