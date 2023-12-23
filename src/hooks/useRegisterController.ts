import { RegisterModel } from '@/mvc/models';
import { useState } from 'react';

const useRegisterController = () => {
 const [register, setRegister] = useState<RegisterModel>({
  photo: undefined,
  password: undefined,
  cedula: undefined,
  email: undefined,
  names: undefined,
  user: undefined,
 });
 return { register };
};
export { useRegisterController };