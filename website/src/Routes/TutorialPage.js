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
/// IMAGES   /////////////////////////////////////////////
import reactLogo from "../images/React_logo_wordmark.png"
import wpLogo from "../images/WordPress-Logo.png"
import htmlLogo from "../images/html5-css-js-logo.jpeg"
import banner1 from "../images/techBanner1.jpg"
import banner2 from "../images/techBanner2.jpg"
import banner3 from "../images/techBanner3.jpg"
import banner4 from "../images/techBanner4.jpg"
import banner5 from "../images/techBanner5.jpg"

export default function TutorialPage() {
  const id="TutorialPage"
  return(
    <div>

      <Banner 
        title="TUTORIALS"
        description=""
        link="#"
        color="grey"
        image={banner1}
        titleColor="white" 
        textColor="white"
                            
      />
    
      <OneColumn 
        content=<TwoColumn 
        contentLeft=<ContentContainer 
                      banner=""
                      content={
                      <div>

                        <Banner 
                           title="Python Web Scraping"
                           description=""
                           link="#"
                           image={banner5}
                           titleColor="white"
                         />

                        <a href="https://alibaba-cloud.medium.com/data-collection-bot-with-python-and-selenium-ea8fd28d1cf3" target="_blank"> <h3> Data Collection Bot with Python and Selenium</h3> </a>

                        <a href="https://www.alibabacloud.com/blog/headless-web-scraping-in-python-with-beautiful-soup-4_593881" target="_blank"> <h3> Headless Web Scraping in Python with Beautiful Soup 4 </h3> </a>
                        
                        <Banner 
                           title="PYTHON TEXT ADVENTURE RPG TUTORIALS"
                           description=""
                           link="#"
                           image={banner5}
                          titleColor="white"
                         />
                        
                        <a href="https://mipython.magwebdesigns.net/WP/2020/09/02/mi-python-text-adventure-tutorial-1-the-game-grid-part-1/" target="_blank"> <h3>Python Text Adventure RPG Tutorial 1 |Create The Game, Objects, and Grid</h3> </a>

                        <a href="https://replit.com/@mandrews85/pythontextadventuretutorial1#main.py" target="_blank"> <p>Python Text Adventure RPG Tutorial 1 Code</p> </a>

                        <a href="https://mipython.magwebdesigns.net/WP/2020/09/04/mi-python-text-adventure-rpg-tutorial-2-add-character-and-item-objects/" target="_blank"> <h3>Python Text Adventure RPG Tutorial 2 |Add Character and Item Objects</h3> </a>
                        <a href="https://pythontextadventuretutorial2.mandrews85.repl.run/" target="_blank"> <p>Python Text Adventure RPG Tutorial 2 Code</p> </a>

                        <a href="https://mipython.magwebdesigns.net/WP/2020/09/09/mi-python-text-adventure-rpg-tutorial-3-battle-system-and-inventory-management/" target="_blank"> <h3>Python Text Adventure RPG Tutorial 3 |Battle System and Inventory Management</h3> </a>
                        <a href="https://pythontextadventuretutorial2.mandrews85.repl.run/" target="_blank"> <p>Python Text Adventure RPG Tutorial 3 Code</p> </a>
                        
                      <a href="https://mipython.magwebdesigns.net/WP/2020/09/16/mi-python-txt-rpg-adventure-tutorial-4-ascii-graphics-and-character-dialog/" target="_blank"> <h3>Python TXT RPG Adventure Tutorial 4 | More Inventory and the Store</h3> </a>

                      
                      
                      </div>
                      
                      }
                      
                      height="1200px"
                     
                    />
      
        contentRight=<ContentContainer 
                      banner=""
                      content= {
                        <div>
                          

                          <Banner 
                           title="PHASER GAME DEVELOPMENT TUTORIALS"
                           description=""
                           link="#"
                           image={banner5}
                           titleColor="white"
                         />
                          
                          <a href="https://mipython.magwebdesigns.net/WP/2021/10/27/mi-python-phaser-js-tutorial-1-instance-the-screen-canvas/" target="_blank"> <h3>Phaser JS Tutorial 1 | Instance The Screen Canvas</h3> </a>
                        <a href="https://replit.com/@MANDREWS85/phsertutorial1#index.html" target="_blank"> <p>Phaser JS Tutorial 1 Code</p> </a>
                          
                          <a href="https://mipython.magwebdesigns.net/WP/2021/11/01/mi-python-phaser-js-tutorial-two-extending-classes-and-sprite-movement/" target="_blank"> <h3>Phaser JS Tutorial Two | Extending Classes and Sprite Movement</h3> </a>
                        <a href="https://replit.com/@MANDREWS85/phasertutorial2movementfinal#script.js" target="_blank"> <p>Phaser JS Tutorial 2 Code</p> </a>

                        <Banner 
                           title="NODE JS TUTORIALS"
                           description=""
                           link="#"
                           image={banner5}
                           titleColor="white"
                         />

                          <a href="https://mipython.magwebdesigns.net/WP/2022/05/18/node-js-tutorial-http-server/" target="_blank"> <p>Node JS Tutorial | HTTP Server</p> </a>
                          <a href="https://mipython.magwebdesigns.net/WP/2022/05/20/node-js-and-express-tutorial-1/" target="_blank"> <p>NODE JS and EXPRESS Tutorial Serve a File</p> </a>
                        <a href="https://mipython.magwebdesigns.net/WP/2022/05/20/node-js-and-express-routing-tutorial/" target="_blank"> <p>Node JS and Express Routing Tutorial</p> </a>
                        
                        </div>



                        
                      }
                       height="1200px"
                     
                     />
        
      />
        
        />
                        
    </div>   
  )

  
}