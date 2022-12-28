import axios from 'axios';
import { useQuery } from 'react-query';

export interface User {
  id: number;
  email: string;
  first_name: string;
  last_name: string;
  avatar: string;
}

export interface Support {
  url: string;
  text: string;
}

export interface UserListResponse {
  page: number;
  per_page: number;
  total: number;
  total_pages: number;
  data: User[];
}

export interface UserResponse {
  data: User[];
}

export const getUsers = async () => {
  const response = await axios.get<UserListResponse>(
    'https://reqres.in/api/users',
  );
  return response.data;
};

export const getUser = async (id: number) => {
  const response = await axios.get<UserResponse>(
    `https://reqres.in/apdi/users/${id}`,
  );
  return response.data;
};

export const useUsers = () => useQuery<UserListResponse>('users', getUsers);
export const useUser = (id: number) =>
  useQuery<UserResponse>('user', () => getUser(id));
