import React, { Component } from 'react';
import { View, Text, TextInput, Button, Alert } from 'react-native';
// import { createStackNavigator } from 'react-navigation';
import Register from './../Register';
import styles from './styles'


class Login extends Component {
    state = { username: '', password: '' }
    static navigationOptions = {
        header: null
    }
    checkingLogin() {
        const { username, password } = this.state
        console.log(username, password)
        if (username == 'admin' && password == 'admin') {
            this.props.navigation.navigate('dashboard')
        } else {
            Alert.alert('Error', 'Invalid', [{
                text: 'Okay'
            }])
        }
    }


    register() {
        this.props.navigation.navigate('register')

    }


    render() {
        const { heading, input, parent } = styles;
        return (
            <View style={parent}>
                <Text style={heading}>Login</Text>
                <TextInput style={input} placeholder='Username' onChangeText={text =>
                    this.setState({ username: text })
                } />
                <TextInput style={input} placeholder='Password' secureTextEntry={true} onChangeText={text => this.setState({ password: text })} />
                <Button title='Login' onPress={_ => this.checkingLogin()} />


                <Button title='Register' onPress={reg => this.register()} />


            </View>
        );
    }
}


export default Login