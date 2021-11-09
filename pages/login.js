import React from 'react';
import { SafeAreaView, Text, View, Button, StyleSheet, TextInput, Image } from 'react-native';
import { LinearGradient } from "expo-linear-gradient";

class Login extends React.Component {

  state = {
    email: '',
    password: ''
  }

  handleEmail = (text) => {
    this.setState({ email: text})
  }

  handlePassword = (text) =>{
    this.setState({ password: text})
  }

  login = (email, password) => {
    const Login = {email, password};
    this.props.navigation.navigate('Home')
  }


  render(){
    return (
      <SafeAreaView style={styles.page}>
        <LinearGradient
            // Background Linear Gradient
            colors={['#4bd8da', '#af95c7']}
            style={styles.background}
        />
        <View
          style={styles.form}
        >
        <Image
          source={require('../assets/logo-transparent.png')}
          style={styles.logo}
        />
          <Text>Email</Text>
          <TextInput
            placeholder="Email"
            onChangeText={this.handleEmail}
          />
          <Text style={styles.pw}>Mot de passe</Text>
          <TextInput
            secureTextEntry={true}
            placeholder="Mot de passe"
            onChangeText={this.handlePassword}
            style={styles.input}
            />
          <Button
            title="Se connecter"
            onPress={() => this.login(this.state.email, this.state.password)}
            color='white'
          />
        </View>
      </SafeAreaView>
    );
  }
}

export default Login;

const styles = StyleSheet.create({
  page: {
    height: "100%"
  },
  logo: {
    width: 300,
    height: 300
  },
  background: {
    position: 'absolute',
    left: 0,
    right: 0,
    top: 0,
    height: "100%"
  },
  form: {
    justifyContent: 'center', //Centered vertically
    alignItems: 'center', // Centered horizontally
    flex:1,
    marginHorizontal: 30,
    height: 30
  },
  pw: {
    paddingTop: 24,
  },
  input: {
    paddingBottom: 24,
  }
})
