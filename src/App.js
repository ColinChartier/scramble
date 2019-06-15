import React from 'react';
import './App.css';
import {Board, UserTilesView} from './scramble-board'
import BoardState from "./game-logic/BoardState";

class App extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="App" style={{
                width: '45vw',
                height: '45vw',
                marginLeft: 'auto',
                marginRight: 'auto',
                display: 'flex',
                flexDirection: 'column',
            }}>
                <Board state={new BoardState()}/>
                <UserTilesView tiles={['W', 'E', 'E', 'D', 'M', 'A', 'N']}/>
            </div>
        );
    }
}

export default App;
