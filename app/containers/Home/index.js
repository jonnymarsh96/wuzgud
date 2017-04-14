/*
 *
 * Home
 *
 */

import React from 'react';
import Paper from 'material-ui/Paper';
import IconButton from 'material-ui/IconButton';
import Responsive from 'react-responsive';
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
          articleTitle:"INFRASTRUCTURE",
          articleBody:"/  more."
        },
        {
          articleImage:"https://scontent-atl3-1.xx.fbcdn.net/v/t31.0-8/17390681_1061725620599626_6413932256641965317_o.jpg?oh=71be93b4f5deb33ad3fd2266720b661c&oe=596DFB93",
          articleTitle:"JAM",
          articleBody:"/  more"
        },
        {
          articleImage:"https://scontent-atl3-1.xx.fbcdn.net/v/t31.0-8/16797120_1787054604890866_5798852822789312024_o.jpg?oh=cc17569128c9e869d241e4a4d2b94519&oe=59623C06",
          articleTitle:"CYBERTRAIN",
          articleBody:"/  more.",
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

  componentDidMount(){
    var _this = this;
    setInterval(function(){
      _this.nextArticle();
    },6000)
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
        height:"100vh",
        display:"flex",
        justifyContent:"space-between",
        alignItems:"center",
        maxHeight:"850px",
        overflow:"hidden",
        border:""

    }
    const articleBody={
      fontSize:".5em",
      fontFamily:"Amiko",
      color:"#C4C4C4",
    }
    const articleTitle={
      background:"linear-gradient(to left, rgba(50, 50, 50, .3), rgba(50, 50, 50, 1))",
      fontFamily:"amiko",
      fontWeight:"bold",
      fontSize:"2em",
      color:"#D9D7BA",
      textAlign:"center",
      width:"50%",
      height:"100%",
      position:"absolute",
      left:"-250px",
      transform: "skewX(-30deg)",
      border:"15px rgba(4, 115, 70, .2)"




    }
    const skewCancel={
      transform: "skewX(30deg)",
      fontFamily:"amiko",
      fontSize:"1.5em",
      color:"#D9D7BA",
      marginTop:"300px",
      right:"o"
    }

  const container={


  }

  const navColumn={
    width:"100%",
    height:"200px",
    background:"#323232",
    outline:"20px solid rgba(50, 50, 50, .5)",
    zIndex:"100",
    display:"flex",
    flexDirection:"row",




    }
      const logo={
        width:"30%",
        height:"0",
        margin:"0 auto",
        borderTop: "200px solid #D9D7BA",
        borderLeft: "100px solid transparent",
	      borderRight: "100px solid transparent",
        zIndex:"120",


      }
        const wuzGudLogo={
          fontFamily:"Modak",
          color:"#E6BE2B",
          fontSize:"3em",
          textAlign:"center",
          marginTop:"10px",
          textShadow:"4.3px 1.5px .3px #CE4632",
          position:"absolute",
          top:"0",
          right:"0",
          left:"0",
        }
      const leftNav={
        width:"50%",
        height:"auto",
        marginTop:"500px",
        margin:"0 auto",
        textAlign:"center",
        lineHeight:"3.25em",
        color:"#323232",
        fontFamily:"Amiko",
        fontSize:".8em",
        wordSpacing:"2em",

      }
        const navLink={
          fontFamily:"Amiko",
          fontSize:".8em",
          color:"#323232",
          textDecoration:"none",
          fontWeight:"bold",
          wordSpacing:"7em"
        }
    const contentFeild={
      width:"100%",
      height:"100vh",
      background:"#D9D7BA",
      backgroundAttachment:"fixed",
      overflow:"auto",
      position:"absolute",


    }


      const boxStyle={
        width:"100%",
        margin:"0px",
        position:"relative",
        alignSelf:"center",
        borderRadius:"3px",
        maxHeight:"850px",
        overflow:"hidden",
      }
      const boxImage={
        width:"100%",
        height:"100%",
        margin:"0 auto",


      }
      const paper={
        height: "100vh",
        width: "90%",
        margin: "45px",
        textAlign: "center",
        display: "inline-block",
        alignSelf:"center",
        background:"#4C5DA1",
        marginTop:"500px",


      }
        const content={
          fontFamily:"arial",
          color:"#ffffff",
          textAlign:"center",
          marginTop:"500px",

        }
    const rightScroll={
      width:"25%",
      height:"100vh",
      background:"#437336",
      border:"2px solid #FFFFFF",
      overflow:"auto",
      positon:"absolute",
      marginLeft:"75%",
    }
    const storyImg={
      maxWidth:"40%",
      height:"100px",
      margin:"5px",

    }
    const storyContainer={
      background:"#ffffff",
      maxHeight:"200px",
      padding:"15px",
      margin:"20px",
      fontFamily:"Amiko",
      fontSize:".75em",
      textWrap:"justified",
      textAlign:"justified",
      textOverflow:"elipsis",
      border:"1px solid #FF49D9",
      borderRadius:"3px",
      display:"flex",
      flexDirection:"row",
      whiteSpace:"normal",

    }
const storyContent={
    display:"flex",
    flexDirection:"column",
    textAlign:"justified",
    textOverflow:"elipsis",

}

    return (
      <div >
        <Helmet title="Home" meta={[ { name: 'description', content: 'Description of Home' }]}/>

      <Responsive minDeviceWidth={1024}>

        <div style={navColumn}>
          <div style={logo}>
            <div style={wuzGudLogo}>WUZ<br/>GUD
            </div>
            <div style={leftNav}><Link style={navLink} to="/">Home </Link><Link style={navLink} to="/CyberTrain"> CyberTrain </Link><Link style={navLink} to="/Commerce"> Dealings </Link>
              <Link style={navLink} to="/Govt"> Govt </Link><Link style={navLink} to="/Jam"> Jam </Link><Link style={navLink} to="/Shop"> Shop </Link>
            </div>
          </div>
        </div>
      </Responsive>

      <Responsive maxDeviceWidth={1023}>
        <div style={navColumn}>
          <div style={logo}>
            <div style={wuzGudLogo}>WUZ<br/>GUD
            </div>
            <div style={leftNav}><Link style={navLink} to="/">Home</Link><br/><Link style={navLink} to="/CyberTrain">The Cyber Train</Link><br/><Link style={navLink} to="/Commerce">Commerce</Link><br/>
              <Link style={navLink} to="/Govt">Govt</Link><br/><Link style={navLink} to="/Jam">Jam</Link><br/><Link style={navLink} to="/Shop">Shop</Link>
            </div>
          </div>
        </div>
      </Responsive>

      <Responsive minDeviceWidth={1024} style={container}>
        <div style={boxStyle}>
          <img style={boxImage} src={this.state.activeArticle.articleImage}/>
            <div style={imageOverlay}>
              <IconButton onTouchTap={this.previousArticle}><ChevLeft color="#ffffff"/></IconButton>

                <span style={articleTitle}>
                  <p style={skewCancel}>
                    {this.state.activeArticle.articleTitle}
                    <br/>

                    <p style={articleBody}>{this.state.activeArticle.articleBody}</p>
                  </p>
                </span>
              <IconButton onTouchTap={this.nextArticle}><ChevRight color="#ffffff"/></IconButton>
            </div>
        </div>
        <div style={contentFeild}>
          <div>



          </div>

            <div style={content}>

            </div>

        </div>
        <div style={rightScroll}>

        <div style={storyContainer}>

          <img style={storyImg} src="https://scontent-atl3-1.xx.fbcdn.net/v/t31.0-8/16797120_1787054604890866_5798852822789312024_o.jpg?oh=cc17569128c9e869d241e4a4d2b94519&oe=59623C06"/>

          <div style={storyContent}>
            <Link style={navLink} to="/CyberTrain"><h3>The Cyber Train</h3>
            <span>Nathan Deal signs bill to award AU with $50,000,000.00 to fund Cyber Training & Innovation Center.</span>
            </Link>
          </div>

        </div>

        <div style={storyContainer}>

          <img style={storyImg} src="https://scontent-atl3-1.xx.fbcdn.net/v/t31.0-8/17390681_1061725620599626_6413932256641965317_o.jpg?oh=71be93b4f5deb33ad3fd2266720b661c&oe=596DFB93"/>

          <div style={storyContent}>
            <Link style={navLink} to="/Jam"><h3>JAM</h3>
            <span>Freinds With Benifits puts on 4th annual Major Rager the thursday of masters week.</span>
            </Link>
          </div>

        </div>
        <div style={storyContainer}>

          <img style={storyImg} src="https://scontent-atl3-1.xx.fbcdn.net/v/t1.0-9/17264794_273053533135955_2235100976553120977_n.jpg?oh=8a34eb015d5191d4c4933d78b4f137a5&oe=596F03E4"/>

          <div style={storyContent}>
            <Link style={navLink} to="/Infrastructure">
              <h3>Infrastructure</h3>
              <span>Round-a-bout construction on Wheeler @ Aumond</span>
            </Link>
          </div>

        </div>
        <div style={storyContainer}>
          <img style={storyImg} src="http://chronicle.augusta.com/sites/default/files/styles/slideshow__640x360/public/images/1829782_web1_James-Brown-Arena-3.jpg?itok=NlrqPkpA"/>

          <div style={storyContent}>
            <Link style={navLink} to="/Infrastructure">
              <h3>Infrastructure</h3>
              <span>New arena project slows down</span>
            </Link>
          </div>
        </div>

        <div style={storyContainer}>
          <img style={storyImg} src="http://dianneprimavera.org/wp-content/uploads/2014/04/the-capitol-building-denver-united-states+1152_12936487000-tpfil02aw-8073.jpg"/>
          <div style={storyContent}>
            <Link style={navLink} to="/Govt">
              <h3>Govt</h3>
              <span>Georgia Senate backs guns on campus, setting up final vote</span>
            </Link>
          </div>
        </div>

        <div style={storyContainer}>
          <img style={storyImg} src="http://chronicle.augusta.com/sites/default/files/styles/slideshow__640x360/public/images/1839227_web1_AugustaExchangeNewStoresfile.jpg?itok=Y7D1ze7q"/>
          <div style={storyContent}>
            <Link style={navLink} to="/Commerce"><h3>Commerce</h3>
            <span>Burlington, Chipotle, MOD Pizza headed to Augusta Exchange</span>
            </Link>
          </div>
          </div>
          <div style={storyContainer}>
          </div>
          <div style={storyContainer}>
          </div>
          <div style={storyContainer}>
          </div>
          <div style={storyContainer}>
          </div>
          <div style={storyContainer}>
          </div>
          <div style={storyContainer}>
          </div>
          <div style={storyContainer}>
          </div>
          <div style={storyContainer}>
          </div>
          <div style={storyContainer}>
          </div>
          <div style={storyContainer}>
          </div>
          <div style={storyContainer}>
          </div>
          <div style={storyContainer}>
          </div>


        </div>
    </Responsive>

   <Responsive maxDeviceWidth={1023}>

      <div style={contentFeild}>
        <div>

          <div style={boxStyle}>
            <img style={boxImage} src={this.state.activeArticle.articleImage}/>
              <div style={imageOverlay}>
                <IconButton onTouchTap={this.previousArticle}><ChevLeft color="#ffffff"/></IconButton>
                  <span style={articleTitle}>
                    {this.state.activeArticle.articleTitle}
                    <br/>

                    {this.state.activeArticle.articleBody}

                  </span>
                <IconButton onTouchTap={this.nextArticle}><ChevRight color="#ffffff"/></IconButton>
              </div>
          </div>

        </div>

          <div style={content}>

          </div>

      </div>
      <div style={rightScroll}>

        <div style={storyContainer}>

          <img style={storyImg} src="https://scontent-atl3-1.xx.fbcdn.net/v/t1.0-9/17264794_273053533135955_2235100976553120977_n.jpg?oh=8a34eb015d5191d4c4933d78b4f137a5&oe=596F03E4"/>

          <div style={storyContent}>
            <h3>Infrastructure</h3>
            <span>Round-a-bout construction on Wheeler @ Aumond</span>
          </div>

        </div>
        <div style={storyContainer}>

          <img style={storyImg} src="https://scontent-atl3-1.xx.fbcdn.net/v/t31.0-8/16797120_1787054604890866_5798852822789312024_o.jpg?oh=cc17569128c9e869d241e4a4d2b94519&oe=59623C06"/>

          <div style={storyContent}>
            <Link style={navLink} to="/CyberTrain"><h3>The Cyber Train</h3>
            <span>Nathan Deal signs bill to award AU with $50,000,000.00 to fund Cyber Training & Innovation Center.</span></Link>
          </div>

        </div>

        <div style={storyContainer}>

          <img style={storyImg} src="https://scontent-atl3-1.xx.fbcdn.net/v/t31.0-8/17390681_1061725620599626_6413932256641965317_o.jpg?oh=71be93b4f5deb33ad3fd2266720b661c&oe=596DFB93"/>

          <div style={storyContent}>
            <h3>JAM</h3>
            <span>Freinds With Benifits puts on 4th annual Major Rager the thursday of masters week.</span>
          </div>

        </div>

        <div style={storyContainer}>
          <img style={storyImg} src="http://chronicle.augusta.com/sites/default/files/styles/slideshow__640x360/public/images/1829782_web1_James-Brown-Arena-3.jpg?itok=NlrqPkpA"/>

          <div style={storyContent}>
            <h3>Infrastructure</h3>
            <span>New arena project slows down</span>
          </div>
        </div>

        <div style={storyContainer}>
          <img style={storyImg} src="http://dianneprimavera.org/wp-content/uploads/2014/04/the-capitol-building-denver-united-states+1152_12936487000-tpfil02aw-8073.jpg"/>
          <div style={storyContent}>
            <h3>Govt</h3>
            <span>Georgia Senate backs guns on campus, setting up final vote</span>
          </div>
        </div>

        <div style={storyContainer}>
          <img style={storyImg} src="http://chronicle.augusta.com/sites/default/files/styles/slideshow__640x360/public/images/1839227_web1_AugustaExchangeNewStoresfile.jpg?itok=Y7D1ze7q"/>
          <div style={storyContent}>
            <h3>Commerce</h3>
            <span>Burlington, Chipotle, MOD Pizza headed to Augusta Exchange</span>
          </div>
        </div>
        <div style={storyContainer}>
        </div>
        <div style={storyContainer}>
        </div>
        <div style={storyContainer}>
        </div>
        <div style={storyContainer}>
        </div>
        <div style={storyContainer}>
        </div>
        <div style={storyContainer}>
        </div>
        <div style={storyContainer}>
        </div>
        <div style={storyContainer}>
        </div>
        <div style={storyContainer}>
        </div>
        <div style={storyContainer}>
        </div>
        <div style={storyContainer}>
        </div>
        <div style={storyContainer}>
        </div>
      </div>


  </Responsive>
  </div>
    );
  }
}
