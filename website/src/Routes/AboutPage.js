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


export default function AboutPage() {
  const id="AboutPage"
  return(
    <div style={{}}>
      <Banner title="ABOUT" description="" titleColor="white" textColor="white" link="#" image={banner2} color="white"/>
      
      <OneColumn 
        content= <ContentContainer 
                     content="MAG WEB DESIGNS INC. is a locally owned, operated and coordinated corporation. We specialize in Internet Marketing, along with Web Design services. We also offer vinyl vehicle advertising and application.

Located in Flint Michigan MAG WEB DESIGNS INC is also dedicated to local community development. We donate Web Design and hosting services to several non profit organizations. We have a commitment in helping Flint rise out of the economic slump.

With the need for higher skilled jobs in the area. We offer local tech support for clients in maintaining their E commerce presence on the web. Local businesses benefit from this business model, having increased sales. This is a result of greater efficiency online. Operating capital is freed up for everyone.

MAG WEB DESIGNS INC offers some of the most competitive prices in the area for both basic web sites up to entire Intranets. We specialize in mid priced content managed sites (CMS’s) with shopping cart plugins able to process credit cards. Search Meta Data is also a powerful business tool for increased sales. We offer Search Engine Optimization (SEO) services with White Hat SEO Meta Data management to keep that high rank on Google.

With complete E commerce services MAG WEB DESIGNS INC offers both a local and international opportunity to increase both sales and revenue. Social media is also a very effective outlet for advertising. The company also focuses on Facebook, Twitter, Instagram, etc.. With various marketing strategies (gift cards,etc..) social media is a powerful ad vehicle.

Our designers are fluent in front end development; HTML5, CSS3 and JavaScript. Along with back end server scripting with Python and Node.js. We are also highly familiar with the latest 2d and 3d image editing suites."

                 />
      />

    </div>   
  )

  
}