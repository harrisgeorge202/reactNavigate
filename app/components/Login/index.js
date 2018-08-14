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

        fetch("http://192.168.2.128:5000/abc/login", {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                username: username,
                password: password,
            })
        })
            .then((response) => response.json())
            .then((responseData) => {
                console.log(
                    "POST Response",
                    "Response Body -> " + JSON.stringify(responseData)
                )
        if(responseData.status === true) {
            // if(responseData.data.admin)



            this.props.navigation.navigate('dashboard', { user: responseData })
        } else {
            console.log('Errorrrrrrr')
            Alert.alert('Error', 'Username or password not valid', [{
                text: 'Okay'
            }])
        }
            })
            .done();
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