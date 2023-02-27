import React, { useState, useEffect } from 'react';
import queryString from 'query-string';
import io from 'socket.io-client';
import { useLocation } from 'react-router-dom';

import './Chat.css';

let socket;

function Chat()
{
    const [area, setArea] = useState();
    const [menu, setMenu] = useState();
    const [memNum, setMemNum] = useState();
    const [message, setMessage] = useState(''); //서버에서 받은 내용
    const [messages, setMessages] = useState([]); //기존의 채팅내용 ui와 연결됌
    const location = useLocation();

    useEffect(() => {
        const { area, menu, memNum } = queryString.parse(location.search); 
        socket = io.connect("http://localhost:5000");
        setArea(area);
        setMenu(menu);
        setMemNum(memNum);

        socket.emit('join', { area, menu, memNum });
        
    }, ["http://localhost:5000", location.search]);

    useEffect(() => {
        socket.on('receiveMessage', (message) => {
            setMessages([...messages, message]);
            console.log(message);
        });
    }, [messages]);

    const sendMessage = (e) => {
        e.preventDefault();

        if(message){
            socket.emit('sendMessage', message);
        }
    }

    return(
        <div className='chat-content'>
            <div className='chat-header'>
                <span className='room-info'>{`${area}에서 ${menu}, ${memNum}명의 채팅방`}</span>
            </div>
            <div className='chat-area'>
                <div className='chat-text'>
                    {messages.map((message, index) => {
                        console.log(message.text);
                        return(<div key={index}>
                            {message.text}
                        </div>
                        )
                    })}
                </div>
            </div>
            <div className='chat-box'>
                <input value={message} onChange={(event) => setMessage(event.target.value)}></input>
                <button className='send-btn' onClick={(event) => sendMessage(event)}>전송</button>
            </div>
        </div>
    )
}

export default Chat;