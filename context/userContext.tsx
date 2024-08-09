import { useMemo, createContext, useContext, ReactNode, useState } from 'react';

type UserContextType = {
  password: string;
  setPassword: (password: string) => void;
};

export const UserContext = createContext<UserContextType | null>(null);

interface UserContextProviderProps {
  children: ReactNode;
}

export const UserContextProvider = ({ children }: UserContextProviderProps) => {
  const [password, setPassword] = useState<string>('');

  const contextValue = useMemo(() => ({
    password,
    setPassword,
  }), [password]);

  return (
    <UserContext.Provider value={contextValue}>
      {children}
    </UserContext.Provider>
  );
};

export const useUserContext = (): UserContextType => {
  const context = useContext(UserContext);
  if (context === null) {
    throw new Error('useUserContext must be used within a UserContextProvider');
  }
  return context;
};