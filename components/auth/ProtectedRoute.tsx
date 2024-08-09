// components/ProtectedRoute.tsx
import React from 'react';
import { useUserContext } from '@/context/userContext';
import { useRouter } from 'next/router';

const ProtectedRoute: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const { password } = useUserContext();
  const router = useRouter();

  if (!password || password == '') {
    router.push('/');
    return null;
  }

  return <>{children}</>;
};

export default ProtectedRoute;
