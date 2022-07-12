import emailVerification from './apilayer.service.js';

const api = () => ({
  Email: () => ({ ...emailVerification }),
});

export default api;