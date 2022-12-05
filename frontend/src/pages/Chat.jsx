import React from 'react'
import { useEffect } from 'react';
import { useState } from 'react';
import axios from "axios"
const Chat = () => {
  
    const [chats, setChat] = useState([]);
 const fetchData = async() => {
     const Data = await axios.get("http://localhost:5000/api/chat")
     .then((res)=>{
       setChat(res.data);
       console.log(chats)
     })
     .catch((error)=>{
        console.log({error: error.message})
     })
 }

 useEffect(()=>{
   fetchData()
 },[])

  return (
    <div>
        {chats.map((chat)=>{
            return (
                <div key={chat._id}>{chat.chatName}</div>
            )
        })}
    </div>
  )
}

export default Chat