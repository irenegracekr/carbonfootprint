// pages/api/calculate.js
import axios from 'axios';

export default function handler(req, res) {
  const { distance, vehicle } = req.query;
  const options = {
    method: 'GET',
    url: 'https://carbonfootprint1.p.rapidapi.com/CarbonFootprintFromCarTravel',
    params: { distance, vehicle },
    headers: {
      'x-rapidapi-host': 'carbonfootprint1.p.rapidapi.com',
      'x-rapidapi-key': process.env.NEXT_PUBLIC_RAPIDAPI_KEY,
    },
  };
  axios.request(options)
    .then(function (response) {
      res.status(200).json(response.data);
    })
    .catch(function (error) {
      console.error(error);
      res.status(500).json({ error: 'Internal Server Error' });
    });
}
