import React, { Component } from 'react';
import Message from '../components/Message'
import TextFieldWithSubmit from '../components/TextFieldWithSubmit'
import PastMessagesTile from '../components/PastMessagesTile'


class ChatContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      user: null,
      messages: [],
      message: [],
      pastMessages: []
    }

    this.handleMessageReceipt = this.handleMessageReceipt.bind(this);
    this.handleClearForm = this.handleClearForm.bind(this);
    this.handleFormSubmit = this.handleFormSubmit.bind(this);
    this.handleMessageChange = this.handleMessageChange.bind(this);
    this.getPastMessages = this.getPastMessages.bind(this);

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
        connected: () => console.log("Your ChatChannel is connected"),
        disconnected: () => console.log("Your ChatChannel is not disconnected"),
        received: data => {
          this.handleMessageReceipt(data)
          }
        }
      );
    }

      handleMessageReceipt(message) {
      this.setState({ messages: this.state.messages.concat(message) })
    }

    handleClearForm() {
      this.setState({ message: '' })
    }

    handleFormSubmit(event) {
      event.preventDefault();
      let prepMessage = this.state.message
      let user_info = this.state.user
      // Send info to the receive method on the back end
      App.chatChannel.send({
       message: prepMessage,
       user: user_info,
       trip_id: this.props.params.id

      })

      this.handleClearForm();
    }

    handleMessageChange(event) {
      this.setState({ message: event.target.value })
    }

    getPastMessages() {
      let chatId = this.props.params.id
      fetch(`/api/v1/messages/${chatId}`, {
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
        this.setState({pastMessages: data})
      })

    }

    render() {
      let messages = this.state.messages.map(message => {
        return(
          <Message
            key={message.messageId}
            email={message.user.email}
            message={message.message}
          />
        )
      }, this);

      return(
        <div className="grid-x">
          <div className="tile cell">
          <button onClick={this.getPastMessages}> View Past Messages </button>
            <PastMessagesTile
              getPastMessages={this.getPastMessages}
              pastMessages={this.state.pastMessages}
            />
          </div>
          <div className="tile cell">
            {messages}
          </div>
          <div className="cell">
          <form onSubmit={this.handleFormSubmit}>
            <TextFieldWithSubmit
              content={this.state.message}
              name='message'
              handlerFunction={this.handleMessageChange}
            />
          </form>
          </div>
        </div>
      );
    }
  }

}

export default ChatContainer;
