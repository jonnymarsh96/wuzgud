/*
 *
 * Swash
 *
 */

 import React from 'react';
 import Helmet from 'react-helmet';
 import Responsive from 'react-responsive';
 import {Link} from 'react-router';
 import Menu from 'material-ui/svg-icons/navigation/Menu';
 import TextField from 'material-ui/TextField';
 import Person from 'material-ui/svg-icons/social/person';
 import Description from 'material-ui/svg-icons/action/description';
 import AccountBalance from 'material-ui/svg-icons/action/account-balance';
 import ContentCopy from 'material-ui/svg-icons/content/content-copy';
 import Assignment from 'material-ui/svg-icons/action/assignment';
 import AttachMoney from 'material-ui/svg-icons/editor/attach-money';
 import CheckCircle from 'material-ui/svg-icons/action/check-circle';
 import Arrow from 'material-ui/svg-icons/navigation/arrow-downward';
 import Toggle from 'material-ui/Toggle';
 import FlatButton from "material-ui/FlatButton";
 import Dialog from 'material-ui/Dialog';





 export default class Swash extends React.PureComponent {

   constructor(props){
     super(props);
     this.state={
       open:false,
       name:'',
       email:'',
       password:'',
       signUpName:'',
       signUpEmail:'',
       signUpPassword:'',
     }
   }
   handleOpen = () => {
     this.setState({open: true});
   };

   handleClose = () => {
     this.setState({open: false});
   };


   scrollDown=(num)=>{
     window.scrollBy(0,num);
   }

   handleName = (event) =>{
     this.setState({
       name:event.target.value
     })
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
   handleSignUpName = (event) =>{
     this.setState({
       name:event.target.value
     })
     }
   handleSignUpEmail = (event) =>{
     this.setState({
       email:event.target.value
     })
   }
   handleSignUpPassword = (event) =>{
     this.setState({
       password:event.target.value
     })
   }

   signUp = () => {
     var data = new FormData();
     data.append("name", this.state.name);
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
     const headerStyle={
       display:"flex",
       minHeight:"100vh",
       background:"url(http://localhost:8000/terrah-holly-241981.jpg)",
       backgroundSize:"cover",
       width:"100%",
       flexDirection:"column",
       justifyContent:"center",
       alignItems:"center"
     }
     const navBar={
       display:"flex",
       flexDirection:"row",
       width:"100%",
       height:"124px",
       justifyContent:"space-between",
       position:"absolute",
       top:"0",

     }
     const signIn={

     }
     const imageStyle={
       display:"flex",
       flexDirection:"row",

     }
     const logoStyle={
       width:"100px",
       height:"100px",
       marginTop:"30px",
       color:"#ffffff",
       marginLeft:"50px",
       fontSize:"300px",
     }
     const navLink={
       textDecoration:"0",
       display:"flex",
       flexDirection:"column",
       padding:"15px",
       marginTop:"25px",
       color:"#555555",
       fontSize:"18px",
       fontFamily:"Open Sans",
       fontWeight:"bold",
     }
     const boxOne={
       display:"flex",
       flexDirection:"column",
       width:"50%",
       height:"700px",
       color:"#F28705",
       margin:"0 auto",
       marginTop:"200px",
     }
     const heading={
       display:"flex",
       fontSize:"25px",
       justifyContent:"center",
       color:"#ffffff",
       fontFamily:"Berkshire Swash",
       padding:"10px",
       marginTop:"20px"
     }
     const h1={
       fontFamily:"Berkshire Swash",
       textShadow:"2px 2px 2px #000000",
       fontSize:"5em",
       color:"#F1A524",
     }
     const parStyle1={
       width:"100%",
       borderRadius:"5px",
       background:"rgba(0,0,0,.0)",
      display:"flex",
      flexDirection:"column",
      fontSize:"15px",
      color:"#ffffff",
      fontFamily:"Roboto, sans serif",
      marginBottom:"0px",
      padding:"25px"
     }
     const take={
       height:"20px",
       fontSize:"1.7em",
       color:"#F1A524",
       fontFamily:"Patrick Hand SC",
       textAlign:"center",
       pddingTop:"200px",
       fontweight:"bold",
       textShadow:"2px 2px 2px #DB2C28",
     }
     const arrow={
       height:"50px",
       color:"#F1A524",
       textShadow:"2px 2px 2px #DB2C28",
     }
     const mainStyle={
       display:"flex",
       flexDirection:"row",
       marginTop:"0px",
       height:"334px",
     }
     const container={
       position:"relative",
       width:"50%",
     }

     const image={
       display:"block",
       width:"100%",
       height:"auto",
     }

     const overlay={
       position:"absolute",
       top:"0",
       bottom:"0",
       left:"0",
       right:"0",
       height:"334px",
       width:"100%",
       transition:".5s ease",
       background:"rgba(72,127,60, 0.8)",
       borderRadius:"0px",
     }
     const text={
       color:"white",
       fontSize:"3em",
       fontWeight:"bold",
       position:"absolute",
       top:"50%",
       left:"50%",
       transform:"translate(-50%, -50%)",
       textAlign:"center",
       display:"flex",
       flexDirection:"row",
       justifyContent:"center",
       alignItems:"center",

     }
     const pescatarian={
       position:"relative",
       width:"600px",
       backgroundImage:"url(http://localhost:8000/Brown_Trout_Rising_grande.jpg)",
       backgroundRepeat:"no-repeat",
       marginTop:"0px",
       borderRadius:"0px",
       display:"flex",
       flexDirection:"row",
     }
     const trekker={
       position:"relative",
       width:"580px",
       backgroundImage:"url(http://localhost:8000/kaidi-guo-236880.jpg)",
       backgroundRepeat:"no-repeat",
       marginTop:"0px",
       borderRadius:"0px",
     }
     const textT={
       color:"white",
       fontSize:"3em",
       fontWeight:"bold",
       position:"absolute",
       top:"50%",
       left:"50%",
       transform:"translate(-50%, -50%)",
       textAlign:"center",
       display:"flex",
       flexDirection:"row",
       justifyContent:"center",
       alignItems:"center",
     }
     const overlayT={
       position:"absolute",
       top:"0",
       bottom:"0",
       left:"0",
       right:"0",
       height:"334px",
       width:"100%",
       transition:".5s ease",
       background:"rgba(18,12,133, 0.8)",
       borderRadius:"0px",
     }
     const homeBase={
       position:"relative",
       width:"580px",
       backgroundImage:"url(http://localhost:8000/Homebase.jpg)",
       backgroundRepeat:"no-repeat",
       marginTop:"0px",
       borderRadius:"0px",
     }
     const textH={
       color:"white",
       fontSize:"3em",
       fontWeight:"bold",
       position:"absolute",
       top:"50%",
       left:"50%",
       transform:"translate(-50%, -50%)",
       textAlign:"center",
       display:"flex",
       flexDirection:"row",
       justifyContent:"center",
       alignItems:"center",
     }
     const overlayH={
       position:"absolute",
       top:"0",
       bottom:"0",
       left:"0",
       right:"0",
       height:"334px",
       width:"100%",
       transition:".5s ease",
       background:"rgba(120,69,26, 0.8)",
       borderRadius:"0px",
     }


     const pescBox={
       height:"30%",
       width:"40%",
       display:"flex",
       alignContent:"center",
       background:"rgba(72,127,60, 0.8)",
       margin:"0 auto",
       borderRadius:"5px",
       border:"1px solid rgba(72,127,60, 0.8) "
     }
     const brands={
       color:"#",
       padding:"20px",
       fontSize:"1em",
       fontFamily:"Patrick Hand SC",
       textAlign:"center",
       color:"#F1A524",
     }
     const pescText={
       color:"#FFFFFF",
       padding:"20px",
       fontSize:"2em",
       fontFamily:"Patrick Hand SC",
       textAlign:"center",

     }
     const pescLink={
       height:"100px",
       width:"10%",
       display:"flex",
       alignContent:"center",
       background:"rgba(72,127,60, 1)",
       margin:"0 auto",
       marginTop:"20px",
       borderRadius:"5px"
     }


     const homeBox={
       height:"30%",
       width:"40%",
       display:"flex",
       alignContent:"center",
       background:"rgba(120,69,26, 0.8)",
       margin:"0 auto",
       borderRadius:"5px",
       border:"1px solid rgba(120,69,26, .95) "
     }
     const homeText={
       color:"#ffffff",
       padding:"20px",
       fontSize:"2em",
       fontFamily:"Patrick Hand SC",
       textAlign:"center",
       fontweight:"bold",
     }
     const homeLink={
       height:"100px",
       width:"10%",
       display:"flex",
       alignContent:"center",
       background:"rgba(120,69,26, 1)",
       margin:"0 auto",
       marginTop:"20px",
       borderRadius:"5px"
     }


     const trekBox={
       height:"30%",
       width:"40%",
       display:"flex",
       alignContent:"center",
       background:"rgba(18,12,133, 0.8)",
       margin:"0 auto",
       borderRadius:"5px",
       border:"1px solid rgba(18,12,133, 0.8) "
     }
     const trekText={
       color:"#ffffff",
       padding:"30px",
       fontSize:"2.3em",
       fontFamily:"Patrick Hand SC",
       textAlign:"center",
       margin:"0 auto",
     }
     const trekLink={
       height:"100px",
       width:"10%",
       display:"flex",
       alignContent:"center",
       background:"rgba(18,12,133, 1)",
       margin:"0 auto",
       marginTop:"20px",
       borderRadius:"5px"
     }


     const paragraphStyle={
      display:"flex",
      fontSize:"2em",
      justifyContent:"center",
      color:"#CEDAF5",
      fontFamily:"Patrick Hand SC",
      textAlign:"start",
      fontWeight:"bold",
     }

     const parallax={
       backgroundImage: "url(http://localhost:8000/pescatarian.jpg)",
     minHeight: "700px",
     backgroundAttachment: "fixed",
     backgroundPosition: "center",
     backgroundRepeat: "no-repeat",
     backgroundSize:"cover",
     display:"flex",
     flexDirection:"column",
     justifyContent:"center",
     }
     const parallaxTrek={
       backgroundImage: "url(http://localhost:8000/Thetrekker.jpg)",
     minHeight: "700px",
     backgroundAttachment: "fixed",
     backgroundPosition: "center",
     backgroundRepeat: "no-repeat",
     backgroundSize:"cover",
     display:"flex",
     flexDirection:"column",
     justifyContent:"center",
     }
     const parallaxHome={
       backgroundImage: "url(http://localhost:8000/Homebase2.jpg)",
     minHeight: "700px",
     backgroundAttachment: "fixed",
     backgroundPosition: "center",
     backgroundRepeat: "no-repeat",
     backgroundSize:"cover",
     display:"flex",
     flexDirection:"column",
     justifyContent:"center",
     }
     const tentFPR={
       width:"64px",
       margin:"0 auto",
       marginTop:"0px",
     }
     const packFPR={
       width:"64px",
       margin:"0 auto",
       marginTop:"0px",
     }
     const poleFPR={
       width:"64px",
       margin:"0 auto",
       marginTop:"0px",
     }
     const tentFPR2={
       width:"64px",
       margin:"0 auto",
       marginTop:"0px",
     }
     const packFPR2={
       width:"64px",
       margin:"0 auto",
       marginTop:"0px",
     }
     const poleFPR2={
       width:"64px",
       margin:"0 auto",
       marginTop:"0px",
     }
     const fullPage={
       width:"70%",
       height:"70px",
       borderRadius:"6px",
       background:"#ffffff",
       display:"flex",
       flexDirection:"row",
       justifyContent:"center",
       marginTop:"200px",
       marginLeft:"50px"
     }
     const cont={
       height:"100px",
       width:"100%",
       display:"flex",
       flexDirection:"row",
       fontSize:"5em"
     }
     const contin={
       fontDecoration:"none",
       fontFamily:"Permanent Marker",
       textAlign:"center",
       margin:"0 auto",
     }
     const copy={
       fontSize:".4em",
       marginTop:"-15px",
       marginLeft:"7px",
     }
     const actions = [
       <FlatButton
         label="Cancel"
         style={button}
         onTouchTap={this.handleClose}
       />,

     ];
     const button={

     }
     const logIn={
       height:"700px",
       width:"100%",
       display:"flex",
       flexDirection:"column",
       margin:"0 auto",


     }
     const email={
       width:"80%",
       height:"40px",
       border:"1px solid #FFDC00",
       borderRadius:"3px",
       margin:"30px",
     }
     const name={
       width:"80%",
       height:"40px",
       border:"1px solid #FFDC00",
       borderRadius:"3px",
       margin:"30px",

     }
     const password={
       width:"80%",
       height:"40px",
       border:"1px solid #FFDC00",
       borderRadius:"3px",
       margin:"30px",
     }
     const submit={
       width:"100px",
       height:"30px",
       border:"1px solid #FFDC00",
       borderRadius:"3px",
       margin:"10px",
       color:"#000000"
     }
     const pescBuy={
       height:"100px",
       width:"10%",
       borderRadius:"3px",
       background:"rgba(72,127,60, 0.8)",
       margin:"0 auto",
       marginTop:"40px",
       display:"flex",
       flexDirection:"column",
       padding:"10px",
       fontSize:"1.4em",
       textAlign:"center",
       color:"#ffffff",
     }
     const trekBuy={
       height:"120px",
       width:"10%",
       borderRadius:"3px",
       background:"rgba(18,12,133, 0.8)",
       margin:"0 auto",
       marginTop:"40px",
       display:"flex",
       flexDirection:"column",
       padding:"10px",
       fontSize:"1.4em",
       textAlign:"center",
       color:"#ffffff",
     }
     const homeBuy={
       height:"120px",
       width:"10%",
       borderRadius:"3px",
       background:"rgba(120,69,26, 0.8)",
       margin:"0 auto",
       marginTop:"40px",
       display:"flex",
       flexDirection:"column",
       padding:"10px",
       fontSize:"1.4em",
       textAlign:"center",
       color:"#ffffff",
     }
     const logo={
       height:"450px"
     }


     return (
       <div>
         <Helmet title="Home" meta={[ { name: 'description', content: 'Description of Home' }]}/>


         <Responsive minDeviceWidth={1024}>
           <header style={headerStyle}>
             <nav style={navBar}>
               <div style={logoStyle}><img style={logo} src="http://localhost:8000/swashnew.png"/>
               </div>
               <div style={signIn} onTouchTap={this.handleOpen}>
                 Please Log In <img src="http://localhost:8000/icons/002-log.png"/>
                   <br/>
                 Sign Up <img src="http://localhost:8000/icons/001-rope.png"/>
               </div>
             </nav>
             <div style={boxOne}>
               <div style={heading}></div>
               <div style={parStyle1}>
                 <h1 style={h1}>Premium outdoor clothing for The modern day Swashbuckler</h1>
                 <p style={paragraphStyle}>All types.<br/>

                 <br/>
                 </p>
                 <div style={fullPage}>
                   <img style={tentFPR} src="http://localhost:8000/icons/001-tent.png" onTouchTap={()=>this.scrollDown(2600)}/>
                   <img style={packFPR} src="http://localhost:8000/icons/002-backpack.png" onTouchTap={()=>this.scrollDown(1800)}/>
                   <img style={poleFPR} src="http://localhost:8000/icons/003-spinning.png" onTouchTap={()=>this.scrollDown(800)}/>
                 </div>
               </div>



             </div>
           </header>

           <div style={mainStyle}>
             <div style={pescatarian}>
               <div style={overlay}>
                 <div style={text}>
                   FisherFit <div style={copy}>&copy;</div>
                 </div>
               </div>
             </div>
             <span style={pescText}>

             </span>
           </div>
           <div style={parallax}>
             <div style={pescBox}>
               <span style={pescText}>
               This subscription will send, to your door, FISHING clothes fresher than a brown trout caught straight out the Chatahoochee River, every stinkin month.<br/>
               <span style={brands}>
                 Features brands like Cloumbia PFG, Simms, Patagonia and more..</span>
               </span>
             </div>
             <div style={pescBuy}> BUY NOW
               <img style={poleFPR2} src="http://localhost:8000/icons/003-spinning.png" onTouchTap={()=>this.scrollDown(1000)}/>
             </div>
           </div>

           <div style={mainStyle}>
             <div style={trekker}>
               <div style={overlayT}>
                 <div style={textT}>
                   WildStride <div style={copy}>&copy;</div>
                 </div>
               </div>
             </div>
           </div>

           <div style={parallaxTrek}>
             <div style={trekBox}>
               <span style={trekText}>
               So, you like taking in nature on your stroll through the wild. We're betting you'll like it even more wearing one of these hand picked selection of comfy, hi-tech mountain garb we send to your door monthly.<br/>
               <span style={brands}> Featuring Brands such as Mountain Khaki, Kavu, NorthFace and more...</span>
               </span>
             </div>
             <div style={trekBuy}>BUY NOW
               <img style={packFPR2} src="http://localhost:8000/icons/002-backpack.png" onTouchTap={()=>this.scrollDown(1680)}/>
             </div>
           </div>

           <div style={mainStyle}>
             <div style={homeBase}>
               <div style={overlayH}>
                 <div style={textH}>
                   SedgeStud  <div style={copy}>&copy;</div>
                 </div>
               </div>
             </div>
           </div>

           <div style={parallaxHome}>
             <div style={homeBox}>
               <span style={homeText}>
               Our premium selection of the most functional, comfortable, practicle packables on the market makes you king of hanging
                by the fire with the buds, And might just soften the blow when you get a lil dirt in your oatmeal.<br/>
               <span style={brands}>
                 Features brands: NorthFace, Marmot, Patagonia, Moutain Hardware and even more...
               </span>
               </span>
             </div>
             <div style={homeBuy}>BUY NOW
               <img style={tentFPR2} src="http://localhost:8000/icons/001-tent.png" />
             </div>
           </div>
           <div style={cont}>
             <div style={logoStyle}>
               <img src="http://localhost:8000/unnamed.png"/>
             </div>
             <Link style={contin}>
               Continue to site...
             </Link>
           </div>

         </Responsive>


         <Responsive maxDeviceWidth={1023}>
           <header style={headerStyle}>
             <nav style={navBar}>
               <div style={logoStyle}><img src="http://localhost:8000/unnamed.png"/></div>

             </nav>
             <div style={boxOne}>
               <div style={heading}></div>
               <div style={parStyle1}>
                 <h1 style={h1}>Premium outdoor clothing for The modern day Swashbuckler</h1>
                 <p style={paragraphStyle}>All types.<br/>

                 <br/>
                 </p>
                 <div style={fullPage}>
                   <img style={tentFPR} src="http://localhost:8000/icons/001-tent.png" onTouchTap={()=>this.scrollDown(2600)}/>
                   <img style={packFPR} src="http://localhost:8000/icons/002-backpack.png" onTouchTap={()=>this.scrollDown(1800)}/>
                   <img style={poleFPR} src="http://localhost:8000/icons/003-spinning.png" onTouchTap={()=>this.scrollDown(800)}/>
                 </div>
               </div>



             </div>
           </header>

           <div style={mainStyle}>
             <div style={pescatarian}>
               <div style={overlay}>
                 <div style={text}>
                   Pescatarian
                 </div>
               </div>
             </div>
             <span style={pescText}>
               for our fisherman
             </span>
           </div>
           <div style={parallax}>
             <div style={pescBox}>
               <span style={pescText}>
                 Our premium selection of the most functional, comfortable, practicle packables on the market makes you king of hanging
                  by the fire with the buds, And might just soften the blow when you get a lil dirt in your oatmeal.<br/>
                 <span style={brands}>
                   Features brands: NorthFace, Marmot, Patagonia, Moutain Hardware and even more...
                 </span>
               </span>
             </div>

               <img style={poleFPR2} src="http://localhost:8000/icons/003-spinning.png" onTouchTap={()=>this.scrollDown(1000)}/>

           </div>

           <div style={mainStyle}>
             <div style={trekker}>
               <div style={overlayT}>
                 <div style={textT}>
                   WildStride
                 </div>
               </div>
             </div>
           </div>

           <div style={parallaxTrek}>
             <div style={trekBox}>
               <span style={trekText}>
               "The one who wonders, finds a new path"<br/>
               -Norwegian Proverb
               </span>
             </div>
             <img style={packFPR2} src="http://localhost:8000/icons/002-backpack.png" onTouchTap={()=>this.scrollDown(1680)}/>
           </div>

           <div style={mainStyle}>
             <div style={homeBase}>
               <div style={overlayH}>
                 <div style={textH}>
                   SedgeStud
                 </div>
               </div>
             </div>
           </div>

           <div style={parallaxHome}>
             <div style={homeBox}>
               <span style={homeText}>
                 There's no wifi in the forest, but we promise you'll find a better connection.
               </span>
             </div>
               <img style={tentFPR2} src="http://localhost:8000/icons/001-tent.png" />
           </div>
           <div style={cont}>
             <div style={logoStyle}>
               <img src="http://localhost:8000/unnamed.png"/>
             </div>
             <Link style={contin}>
               Continue to site...
             </Link>
           </div>

         </Responsive>
           <Dialog
             title="Log In"
             actions={actions}
             modal={false}
             open={this.state.open}
             onRequestClose={this.handleClose}
             style={logIn}
           >

           <input style={email} onChange={this.handleEmail} value={this.state.email} type="text" placeholder="Email" /><br/>
           <input style={password} onChange={this.handlePassword} value={this.state.password} type="password" placeholder="Password" /><br/>
           <input style={submit} type="submit" onTouchTap={this.signUp}/>
           <h3>Sign Up</h3>
           <input style={name} onChange={this.handleSignUpName} value={this.state.name} type="text" placeholder="Name" /><br/>
           <input style={email} onChange={this.handleSignUpEmail} value={this.state.email} type="text" placeholder="Email" /><br/>
           <input style={password} onChange={this.handleSignUpPassword} value={this.state.password} type="password" placeholder="Password" /><br/>
           <input style={submit} type="submit" onTouchTap={this.signUp}/>

         </Dialog>
         </div>


     );
   }
 }
