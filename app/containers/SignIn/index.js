/*
 *
 * SignIn
 *
 */

import React from 'react';
import Helmet from 'react-helmet';

export default class SignIn extends React.PureComponent {

  constructor(props){
    super(props);
    this.state = {
      email:'',
      password:'',
    }
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

  signIn = () => {
    var data = new FormData();
    data.append("email", this.state.email);
    data.append("password", this.state.password);
    fetch("http://localhost:8000/api/signIn", {
      method:"post",
      body:data
    })
    .then(function(response){
      return response.json();
    })
    .then(function(json){
      if(json.token !== false){
        sessionStorage.setItem('token', json.token);
        alert("success");
      }
      else if(json.token === false){
        alert('Invalid Credentials');

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
      border:"2px solid #054661",
      borderRadius:"3px",
      margin:"30px",
      textAlign:"center",
      color:"#054661",
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
      border:"2px solid #054661",
      borderRadius:"3px",
      margin:"30px",
      textAlign:"center",
      color:"#054661",
    }
    const submit={
      width:"100px",
      height:"50px",
      border:"1px solid #610315",
      borderRadius:"3px",
      margin:"30px",
      color:"#610315"
    }
    const Title={
      fontSize:"4em",
      fontFamily: "Amiko",
      fontWeight:"bold",
      color:"#E8DD0D",
    }
    const Title2={
      fontSize:"2em",
      fontFamily: "Amiko",

      color:"#E8DD0D",
    }
    return (
      <div>
        <Helmet title="SignIn" meta={[ { name: 'description', content: 'Description of SignIn' }]}/>
        <div style={boxContainer}>
          <div style={Title}>
              WUZ GUD FAM<br/> <span style={Title2}>Sign In.</span>
          </div>
        <input style={email} onChange={this.handleEmail} value={this.state.email} type="text" placeholder="Email" />
        <input style={password} onChange={this.handlePassword} value={this.state.password} type="password" placeholder="Password" />
        <input style={submit} type="submit" value="Sign In" onTouchTap={this.signIn}/>
        <img src={this.state.preview}/>
        </div>
      </div>
    );
  }
}
