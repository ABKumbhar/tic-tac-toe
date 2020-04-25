import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
function Square(props) {




    return (
      <button className="square" onClick={() => props.onClick()}>
        {props.value}
      </button>
    );

}

class Board extends React.Component {
constructor(props){
  super(props);
  this.state = {
    squares: Array(9).fill(null),
    xIsNext: true,
  };
}

 handleClick(i)
 {const squares = this.state.squares.slice();
   if (isWinner(squares) || squares[i]) {
  return (alert("Game is already over please refresh page"));
}

   squares[i] = this.state.xIsNext?'X':'O';
   this.setState({squares:squares,
   xIsNext: !(this.state.xIsNext),
   });
 }
  renderSquare(i) {
    return <Square value={this.state.squares[i]}
    onClick={()=> this.handleClick(i)}/>;
  }

  render() {
    const win = isWinner(this.state.squares);
    let status;
    if(win)
    {status = 'The winner is ' + win + ' player';

    }
  else{  status = 'Next player: ' + (this.state.xIsNext?'X':'O');}

    return (
      <div>
        <div className="status">{status}</div>
        <div className="board-row">
          {this.renderSquare(0)}
          {this.renderSquare(1)}
          {this.renderSquare(2)}
        </div>
        <div className="board-row">
          {this.renderSquare(3)}
          {this.renderSquare(4)}
          {this.renderSquare(5)}
        </div>
        <div className="board-row">
          {this.renderSquare(6)}
          {this.renderSquare(7)}
          {this.renderSquare(8)}
        </div>
      </div>
    );
  }
}

class Game extends React.Component {
  render() {
    return (
      <div className="game">
        <div className="game-board">
          <Board />
        </div>
        <div className="game-info">
          <div>{/* status */}</div>
          <ol>{/* TODO */}</ol>
        </div>
      </div>
    );
  }
}

function isWinner(squares) {
  const checkwinner = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];
  for (let i = 0; i < checkwinner.length; i++) {
    const [a, b, c] = checkwinner[i];
    if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
   squares[a] ='/' + squares[a]+ '/';
   squares[b] ='/' + squares[b]+ '/';
   squares[c] ='/' + squares[c]+ '/';
      return (squares[a]);
    }
  }
  return null;
}

// ========================================

export default Game;

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
