import { useEffect } from 'react';
import { useHistory } from 'react-router-dom';

import CookieForm from '../components/Cookies/CookieForm';
import useHttp from '../hooks/use-http';
import { addCookie } from '../lib/api';

const NewCookie = () => {
  const { sendRequest, status } = useHttp(addCookie);
  const history = useHistory();

  useEffect(() => {
    if (status === 'completed') {
      history.push('/Cookies');
    }
  }, [status, history]);

  const addCookieHandler = (CookieData) => {
    sendRequest(CookieData);
  };

  return <CookieForm isLoading={status === 'pending'} onAddCookie={addCookieHandler} />;
};

export default NewCookie;
