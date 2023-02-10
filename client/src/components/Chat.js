import React, { useState, useEffect } from 'react';
import queryString from 'query-string';
import io from 'socket.io-client';
import { useLocation } from 'react-router-dom';

function Chat()
{
    const [area, setArea] = useState();
    const [menu, setMenu] = useState();
    const [memNum, setMemNum] = useState();
    const location = useLocation();

    useEffect(() => {
        const { area, menu, memNum } = queryString.parse(location.search); 
        const socket = io.connect("http://localhost:5000");
        setArea(area);
        setMenu(menu);
        setMemNum(memNum);

        socket.emit('join', { area, menu, memNum });
        
    }, ["http://localhost:5000", location.search]);

    return(
        <div className='chat-content'>
            <div className='chat-header'>
                <p className='room-info'>{`${area}에서 ${menuName()}, ${memNum}명`}</p>
            </div>
        </div>
    )
}

export default Chat;