import { Link } from 'react-router-dom';

import classes from './NoCookiesFound.module.css';

const NoCookiesFound = () => {
  return (
    <div className={classes.noCookies}>
      <p>No Cookies found!</p>
      <Link className='btn' to='/new-Cookie'>
        Add a Cookie
      </Link>
    </div>
  );
};

export default NoCookiesFound;
