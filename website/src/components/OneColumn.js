const OneColumn = ({content}) => {
  const id = "OneColumn"

  return(
  <div id={id} style={{padding:'0px', justifyContent:'center', alignItems:'center',width:"100%"}}>
    <div style={{padding:'0px',width:"100%"}}>{content}</div>
    
  </div>
    
  )
  
}

export default OneColumn