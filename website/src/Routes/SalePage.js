///  COMPONENTS   ////////////////////////////////////////
import Banner from '../components/Banner'
import NavBar from '../components/NavBar'
import ContentContainer from '../components/ContentContainer'
import ImageContainer from '../components/ImageContainer'
import Iframe from '../components/Iframe'
import OneColumn from '../components/OneColumn'
import TwoColumn from '../components/TwoColumn'
import ThreeColumn from '../components/ThreeColumn'
/// IMAGES   /////////////////////////////////////////////
import reactLogo from "../images/React_logo_wordmark.png"
import wpLogo from "../images/WordPress-Logo.png"
import wpLogo2 from "../images/WordPress-Logo-2.png"
import wpLogo3 from "../images/WordPress-Logo-3.png"
import htmlLogo from "../images/html5-css-js-logo.jpeg"
import banner1 from "../images/techBanner1.jpg"
import banner2 from "../images/techBanner2.jpg"
import banner3 from "../images/techBanner3.jpg"
import banner5 from "../images/techBanner5.jpg"
///      CONTENT  //////////////////////////////////////
import PhaserContent from '../content/PhaserContent.js'
import PhaserTutorialOne from '../content/PhaserTutorialOne.js'
import HtmlContent from '../content/HtmlContent.js'
import ReactContent from '../content/ReactContent.js'
import WordpressContent from '../content/WordpressContent.js'

export default function SalePage() {
  const id="SalePage"
  return(
    <div>
      <TwoColumn 
        contentLeft=<ContentContainer 
                      banner= <Banner 
                               title="WORDPRESS WEBSITE SALE"
                               description=""
                               link="#"
                               titleColor="white"
                               color="grey"
                               image={banner5}
                             />
                      content=<Banner 
                               title="SALE"
                               description=""
                               link="#"
                               color="white"
                               image={wpLogo3}
                               height="200px"
                               maxheight="200px"
                             />
                      maxheight="330px"
                     
                    />
        
        contentRight=<ContentContainer 
                      banner=<Banner 
                               title="Custom CSS HTML WEBSITES"
                               description=""
                               link="#"
                               titleColor="white"
                               color="grey"
                               image={banner5}
                               
                             />
                       
                      content= <Banner 
                               title="SALE"
                               description=""
                               link="#"
                               color="grey"
                               image={htmlLogo}
                               height="200px"
                               maxheight="200px"
                             />
                       
                       maxheight="330px"
                     
                     />
        
      />
    </div>   
  )

  
}