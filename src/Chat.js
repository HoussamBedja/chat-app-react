import { IconButton } from '@material-ui/core';
import { SendRounded } from '@material-ui/icons';
import React, { useState } from 'react'
import './Chat.css'

export default function Chat() {

  const [input, setInput] = useState('')

  const sendMessage = (e) => {
    e.preventDefault();

    setInput('');

  };

  return (
    <div className="chat">
      <div className="chat__header">
        <h4>
          To: <span className="chat__name">Channel name</span>
        </h4>
        <strong>Details</strong>
      </div>

      <div className="chat__messages">
        <h2>Messgae here</h2>
      </div>

      {/* chat input */}
      <div className="chat__input">
        <form>
          <input
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder="Message"
            type="text"
          />
          <button onClick={sendMessage}>Send Message</button>
        </form>
        
        <IconButton>
          <SendRounded />
        </IconButton>
      </div>
    </div>
  );
}
