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

export default function WordpressPage() {
  const id="WordPressPage"
  return(
    <div>
      <OneColumn 
        content= <ContentContainer 
                      banner= <Banner 
                        title="WORDPRESS PORTFOLIO"
                        description="WORDPRESS SITES"
                        link="#"
                        color="grey"
                        image={banner1}
                        titleColor="white" 
                        textColor="white"
                            
                       />
                      content="WORD PRESS PORTFOLIO"

                 />


                
      />
      <OneColumn 
        content= <ContentContainer 
                      banner= <Banner 
                        title="MI Python"
                        description="Python and JavaScript Tutorial site"
                        link="http://www.mipython.com"
                        color="grey"
                        image={banner1}
                        titleColor="white" 
                        textColor="white"
                            
                       />
                      content=<Iframe url="https://mipython.magwebdesigns.net/WP/" width="80%" height="600px"/>

                 />             
      />
      
     <OneColumn 
      content= <ContentContainer 
                    banner= <Banner 
                      title="EmpireFable Atlas"
                      description="Gwaldors Interactive Atlas of Empire Fable"
                      link="https://empirefable.magwebdesigns.net/wp/empire-fable-atlas/"
                      color="grey"
                      image={banner1}
                      titleColor="white" 
                      textColor="white"
                          
                     />
                    content=<Iframe url="https://empirefable.magwebdesigns.net/wp/empire-fable-atlas/" width="80%" height="600px"/>

               />             
    />     
    </div>   
  )

  
}