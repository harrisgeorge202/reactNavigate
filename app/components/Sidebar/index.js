import React, {Component} from 'react';
import {StyleSheet, Text, View, Button, TouchableOpacity} from 'react-native';
import styles from './styles';



class Sidebar extends Component{

navigate(route) {
    this.props.navigation.navigate(route)

}
    render() {


        const routes = [{
            title: 'Login',
            route: 'login'
        },
        {
            title: 'Dashboard',
            route: 'dashboard'
        }]

      return (
        <View>
{
    routes.map(e => (
        <TouchableOpacity style={styles.link} onPress={_ => this.navigate(e.route)}>
    <Text>{e.title}</Text>
    </TouchableOpacity>
))
    }
        </View>
      );
    }
  }
  

  export default Sidebar