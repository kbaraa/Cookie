import { Fragment } from 'react';
import { useHistory, useLocation } from 'react-router-dom';

import CookieItem from './CookieItem';
import classes from './CookieList.module.css';

const sortCookies = (Cookies, ascending) => {
  return Cookies.sort((CookieA, CookieB) => {
    if (ascending) {
      return CookieA.id > CookieB.id ? 1 : -1;
    } else {
      return CookieA.id < CookieB.id ? 1 : -1;
    }
  });
};

const CookieList = (props) => {
  const history = useHistory();
  const location = useLocation();

  const queryParams = new URLSearchParams(location.search);

  const isSortingAscending = queryParams.get('sort') === 'asc';

  const sortedCookies = sortCookies(props.Cookies, isSortingAscending);

  const changeSortingHandler = () => {
    history.push({
      pathname: location.pathname,
      search: `?sort=${(isSortingAscending ? 'desc' : 'asc')}`
    });
  };

  return (
    <Fragment>
      <div className={classes.sorting}>
        <button onClick={changeSortingHandler}>
          Sort {isSortingAscending ? 'Descending' : 'Ascending'}
        </button>
      </div>
      <ul className={classes.list}>
        {sortedCookies.map((Cookie) => (
          <CookieItem
            key={Cookie.id}
            id={Cookie.id}
            author={Cookie.author}
            text={Cookie.text}
          />
        ))}
      </ul>
      <p className={classes.text}>Add all your failures and accomplishments!</p>
    </Fragment>
  );
};

export default CookieList;
