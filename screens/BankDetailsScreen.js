import React, { Component } from 'react';
import { Container, Header, Content, List, ListItem, Thumbnail, Text, Body, Separator, Button } from 'native-base';
import { ScrollView, StyleSheet, View, Image, TextInput } from 'react-native';

export default class BankDetailsScreen extends Component {
  
  static navigationOptions = {
    title: 'Bank Details',
    headerLeft: null,
  };

  constructor(props) {
    super(props);
    this.state = { 
                    holdername: '',
                    bankname: '',
                    ifsccode: '',
                    accountnumber: '',
                    pannumber: '',
                    res:{} 
                 };
  //this.onButtonPress = this.onButtonPress.bind(this);               
  }

  /*onButtonPress() {
  fetch('http://192.168.43.197/api/public/signup', {
    method: 'POST',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      holder_name: this.state.holdername,
      bank_name: this.state.bankname,
      ifsccode: this.state.ifsccode,
      account_number: this.state.accountnumber,
      pan_number: this.state.pannumber,
    })

  })
  .then((response) => response.json())
  .then((responseJson) => {
      this.setState({
        res: responseJson
       }, function() {
     
    });
  }); 
  }*/


  render() {
    
    const { navigate } = this.props.navigation;

    return (
      <Container style={styles.container} >
        <Content>
          <View style={styles.textInputViewStyle}>
            <TextInput
            style={styles.textInputStyle}
            onChangeText={(holdername) => this.setState({holdername})}
            value={this.state.holdername}
            placeholder = 'Account Holder Name'
            />
            <TextInput
            style={styles.textInputStyle}
            onChangeText={(bankname) => this.setState({bankname})}
            value={this.state.bankname}
            placeholder = 'Bank Name'
            />
            <TextInput
            style={styles.textInputStyle}
            onChangeText={(ifsccode) => this.setState({ifsccode})}
            value={this.state.ifsccode}
            placeholder = 'IFSC Code'
            />
            <TextInput
            style={styles.textInputStyle}
            onChangeText={(accountnumber) => this.setState({accountnumber})}
            value={this.state.accountnumber}
            placeholder = 'Account Number'
            />
            <TextInput
            style={styles.textInputStyle}
            onChangeText={(pannumber) => this.setState({pannumber})}
            value={this.state.pannumber}
            placeholder = 'Pan Number'
            />
          </View>

          <Button 
           info 
           rounded 
           style={styles.Button}
           >
              <Text style={styles.ButtonText}>Save</Text>
          </Button>

        </Content>
      </Container>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#ffffff',
  },
  thumbnailStyle: {
    resizeMode: 'contain',
    marginTop: 20,
    borderColor: '#ddd',
    borderWidth: 1,
    height: 100,
    width: 100,
    alignSelf:'center'
  },
  Button: {
    marginTop:5,
    alignSelf: 'center',
    alignItems: 'center',
    justifyContent: 'center',
    width: 300,
  },
  ButtonText: {
    fontSize: 18,
  },
  textInputViewStyle: {
    padding:20,
  },
  textInputStyle: {
    fontSize: 18,
    marginBottom:12,
    height:50,
    fontWeight: '100'
  },
});