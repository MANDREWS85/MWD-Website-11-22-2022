
///  COMPONENTS   ////////////////////////////////////////
import Banner from '../components/Banner'
import NavBar from '../components/NavBar'
import ContentContainer from '../components/ContentContainer'
import ImageContainer from '../components/ImageContainer'
import Iframe from '../components/Iframe'
import OneColumn from '../components/OneColumn'
import TwoColumn from '../components/TwoColumn'
import ThreeColumn from '../components/ThreeColumn'

export default function ListComponent() {
  const id = "ListComponent"
  return(
    <div style={{align:"center",backgroundImage:"",height:"",overflow:"hidden",backgroundColor:'rgba(11,36,75,0.8)',borderRadius:10,width:"50%",resizeMode:"contain",paddingLeft:"100px",paddingRight:"100px"}}>
      <OneColumn 
        content =<ContentContainer content="CONTENT 1"/>
      />

      <OneColumn 
        content =<ContentContainer content="CONTENT 1"/>
      />
      
      <p>{id}</p>
      <li><ContentContainer content="CONTENT 1"/></li>
      <li><ContentContainer content="CONTENT 2"/></li>
      <li><ContentContainer content="CONTENT 3"/></li>
    </div>
  )

}