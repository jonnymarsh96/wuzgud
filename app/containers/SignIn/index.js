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
    return (
      <div>
        <Helmet title="SignIn" meta={[ { name: 'description', content: 'Description of SignIn' }]}/>
        <input onChange={this.handleEmail} value={this.state.email} type="text" placeholder="Email" />
        <input onChange={this.handlePassword} value={this.state.password} type="text" placeholder="Password" />
        <input type="Sign In" onTouchTap={this.signUp}/>
        <img src={this.state.preview}/>

      </div>
    );
  }
}
