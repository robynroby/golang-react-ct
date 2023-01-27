import React, { Component } from "react";
import "./ChatHistory.scss";
import Message from "../Message/Message";

class ChatHistory extends Component {
  render() {
    console.log(this.props.ChatHistory);
    this.props.chatHistory.map(msg => 
      <Message key={msg.timeStamp} message={msg.data} />
    );

    return (
      <div className="chat-history">
        <h2>ChatHistory</h2>
        {messages}
      </div>
    );
  }
}

export default ChatHistory;
