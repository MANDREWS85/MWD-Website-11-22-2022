const TwoColumn = ({contentLeft,contentRight}) => {
  const id = "TwoColumn"

  return(
  <div id={id} style={{display: 'flex',  justifyContent:'center', alignItems:'center'}}>
    <div style={{width:"49%",display:"inline-block",padding:'5px'}}>{contentLeft}</div>
    <div style={{width:"49%",display:"inline-block",padding:'5px'}}>{contentRight}</div>
    
  </div>
    
  )
  
}

export default TwoColumn