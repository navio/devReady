import React, { Component } from 'react';
import { render } from 'react-dom';
import 'reset.css';
class App extends Component {
  constructor() {
    super();
    this.state = {
      m:''
    };
  }
  
  componentDidMount(){
    fetch('http://localhost:3000/application')
    .then(x => x.ok && x.json())
    .then(data => this.setState({m:data.name}))
    .catch(()=>this.setState({m:'Error'}));
  }
  
  render() {
    return <h3>Hello {this.state.m}</h3>
  }

}

render(<App />, document.getElementById('root'));