import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Link } from "react-router-dom";

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




const RoutingComponent = () => {
  const id="Routing"  
  return(
    <div id={id} class={id} style={{}} >
          <div style={{position:"sticky", top:"0"}}>
            <div style={{border:'solid',display:'inline-block'}}>
              <Link to="/"><button onClick={()=>{}}>HOME</button></Link>
            </div>
            
            <div style={{border:'solid',display:'inline-block'}}>
              <Link to="/about"><button onClick={()=>{}}>ABOUT</button></Link>
            </div>

            <div style={{border:'solid',display:'inline-block'}}>
              <Link to="/portfolio"><button onClick={()=>{}}>PORTFOLIO</button></Link>
            </div>
                        
            <div style={{border:'solid',display:'inline-block'}}>
              <Link to="/contact"><button onClick={()=>{}}>CONTACT</button></Link>
            </div>
                        
            <div style={{border:'solid',display:'inline-block'}}>
              <Link to="/links"><button onClick={()=>{}}>LINKS</button></Link>
            </div> 

            <div style={{border:'solid',display:'inline-block'}}>
              <Link to="/tutorials"><button onClick={()=>{}}>TUTORIALS</button></Link>
            </div> 

            <div style={{border:'solid',display:'inline-block'}}>
              <Link to="/videos"><button onClick={()=>{}}>VIDEOS</button></Link>
            </div> 

            <div style={{border:'solid',display:'inline-block'}}>
              <Link to="/games"><button onClick={()=>{}}>GAMES</button></Link>
            </div> 
          </div>
        <Routes>
          <Route path="/" element={<HomeRoute />} />
          <Route path="about" element={<AboutRoute />} />
          <Route path="portfolio" element={<PortfolioRoute />} />
          <Route path="contact" element={<ContactRoute />} />
          <Route path="links" element={<LinksRoute />} />
          <Route path="tutorials" element={<TutorialRoute />} />
          <Route path="videos" element={<VideoRoute />} />
          <Route path="games" element={<GameRoute />} />
          <Route path="wordpress" element={<WpRoute />} />
          <Route path="reactjs" element={<ReactjsRoute />} />
        </Routes>
      
      </div>
          
  )
}

export default RoutingComponent