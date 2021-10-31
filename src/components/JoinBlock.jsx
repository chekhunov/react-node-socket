import React from 'react';
import socket from "./socket";


export default function JoinBlock() {

        return (
            <div className="join-block">
                <input type="text" placeholder="Room ID" />
                <input type="text" placeholder="Ваше имя" />
                <button>Войти</button>
            </div>
        );
}
