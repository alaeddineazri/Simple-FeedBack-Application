import React, { useContext } from 'react'
import Card from './Card'
import { AiOutlineDelete , AiFillEdit} from 'react-icons/ai';
import FeedbackContext from '../context/FeedbackContext';

const FeedbackItems = ({item }) => {

  const { handleDelete ,handleEdit} = useContext(FeedbackContext);




  return (
     <Card /*darkMode*/ >
        <div className="num-display">{item.rating}</div>
        <button onClick={()=> handleDelete (item.id)} className='close'>
        <AiOutlineDelete  color ="red" size={30}/>
        </button>
        <button onClick={()=> handleEdit (item)} className='edit'>
        <AiFillEdit  color ="blue" size={30}/>
        </button>
        <div className="text-display">{item.text}</div>
    </Card>
  )
}

export default FeedbackItems