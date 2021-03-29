import { IconButton } from '@material-ui/core';
import { SendRounded } from '@material-ui/icons';
import React, { useEffect, useRef, useState } from 'react';
import { useDispatch, useSelector } from "react-redux";
import './Chat.css'
import { selectChatId, selectChatName } from './features/chatSlice';
import db from './firebase';
import Message from './Message';
import firebase from "firebase";
import { selectUser } from './features/userSlice';
import FlipMove from "react-flip-move";

export default function Chat() {

  const user = useSelector(selectUser);
  const [input, setInput] = useState('');
  const chatName = useSelector(selectChatName);
  const chatId = useSelector(selectChatId);
  const [messages, setMessages] = useState([]);
  const elementRef = useRef();



  useEffect(() => {
    if (chatId) {
      db.collection("chats")
        .doc(chatId)
        .collection("messages")
        .orderBy("timestamp", "asc")
        .onSnapshot((snapshot) =>
          setMessages(
            snapshot.docs.map((doc) => ({
              id: doc.id,
              data: doc.data(),
            }))
          )
        );
    }
  }, [chatId]);


  const sendMessage = (e) => {
    e.preventDefault();

    if (input != '') {
      db.collection("chats").doc(chatId).collection("messages").add({
        timestamp: firebase.firestore.FieldValue.serverTimestamp(),
        message: input,
        uid: user.uid,
        photo: user.photo,
        email: user.email,
        displayName: user.displayName,
      });
  
      setInput('');

      elementRef.current.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  };

  return (
    <div className="chat">
      <div className="chat__header">
        <h4>
          To: <span className="chat__name">{chatName}</span>
        </h4>
        <strong>Details</strong>
      </div>

      <div className="chat__messages">
      <FlipMove>
        {messages.map(({ id, data }) => (
          <Message key={id} contents={data} />
        ))}
      </FlipMove>
      <div ref={elementRef} />
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
          <button onClick={sendMessage}></button>
        </form>
        
        <IconButton onClick={sendMessage}>
          <SendRounded />
        </IconButton>
      </div>
    </div>
  );
}