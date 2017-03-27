/*
 *
 * Home
 *
 */

import React from 'react';
import Paper from 'material-ui/Paper';
import {Link} from 'react-router';
import Helmet from 'react-helmet';

export default class Home extends React.PureComponent {
  render() {
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
        height:"10px",
      }
        const wuzGudLogo={
          fontFamily:"Modak",
          color:"#CE4632",
          fontSize:"5em",
          textAlign:"center",
          marginTop:"30px",
          textShadow:"4.3px 1.5px .3px #E6BE2B",

        }
      const leftNav={
        width:"99%",
        height:"400px",
        marginTop:"30px",
        borderTop:"2px solid #2D2C2C",
        borderBottom:"2px solid #2D2C2C",
        textAlign:"center",
        lineHeight:"65px",
        color:"#818286",
        fontFamily:"Amiko",
        fontSize:"1.25em"

      }
        const navLink={
          fontFamily:"Amiko",
          fontSize:"1.25em",
          color:"#818286",
          textDecoration:"none",
        }
    const contentFeild={
      width:"65%",
      height:"100vh",
      background:"#005188",
    }

      const headLine={
        width:"90%",
        height:"500px",
        margin:"50px",
        marginBottom:"5px",
        background:"#005188",
        textAlign:"center",
        borderBottom:"2px solid #2D2C2C",
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
          <div style={headLine}>
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
