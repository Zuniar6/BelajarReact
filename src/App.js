import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

// function App() {
    
//   return <div className="App">
//         <header className="App-header">
//           <img src={logo} className="App-logo" alt="logo" />
//           <p>
//             Edit <code>src/App.js</code> and save to reload.
//           </p>
//           <a
//            className="App-link"
//            href="https://reactjs.org"
//            target="_blank"
//            rel="noopener noreferrer"
//           >
//           Learn React
//           </a>
//        </header>
//       </div>
    
// }

//Komponen-Props

// function Umur(props) {
//   return <span> berumur {props.age} </span>
// }

// function Greeting(props) {
//   return <h1>Halo {props.name} <Umur age={props.age}/></h1>
// }

class Timer extends Component {
  constructor(props){
    super(props)
    this.state = {
      time : props.start
    }
  }

  componentDidMount(){
    this.addInterval = setInterval( () => this.increase(), 1000)
  }

  componentWillUnmount(){
    clearInterval(this.addInterval)
  }

  increase() {
    //update state time
    this.setState((state, props) => ({
        time: parseInt(state.time) + 1
    }))

  }
  
  render() {
    return(
      <div>{this.state.time} Detik</div>
    )
  }
}

function Clicker(){
  function handleClick(e){
    alert('Berhasil')
    e.preventDefault()
  }

  return(
    <a href="#" onClick={handleClick}>Klik Di Sini !</a>
  )
}

class Toggle extends Component {
  constructor(props) {
    super(props)
    this.state = {
      toggleStatus: true
    }

    this.handleClick = this.handleClick.bind(this)
  }

  handleClick(){
    this.setState(state=> ({
      toggleStatus: !state.toggleStatus
    }))
  }

  render(){
    return(
      <button onClick={this.handleClick}>
        {this.state.toggleStatus ? 'ON' : 'OFF'}
        <p>Kondisi Lampu {this.state.toggleStatus ? 'Menyala' : 'Mati'}</p>
      </button>
    )
  }
}

class App extends Component {
  render() {
    return(
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
        {/* <Timer start="0"/>    
        <Timer start="8"/> 
        <Clicker />*/}
        <Toggle />
       </header>
      </div>
    );
  }
}

export default App;
