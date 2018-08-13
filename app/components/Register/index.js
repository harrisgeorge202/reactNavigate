import React, { Component } from 'react';
import { View, Text, TextInput, Button, Alert } from 'react-native';
import styles from './styles'


class Register extends Component {
    state = { username: '', email_id: '', password: '' }
    static navigationOptions = {
        header: null
    }
    checkingRegister() {
        const { username, email_id, password } = this.state
        console.log(username, email_id, password)
        // if (username == 'aaa' && password == 'aaa' && email_id == 'aaa') {
        // fetch('http://192.168.2.128:5000/abc/register', { method: 'POST', body: `username=${username}&email_id=${email_id}&password=${password}`})
        
        




        
//         fetch('http://192.168.2.128:5000/abc/register', { method: 'POST', body: JSON.stringify({username, email_id, password})})
// .then(res => {
// return res.text()
// })
// .then(res => console.warn(res))
        
        
        
        
        


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

        this.props.navigation.navigate('dashboard')


    })
    .done();
}








        
        
        
        
            // } else {
        //     Alert.alert('Error', 'Invalid', [{
        //         text: 'Okay'
        //     }])
        // }
    // }

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