import { Fragment, useEffect } from 'react';
import { useParams, Route, Link, useRouteMatch } from 'react-router-dom';

import HighlightedCookie from '../components/Cookies/HighlightedCookie';
import Comments from '../components/comments/Comments';
import useHttp from '../hooks/use-http';
import { getSingleCookie } from '../lib/api';
import LoadingSpinner from '../components/UI/LoadingSpinner';

const CookieDetail = () => {
  const match = useRouteMatch();
  const params = useParams();

  const { CookieId } = params;

  const { sendRequest, status, data: loadedCookie, error } = useHttp(
    getSingleCookie,
    true
  );

  useEffect(() => {
    sendRequest(CookieId);
  }, [sendRequest, CookieId]);

  if (status === 'pending') {
    return (
      <div className='centered'>
        <LoadingSpinner />
      </div>
    );
  }

  if (error) {
    return <p className='centered'>{error}</p>;
  }

  if (!loadedCookie.text) {
    return <p>No Cookie found!</p>;
  }

  return (
    <Fragment>
      <HighlightedCookie text={loadedCookie.text} author={loadedCookie.author} />
      <Route path={match.path} exact>
        <div className='centered'>
          <Link className='btn--flat' to={`${match.url}/comments`}>
            Load Comments
          </Link>
        </div>
      </Route>
      <Route path={`${match.path}/comments`}>
        <Comments />
      </Route>
    </Fragment>
  );
};

export default CookieDetail;
