import React, {Component} from 'react';
import {View, Text, TextInput, Button} from 'react-native';
// import { createStackNavigator } from 'react-navigation';



class Dashboard extends Component{

    static navigationOptions = {
        header: null
    }


    createEvent() {
      console.log("createEventrrrrrrrrrrrr")
      const {params} = this.props.navigation.state
      console.log("2121211121212", params)

      
      this.props.navigation.navigate('createEvent', { user: params })
      console.log("wwwwwwwwwwwwwwwwwwwwerrrrrrrrrrrrrrrrrrr")
      
      // this.props.navigation.navigate('register')

  }



    render() {
  
      const {params} = this.props.navigation.state
      console.log("paramsparams", params)



      return (
        <View>
<Text>Dashboard</Text>
<Button title='Create Event'  onPress={reg => this.createEvent()} />



        </View>
      );
    }
  }
  
  export default Dashboard