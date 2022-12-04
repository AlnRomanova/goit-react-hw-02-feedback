import css from './FeedbackOptions.module.css';

const FeedbackOptions = ({options, onLeaveFeedback }) => {

  const keys = Object.keys(options);

  return (
    <ul className={css.option}>
      {keys.map(key => (
        <li key={key}>
          <button
            className={css.btn}
            key={key}
            type="button"
            id = {key}
            onClick={onLeaveFeedback}
          > {key}</button>
        </li>
      ))}
    </ul>
  );
};

export default FeedbackOptions;
