import axios from 'axios';
import { BACK_END_API_URL } from '../config';

interface RegisterPayload {
  username: string;
  email: string;
  password: string;
}

interface LoginPayload {
  email: string;
  password: string;
}

export const registerUser = async (payload: RegisterPayload) => {
  try {
    const response = await axios.post(`${BACK_END_API_URL}register`, payload);
    return response.data; 
  } catch (error: any) {
    throw new Error(error.response?.data?.message || 'Registration failed');
  }
};

export const loginUser = async (payload: LoginPayload) => {
  try {
    const response = await axios.post(`${BACK_END_API_URL}login`, payload);
    return response.data; 
  } catch (error: any) {
    throw new Error(error.response?.data?.message || 'Login failed');
  }
};
