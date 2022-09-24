

const ContentContainer = ({banner,content,bgColor,bgImage,image,height,width}) => {
  const id = "ContentContainer"

  return(
   
    <div id={id} style={{backgroundImage:bgImage,height:height,overflow:"hidden",backgroundColor:'rgba(11,36,75, 0.8)',borderRadius:10,width:"100%",resizeMode:"contain",justifyContent:"center",alignItems:"center"}}>
      {banner}
      <div style={{padding:"10px",borderRadius:10,border:"10",borderWidth: 1,borderColor: 'black',border:""}}>
        {content}
        <img src={image} alt="" /> 
         
      </div>
      
      
    </div>
    
  )
  
}

export default ContentContainer