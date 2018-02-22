import React from 'react'
import Home from './Home'
import {View, StyleSheet} from 'react-native'
import { Route, Switch} from 'react-router-native'
import { Container, Header, Title, Content, Footer, FooterTab, Button, Left, Right, Body, Icon, Text } from 'native-base'


export default class Main extends React.Component {
  render() {
    return(
      <Container>
        <Header>
          <Left>
            <Button transparent>
              <Icon name='menu' />
            </Button>
          </Left>
          <Body>
            <Title>Header</Title>
          </Body>
          <Right />
        </Header>
        <Content>
          <Switch>
            <Route exact path="/main/home" component={Home}/>
          </Switch>
        </Content>
        <Footer>
          <FooterTab>
            <Button full>
              <Text>Footer</Text>
            </Button>
          </FooterTab>
        </Footer>
      </Container>
    )
  }
}