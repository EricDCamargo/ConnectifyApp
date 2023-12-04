export interface Client {
  id: number;
  name: string;
  email: string;
  password: string;
  phone: string;
  city: string;
  cep: string;
  province: string;
  [key: string]: any;
}

export interface NewClient {
  name: string;
  email: string;
  password: string;
  phone: string;
  city: string;
  cep: string;
  province: string;
  [key: string]: any;
}
