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

export default function ThreeColumnPage() {
  const id="ThreeColumnPage"
  return(
    <div>
      <ThreeColumn 
        contentLeft=<ContentContainer 
                      banner= <Banner 
                               title=" THREE COLUMN COLUMn LEFT"
                               description="DESCRIPTION"
                               link="#"
                               color="grey"
                             />
                      content="LEFT CONTENT"
                     
                     />
        
        contentCenter=<ContentContainer 
                      banner= <Banner 
                               title=" THREE COLUMN COLUMn CENTER"
                               description="DESCRIPTION"
                               color="grey"
                               link="#"
                             />
                      content="CENTER CONTENT"
                     
                     />
        contentRight=<ContentContainer 
                      banner= <Banner 
                               title=" THREE COLUMN COLUMn RIGHT"
                               description="DESCRIPTION"
                               color="grey"
                               link="#"
                             />
                      content="RIGHT CONTENT"
                     
                     />
        
      />
    </div>   
  )

  
}