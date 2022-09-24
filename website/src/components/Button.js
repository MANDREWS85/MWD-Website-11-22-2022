const Button = ({text}) => {
  const id="Button" + text;

  return(
    <div>
      <button onClick={()=>{}}>
        {text}
      </button>
    
    </div>
  )

  
}

export default Button