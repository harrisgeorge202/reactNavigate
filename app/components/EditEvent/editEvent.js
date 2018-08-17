import React, { Component } from 'react';
import { View, Text, TextInput, Button, ActivityIndicator, FlatList, TouchableOpacity } from 'react-native';
// import styles from './styles'



class EditEvent extends Component {

  static navigationOptions = {
    header: null
  }






  createEvent() {
    const { name, tag, description } = this.state

    console.log(name, tag, description)

    // fetch("http://192.168.2.128:5000/abc/event/update", {
    //     method: 'POST',
    //     headers: {
    //         'Accept': 'application/json',
    //         'Content-Type': 'application/json'
    //     },
    //     body: JSON.stringify({
    //         name: name,
    //         username: params.user.user.data.username,
    //         tag: tag,
    //         description: description
    //     })
    // })
    //     .then((response) => response.json())
    //     .then((responseData) => {
    //         console.log(
    //             "POST Response",
    //             "Response Body -> " + JSON.stringify(responseData.status)
    //         )
    //         if (responseData.status === true) {



    //             this.props.navigation.navigate('dashboard', { user: responseData })
    //         } else {
    //             console.log('Errorrrrrrr')
    //             Alert.alert('Error', 'Username or password not valid', [{
    //                 text: 'Okay'
    //             }])
    //         }
    //     })
    //     .done();
}







  render() {
    const { params } = this.props.navigation.state
    console.log("params.eventDetails.name", params.eventDetails.name)

    return (
      <View>
        <Text>Edit Event</Text>


<TextInput
          placeholder="Email"
          defaultValue={params.eventDetails.name}
  onChangeText={(value) => this.setState({ name: value })}
          />

<TextInput
          placeholder="Email"
          defaultValue={params.eventDetails.tag}
  onChangeText={(value) => this.setState({ tag: value })}
          />

<TextInput
          placeholder="Email"
          defaultValue={params.eventDetails.description}
  onChangeText={(value) => this.setState({ description: value })}
          />

<Button title='Create Event' onPress={_ => this.createEvent()} />


      </View>
    );
  }
}

export default EditEvent