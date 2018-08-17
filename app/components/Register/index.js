import React, { Component } from 'react';
import { View, Text, TextInput, Button, Alert } from 'react-native';
import { createStackNavigator } from 'react-navigation';

import styles from './styles'


class Register extends Component {
    state = { username: '', email_id: '', password: '' }
    static navigationOptions = {
        header: null
    }
    checkingRegister() {
        const { username, email_id, password } = this.state
        console.log(username, email_id, password)


        fetch("http://192.168.2.128:5000/abc/register", {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                username: username,
                email_id: email_id,
                password: password,
            })
        })
            .then((response) => response.json())
            .then((responseData) => {
                console.log(
                    "POST Response",
                    "Response Body -> " + JSON.stringify(responseData)
                )
                if (responseData.status === true) {
                    // if(responseData.data.admin)
                    this.props.navigation.navigate('dashboard')
                } else {
                    console.log('Errorrrrrrr')
                    Alert.alert('Error', 'Enter All the details', [{
                        text: 'Okay'
                    }])
                }
            })
            .done();
    }


    render() {
        const { heading, input, parent } = styles;
        return (
            <View style={parent}>
                <Text style={heading}>Register</Text>
                <TextInput style={input} placeholder='Username' onChangeText={text =>
                    this.setState({ username: text })
                } />
                <TextInput style={input} placeholder='Email ID' onChangeText={text =>
                    this.setState({ email_id: text })
                } />
                <TextInput style={input} placeholder='Password' secureTextEntry={true}
                    onChangeText={text => this.setState({ password: text })
                    } />
                <Button title='Register' onPress={_ => this.checkingRegister()} />
            </View>
        );
    }
}


export default Register