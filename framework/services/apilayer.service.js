
import fetch from 'node-fetch'
import urls from '../config/urls.js';

const emailVerification = {
  get: async (token, email) => {
    const response = await fetch(`${urls.apilayer}email_verification/check?email=${email}`, { method: 'GET',
       headers: {
      'apikey': token
    }
  });
      return response;
    },
};

export default emailVerification;
