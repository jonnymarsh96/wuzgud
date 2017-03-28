/*
 *
 * Home
 *
 */

import React from 'react';
import Paper from 'material-ui/Paper';
import IconButton from 'material-ui/IconButton';
import ChevLeft from 'material-ui/svg-icons/navigation/chevron-left';
import ChevRight from 'material-ui/svg-icons/navigation/chevron-right';
import {Link} from 'react-router';
import Helmet from 'react-helmet';

export default class Home extends React.PureComponent {
  constructor(props){
    super(props);
    this.state={
      data:[
        {
          articleImage:"https://scontent-atl3-1.xx.fbcdn.net/v/t1.0-9/17264794_273053533135955_2235100976553120977_n.jpg?oh=8a34eb015d5191d4c4933d78b4f137a5&oe=596F03E4",
          articleTitle:"Infrastructure",
          articleBody:"Round-a-bout construction on Wheeler @ Aumond"
        },
        {
          articleImage:"https://scontent-atl3-1.xx.fbcdn.net/v/t31.0-8/17390681_1061725620599626_6413932256641965317_o.jpg?oh=71be93b4f5deb33ad3fd2266720b661c&oe=596DFB93",
          articleTitle:"Jam",
          articleBody:"4th Annual Major Rager april, 4th"
        },
        {
          articleImage:"https://scontent-atl3-1.xx.fbcdn.net/v/t31.0-8/16797120_1787054604890866_5798852822789312024_o.jpg?oh=cc17569128c9e869d241e4a4d2b94519&oe=59623C06",
          articleTitle:"The Cyber Train",
          articleBody:"Choo Choo! C'mon y'all. Augusta is fastly chuggin' to becoming the cyber capital of the nation!",
        }
      ],
      active:0,
      activeArticle:""

    }
  }
  componentWillMount(){
    this.setState({
      activeArticle:this.state.data[0]
    })
  }
  nextArticle = () =>{
    var active=this.state.active;
    var next = active+1;
    if(next > this.state.data.length) {
      next = 0;
    }

    for(var i = 0; i<this.state.data.length; i++){
      if(i == next){
        this.setState({
          activeArticle:this.state.data[i]
        })
      }
    }

    this.setState({
      active:next
    })
  }
  previousArticle =() =>{
    var active=this.state.active;
    var prev = active-1;
    if(prev < 0) {
      prev = this.state.data.length;
    }
    for(var i = 0; i<this.state.data.length; i++){
      if(i == prev){
        this.setState({
          activeArticle:this.state.data[i]
        })
      }
    }
    this.setState({
      active:prev
    })
  }

  render() {
const imageOverlay={
        background:"rgba(0,0,0,0.2)",
        position:"absolute",
        top:"0",
        width:"100%",
        height:"100%",
        display:"flex",
        justifyContent:"space-between",
        alignItems:"center",

    }
  const container={
  display:"flex",
  flexDirection:"row",

}

  const navColumn={
      width:"20%",
      height:"100vh",
      background:"#005188",
      display:"flex",
      flexDirection:"column",




    }
      const logo={
        width:"90%",
        height:"10%",


      }
        const wuzGudLogo={
          fontFamily:"Modak",
          color:"#E6BE2B",
          fontSize:"5em",
          textAlign:"center",
          marginTop:"30px",
          textShadow:"4.3px 1.5px .3px #CE4632",

        }
      const leftNav={
        width:"90%",
        height:"auto",
        marginTop:"10%",
        borderTop:"2px solid #2D2C2C",
        borderBottom:"2px solid #2D2C2C",
        textAlign:"center",
        lineHeight:"3.25em",
        color:"#818286",
        fontFamily:"Amiko",
        fontSize:"1.25em"

      }
        const navLink={
          fontFamily:"Amiko",
          fontSize:".8em",
          color:"#818286",
          textDecoration:"none",
          fontWeight:"bold",
        }
    const contentFeild={
      width:"55%",
      height:"100vh",
      background:"#005188",
    }


      const boxStyle={
        width:"85%",
        height:"auto",
        display:"flex",
        flexDirection:"grid",
        margin:"30px",
        position:"relative",


      }
      const boxImage={
        width:"100%",
        height:"80%",
        margin:"0 auto",

      }
      const paper={
        height: "100vh",
        width: "90%",
        margin: "45px",
        textAlign: "center",
        display: "inline-block",
        alignSelf:"center",
        background:"#4C5DA1"


      }
        const content={
          fontFamily:"arial",
          color:"#ffffff",
          textAlign:"center",

        }
    const rightScroll={
      width:"25%",
      height:"100vh",
      background:"#2D2C2C",
    }


    return (
      <div style={container}>
        <Helmet title="Home" meta={[ { name: 'description', content: 'Description of Home' }]}/>
        <div></div>
        <div style={navColumn}>
          <div style={logo}>
            <div style={wuzGudLogo}>WUZ<br/>GUD
            </div>
            <div style={leftNav}><Link style={navLink} to="/Home">Home</Link><br/><Link style={navLink} to="/CyberTrain">The Cyber Train</Link><br/><Link style={navLink} to="/Commerce">Commerce</Link><br/>
              <Link style={navLink} to="/Govt">Govt</Link><br/><Link style={navLink} to="/Jam">Jam</Link><br/><Link style={navLink} to="/Shop">Shop</Link>
            </div>
          </div>
        </div>
        <div style={contentFeild}>
          <div>

            <div style={boxStyle}>
              <img style={boxImage} src={this.state.activeArticle.articleImage}/>
                <div style={imageOverlay}>
                  <IconButton onTouchTap={this.previousArticle}><ChevLeft color="#ffffff"/></IconButton>
                  <IconButton onTouchTap={this.nextArticle}><ChevRight color="#ffffff"/></IconButton>
                </div>
            </div>

          </div>

            <div style={content}>

            </div>

        </div>
        <div style={rightScroll}>
        </div>

      </div>
    );
  }
}
