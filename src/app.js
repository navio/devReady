import React, { Component } from 'react';

export default class App extends Component {
  constructor() {
    super();
    this.state = {
      message:''
    };
  }
  
  componentDidMount(){
    this.getValue.call(this);
  }
  
  getValue(){
    fetch('http://localhost:3000/application')
    .then(x => x.ok && x.json())
    .then(data => this.setState({message:data.name}))
    .catch(()=>this.setState({message:'Error'}));
  }

  render() {
    return <h3>Hello {this.state.message}</h3>
  }

}