import { useEffect } from 'react';

import CookieList from '../components/Cookies/CookieList';
import LoadingSpinner from '../components/UI/LoadingSpinner';
import NoCookiesFound from '../components/Cookies/NoCookiesFound';
import useHttp from '../hooks/use-http';
import { getAllCookies } from '../lib/api';

const AllCookies = () => {
  const { sendRequest, status, data: loadedCookies, error } = useHttp(
    getAllCookies,
    true
  );

  useEffect(() => {
    sendRequest();
  }, [sendRequest]);

  if (status === 'pending') {
    return (
      <div className='centered'>
        <LoadingSpinner />
      </div>
    );
  }

  if (error) {
    return <p className='centered focused'>{error}</p>;
  }

  if (status === 'completed' && (!loadedCookies || loadedCookies.length === 0)) {
    return <NoCookiesFound />;
  }

  return <CookieList Cookies={loadedCookies} />;
  <p>Add all your failures and accomplishments to keep track!</p>
};

export default AllCookies;
