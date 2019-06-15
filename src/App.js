import React from 'react';
import './App.css';
import {Board} from './scramble-board'
import BoardState from "./game-logic/BoardState";

class App extends React.Component {
    constructor(props) {
        super(props);

        this.boardRef = React.createRef();
    }

    componentDidMount() {
        this.boardRef.current.setState({
                                           boardState: new BoardState()
                                       })
    }

    render() {
        return (
            <div className="App" style={{
                width: '45vw',
                height: '45vw',
                marginLeft: 'auto',
                marginRight: 'auto'
            }}>
                <Board ref={this.boardRef}/>
            </div>
        );
    }
}

export default App;
