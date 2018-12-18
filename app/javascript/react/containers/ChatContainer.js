import React, { Component } from 'react';
import Message from '../components/Message'
import TextFieldWithSubmit from '../components/TextFieldWithSubmit'
import PastMessagesTile from '../components/PastMessagesTile'


class ChatContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      messages: [],
      message: [],
      pastMessages: []
    }

  }

    componentDidMount() {
    fetch('/api/v1/users', {
      credentials: 'same-origin',
      method: 'GET',
      headers: { 'Content-Type': 'application/json' }
    })
    .then((response) => {
      if (response.ok) {
        return response.json();
      }
    })
    .then((data) => {
      this.setState({user: data.current_user_id})
    })

    App.chatChannel = App.cable.subscriptions.create(
      {
        channel: "ChatChannel",
        chat_id: this.props.params.id
      },
      {
        connected: () => console.log("ChatChannel connected"),
        disconnected: () => console.log("ChatChannel disconnected"),
        received: data => {
          this.handleMessageReceipt(data)
          }
        }
      );
    }

}

export default ChatContainer;
