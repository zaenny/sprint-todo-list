import axios from 'axios';

const BASE_URL = process.env.NEXT_PUBLIC_API_URL;
const TENANT_ID = process.env.NEXT_PUBLIC_TENANT_ID;

export const apiClient = axios.create({
  baseURL: `${BASE_URL}/${TENANT_ID}`,
  headers: {
    'Content-Type': 'application/json',
  },
});
