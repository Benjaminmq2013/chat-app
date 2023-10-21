"use client"
import React, { useState } from 'react'
import sendMessage, { messageModel } from "../utils/sendMessage"


const Chat = () => {

    const [ message, setMessage ] = useState<messageModel>({
        id: "123455",
        message: "",
        user: navigator.platform || "Anónimo",
        color: "blue"
    })
    
    const handleSubmit = ():void => {
        sendMessage(message)
    }

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setMessage({
            ...message,
            message: e.target.value
        })
    }

  return (
    <section className="main-container" >
        <h1 className="title" >public chat</h1>

        <div className="chat-container" >
            <div className="chat-message message-left">Message1</div>
            <div className="chat-message message-right">Message2</div>
            <div className="chat-message message-left">Message3</div>
        </div>

        <form className="chat-controls" onSubmit={ handleSubmit } >
            <input type="text" className="chat-input" onChange={ (e: React.ChangeEvent<HTMLInputElement>) => handleInputChange(e) } />
            <button>Enviar</button>
        </form>

      </section>
  )
}

export default Chat
