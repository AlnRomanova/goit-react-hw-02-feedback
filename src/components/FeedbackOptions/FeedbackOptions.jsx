import React from 'react';
import css from './FeedbackOptions.module.css';

const FeedbackOptions = ({options, onLeaveFeedback }) => {
  return (
    <div className={css.option}>
      <button
        id="good"
        className={css.btn}
        type="button"
        onClick={onLeaveFeedback}
      >
       Good {options}
      </button>
      <button
        id="neutral"
        className={css.btn}
        type="button"
        onClick={onLeaveFeedback}
      >
        Neutral {options}
      </button>
      <button
        id="bad"
        className={css.btn}
        type="button"
        onClick={onLeaveFeedback}
      >
        Bad {options}
      </button>
    </div>
  );
};

export default FeedbackOptions;
