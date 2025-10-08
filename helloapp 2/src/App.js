import React, { Component } from 'react';
import './App.css';
import Message from './Message';
import Power from './Power';

/*************************************************
 Główny komponent aplikacji app.js nikita sukhovoi
 **************************************************/

class App extends Component {
    render() {
        return (
            <div>
                <h1>Moja pierwsza aplikacja React</h1>
                <Message text="Hello React!" />
                <Message text="To jest mój pierwszy komponent!" />
                <Message text="Props działają poprawnie " />
                <Power x={2} y={5} />
                <Power x={3} y={3} />
            </div>
        );
    }
}

export default App;
