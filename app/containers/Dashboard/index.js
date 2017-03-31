/*
 *
 * Dashboard
 *
 */

import React from 'react';
import Helmet from 'react-helmet';

export default class Dashboard extends React.PureComponent {

constructor (props){
  super(props);
  this.state={
    title:"",
    body:"",
    img:"",
    preview:"",

  }
}

handleTitle = (event) =>{
  this.setState({
    title:event.target.value
  })
  console.log(this.state.title)
}
handleBody = (event) =>{
  this.setState({
    body:event.target.value
  })
  console.log(this.state.body)
}
handleImg = (event) =>{
  event.preventDefault();
  let reader = new FileReader();
  let file = event.target.files[0];

  reader.onloadend = () => {
    this.setState({
      img:file,
      preview:reader.result
    })
  }
  reader.readAsDataURL(file);


}
storeArticle = () => {
  var data = new FormData();
  data.append("title", this.state.title);
  data.append("body", this.state.body);
  data.append("img", this.state.img);
  fetch("http://localhost:8000/api/storeArticle", {
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
    alert("error");
    }
  })

}
  render() {
    return (
      <div>
        <Helmet title="Dashboard" meta={[ { name: 'description', content: 'Description of Dashboard' }]}/>
          <input onChange={this.handleTitle} value={this.state.title} type="text" placeholder="title" />
          <input onChange={this.handleBody} type="text" value={this.state.body} placeholder="body" />
          <input onChange={this.handleImg} type="file"/>
          <input type="submit"/>
          <img src={this.state.preview}/>
      </div>
    );
  }
}
