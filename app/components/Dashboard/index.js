import React, { Component } from 'react';
import { View, Text, TextInput, Button, ActivityIndicator, FlatList, TouchableOpacity } from 'react-native';
// import { createStackNavigator } from 'react-navigation';
import styles from './styles'



class Dashboard extends Component {

  static navigationOptions = {
    header: null
  }

  constructor(props) {
    super(props);
    this.state = {
      isLoading: true
    };
  }


  
  componentDidMount() {

    const { params } = this.props.navigation.state
    console.log("AAAAAAAAAAAAAAAAAAAAAAAA", params.user.data._id)
    const encodedValue = encodeURIComponent(params.user.data._id);
    // fetch(`https://example.com/foo?bar=${encodedValue}`);
    console.log("EEEEEEEEEEEEEEEE", encodedValue)
    return fetch(`http://192.168.2.128:5000/abc/eventlist/${encodedValue}`)
      .then((response) => response.json())
      .then((responseJson) => {

        this.setState({
          isLoading: false,
          dataSource: responseJson.events,
        }, function () {
          console.log("responseJsonresponseJson", responseJson)
        });

      })
      .catch((error) => {
        console.error(error);
      });
  }


  createEvent() {
    console.log("createEventrrrrrrrrrrrr")
    const { params } = this.props.navigation.state
    console.log("2121211121212", params)
    this.props.navigation.navigate('createEvent', { user: params })
    console.log("wwwwwwwwwwwwwwwwwwwwerrrrrrrrrrrrrrrrrrr")
    // this.props.navigation.navigate('register')
  }


  editEvent(item) {
    console.log("Edit EVENTTTTTTTTTTTTTTTTTTT", item)

    const { params } = this.props.navigation.state
    console.log("User detailssssss", params)
    this.props.navigation.navigate('editevent', { eventDetails: item })
    console.log("wwwwwwwwwwwwwwwwwwwwerrrrrrrrrrrrrrrrrrr")

}



  render() {
    const { note, noteText, noteDelete, noteDeleteText } = styles;

    if (this.state.isLoading) {
      return (
        <View style={{ flex: 1, padding: 20 }}>
          <ActivityIndicator />
        </View>
      )
    }





    const { params } = this.props.navigation.state

    return (
      <View>
        <Text>Dashboard</Text>
        <Button title='Create Event' onPress={reg => this.createEvent()} />
        {/* <View>
          {lapsList}
        </View> */}

        <View style={note}>
          <FlatList
            data={this.state.dataSource}

            renderItem={({ item }) => 
            <Text style={noteText} onPress={_ => this.editEvent(item)} >{item.name}, {item.tag}</Text>
          }
            keyExtractor={(item, index) => index}
          />
        </View>


      </View>
    );
  }
}

export default Dashboard