/*
 *
 * CyberTrain
 *
 */

import React from 'react';
import Helmet from 'react-helmet';
import {Link} from 'react-router';
export default class CyberTrain extends React.PureComponent {


  render() {
const container={
  display:"flex",
  flexDirection:"row",
}

  const navColumn={
      width:"20%",
      height:"100vh",
      background:"#4A4DA3",
      display:"flex",
      flexDirection:"column",



    }
      const logo={
        width:"90%",
        height:"10px",
      }
        const wuzGudLogo={
          fontFamily:"Modak",
          color:"#F2BE29",
          fontSize:"4em",
          textAlign:"center",
          marginTop:"30px",
          textShadow:"4.3px 1.5px 1px rgb(0,0,0)",

        }
      const leftNav={
        width:"99%",
        height:"400px",
        marginTop:"30px",
        borderTop:"2px solid #6166F2",
        borderBottom:"2px solid #6166F2",
        textAlign:"center",
        lineHeight:"65px",
        color:"#ffffff",
        fontFamily:"Amiko",
        fontSize:"1.25em"

      }
    const contentFeild={
      width:"65%",
      height:"100vh",
      background:"#4A4DA3",
    }

      const headLine={
        width:"90%",
        height:"175px",
        margin:"50px",
        marginBottom:"5px",
        background:"#4A4DA3",
        textAlign:"center",
        borderBottom:"2px solid #6166F2",
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
      background:"#191C6B",
    }


    return (
      <div >
        <Helmet title="CyberTrain" meta={[ { name: 'description', content: 'Description of CyberTrain' }]}/>



        <div style={navColumn}>
          <div style={logo}>
            <div style={wuzGudLogo}>WUZ<br/>GUD
            </div>
            <div style={leftNav}>Home<br/>Cyber Train<br/>Commerce<br/>Gov't<br/>JAM<br/>SHOP.
            </div>
          </div>
        </div>
        <div style={contentFeild}>
          <div style={headLine}>HEADLINE
          </div>

            <div style={content}>
               hello sdahjfsdkjfghaskdjhfkjasdhfkjashdfkjhasdfkAASDASDASDASDASDHFMDREENWBTAE
            </div>

        </div>
        <div style={rightScroll}>
        </div>

      </div>
    );
  }
}
