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
import htmlLogo from "../images/html5-css-js-logo.jpeg"
import banner1 from "../images/techBanner1.jpg"
import banner2 from "../images/techBanner2.jpg"
import banner3 from "../images/techBanner3.jpg"
///      CONTENT  //////////////////////////////////////
import PhaserContent from '../content/PhaserContent.js'
import PhaserTutorialOne from '../content/PhaserTutorialOne.js'
import HtmlContent from '../content/HtmlContent.js'
import ReactContent from '../content/ReactContent.js'
import WordpressContent from '../content/WordpressContent.js'

export default function TwoColumnPage() {
  const id="TwoColumnPage"
  return(
    <div>
      <TwoColumn 
        contentLeft=<ContentContainer 
                      banner= <Banner 
                               title="Two Column Page Left Column"
                               description="Left Content"
                               link="#"
                               color="grey"
                             />
                      content="CONTENT LEFT"
                      height="600px"
                     
                    />
        
        contentRight=<ContentContainer 
                      banner= <Banner 
                               title="Two Column Page Right Column"
                               description="Right Content"
                               link="#"
                               color="grey"
                             />
                      content= "CONTENT RIGHT"
                       height="600px"
                     
                     />
        
      />
    </div>   
  )

  
}