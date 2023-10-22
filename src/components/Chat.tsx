"use client"
import React, { useState } from 'react'
import sendMessage  from "../utils/sendMessage"
import { messageModel } from "../interfaces/message"


const Chat = () => {

    let userPlatform: string = "Anónimo";
    typeof navigator !== "undefined" && (userPlatform = navigator.platform);    

    const [ message, setMessage ] = useState<messageModel>({
        id: "123455",
        message: "",
        user: userPlatform,
        color: "blue"
    })
    
    const handleSubmit = (e:React.FormEvent<HTMLFormElement>):void => {
        e.preventDefault()

        sendMessage(message)

        setMessage({
            ...message,
            message: ""
        })
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

        <form className="chat-controls" onSubmit={ (e:React.FormEvent<HTMLFormElement>)=> handleSubmit(e) } >
            <input type="text" className="chat-input" value={ message.message } onChange={ (e: React.ChangeEvent<HTMLInputElement>) => handleInputChange(e) } />
            <input type="submit" value="Enviar" />
        </form>

      </section>
  )
}

export default Chat;
