import React, { Component } from 'react';
import { Container, Header, Content, Form, Item, Input, Label,Button, Text ,Picker} from 'native-base';

export default class Visacard extends Component {
  render() {
    return (
      <Container>
        <Header />
        
        <Content>
        
          <Form>
              
            <Item floatingLabel>
              <Label>Payment</Label>
             
            </Item>
            <Item floatingLabel >
              <Label> New card </Label>
              <Input />
            </Item>
            <Item floatingLabel >
              <Label>Card Number</Label>
              <Input />
            </Item>
            <Item floatingLabel>
              <Label>CVV</Label>
              <Input />
            </Item>
            <Item floatingLabel>
              <Label>Zip code </Label>
              <Input />
            </Item>
            <Item floatingLabel>
              <Label>Exp (mm/yy) </Label>
              <Input />
            </Item>
            <Button large primary style={{alignSelf: 'center',
    marginTop: 50,}}><Text>الحساب </Text></Button>
          </Form>
        </Content>
      </Container>
    );
  }
}