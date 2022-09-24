import Button from './Button'


const NavBar = () => {
  const id="NavBar"
  return(
    
    <div style={{position:"sticky", top:"0"}}>
      <div style={{display:'inline-block'}}>
        <Button text="BUTTON 1"/>
      </div>
      <div style={{display:'inline-block'}}>
        <Button text="BUTTON 2"/>
      </div>
      <div style={{display:'inline-block'}}>
        <Button text="BUTTON 3"/>
      </div>
      <div style={{display:'inline-block'}}>
        <Button text="BUTTON 4"/>
      </div>
      <div style={{display:'inline-block'}}>
        <Button text="BUTTON 5"/>
      </div>
    </div>
  )
}

export default NavBar