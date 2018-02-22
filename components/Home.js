import React from 'react'
import { StyleSheet, View, Text } from 'react-native'
export default class App extends React.Component {
  render(){
    return(
      <View>
        <Text>
            This is Content Section
        </Text>
      </View> 
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  section:{
    width: '100%',
    flex: 1,
    justifyContent: 'center'
  },
  loginFields:{
    width: '80%'
  }

})
