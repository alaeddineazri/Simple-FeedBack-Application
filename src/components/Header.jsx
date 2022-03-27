import React from 'react'
import { NavLink } from 'react-router-dom'

const Header = ({text ,bgColor ,textColor}) => {

  const headerStyles = {
    backgroundColor: bgColor,
    color: textColor,
  }

  return (
    <header style={headerStyles}>
      <div className="container">
        <h2>{text}</h2>
        <div className="navLink">

        <NavLink to='/' activeclassname="active">
          Home
        </NavLink>
        <NavLink to='/about' activeclassname="active">
          About
        </NavLink>
        <NavLink to='/post/:id/:name' activeclassname="active">
          Post
        </NavLink>
        <NavLink to='/nested' activeclassname="active">
        NestedComp
        </NavLink>

        </div>
      </div>
    </header>
  )
}

Header.defaultProps = {  
    text:"Title",
    bgColor:"rgba(0,0,0,0.3)",
    textColor:"white"

}



export default Header