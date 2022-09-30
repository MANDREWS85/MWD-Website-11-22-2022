import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Link } from "react-router-dom";
///  COMPONENTS   ////////////////////////////////////////
import Banner from '../components/Banner'
import NavBar from '../components/NavBar'
import ContentContainer from '../components/ContentContainer'
import ImageContainer from '../components/ImageContainer'
import Iframe from '../components/Iframe'
import OneColumn from '../components/OneColumn'
import TwoColumn from '../components/TwoColumn'
import ThreeColumn from '../components/ThreeColumn'
import ListComponent from '../components/ListComponent'
import MWDServices from '../components/MWDServices'

///   ROUTES   ////////////
import HomeRoute from "../Routes/HomePage";
import AboutRoute from "../Routes/AboutPage";
import PortfolioRoute from "../Routes/PortfolioPage";
import ContactRoute from "../Routes/ContactPage";
import LinksRoute from "../Routes/LinkPage";
import TutorialRoute from "../Routes/TutorialPage";
import VideoRoute from "../Routes/VideoPage";
import GameRoute from "../Routes/GamePage";
import WpRoute from "../Routes/WordpressPage";
import ReactjsRoute from "../Routes/ReactjsPage";
/// IMAGES   /////////////////////////////////////////////
import reactLogo from "../images/React_logo_wordmark.png"
import reactLogo2 from "../images/React2.png"
import wpLogo from "../images/WordPress-Logo.png"
import htmlLogo from "../images/html5-css-js-logo.jpeg"
import banner1 from "../images/techBanner1.jpg"
import banner2 from "../images/techBanner2.jpg"
import banner3 from "../images/techBanner3.jpg"
import wpLogo2 from "../images/Wordpress2.png"
import godotLogo from "../images/Godot.png"
import phaserLogo from "../images/Phaser.png"
import cssLogo from "../images/CSS3.png"
import jsLogo from "../images/js-logo.jpg"
import jsLogo2 from "../images/js-logo-2.png"

import portfolio1 from "../images/portfolio-mwd-react-1.jpg"
import portfolio2 from "../images/portfolio-empire-fable-1.jpg"
import portfolio3 from "../images/portfolio-mi-grow-pro-1.jpg"


export default function PortfolioPage() {
  const id="PortfolioPage"
  return(
    <div>
      
      <Banner title="MAG WEB DESIGNS PORTFOLIO" description="" titleColor="white" textColor="white" link="#" image={banner2} color="white"/>  

      <OneColumn 
        content=<ContentContainer 
                  content="MAG WEB DESIGNS focuses on front end website development. We have over 22 years of experience writing HTML, CSS and JavaScript. Our designers employ the latest HTML5 CSS3 and Java Script frameworks.

We do every thing from complete custom intranets and websites. To hosting and managing Content Management Systems (CMS’s).  Check out some of our projects below."
                />        
      />


      <OneColumn
        content=<ContentContainer 
                  content=<Iframe 
                             url="https://houseplants.magwebdesigns.net/"
                             height="800px"
                             width="100%"
                />
      />
        />
      
      <OneColumn
        content=<ContentContainer 
                  content=<Iframe 
                             url="https://empirefable.magwebdesigns.net/wp/empire-fable-atlas/"
                             height="800px"
                             width="100%"
                          />
                />
      />
           
      <OneColumn
        content=<ContentContainer 
                  content=<Iframe 
                             url="/"
                             height="800px"
                             width="100%"
                          />
                />
      />

      <OneColumn
        content=<ContentContainer 
                  content=<Iframe 
                      url="https://mipython.magwebdesigns.net/WP/"
                      height="800px"
                      width="100%"
                      />
                />
      />

      


      
     
    </div>   
  )

  
}