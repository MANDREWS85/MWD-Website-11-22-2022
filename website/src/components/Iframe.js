const Iframe = ({url,width,height}) => {
  const id= "Iframe"
  return(
    <div style={{display:"flex",justifyContent:"center",alignItems:"center"}}>
      <iframe src={url} style={{width:width,height:height,}}></iframe>
      
    </div>
    
       
    
  )
}

export default Iframe