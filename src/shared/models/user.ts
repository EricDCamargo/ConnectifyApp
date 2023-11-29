import { Client } from './client';

export interface User {
  id?: number;
  name: string;
  email: string;
  password: string;
  clients?: Client[];
}
