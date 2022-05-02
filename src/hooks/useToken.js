import axios from 'axios';
import { useEffect, useState } from 'react';

const useToken = (user) => {
  const [token, setToken] = useState('');

  useEffect(() => {
    const email = user?.user?.email;
    if (email) {
      axios
        .post(`https://fathomless-coast-62063.herokuapp.com/token`, { email })
        .then(({ data }) => {
          localStorage.setItem('token', data.token);
          setToken(data.token);
        });
    }
  }, [user]);
  return { token };
};

export default useToken;
