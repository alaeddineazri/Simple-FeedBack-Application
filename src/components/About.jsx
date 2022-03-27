import React from 'react'
import { Link } from 'react-router-dom'
import Card from './Card'

const About = () => {
  return (
    <div>
        <Card>
        <h1>About :</h1>
        <p>This is a React app to leave feedback for  service</p>
        <p>
          <Link to='/'>Back To Home</Link>
        </p>
        </Card>

    </div>
  )
}

export default About