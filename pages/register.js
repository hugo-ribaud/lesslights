import React from 'react';
import { SafeAreaView, Text, View, StyleSheet, TextInput, TouchableOpacity } from 'react-native';
import axios from 'axios';

const styles = StyleSheet.create({
  backgroundColor: {
    backgroundColor: 'grey',
  }
})
class Register extends React.Component {

  state = { 
    email: '',
    password: '',
    confirm: '',
    error: ''
  }

  handleEmail = (text) => {
    this.setState({ email: text})
  }

  handlePassword = (text) =>{
    this.setState({ password: text})
  }

  handleConfirm = (text) => {
    this.setState({ confirm: text})
  }

  login = (email, password, confirm) => {
      const userRegistration = {email, password}

      if (password == confirm) {
        //axios.post('inscription route', userRegistration);
        this.props.navigation.navigate('Home')
      } else {
        this.setState({error: 'Les mots de passe sont différents'});
      }
  }

  render(){

    return (
      <SafeAreaView style={styles.backgroundColor}>
        <View>
          <Text>{this.state.error}</Text>
          <Text>Email</Text>
          <TextInput 
            placeholder="Email"
            onChangeText={this.handleEmail}
          />
          <Text>Mot de passe</Text>
          <TextInput 
            secureTextEntry={true} 
            placeholder="Mot de passe" 
            onChangeText={ this.handlePassword}
            />
          <Text>Confirmer le mot de passe</Text>
          <TextInput 
            secureTextEntry={true}
            placeholder="Confirmation"
            onChangeText={ this.handleConfirm}
            />

          <TouchableOpacity
            title="S'inscrire" 
            onPress={() => this.login(this.state.email, this.state.password, this.state.confirm)} 
          >
            <Text>S'inscrire</Text>
          </TouchableOpacity>
        </View>
      </SafeAreaView>
    );
  }
}

export default Register;