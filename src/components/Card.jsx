

const Card = ({children , darkMode}) => {
  return (

    //conditional class 

    //<div className={`card ${darkMode && "darkMode"}`}>{children}</div>


    //conditional style
    
    <div className="card"  style={{background: darkMode ? "black":"#fff" , color: darkMode ? "white":"black"}}>{children}</div>

  )
}

Card.defaultProps ={
    darkMode:false
}



export default Card