 /* eslint-disable */ 
import axios from 'axios';


export const API_ENDPOINT_LAMBDA = 'https://fakestoreapi.com/';
export const AssessmentApi = axios.create({
  baseURL: API_ENDPOINT_LAMBDA,
  headers: {
    'Content-type': 'application/json',
  },
});
export const AppTitle = 'New_Assessment';
