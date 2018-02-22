import React from 'react'
import Login from './components/Login'
import Main from './components/Main'
import * as Expo from 'expo'
import { NativeRouter, Route, Switch} from 'react-router-native'
import {Container} from 'native-base'
export default class App extends React.Component {
  
  async componentWillMount() {
    await Expo.Font.loadAsync({
      'Roboto': require('native-base/Fonts/Roboto.ttf'),
      'Roboto_medium': require('native-base/Fonts/Roboto_medium.ttf'),
    });
  }
  render() {
    return(
      <NativeRouter>
        <Container>
          <Switch>
            <Route exact path="/" component={Login}/>
            <Route path="/main" component={Main}/>
          </Switch>
        </Container>
      </NativeRouter> 
    )
  }
}