// import { Address } from '../types/user';

export interface LoginDTO {
  username: string;
  password: string;
}

export interface RegisterDTO {
  username: string;
  password: string;
  email: string;
}

export interface TokenDTO {
  id: string;
  username: string;
}

