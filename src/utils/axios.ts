import axios from 'axios';

export const checkServer = async() => {
  const res = await axios.get('http://localhost:3000/server-check');

  console.log('res', res);
};
