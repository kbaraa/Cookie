import classes from './HighlightedCookie.module.css';

const HighlightedCookie = (props) => {
  return (
    <figure className={classes.Cookie}>
      <p>{props.text}</p>
      <figcaption>{props.author}</figcaption>
    </figure>
  );
};

export default HighlightedCookie;
