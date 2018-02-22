import React from 'react'
import { StyleSheet, View, Text } from 'react-native'
import Icon from 'react-native-vector-icons/FontAwesome'
import {Button, Input} from 'react-native-elements'
export default class Login extends React.Component {

  constructor(props) {
    super(props)
    this.login = this.login.bind(this)
  }

  login(){
    const {history} = this.props
    history.push('/main/home')
    console.log('login')
  }

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.section}>
          <Text style={{fontSize: 20, textAlign: 'center'}}>Test react native elements</Text>
        </View> 
        <View style={[styles.section, styles.loginFields]}>
          <Input
            placeholder='Username'
            leftIcon={
              <Icon
                name='user'
                size={24}
                color='black'
              />
            }
          />
          <Input
            placeholder='PassWord'
            leftIcon={
              <Icon
                name='key'
                size={24}
                color='black'
              />
            }
            secureTextEntry={true}
            visible-password
          />
        </View> 
        <View style={styles.section}>
          <Button
            text='LOGIN'
            onPress={this.login}
          />

        </View> 
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
