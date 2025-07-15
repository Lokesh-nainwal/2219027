import axios from 'axios';

export const createShortURL = async ({ url, validity, shortcode }) => {
  const payload = {
    longUrl: url,
    validity: validity ? Number(validity) : undefined,
    customCode: shortcode || undefined,
  };

  const res = await axios.post('http://localhost:3000/api/shorten', payload); // Change if needed
  return res.data;
};
