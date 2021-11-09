import React from 'react';
import { SafeAreaView, Text, View, StyleSheet } from 'react-native';
import * as FileSystem from 'expo-file-system';


const lampData = require('./../data/velodrome.json');

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
        {lampData.map((v,index)=>{
             return <View key={index}><Text> latitude{v.lat} longitude {v.lon}</Text></View>
        })}
        </View>

      </SafeAreaView>
    );
  }
}

export default Home;