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

export default function PortfolioPage() {
  const id="PortfolioPage"
  return(
    <div>
      
      <Banner title="MAG WEB DESIGNS PORTFOLIO" description="" titleColor="white" textColor="white" link="#" image={banner2} color="white"/>  
       <OneColumn
        content=<ThreeColumn 
              contentLeft=<ContentContainer 
                            banner= <Banner 
                                     title="Managed WordPress Sites"
                                     description=""
                                     link=""
                                     color="white"
                                     image={wpLogo2}
                                     height="300px"
                                    
                                   />
                            content=""
                            image=""
                            height="300px"
                           
                           />
              
              contentCenter=<ContentContainer 
                            banner= <Banner 
                                     title=" Custom JS / HTML / CSS3 Websites"
                                     description=""
                                     color="white"
                                     link="#"
                                     image={htmlLogo}
                                     height="300px"
                                   />
                            content=""                                                                     image=""
                            height="300px"
                           
                           />
              contentRight=<ContentContainer 
                            banner= <Banner 
                                     title=" Dynamic Interactive Websites Made with React JS"
                                     description=""
                                     color="white"
                                     link="#"
                                     image={reactLogo2}
                                     height="300px"
                                   />
                            content=""
                            image=""
                            height="300px"
                           
                           />
              
            />
      />

      <OneColumn 
        content=<ContentContainer 
                  content="MAG WEB DESIGNS focuses on front end website development. We have over 22 years of experience writing HTML, CSS and JavaScript. Our designers employ the latest HTML5 CSS3 and Java Script frameworks.

We do every thing from complete custom intranets and websites. To hosting and managing Content Management Systems (CMS’s), such as WordPress or Joomla.1 --------------- Planning | We do concept analysis and research based on the details we receive from the client and prepare game design documents, flow design, and the execution plan.
2 --------------- Asset Production | Create concept art and sketches based on the theme and vision of the Website / App or Game. 3 --------------- Development and Testing | We have hands-on experience developing websites, apps and games using top game engines and technologies. We are also experienced testers who subject all projects to rigorous QA and device compatibility testing. So, the project will run at optimized performance on your users’ devices. 4 --------------- Support and Maintenance | MAG WEB DESIGNS provides technical support and maintenance of projects post publishing. Under our support & maintenance services, we keep projects up-to-date on all devices and OS. The service includes standard support packages to custom service-level agreements on a project need basis as per industry standards.  "
                />        
      />

      
      <ThreeColumn
        contentLeft=""
        contentCenter=<MWDServices />
        contentRight=""
        

      />
      
      
      <Banner title="MI Python" description="MIPYTHON Python and Java Script Tutorials" titleColor="white" textColor="white" link="#" image={banner2} color="white" height={100} />

    
    <OneColumn
      content=<ContentContainer 
        content=<Banner title="MI Python" description="MIPYTHON Python and Java Script Tutorials" titleColor="white" textColor="white" link="#" image={banner2} color="white" height={100} /> 
      />
      content=<Iframe url="https://mipython.magwebdesigns.net/WP/" width="80%" height="600px"/>
    />

      


      
     
    </div>   
  )

  
}