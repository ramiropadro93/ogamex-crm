// components/ProtectedRoute.tsx
import React, { useEffect, useState } from 'react';
import { useUserContext } from '@/context/userContext';
import { useRouter } from 'next/router';

const ProtectedRoute: React.FC<{ children: React.ReactNode }> = ({ children }) => {
	const { password } = useUserContext();
	const router = useRouter();
	const [loading, setLoading] = useState(true);
  
	useEffect(() => {
	  if (!password || password === '') {
		router.push('/'); // Redirige al login si no hay contraseña
	  } else {
		setLoading(false); // Permite que el contenido se muestre si la contraseña es correcta
	  }
	}, [password, router]);
  
	if (loading) return <div>Loading...</div>; // Opcional: Puedes mostrar un estado de carga mientras se verifica la autenticación
  
	return <>{children}</>;
  };
  
  export default ProtectedRoute;