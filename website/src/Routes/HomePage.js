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
import htmlLogo2 from "../images/html-black.png"
import reactLogo2 from "../images/React2.png"
import wpLogo2 from "../images/Wordpress2.png"
import jsLogo from "../images/js-logo.jpg"
import jsLogo2 from "../images/js-logo-2.png"
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

export default function HomePage() {
  const id="HomePage"
  return(
<div>
  <Banner 
                        title="WEB / APP Design Services"
                        description=""
                        link="#"
                        color="grey"
                        image={banner1}
                        titleColor="white" 
                        textColor="white"
                            
                       /> 
      <OneColumn 
        content= <ContentContainer 
                     content="MAG WEB DESIGNS focuses on front end website development. We have over 22 years of experience writing HTML, CSS and JavaScript. Our designers employ the latest HTML5 CSS3 and Java Script frameworks.

We do every thing from complete custom intranets and websites. To hosting and managing Content Management Systems (CMS’s), such as WordPress or Joomla.

Our designers are well versed in both open source graphics programs(GIMP, Krita, Blender, etc..) as well as paid suites like Adobe CS.

We can take your idea from design board to full production on the web. "

                 />
      />

      <OneColumn 
        content=<ThreeColumn 
        contentLeft=<ContentContainer 
                      banner= <Banner 
                               title=" WordPress Design and Managment"
                               description=""
                               link="#"
                               color="white"
                               image={wpLogo2}
                               height="200px"
                               maxheight="400px"
                               width="200px"
                               maxwidth="400px"
                             />
                      content={WordpressContent}
                      image=""
                      height="400px"
                     
                     />
        
        contentCenter=<ContentContainer 
                      banner= <Banner 
                               title=" Custom HTML / CSS3 Websites"
                               description=""
                               color="white"
                               link="#"
                               image={htmlLogo2}
                               height="200px"
                               maxheight="400px"
                               width="200px"
                               maxwidth="400px"
                             />
                      content={HtmlContent}
                      image=""
                      height="400px"
                     
                     />
        contentRight=<ContentContainer 
                      banner= <Banner 
                               title=" Dynamic Interactive Websites Made with React JS"
                               description=""
                               color="white"
                               link="#"
                               image={reactLogo2}
                               height="200px"
                               maxheight="400px"
                               width="200px"
                               maxwidth="400px"
                             />
                      content={ReactContent}
                      image=""
                      height="400px"
                     
                     />
        
      />
        
        
      />

<OneColumn 
        content= <ContentContainer 
                     content="Goals for development

The developer of the front end keeps these points in mind, utilizing available tools and techniques to reach this end.
                   
Accessibility

With continuing development for mobile devices, such as smart phones and tablets, designers need to ensure that their site comes up correctly in browsers on all devices. This can be done by creating a responsive web design using stylesheets in CSS. Performance goals are chiefly concerned with render time, manipulating the HTML, CSS, and JavaScript to ensure that the site opens up quickly.
Speedy development
This technology enables speedy development and saves time. "

                 />
      />
  
  <TwoColumn 
        contentLeft=<ContentContainer 
                      banner= <Banner 
                               title="HTML DESIGN"
                               image={banner5}
                               description=""
                               link="#"
                               titleColor="white"
                               height=""
                             />
                      image=""
                      content="the backbone of any website development process, without which a web page does not exist. Hypertext means that text has links, termed hyperlinks, embedded in it. When a user clicks on a word or a phrase that has a hyperlink, it will bring another web-page. A markup language indicates text can be turned into images, tables, links, and other representations. It is the HTML code that provides an overall framework of how the site will look. HTML was developed by Tim Berners-Lee. The latest version of HTML is called HTML5 and was published on October 28, 2014 by the W3C recommendation. This version contains new and efficient ways of handling elements such as video and audio files. "
                      height="400px"
                      maxheight="400px"
                     
                    />
        
        contentRight=<ContentContainer 
                      banner= <Banner 
                               image={banner5}
                               title="CSS DESIGN"
                               titleColor="white"
                               description=""
                               link="#"
                               color=""
                             />
                      content= "Cascading Style Sheets (CSS) controls the presentation aspect of the site and allows your site to have its own unique look. It does this by maintaining style sheets that sit on top of other style rules and are triggered based on other inputs, such as device screen size and resolution. The CSS can be added externally, internally, or embedded in the HTML tags."
                       maxheight="400px"
                       height="400px"
                     
                     />
        
      />

  

  <TwoColumn 
        contentLeft=<ContentContainer 
                      banner= <Banner
                               image={banner5}
                               title="JS DEVELOPMENT"
                               titleColor="white"
                               description=""
                               link="#"
                               color=""
                             />
                      content="
JavaScript is an event-based imperative programming language (as opposed to HTML's declarative language model) that is used to transform a static HTML page into a dynamic interface. JavaScript code can use the Document Object Model (DOM), provided by the HTML standard, to manipulate a web page in response to events, like user input.

Using a technique called AJAX, JavaScript code can also actively retrieve content from the web (independent of the original HTML page retrieval), and also react to server-side events as well, adding a truly dynamic nature to the web page experience. "
                      height="400px"
                      maxheight="400px"
                     
                    />
        
        contentRight=<ContentContainer 
                      banner= <Banner 
                               image={banner5}
                               title="WEB ASSEMBLY"
                               titleColor="white"
                               description=""
                               link="#"
                               color=""
                             />
                      content= "WebAssembly, supported by all the major browsers (i.e. from the major vendors Google, Apple, Mozilla and Microsoft), is the only alternative to JavaScript for running code in web browsers (without the help of plug-ins, such as Flash, Java or Silverlight; all being discontinued, as browsers are dropping plug-in support). Prior to its adoption, there was asm.js (a subset of JavaScript; and thus strictly works in all browsers), that's also used as a compiler target with efficient support in browsers such as Internet Explorer 11; and for such browsers that do not support WebAssembly directly, it can be compiled to asm.js and those browsers supported that way. Generally speaking programmers do not program in WebAssembly (or asm.js) directly, but use languages such as Rust, C or C++ or in theory any language, that compile to it. "
                       maxheight="400px"
                       height="400px"
                     
                     />
        
      />
      
    </div>   
  )

  
}