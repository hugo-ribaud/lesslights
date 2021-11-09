import React from 'react';
import { SafeAreaView, Text, View, Button, StyleSheet, TextInput } from 'react-native';
import axios from 'axios';

const styles = StyleSheet.create({
  backgroundColor: {
    backgroundColor: 'grey',
  }
})

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
    /*axios.post('connexion route' , Login)
    .then((response) => {
        console.log(response.data.data.token);
    })*/
  
  }


  render(){

    return (
      <SafeAreaView style={styles.backgroundColor}>
        <View>
          <Text>Email</Text>
          <TextInput 
            placeholder="Email"
            onChangeText={this.handleEmail}
          />
          <Text>Mot de passe</Text>
          <TextInput 
            secureTextEntry={true} 
            placeholder="Mot de passe" 
            onChangeText={ this.handlePassword}/>
          <Button title="Se connecter" onPress={() => this.login(this.state.email, this.state.password)} />
        </View>
      </SafeAreaView>
    );
  }
}

export default Login;