import { Link } from 'react-router-dom';

import classes from './CookieItem.module.css';

const CookieItem = (props) => {
  return (
    <li className={classes.item}>
      <figure>
        <blockCookie>
          <p>{props.text}</p>
        </blockCookie>
        <figcaption>{props.author}</figcaption>
      </figure>
      <Link className='btn' to={`/Cookies/${props.id}`}>
        View Fullscreen
      </Link>
    </li>
  );
};

export default CookieItem;
