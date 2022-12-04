import React from 'react';
import css from './FeedbackOptions.module.css';


const FeedbackOptions = ({onLeaveFeedback}) => {
  return (
    <div className={css.option}>
      <button className={css.btn} type="button" onClick={onLeaveFeedback}>Good</button>
      <button className={css.btn} type="button" onClick={onLeaveFeedback}>Neutral</button>
      <button className={css.btn} type="button" onClick={onLeaveFeedback}>Bad</button>
    </div>
  )
}

export default FeedbackOptions;
