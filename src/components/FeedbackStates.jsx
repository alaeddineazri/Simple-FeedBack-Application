import React, { useContext } from 'react'
import FeedbackContext from '../context/FeedbackContext'



const FeedbackStates = ({}) => {
 const {feedback} = useContext(FeedbackContext)


    let average = feedback.reduce((acc,cur)=>{
        return acc + cur.rating
    },0) / feedback.length


    average=average.toFixed(1).replace(/[.,]0$/,"")   /* regular expression to replace (*.0) */

  return (
    <div className='feedback-stats'>
        <h1>{feedback.length} {(feedback.length>1)?"Reviews":"Review"}</h1>
        <h1>Average Rating {isNaN(average)? 0:average}</h1>

    </div>
  )
}

export default FeedbackStates