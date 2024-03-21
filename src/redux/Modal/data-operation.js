import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from '../../api/axiosSettings';


export const createContact = createAsyncThunk(
    'api/contacts/external',
    async (data, thunkApi) => {
      try {
        const response = await axios.post('api/contacts/external', data);
        console.log(data);
        return response.data;

      } catch (error) {
        return thunkApi.rejectWithValue(error.message);
      }
    }
);