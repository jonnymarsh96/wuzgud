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
    email:event.target.value
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
    const container={
      width:"100%",
      height:"100%",
      background:"#1C1919"
    }
    const boxContainer={
      width:"50%",
      height:"800px",
      direction:"flex",
      flexDirection:"column",
      textAlign:"center",
      margin:"30px",
      background:"#141414",
      borderRadius:"3px",
    }
    const email={
      width:"80%",
      height:"50px",
      border:"1px solid #FFDC00",
      borderRadius:"3px",
      margin:"30px",
    }
    const name={
      width:"80%",
      height:"50px",
      border:"1px solid #FFDC00",
      borderRadius:"3px",
      margin:"30px",

    }
    const password={
      width:"80%",
      height:"50px",
      border:"1px solid #FFDC00",
      borderRadius:"3px",
      margin:"30px",
    }
    const submit={
      width:"100px",
      height:"50px",
      border:"1px solid #FFDC00",
      borderRadius:"3px",
      margin:"30px",
      color:"#FFBE00"
    }
    const Title={
      fontSize:"4em",
      fontFamily: "Amiko",
      fontWeight:"bold",
      color:"#FFBE00",
    }
    return (
      <div style={container}>
        <Helmet title="SignUp" meta={[ { name: 'description', content: 'Description of SignUp' }]}/>
          <div style={boxContainer}>
            <div style={Title}>
              Please Sign Up.<br/> Join The Gang and Get Our News Letter.
            </div>
            <input style={name} onChange={this.handleName} value={this.state.name} type="text" placeholder="Name" /><br/>
            <input style={email} onChange={this.handleEmail} value={this.state.email} type="text" placeholder="Email" /><br/>
            <input style={password} onChange={this.handlePassword} value={this.state.password} type="password" placeholder="Password" /><br/>
            <input style={submit} type="submit" onTouchTap={this.signUp}/>
          </div>

      </div>
    );
  }
}
