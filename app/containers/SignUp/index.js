/*
 *
 * SignUp
 *
 */

import React from 'react';
import Helmet from 'react-helmet';

export default class SignUp extends React.PureComponent {

constructor(props){
  super(props);
  this.state = {
    name:'',
    email:'',
    password:'',
  }
}
handleName = (event) =>{
  this.setState({
    name:event.target.value
  })
  }
handleEmail = (event) =>{
  this.setState({
    title:event.target.value
  })
}
handlePassword = (event) =>{
  this.setState({
    password:event.target.value
  })
}

signUp = () => {
  var data = new FormData();
  data.append("name", this.state.name);
  data.append("email", this.state.email);
  data.append("password", this.state.password);
  fetch("http://localhost:8000/api/signUp", {
    method:"post",
    body:data
  })
  .then(function(response){
    return response.json();
  })
  .then(function(json){
    if(json.success){
      alert("success");
    }
    else if(json.error){
    alert(json.error);
    }
  })
}


  render() {
    const boxContainer={
      width:"50%",
      height:"200px",
    }
    const email={
      width:"80%",
      height:"50px",
      border:"1px solid #000000",

    }
    const name={
      width:"80%",
      height:"50px",
      border:"1px solid #000000",

    }
    const password={
      width:"80%",
      height:"50px",
      border:"1px solid #000000",
    }
    const submit={
      width:"100px",
      height:"50px",
      border:"1px solid #000000",
    }
    return (
      <div>
        <Helmet title="SignUp" meta={[ { name: 'description', content: 'Description of SignUp' }]}/>
          <div style={boxContainer}>
          <input onChange={this.handleName} value={this.state.name} type="text" placeholder="Name" />
          <input onChange={this.handleEmail} value={this.state.email} type="text" placeholder="Email" />
          <input onChange={this.handlePassword} value={this.state.password} type="text" placeholder="Password" />
          <input type="submit" onTouchTap={this.signUp}/>
          </div>

      </div>
    );
  }
}
