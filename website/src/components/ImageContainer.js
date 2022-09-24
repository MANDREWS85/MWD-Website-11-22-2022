import logo from './logo.svg';


const ImageContainer = ({image,bgImage}) => {
  const id = "ImageContainer"
  return(
    <div style={{backgroundImage:bgImage,height:"",border:"solid",overflow:"hidden"}}> 
      <img style={{objectFit:"cover"}} src={image} alt="image"/>

    
    </div>
      

  
  )
}
export default ImageContainer