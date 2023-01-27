import React,{Component} from "react";
import './ChatInput.scss'

class ChatInput extends Component {
    render(){
        return(
            <div className="chat-input">
                <input onKeyDown={this.props.send} type="text" className="chat-input__input" placeholder="Type a message...Hit " />
                <button className="chat-input__button">Send</button>
            </div>
        )
    }
}

export default ChatInput;