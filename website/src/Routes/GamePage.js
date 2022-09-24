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
import phaser from "../images/Phaser.png"
import godot from "../images/Godot.png"
import banner1 from "../images/techBanner1.jpg"
import banner2 from "../images/techBanner2.jpg"
import banner3 from "../images/techBanner3.jpg"

export default function GamePage() {
  const id="GamePage"
  return(
    <div>
      <Banner title="GAME DEVELOPMENT" description="" titleColor="white" textColor="white" link="#" image={banner2} color="white"/>

      <OneColumn 
        content=<ContentContainer 
                  content="MAG WEB DESIGNS also focuses on Game / App development. Our services cover concept enhancement, concept art, character design, animation, game mechanics, programming, and testing. this makes us your one-stop shop for all your game development needs. "
                />
      />
      
      <OneColumn 
        content=<TwoColumn 
                      contentLeft=<ContentContainer 
                      banner= <Banner 
                               title="GODOT APPS / GAMES"
                               description="Games and Apps Made in Godot"
                               link="#"
                               color="white"
                               image={godot}
                               height="300px"
                             />
                      content=" Godot provides a huge set of common tools, so you can just focus on making your game without reinventing the wheel. Godot is completely free and open-source under the very permissive MIT license. No strings attached, no royalties, nothing. Your game is yours, down to the last line of engine code. "
                      height="600px"
                     
                    />
        
        contentRight=<ContentContainer 
                      banner= <Banner 
                               title="PHASER JS GAMES / APPS"
                               description="Apps and Games Made with Phaser JS"
                               link="#"
                               color="white"
                               image={phaser}
                               height="300px"
                             />
                      content="Phaser is a 2D game framework used for making HTML5 games for desktop and mobile. It is free software developed by Photon Storm. Phaser uses both a Canvas and WebGL renderer internally and can automatically swap between them based on browser support. This allows for fast rendering across desktop and mobile"
                       height="600px"
                     
                     />
        
                />
      />
    </div>   
  )
  
}