import { StyleSheet } from 'react-native'


export default StyleSheet.create ({

note: {
    position: 'relative',
    padding: 20,
    paddingRight: 100,
    borderBottomWidth:2,
    borderBottomColor: '#ededed' 
    },
    
    noteText: {
        color: 'blue',
    paddingLeft: 20,
    borderLeftWidth: 10,
    borderLeftColor: '#ededed' 
    },
    
    noteDelete: {
    position: 'absolute',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#2980b9',
    padding: 10,
    top: 10,
    bottom: 10,
    right: 10
    },
    
    
    noteDeleteText: {
    color: 'white'
    }

})