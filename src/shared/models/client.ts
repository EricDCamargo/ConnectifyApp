export interface Client {
  id: number;
  name: string;
  email: string;
  phone: string;
  addres: string;
  city: string;
  cep: string;
  province: string;
  [key: string]: any;
}

export interface NewClient {
  name: string;
  email: string;
  phone: string;
  addres: string;
  city: string;
  cep: string;
  province: string;
  [key: string]: any;
}
