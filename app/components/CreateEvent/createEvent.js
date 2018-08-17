import React, { Component } from 'react';
import { View, Text, TextInput, Button, Alert } from 'react-native';
// import { createStackNavigator } from 'react-navigation';
import styles from './styles'




class CreateEvent extends Component {

    static navigationOptions = {
        header: null
    }



    createEvent() {
        const { name, tag, description } = this.state
        const { params } = this.props.navigation.state
        console.log("paramsparams", params.user.user.data.username)
        console.log(name, tag, description)

        fetch("http://192.168.2.128:5000/abc/event/create", {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                name: name,
                username: params.user.user.data.username,
                tag: tag,
                description: description
            })
        })
            .then((response) => response.json())
            .then((responseData) => {
                console.log(
                    "POST Response",
                    "Response Body -> " + JSON.stringify(responseData.status)
                )
                if (responseData.status === true) {



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





    render() {
        const { heading, input, parent } = styles;

        return (



            <View style={parent}>
                <Text style={heading}>Create Event</Text>
                <TextInput style={input} placeholder='Event Name' onChangeText={text =>
                    this.setState({ name: text })
                } />
                <TextInput style={input} placeholder='Tags' onChangeText={text => this.setState({ tag: text })} />
                <TextInput style={input} placeholder='Description' onChangeText={text => this.setState({ description: text })} />

                <Button title='Create Event' onPress={_ => this.createEvent()} />
            </View>
        );
    }
}

export default CreateEvent