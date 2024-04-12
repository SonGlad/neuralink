import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from '../../api/axiosSettings';
import CryptoJS from 'crypto-js';

// const BASE_URL_LOCAL = process.env.REACT_APP_BASE_URL_LOCAL;
const BASE_URL = process.env.REACT_APP_BASE_URL;
const HEADER_KEY = process.env.REACT_APP_HEADER_KEY;
const HEADER_ENCRYPTION = process.env.REACT_APP_HEADER_ENCRYPTION;


export const createContact = createAsyncThunk(
  'api/contacts/external',
  async (data, thunkApi) => {
    try {
      const hashedHeaderKey = CryptoJS.AES.encrypt(HEADER_KEY, HEADER_ENCRYPTION).toString();
      const response = await axios.post(`${BASE_URL}api/contacts/external`, data, {
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