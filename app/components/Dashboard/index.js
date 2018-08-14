import React, {Component} from 'react';
import {View, Text, TextInput, Button} from 'react-native';
// import { createStackNavigator } from 'react-navigation';



class Dashboard extends Component{

    static navigationOptions = {
        header: null
    }

    render() {
  
      const {params} = this.props.navigation.state
      console.log("paramsparams", params)



      return (
        <View>
<Text>Dashboard</Text>
<Button title='Create Event'/>



        </View>
      );
    }
  }
  
  export default Dashboard