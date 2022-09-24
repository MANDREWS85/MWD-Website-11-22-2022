const Banner = ({title,description,textColor,titleColor,link,image,color,height,width,maxheight,maxwidth}) => {
  const id = "Banner"

  return(
  <div id={id} onClick={()=> {window.open(link);}} style={{backgroundImage:"url(" + image +")",backgroundColor:color,backgroundPosition:"center",backgroundSize:"100% 100%",border:'solid',borderRadius:10,borderWidth: 1,borderColor: '',height:height,maxHeight:maxheight,color:textColor,width:"100%",maxWidth:maxwidth,resizeMode:"cover",justifyContent:"center",alignItems:"center"}}>
    <a href={link}> <h2 style={{color:titleColor,paddingLeft:"5px"}}>{title}</h2> </a>
    <a href={link}><p style={{color:textColor}}>{description}</p></a>
  </div>
    
  )
  
}

export default Banner