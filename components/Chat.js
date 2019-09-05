
'use strict'
import React, { Component } from 'react';
import {
  StatusBar,
  View
} from 'react-native';
import { GiftedChat } from 'react-native-gifted-chat';
import firebaseSDK from '../Firebase';
// import styles from './styles.js';

import { YellowBox } from 'react-native';
import _ from 'lodash';

YellowBox.ignoreWarnings(['Setting a timer']);
const _console = _.clone(console);
console.warn = message => {
  if (message.indexOf('Setting a timer') <= -1) {
    _console.warn(message);
  }
};

class Chat extends Component {
  static navigationOptions = ({ navigation }) => ({

    // headerStyle: styles.messagesHeader,
    // headerTitleStyle: styles.messagesTitle,
    // headerBackTitleStyle: styles.messagesBackTitle

  });



  constructor(props) {
    super(props);
    var FirebaseDB = firebaseSDK.database();
    this.messagesRef = FirebaseDB.ref(`messages`);
    this.state = {
      user: [],
      messages: []
    }
  }

  componentDidMount() {
    this.setState({ user: firebaseSDK.auth().currentUser });
    this.listenForMessages(this.messagesRef);
  }

  listenForMessages(messagesRef) {
    messagesRef.on('value', (dataSnapshot) => {
      var messagesFB = [];
      dataSnapshot.forEach((child) => {
        messagesFB = [({
          _id: child.key,
          user: 'nam',
          

          text: child.val().text,
        }), ...messagesFB];
      });
      this.setState({ messages: messagesFB });
    });
  }

  addMessage(message = {}) {
    var message1 = message[0]
    this.messagesRef.push({
      text: message1.text,
      user: 'nam'
      
     
    })
  }

  render() {
    return (
      <View style={{flex: 1}}>
        <StatusBar barStyle="light-content"/>
        <GiftedChat
          messages={this.state.messages}
          onSend={this.addMessage.bind(this)}

          
         
        />
      </View>
    );
  }
}

export default Chat;