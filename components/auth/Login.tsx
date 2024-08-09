// components/Login.tsx
import React, { useState } from 'react';
import { useUserContext } from '@/context/userContext';
import { useRouter } from 'next/router';

const Login: React.FC = () => {
  const [inputPassword, setInputPassword] = useState<string>('');
  const { setPassword } = useUserContext();
  const router = useRouter();

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    
    // Aquí puedes definir la contraseña correcta
    const correctPassword = 'asdasd'; 

    if (inputPassword === correctPassword) {
      setPassword(inputPassword);
      router.push('/');
    } else {
      alert('Contraseña incorrecta');
      router.push('https://www.google.com'); // Redirige a Google en caso de contraseña incorrecta
    }
  };

  return (
    <div className="flex justify-center items-center h-screen">
      <form onSubmit={handleSubmit} className="flex flex-col items-center">
        <label htmlFor="password" className="mb-2">Contraseña:</label>
        <input
          id="password"
          type="password"
          value={inputPassword}
          onChange={(e) => setInputPassword(e.target.value)}
          className="mb-4 p-2 border border-gray-300 rounded"
          required
        />
        <button type="submit" className="px-4 py-2 bg-blue-500 text-white rounded">
          Ingresar
        </button>
      </form>
    </div>
  );
};

export default Login;
