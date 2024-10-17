import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from '../../api/axiosSettings';
import CryptoJS from 'crypto-js';

// const BASE_URL_LOCAL = process.env.REACT_APP_BASE_URL_LOCAL;
// const BASE_URL = process.env.REACT_APP_BASE_URL;
const BASE_URL1 = process.env.REACT_APP_BASE_URL1;
const BASE_URL2 = process.env.REACT_APP_BASE_URL2;
const HEADER_KEY = process.env.REACT_APP_HEADER_KEY;
const HEADER_ENCRYPTION = process.env.REACT_APP_HEADER_ENCRYPTION;


// export const createContact = createAsyncThunk(
//   'api/contacts/external',
//   async (data, thunkApi) => {
//     try {
//       const hashedHeaderKey = CryptoJS.AES.encrypt(HEADER_KEY, HEADER_ENCRYPTION).toString();
//       const response = await axios.post(`${BASE_URL}api/contacts/external`, data, {
//         headers: {
//           'Header-Key': hashedHeaderKey
//         }
//       });
//       return response.data;

//     } catch (error) {
//       return thunkApi.rejectWithValue(error.message);
//     }
//   }
// );

export const createContactToCRM1 = createAsyncThunk(
  'api/contacts/external',
  async (data, thunkApi) => {
    try {
      const hashedHeaderKey = CryptoJS.AES.encrypt(HEADER_KEY, HEADER_ENCRYPTION).toString();
      const response = await axios.post(`${BASE_URL1}api/contacts/external`, data, {
        headers: {
          'Header-Key': hashedHeaderKey
        }
      });
      return response.data;

    } catch (error) {
      return thunkApi.rejectWithValue(error.message);
    }
  }
);

export const createContactToCRM2 = createAsyncThunk(
  'leads/external',
  async (data, thunkApi) => {
    try {
      const hashedHeaderKey = CryptoJS.AES.encrypt(HEADER_KEY, HEADER_ENCRYPTION).toString();
      const response = await axios.post(`${BASE_URL2}leads/external`, data, {
        headers: {
          'Header-Key': hashedHeaderKey
        }
      });
      return response.data;

    } catch (error) {
      return thunkApi.rejectWithValue(error.message);
    }
  }
);