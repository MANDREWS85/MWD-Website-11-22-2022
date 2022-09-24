const ThreeColumn = ({contentLeft,contentCenter,contentRight}) => {
  const id = "ThreeColumn"

  return(
  <div id={id} style={{display: 'flex',  justifyContent:'center', alignItems:'center',}}>
    <div style={{width:"33%",display:"inline-block",padding:'5px'}}>{contentLeft}</div>
    <div style={{width:"33%",display:"inline-block",padding:'5px'}}>{contentCenter}</div>
    <div style={{width:"33%",display:"inline-block",padding:'5px'}}>{contentRight}</div>
    
  </div>
    
  )
  
}

export default ThreeColumn