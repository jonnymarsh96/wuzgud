/*
 *
 * Commerce
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
export default class Commerce extends React.PureComponent {
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
            height:"100%",
            display:"flex",
            justifyContent:"space-between",
            alignItems:"center",
            maxHeight:"700px",
            overflow:"hidden",

        }
        const articleTitle={
          background:"rgba(0,0,0,0.7)",
          fontFamily:"amiko",
          fontSize:"1em",
          color:"#E4EAF2",
          textAlign:"center",
          width:"100%",
          marginTop:"25%",

        }
      const container={
      display:"flex",
      flexDirection:"row",

    }
      const mContainer={
        display:"flex",
        flexDirection:"column",
      }

      const navColumn={
          width:"20%",
          height:"100vh",
          background:"#D9D7BA",
          display:"flex",
          flexDirection:"column",
          position:"fixed",




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
            borderTop:"2px solid #F2E7AE",
            borderBottom:"2px solid #F2E7AE",
            textAlign:"center",
            lineHeight:"3.25em",
            color:"#818286",
            fontFamily:"Amiko",
            fontSize:"1.25em",

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
          background:"#D9D7BA",
          backgroundAttachment:"fixed",
          overflow:"auto",
          marginLeft:"20%",
        }


          const boxStyle={
            width:"85%",

            display:"flex",
            margin:"0 auto",
            marginTop:"30px",
            marginBottom:"30px",
            position:"relative",
            border:"2px solid #F2E7AE",
            borderRadius:"3px",
            maxHeight:"350px",
            overflow:"hidden",

          }
          const boxImage={
            width:"100%",
            height:"80%",
            margin:"0 auto",

        }
          const paper={
            height: "100vh",
            width: "90%",
            textAlign: "center",
            display: "inline-block",
            alignSelf:"center",
            background:"#F2E7AE",
            fontFamily:"Bungee Hairline",
            color:"#0019E5",

            fontWeight:"bold",


          }
          const paperBody={
            color:"#818286",
            fontSize:"1.6em",
            fontFamily:"Dosis",
            textAlign:"center",
            fontWeight:"600",
          }
            const content={
              color:"#ffffff",
              textAlign:"center",
              fontFamily:"Bungee Hairline",
            }
            const cyber={
              height:"40px",
              width: "50%",
              display:"inline-block",
              alignSelf:"center",
              margin:"20px",
              fontSize:"3em",
              fontFamily:"Chicle",
              color:"#85bb65",
              textShadow:"1px 2px #5f9341",
              letterSpacing:"5px",

            }
            const rightScroll={
              width:"25%",
              height:"100vh",
              background:"#437336",
              backgroundAttachment:"fixed",
              border:"2px solid #FFFFFF",
              overflow:"auto",

            }
        const storyImg={
          maxWidth:"200px",
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

    }

      return (
        <div style={container} >
          <Helmet title="Commerce" meta={[ { name: 'description', content: 'Description of Commerce' }]}/>
          <Responsive maxDeviceWidth={1024}>
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

            <Responsive minDeviceWidth={1023}>
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

            <Responsive maxDeviceWidth={1024}>
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
              </div>
              </Responsive>


              <Responsive maxDeviceWidth={1024}>
                <div style={content}>
                  <Paper style={paper}>
                    <h1 style={cyber}>COMMERCE</h1>
                    <p style={paperBody}>
                      Look here for all the newsest news here in local business.
                    </p>
                  </Paper>
                </div>



              </Responsive>

            <Responsive minDeviceWidth={1023}>
              <div style={content}>
                <Paper style={paper}>
                  <h1 style={cyber}>COMMERCE</h1>
                  <p style={paperBody}>
                    Look here for all the newsest news here in local business.
                  </p>
                </Paper>
              </div>


            </Responsive>

            <Responsive maxDeviceWidth={1024}>
              <div style={rightScroll}>

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
              </div><div style={storyContainer}>
              </div>
             </div>
            </Responsive>

            <Responsive minDeviceWidth={1023}>
              <div style={rightScroll}>

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
              </div><div style={storyContainer}>
              </div>
             </div>
            </Responsive>

          </div>

    );
  }
}
