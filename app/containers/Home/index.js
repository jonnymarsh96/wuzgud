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
    if(next > this.state.data.length-1) {
      next = 0;
    }

    for(var i = 0; i<=this.state.data.length-1; i++){
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
  renderDots=()=>{
    const dotContainer={
      position:"absolute",
      background:"transparent",
      left:"0",
      right:"0",
      bottom:"0",
      margin:"0 auto",
      marginTop:"600px",
      zIndex:"999999",
      height:"200px",
      width:"200px",
      display:"flex",
      flexDirection:"row",
      justifyContent:"space-around"
    }
    const dot={
      width:"30px",
      height:"20px",
      borderRadius:"50%",
      border:"3px solid rgba(0,0,0,1)",

    }
    const active={
      width:"30px",
      height:"20px",
      borderRadius:"50%",
      background:"rgba(0,0,0,.8)",
      border:"3px solid rgba(0,0,0,1)",
    }

    if(this.state.active === 0){
      return(
        <div style={dotContainer}>
          <div style={active} onTouchTap={()=>this.setActive(0)}></div>
          <div style={dot} onTouchTap={()=>this.setActive(1)}></div>
          <div style={dot} onTouchTap={()=>this.setActive(2)}></div>
        </div>
      )
    }
    else if(this.state.active === 1){
      return(
        <div style={dotContainer}>
          <div style={dot} onTouchTap={()=>this.setActive(0)}></div>
          <div style={active} onTouchTap={()=>this.setActive(1)} ></div>
          <div style={dot} onTouchTap={()=>this.setActive(2)}></div>
        </div>
      )
    }
    else if(this.state.active === 2){
      return(
        <div style={dotContainer}>
          <div style={dot} onTouchTap={()=>this.setActive(0)}></div>
          <div style={dot} onTouchTap={()=>this.setActive(1)}></div>
          <div style={active} onTouchTap={()=>this.setActive(2)}></div>
        </div>
      )
    }


  }
  setActive=(i)=>{
    var articles=this.state.data;
    this.setState({
      active:i,
      activeArticle:articles[i]
    })
  }

  render() {
    const imageOverlay={
        background:"rgba(0,0,0,0.2)",
        position:"absolute",
        top:"0",
        width:"100%",
        height:"600px",
        display:"flex",
        justifyContent:"space-between",
        overflow:"hidden",
        paddingTop:"0px",
        alignSelf:"center",
    }

    const articleTitle={
      background:"linear-gradient(to left, rgba(50, 50, 50, .5), rgba(50, 50, 50, 1))",
      fontFamily:"amiko",
      fontWeight:"bold",
      fontSize:"1em",
      color:"#E1E1E9",
      textAlign:"end",
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
      marginTop:"100px",
      right:"0"
    }

  const containerM={
    width:"100%",
    height:"900px",
    background:"#969696",
    display:"flex",
    flexDirection:"column",
  }
  const container={
    width:"100%",
    height:"900px",
    background:"#969696",

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
        width:"15%",
        height:"250px",
        marginLeft:"10px",
        background:"#000000",
        borderRadius:"5px",
        zIndex:"120",
      }
      const logoM={
        width:"30%",
        height:"220px",
        marginLeft:"10px",
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
          display:'flex',
          justifyContent:'center',
          zIndex:"9999"
        }
      const leftNav={
        maxWidth:"20%",
        height:"auto",
        marginTop:"5px",
        margin:"0 auto",
        textAlign:"flex-start",
        color:"#404547",
        fontFamily:"Amiko",
        fontSize:"2em",
        wordSpacing:"2em",
        display:"flex",
        flexDirection:"row",
        wordSpacing:"20px",

      }
      const leftNavM={
        maxWidth:"50%",
        height:"auto",
        margin:"0 auto",
        color:"#404547",
        fontFamily:"Amiko",
        fontSize:"2em",

        wordSpacing:"2em",
        display:"flex",
        flexDirection:"row",
        flexWrap:"wrap"

      }
      const navLink={
        fontFamily:"Amiko",
        fontSize:".8em",
        color:"#323232",
        textDecoration:"none",
        fontWeight:"bold",
        margin:"20px"
      }
      const navLinkM={
        fontFamily:"Amiko",
        fontSize:".5em",
        color:"#323232",
        textDecoration:"none",
        fontWeight:"bold",
      }
      const navLinkCyber={
        fontFamily:"Amiko",
        fontSize:".5em",
        color:"#323232",
        textDecoration:"none",
        fontWeight:"bold",
        margin:"10px",
      }
      const boxStyle={
        width:"60%",
        margin:"0 auto",
        position:"relative",
        alignSelf:"center",
        maxHeight:"600px",
        overflow:"hidden",
        paddingTop:"0px",
        borderRadius:"0px",
      }
      const boxStyleM={
        width:"90%",
        margin:"0 auto",
        position:"relative",
        display:"flex",
        alignSelf:"center",
        maxHeight:"600px",
        overflow:"hidden",
        paddingTop:"0px",
        borderRadius:"0px",
      }
      const boxImage={
        width:"100%",
        height:"100%",
        margin:"0 auto",
        paddingTop:"0px",
        overflow:"hidden"
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
      background:"#969696",
      border:"2px solid #FFFFFF",
      overflow:"auto",
      positon:"absolute",
      marginLeft:"75%",
    }

    const contentFeild={
      width:"100%",
      background:"#F5F5F5",
      backgroundAttachment:"fixed",
      display:"flex",
      flexDirection:"row"
    }
    const contentFeildM={
      width:"100vw",
      background:"#F5F5F5",
      backgroundAttachment:"fixed",
      display:"flex",
      flexDirection:"column"
    }
    const storyContainer={
      background:"#D1D1D1",
      height:"300px",
      width:"80%",
      margin:"40 auto",
      fontFamily:"Nunito",
      fontSize:"3em",
      overflow:"hidden",
      marginRight:"15px",
      marginLeft:"15px",
      marginBottom:"30px",
      marginTop:"30px",
      textOverflow:"hidden",
      borderRadius:"0px",
      display:"flex",
      flexDirection:"column",
    }
    const storyContent={
        display:"flex",
        flexDirection:"column",
        alignItems:"center",
        height:"300px",
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
      textAlign:"start",
      height:"100px",
      width:"100%",
      fontSize:".5em",
      color:"#E3E3E3",
      textDecoration:"none",
      marginLeft:"50px",
      marginTop:"15px"
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
      textAlign:"center",
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
      marginTop:"30px",
      textAlign:"center",
    }
    const storyImgD={
      maxWidth:"100%",
      height:"400px",
      margin:"0px",
      overflow:"hidden",
      borderBottom:"5px solid #478B1A",

    }
    const storyImgG={
      width:"100%",
      height:"400px",
      margin:"0px",
      overflow:"hidden",
      borderBottom:"5px solid #610315",
    }
    const blogTitleG={
      height:"100px",
      width:"100%",
      fontWeight:"bold",
      fontSize:".5em",
      fontFamily:"Amiko",
      color:"#E3E3E3",
      textDecoration:"none",
      marginTop:"5px",
      paddingLeft:"50px",

    }
    const blogTitle={

      color:"#E3E3E3",
      fontFamily:"Amiko",
      fontWeight:"bold",
      height:"100px",
      width:"100%",
      fontSize:".5em",
      textDecoration:"none",
      marginTop:"5px"

    }
    const storyImg={
      maxWidth:"100%",
      height:"200px",
      margin:"0px",
      overflow:"hidden",
      margin:"0 auto",
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
      color:"#AAB3B6",
      textDecoration:"none",
      padding:"30px",
    }
    const description={
      margin:"0 auto",
      textAlign:"left",
    }
    const knowWhat={
      height:"100px",
      width:"100%",
      fontSize:"2.5em",
      fontFamily:"Amiko",
      textAlign:"center",
      paddingTop:"150px",
      fontWeight:"bold",
      background:"#D1D1D1",
      color:"#ffffff",
      wordSpacing:".5em",
      letterSpacing:".2em",
      paddingBottom:"150px",
      lineSpacing:"3em",
      paddingBottom:"250px",
    }
    const wuz={
      fontSize:"2em",
      fontFamily:"Amiko",
      textAlign:"center",
      fontWeight:"bold",
      color:"#FFDC00",
      wordSpacing:".5em",
      letterSpacing:".2em",
      lineSpacing:"3em",
      textShadow:".5px .5px 3px #000000",
    }

    const loveThe={
      height:"200px",
      width:"100%",
      fontSize:"2em",
      fontFamily:"Amiko",
      textAlign:"center",
      fontWeight:"bold",
      background:"#ffffff",
      color:"#FF900B",
      wordSpacing:".5em",
      letterSpacing:".2em",
      paddingTop:"150px",
      paddingBottom:"50px",
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
    const local={
      width:"100%",
      height:"600px",
      display:"flex",
      flexDirection:"column",
    }

    const razDaz={
      margin:"0 auto",
      marginTop:"50px",
      display:"flex",
      alignItems:"center",
      maxWidth:"60%",
    }
    const signUp={
    }
    const signIn={
    }
    const beLocal={
      display:"flex",
      flexDirection:"column",
      hieght:"800px",
      width:"100%",
    }
    const the={
      fontFamily:"Amiko",
      fontSize:"2em",
      display:"flex",
      flexDirection:"column",
      width:"60%",
      height:"300px",
      background:"#F5F5F5",
      margin:"30px",
      marginTop:"70px",
      overflow:"hidden",
      alignSelf:"center"
    }
    const localImg={
      margin:"0 auto",
      marginTop:"10px",
      display:"flex",
      alignItems:"center",
      width:"600px"
    }
 //BILL MURRAY
    return (
      <div >
        <Helmet title="Home" meta={[ { name: 'description', content: 'Description of Home' }]}/>

        <Responsive minDeviceWidth={1024}>

          <div style={navColumn}>

              <div style={wuzGudLogo}>
                <img style={storyImg} src="http://localhost:8000/WuzGud.png"/>

            </div>

            <div style={leftNav}>
              <Link style={navLink} to="/">Home </Link>
              <Link style={navLink} to="/CyberTrain"> CyberTrain </Link>
              <Link style={navLink} to="/Commerce"> Dealings </Link>
              <Link style={navLink} to="/Govt"> Govt </Link>
              <Link style={navLink} to="/Jam"> Jam </Link>
              <Link style={navLink} to="/Shop"> Shop </Link>
            </div>
          </div>
        </Responsive>

        <Responsive maxDeviceWidth={1023}>
          <div style={navColumn}>
            <div style={logoM}>
              <div style={wuzGudLogo}>
                <img style={storyImg} src="http://localhost:8000/WuzGud.png"/>
              </div>
            </div>
            <div style={leftNavM}>
              <Link style={navLinkM} to="/">Home </Link>
              <Link style={navLinkM} to="/CyberTrain"> CyberTrain </Link>
              <Link style={navLinkM} to="/Commerce"> Dealings </Link>
              <Link style={navLinkM} to="/Govt"> Govt </Link>
              <Link style={navLinkM} to="/Jam"> Jam </Link>
              <Link style={navLinkM} to="/Shop">Shop</Link>
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
              {this.renderDots()}

          </div>


            <div style={knowWhat}>
            <div style={wuz}>
            WUZ GUD</div><br/><div>AUGUSTA?
            </div>
            </div>


          <div style={contentFeild}>




            <div style={storyContainer}>



              <img style={storyImgC} src="https://scontent-atl3-1.xx.fbcdn.net/v/t31.0-8/16797120_1787054604890866_5798852822789312024_o.jpg?oh=cc17569128c9e869d241e4a4d2b94519&oe=59623C06"/>

              <div style={storyContent}>

                <h3 style={blogTitleC}>CyberTrain</h3>


                <Link style={articleBody} to="/CyberTrain">
                  <span style={description}>Nathan Deal signs bill to award AU with $50,000,000.00 to fund Cyber Training & Innovation Center.</span>
                </Link>

              </div>
              <Link style={blogLinkC}>CyberTrain..</Link>

            </div>


            <div style={storyContainer}>


              <img style={storyImgJ} src="https://scontent-atl3-1.xx.fbcdn.net/v/t31.0-8/17390681_1061725620599626_6413932256641965317_o.jpg?oh=71be93b4f5deb33ad3fd2266720b661c&oe=596DFB93"/>


              <div style={storyContent}>

                <h3 style={blogTitle}>Jam</h3>
                <Link style={articleBody} to="/Jam">
                <span>Freinds With Benifits puts on 4th annual Major Rager the thursday of masters week.</span>
                </Link>
                <Link style={blogLinkJ}>Jam..</Link>
              </div>


            </div>


            <div style={storyContainer}>

              <img style={storyImg} src="https://scontent-atl3-1.xx.fbcdn.net/v/t1.0-9/17264794_273053533135955_2235100976553120977_n.jpg?oh=8a34eb015d5191d4c4933d78b4f137a5&oe=596F03E4"/>

              <div style={storyContent}>
                <h3 style={blogTitle} >Infrastructure</h3>
                <Link style={articleBody} to="/Infrastructure">
                  <span style={description}>Round-a-bout construction on Wheeler @ Aumond.</span>
                </Link>

              </div>
              <Link style={blogLink}>Inf..</Link>
            </div>





            <div style={storyContainer}>



              <img style={storyImgG} src="https://images.travelpod.com/tripwow/photos/ta-00c5-9bd2-5ed2/the-capitol-building-denver-united-states+1152_12936487000-tpfil02aw-8073.jpg"/>
              <div style={storyContent}>
                <h3 style={blogTitleG}>Govt</h3>
                <Link style={articleBody} to="/Govt">
                  <Link style={description}>Georgia Senate backs guns on campus, setting up final vote</Link>
                </Link>

              </div>

            </div>


            <div style={storyContainer}>



              <img style={storyImgD} src="http://chronicle.augusta.com/sites/default/files/styles/slideshow__640x360/public/images/1839227_web1_AugustaExchangeNewStoresfile.jpg?itok=Y7D1ze7q"/>

              <div style={storyContent}>

                <h3 style={blogTitleG}>Dealings</h3>
                <Link style={articleBody} to="/Commerce">
                <span style={description}>Burlington, Chipotle, MOD Pizza headed to Augusta Exchange</span>
                </Link>

              </div>
              <Link style={blogLinkD}>Dealings..</Link>
              </div>

            </div>
            <div style={loveThe}>
              BE A LOCAL.
            </div>
            <div>
              <img style={razDaz} src="http://www.grolsch.com/sites/default/files/news/images/tumblr_mv5348v8gt1qghl49o1_500_0.gif"/>
            </div>
            <div style={beLocal}>
              <div style={the}>
                THE FOODIE
                <img style={localImg} src="https://scontent-atl3-1.xx.fbcdn.net/v/t1.0-9/17903557_1414670271886383_2125974173994355801_n.jpg?oh=b48527ca148396a1e0341625f894b382&oe=597B396A"/>
              </div>
              <div style={the}>
                GUD BUZZ
                <img style={localImg} src="https://scontent-atl3-1.xx.fbcdn.net/v/t31.0-8/18319203_2216301041929026_8130694973249064808_o.jpg?oh=e2b0eacf48c2bc8bdc7f157c9f185511&oe=5975330D"/>
              </div>
              <div style={the}>
                PATRON
                <img src="http://baharris.org/historicpolandspring/ForrestHillsRicker/Golf_FHR.jpg"/>
              </div>
              <div style={the}>
                CLOTHES HORSE
                <img style={localImg} src="https://scontent-atl3-1.xx.fbcdn.net/v/t1.0-9/18274863_10155256773699872_8219480682711732665_n.jpg?oh=c52d8d15a1c948cb672ea4d4601c8a46&oe=59B8F02D"/>
              </div>
              <div style={the}>
                SWASHBUCKLER
              <Link to="/Swash">
                <img style={localImg} src="https://scontent-atl3-1.xx.fbcdn.net/v/t1.0-9/18033296_1394780767247993_344056224661744304_n.jpg?oh=bea111d2c0c5f3aba468ef3005905c50&oe=5977265C"/>
              </Link>
              </div>
            </div>
          </Responsive>









        <Responsive maxDeviceWidth={1023} style={container}>
          <div style={boxStyleM}>

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
              <span style={wuz}>WUZ GUD </span> <br/> AUGUSTA GA?
            </span>
          </div>

          <div style={contentFeildM}>

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
                Dealings
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
              BE A LOCAL.
            </div>
            <div>
              <img style={razDaz} src="http://www.grolsch.com/sites/default/files/news/images/tumblr_mv5348v8gt1qghl49o1_500_0.gif"/>
            </div>
            <div style={beLocal}>
              <div style={the}>
                THE FOODIE
                <img style={localImg} src="https://scontent-atl3-1.xx.fbcdn.net/v/t1.0-9/17903557_1414670271886383_2125974173994355801_n.jpg?oh=b48527ca148396a1e0341625f894b382&oe=597B396A"/>
              </div>
              <div style={the}>
                GUD BUZZ
                <img style={localImg} src="https://scontent-atl3-1.xx.fbcdn.net/v/t31.0-8/18319203_2216301041929026_8130694973249064808_o.jpg?oh=e2b0eacf48c2bc8bdc7f157c9f185511&oe=5975330D"/>
              </div>
              <div style={the}>
                PATRON
                <img src="http://baharris.org/historicpolandspring/ForrestHillsRicker/Golf_FHR.jpg"/>
              </div>
              <div style={the}>
                CLOTHES HORSE
                <img style={localImg} src="https://scontent-atl3-1.xx.fbcdn.net/v/t1.0-9/18274863_10155256773699872_8219480682711732665_n.jpg?oh=c52d8d15a1c948cb672ea4d4601c8a46&oe=59B8F02D"/>
              </div>
              <div style={the}>
                SWASHBUCKLER
              <Link to="/Swash">
                <img style={localImg} src="https://scontent-atl3-1.xx.fbcdn.net/v/t1.0-9/18033296_1394780767247993_344056224661744304_n.jpg?oh=bea111d2c0c5f3aba468ef3005905c50&oe=5977265C"/>
              </Link>
              </div>
              </div>

          </Responsive>
  </div>
    );
  }
}
