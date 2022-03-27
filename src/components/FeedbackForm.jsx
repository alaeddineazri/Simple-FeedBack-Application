import React, { useContext, useEffect, useState } from "react";
import Button from "./Button";
import { FiSend } from "react-icons/fi";
import Card from "./Card";
import Rating from "./Rating";
import FeedbackContext from "../context/FeedbackContext";

const FeedbackForm = () => {
  const [text, setText] = useState("");
  const [message, setMessage] = useState(null);
  const [disabled, setDisabled] = useState(true);
  const [rating, setRating] = useState(10);

  const { handelAdd, feedbackEdit ,handleUpdate } = useContext(FeedbackContext);
  useEffect(() => {
    if (feedbackEdit.edit) {
      setDisabled(false);
      setText(feedbackEdit.item.text);
      setRating(feedbackEdit.item.rating);
    }
  }, [feedbackEdit]);

  const handelChange = (e) => {
    if (text === "") {
      setMessage("");
      setDisabled(true);
    } else if (text.trim().length < 10) {
      setMessage("YOUR FEEDBACK MUST BE AT LEAST 10 CHARACTERS");
      setDisabled(true);
    } else {
      setMessage("");
      setDisabled(false);
    }
    setText(e.target.value);
  };

  const handelSubmit = (e) => {
    e.preventDefault();

    const newFeedBack = {
      text,
      rating,
    }
    if (feedbackEdit.edit) {
      handleUpdate(feedbackEdit.item.id,newFeedBack);
    } else {    
    handelAdd(newFeedBack);
    }
    setText("");
  };
  return (
    <Card>
      <form onSubmit={handelSubmit}>
        <h1>How would you rate our service ?</h1>
        <Rating select={(ratingNumber) => setRating(ratingNumber)} />
        <div className="input-group">
          <input
            type="text"
            placeholder="Write a review"
            onChange={handelChange}
            value={text}
          />
          <Button isDisabled={disabled} type="submit">
            <FiSend color="white" size={20} />
          </Button>
        </div>
        {message && <div>{message}</div>}
      </form>
    </Card>
  );
};

export default FeedbackForm;

// import { AiOutlineClear } from 'react-icons/ai';

// const condition = () => {
//   if (text.length < 10) {
//     return true;
//   }
// };

{
  /* <button type="reset" ><AiOutlineClear color="red" size={20} /></button>      Custom Button Component 
          <button type="submit" ><FiSend  color="green" size={20}/></button> */
}

{
  /* isDisabled={(text.length)<10 && true}
          isDisabled={(text.length)<10 && true}
          isDisabled={condition () } */
}
