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
        marginTop:"30px",

    }

    const articleTitle={
      background:"linear-gradient(to left, rgba(50, 50, 50, .3), rgba(50, 50, 50, 1))",
      fontFamily:"amiko",
      fontWeight:"bold",
      fontSize:"2em",
      color:"#E1E1E9",
      textAlign:"right",
      width:"55%",
      height:"100%",
      position:"absolute",
      left:"-250px",
      transform: "skewX(-30deg)",
      border:"15px rgba(4, 115, 70, .2)"




    }
    const skewCancel={
      transform: "skewX(30deg)",
      fontFamily:"Rubik Mono One",
      fontSize:"1.5em",
      color:"#E1E1E9",
      marginTop:"300px",
      right:"0"
    }

  const container={
    width:"100%",
    height:"900px",
    background:"#969696"

  }

  const navColumn={
    width:"100%",
    height:"150px",
    background:"#141414",
    zIndex:"100",
    display:"flex",
    flexDirection:"row",




    }
    const topBar={

    }
      const logo={

        width:"10%",
        height:"200px",
        marginLeft:"20px",
        background:"#000000",
        borderRadius:"5px",
        zIndex:"120",




      }
        const wuzGudLogo={
          fontFamily:"Modak",
          backgroundImage:"",
          color:"#009C61",
          fontSize:"3em",
          textAlign:"left",
          marginTop:"10px",
          textShadow:"4.3px 1.5px .3px #005AFF ",
          position:"absolute",
          top:"0",
          right:"0",
          left:"0",
        }
      const leftNav={
        width:"100%",
        height:"auto",
        marginTop:"5px",
        margin:"0 auto",
        textAlign:"right",

        color:"#404547",
        fontFamily:"Amiko",
        fontSize:".8em",


      }
        const navLink={
          fontFamily:"Amiko",
          fontSize:".8em",
          color:"#323232",
          textDecoration:"none",
          fontWeight:"bold",

        }
    const contentFeild={
      width:"100%",
      background:"#C4C5C9",
      backgroundAttachment:"fixed",
      display:"flex",
      flexDirection:"row"




    }


      const boxStyle={
        width:"80%",
        margin:"0 auto",
        position:"relative",
        alignSelf:"center",
        maxHeight:"850px",
        overflow:"hidden",
        paddingTop:"30px",
        borderRadius:"10px",
      }
      const boxImage={
        width:"100%",
        height:"100%",
        margin:"0 auto",
        paddingTop:"30px",


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
      const articleBox={
        width:"25%",
        height:"75px",
        background:"#ffffff",

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
      maxWidth:"45%",
      height:"200px",
      margin:"10px",

    }

    const storyContainer={
      background:"#141414",
      height:"600px",
      margin:"0 auto",
      fontFamily:"Nunito",
      fontSize:"3em",

      textAlign:"center",
      textOverflow:"hidden",
      padding:"35px",
      borderRadius:"3px",
      display:"flex",
      flexDirection:"column",


    }
const storyContent={
    display:"flex",
    flexDirection:"column",
    alignItems:"center",
    height:"300px",
    width:"17%",
    textOverflow:"hidden",

}
const storyImgC={
  maxWidth:"100%",
  height:"400px",
  margin:"0px",
  overflow:"hidden",
  borderBottom:"5px solid #054661",
}
const blogTitleC={
  fontFamily:"Amiko",
  fontWeight:"bold",
  textAlign:"right",
  height:"100px",
  width:"100%",
  fontSize:".5em",
  color:"#E3E3E3",
  textDecoration:"none",
  paddingLeft:"50px",
  marginTop:"5px"
}

const storyImgJ={
  maxWidth:"100%",
  height:"400px",
  margin:"0px",
  overflow:"hidden",
  borderBottom:"5px solid #4D4078",
}
const blogTitleJ={
  fontFamily:"Amiko",
  fontWeight:"bold",
  textAlign:"right",
  height:"100px",
  width:"100%",
  fontSize:".5em",
  color:"#E3E3E3",
  textDecoration:"none",
  paddingLeft:"50px",
  marginTop:"5px"
}

const blogTitleD={
  height:"100px",
  width:"100%",
  fontSize:".75em",
  color:"#E3E3E3",
  textDecoration:"none",
  borderBottom:"3px solid #478B1A",

  marginTop:"30px"

}
const blogTitleG={
  height:"100px",
  width:"100%",
  fontSize:".75em",
  color:"#E3E3E3",
  textDecoration:"none",
  borderBottom:"3px solid #610315",

  marginTop:"30px"

}
const blogTitle={
  height:"100px",
  width:"100%",
  fontSize:".75em",
  color:"#E3E3E3",
  textDecoration:"none",
  borderBottom:"3px solid #CED1D4",

  marginTop:"30px"

}
const blogLink={
  fontSize:".4em",
  textAlign:"right",
  color:"#70797D",
  fontWeight:"bold",

}
const blogLinkC={
  fontSize:".4em",
  textAlign:"right",
  color:"#054661",
  fontWeight:"bold",

}
const blogLinkJ={
  fontSize:".4em",
  textAlign:"right",
  color:"#4D4078",
  fontWeight:"bold",

}
const blogLinkD={
  fontSize:".4em",
  textAlign:"right",
  color:"#478B1A",
  fontWeight:"bold",

}
const blogLinkG={
  fontSize:".4em",
  textAlign:"right",
  color:"#610315",
  fontWeight:"bold",

}
const articleBody={
  fontFamily:"Amiko",
  fontSize:".5em",
  color:"#323232",
  textDecoration:"none",
  padding:"30px",


}
const knowWhat={
  height:"200px",
  width:"100%",
  fontSize:"2.5em",
  fontFamily:"Amiko",
  textAlign:"center",
  paddingTop:"150px",
  fontWeight:"bold",
  background:"#969696",
  color:"#3D82D4",
  wordSpacing:".5em",
  letterSpacing:".2em",
  paddingBottom:"150px",
  lineSpacing:"3em",
  paddingBottom:"250px",

}

const loveThe={
  height:"200px",
  width:"100%",
  fontSize:"2em",
  fontFamily:"Amiko",
  textAlign:"center",
  fontWeight:"bold",
  background:"#ffffff",
  color:"#3D82D4",
  wordSpacing:".5em",
  letterSpacing:".2em",
  paddingTop:"150px",
  paddingBottom:"150px",
  display:"flex",
  flexDirection:"column",
  alignItems:"center",
  marginTop:"30px",

}
const theWuz={
  marginTop: "50px",
  height:"700px",
  width:"100%",
  background:"#ffffff",

}
const razDaz={
  margin:"auto",
  display:"flex",
  alignItems:"center",
  maxWidth:"60%",
}
const signUp={

}
const signIn={

}
const email={

}
const password={

}
 //BILL MURRAY AWESOMENESS *http://img.pandawhale.com/post-59658-razzle-dazzle-gif-Imgur-Bill-M-Ort8.gif*
    return (
      <div >
        <Helmet title="Home" meta={[ { name: 'description', content: 'Description of Home' }]}/>

      <Responsive minDeviceWidth={1024}>

        <div style={navColumn}>
          <div style={logo}>
            <div style={wuzGudLogo}><img style={storyImg} src="ACFrOgBqxOmI2cjtdQ-06mnzn0Pu0ubRZeg7Nl1uJ2t4J2-LUmnBUr7T-MN3JqL6ANIs3e0wTFQyzXoqiIpnhkH3a_65ARAGVhcI3PxPZElPKPZNYqqWDk3VsLuAPlM="/>
            </div>

            </div>
            <div style={leftNav}><Link style={navLink} to="/">Home </Link><Link style={navLink} to="/CyberTrain"> CyberTrain </Link><Link style={navLink} to="/Commerce"> Dealings </Link>
              <Link style={navLink} to="/Govt"> Govt </Link><Link style={navLink} to="/Jam"> Jam </Link><Link style={navLink} to="/Shop"> Shop </Link>
          </div>
        </div>
      </Responsive>

      <Responsive maxDeviceWidth={1023}>
        <div style={navColumn}>
          <div style={logo}>
            <div style={wuzGudLogo}><img style={storyImg} src="http://localhost:8000/WGLOGO.jpg"/>
            </div>
            <div style={topBar}>

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


        <div style={knowWhat}>
          <span style={{color:"#CCC20C"}}>
          WUZ GUD</span><br/><span>AUGUSTA?
          </span>
        </div>

        <div style={contentFeild}>




          <div style={storyContainer}>



            <img style={storyImgC} src="https://scontent-atl3-1.xx.fbcdn.net/v/t31.0-8/16797120_1787054604890866_5798852822789312024_o.jpg?oh=cc17569128c9e869d241e4a4d2b94519&oe=59623C06"/>

            <div style={storyContent}>

              <h3 style={blogTitleC}>CyberTrain</h3>


              <Link style={articleBody} to="/CyberTrain">
                <span>Nathan Deal signs bill to award AU with $50,000,000.00 to fund Cyber Training & Innovation Center.</span>
              </Link>

            </div>
            <Link style={blogLinkC}>CyberTrain..</Link>

          </div>


          <div style={storyContainer}>


            <img style={storyImgJ} src="https://scontent-atl3-1.xx.fbcdn.net/v/t31.0-8/17390681_1061725620599626_6413932256641965317_o.jpg?oh=71be93b4f5deb33ad3fd2266720b661c&oe=596DFB93"/>


            <div style={storyContent}>

              <h3 style={blogTitleJ}>Jam</h3>
              <Link style={articleBody} to="/Jam">
              <span>Freinds With Benifits puts on 4th annual Major Rager the thursday of masters week.</span>
              </Link>
            </div>
            <Link style={blogLinkJ}>Jam..</Link>

          </div>


          <div style={storyContainer}>

            <Link style={blogTitleG} to="/Infrastructure">
            <h3>Infrastructure</h3>
            </Link>



            <div style={storyContent}>
            <img style={storyImg} src="https://scontent-atl3-1.xx.fbcdn.net/v/t1.0-9/17264794_273053533135955_2235100976553120977_n.jpg?oh=8a34eb015d5191d4c4933d78b4f137a5&oe=596F03E4"/>
              <Link style={articleBody} to="/Infrastructure">
                <span>Round-a-bout construction on Wheeler @ Aumond.</span>
              </Link>

            </div>
            <Link style={blogLinkG}>Inf..</Link>
          </div>





          <div style={storyContainer}>

          <Link style={blogTitle} to="/Govt">
            <h3>Govt</h3>
            </Link>



            <div style={storyContent}>
              <img style={storyImg} src="http://dianneprimavera.org/wp-content/uploads/2014/04/the-capitol-building-denver-united-states+1152_12936487000-tpfil02aw-8073.jpg"/>
              <Link style={articleBody} to="/Govt">
                <span>Georgia Senate backs guns on campus, setting up final vote</span>
              </Link>

            </div>
            <Link style={blogLink}>Gov't..</Link>
          </div>


          <div style={storyContainer}>

            <Link style={blogTitleD} to="/Commerce">
              <h3>Commerce</h3>
            </Link>



            <div style={storyContent}>
              <img style={storyImg} src="http://chronicle.augusta.com/sites/default/files/styles/slideshow__640x360/public/images/1839227_web1_AugustaExchangeNewStoresfile.jpg?itok=Y7D1ze7q"/>
              <Link style={articleBody} to="/Commerce">
              <span>Burlington, Chipotle, MOD Pizza headed to Augusta Exchange</span>
              </Link>

            </div>
            <Link style={blogLinkD}>Dealings..</Link>
            </div>

          </div>
          <div style={loveThe}>
            LOVE THE WUZ.
          </div>
          <div style={theWuz}><img style={razDaz} src="http://img.pandawhale.com/post-59658-razzle-dazzle-gif-Imgur-Bill-M-Ort8.gif"/></div>
        </Responsive>









        <Responsive maxDeviceWidth={1023} style={container}>
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


          <div style={knowWhat}>
            <span>
              KNOW WHATS GUD.
            </span>
          </div>

          <div style={contentFeild}>




            <div style={storyContainer}>

              <Link style={blogTitleC} to="/CyberTrain">
                <h3>The Cyber Train</h3>
              </Link>



              <div style={storyContent}>
                <img style={storyImg} src="https://scontent-atl3-1.xx.fbcdn.net/v/t31.0-8/16797120_1787054604890866_5798852822789312024_o.jpg?oh=cc17569128c9e869d241e4a4d2b94519&oe=59623C06"/>

                <Link style={articleBody} to="/CyberTrain">
                  <span>Nathan Deal signs bill to award AU with $50,000,000.00 to fund Cyber Training & Innovation Center.</span>
                </Link>
              </div>

            </div>


            <div style={storyContainer}>

              <Link style={blogTitleJ} to="/Jam">
                <h3>Jam</h3>
              </Link>



              <div style={storyContent}>
                <img style={storyImg} src="https://scontent-atl3-1.xx.fbcdn.net/v/t31.0-8/17390681_1061725620599626_6413932256641965317_o.jpg?oh=71be93b4f5deb33ad3fd2266720b661c&oe=596DFB93"/>

                <Link style={articleBody} to="/Jam">
                <span>Freinds With Benifits puts on 4th annual Major Rager the thursday of masters week.</span>
                </Link>
              </div>

            </div>


            <div style={storyContainer}>

              <Link style={blogTitleG} to="/Infrastructure">
              <h3>Infrastructure</h3>
              </Link>



              <div style={storyContent}>
              <img style={storyImg} src="https://scontent-atl3-1.xx.fbcdn.net/v/t1.0-9/17264794_273053533135955_2235100976553120977_n.jpg?oh=8a34eb015d5191d4c4933d78b4f137a5&oe=596F03E4"/>
                <Link style={articleBody} to="/Infrastructure">
                  <span>Round-a-bout construction on Wheeler @ Aumond.</span>
                </Link>

              </div>

            </div>


            <div style={storyContainer}>

            <Link style={blogTitleG} to="/Infrastructure">
              <h3>Infrastructure</h3>
            </Link>



              <div style={storyContent}>
                <img style={storyImg} src="http://chronicle.augusta.com/sites/default/files/styles/slideshow__640x360/public/images/1829782_web1_James-Brown-Arena-3.jpg?itok=NlrqPkpA"/>
                <Link style={articleBody} to="/Infrastructure">

                  <span>New arena project slows down</span>
                </Link>

              </div>

            </div>


            <div style={storyContainer}>

            <Link style={blogTitleG} to="/Govt">
              <h3>Govt</h3>
              </Link>



              <div style={storyContent}>
                <img style={storyImg} src="http://dianneprimavera.org/wp-content/uploads/2014/04/the-capitol-building-denver-united-states+1152_12936487000-tpfil02aw-8073.jpg"/>
                <Link style={articleBody} to="/Govt">
                  <span>Georgia Senate backs guns on campus, setting up final vote</span>
                </Link>

              </div>

            </div>

            <div style={storyContainer}>

              <Link style={blogTitleD} to="/Commerce">
                <h3>Dealings</h3>
              </Link>



              <div style={storyContent}>
                <img style={storyImg} src="http://chronicle.augusta.com/sites/default/files/styles/slideshow__640x360/public/images/1839227_web1_AugustaExchangeNewStoresfile.jpg?itok=Y7D1ze7q"/>
                <Link style={articleBody} to="/Commerce">
                <span>Burlington, Chipotle, MOD Pizza headed to Augusta Exchange</span>
                </Link>

              </div>

              </div>

            </div>
            <div style={loveThe}>
              LOVE THE WUZ.
            </div>
            <div style={theWuz}><img style={razDaz} src="http://img.pandawhale.com/post-59658-razzle-dazzle-gif-Imgur-Bill-M-Ort8.gif"/></div>
          </Responsive>
  </div>
    );
  }
}
