import { BrowserRouter, Routes, Route } from "react-router-dom";

///   IMAGES     /////////////////////////////////
import logo from './logo.svg';
import webdesign1 from "./images/webdesign-1.webp"
import webdesign2 from "./images/webdesign-2.webp"
import webdesign3 from "./images/webdesign-3.jpg"

import reactLogo from "./images/React_logo_wordmark.png"
import wpLogo from "./images/WordPress-Logo.png"
import htmlLogo from "./images/html5-css-js-logo.jpeg"
import banner1 from "./images/techBanner1.jpg"
import banner2 from "./images/techBanner2.jpg"
import banner3 from "./images/techBanner3.jpg"


///  CSS
import './Website.css';

///  COMPONENTS   ////////////////////////////////////////
import Banner from './components/Banner'
import NavBar from './components/NavBar'
import ContentContainer from './components/ContentContainer'
import ImageContainer from './components/ImageContainer'
import Iframe from './components/Iframe'
import OneColumn from './components/OneColumn'
import TwoColumn from './components/TwoColumn'
import ThreeColumn from './components/ThreeColumn'

import RoutingComponent from './components/RoutingComponent'

///   ROUTES   ////////////
//import HomeRoute from "./Routes/HomePage";
import AboutRoute from "./Routes/AboutPage";
import PortfolioRoute from "./Routes/PortfolioPage";
//import ContactRoute from "./Routes/ContactPage";
//import LinksRoute from "./Routes/LinkPage";
import OneColumnRoute from "./Routes/OneColumnPage";
import TwoColumnRoute from "./Routes/TwoColumnPage";
import ThreeColumnRoute from "./Routes/ThreeColumnPage";
import GameRoute from "./Routes/GamePage";
import TutorialRoute from "./Routes/TutorialPage";
import SaleRoute from "./Routes/SalePage";


///      CONTENT  //////////////////////////////////////
import PhaserContent from './content/PhaserContent.js'
import PhaserTutorialOne from './content/PhaserTutorialOne.js'
import HtmlContent from './content/HtmlContent.js'
import ReactContent from './content/ReactContent.js'
import WordpressContent from './content/WordpressContent.js'




const content = "Phaser is an amazing platform that makes creating games very easy, along with support for physics and it’s popular enough that you can find plugins and tools to build better games, faster.It is based on HTML5 technologies, which means you get to build games that can be distributed through the Web, but also packaged as desktop or mobile apps"

const html5 = "";
const react = "";
const wordpress = "";
const phaser = "";


function Website() {
  const id = "Website";
  return (
    <div id={id} className={id} style={{backgroundImage:"url('https://cdn.dribbble.com/users/707433/screenshots/6720160/gears2.gif')",backgroundColor:"", backgroundRepeat:"",backgroundSize:"100%", opacity:"1",maxWidth:"1200px"}}>

      <Banner title="MAG WEB DESIGNS" description="Front End Web / App Development | Tutorials and Training | Cloud Hosting / Administration Services " titleColor="white" textColor="white" link="#" image={banner2} color="white" height={100} />

      <SaleRoute />
      <RoutingComponent sticky="top" />
      {/*<GameRoute />*/}
      {/*<AboutRoute />*/}
      {/*<PortfolioRoute />*/}
      {/*<TutorialRoute />*/}
      

      
      



      
    </div>
  );
}

export default Website;
