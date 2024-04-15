import { createContext, useEffect, useState } from "react";

export type User = {
  username: string | null;
  email: string | null;
} | null;

export const AuthenticationContext = createContext<User>(null);

export const AuthenticationProvider: React.FC<{
  children: React.ReactNode;
}> = ({ children }) => {
  const [user, setUser] = useState<User>(null);

  useEffect(() => {
    //TEMP simulate signing in
    setUser({ username: "Alex", email: "alex@email.com" });
  }, []);

  return (
    <AuthenticationContext.Provider value={user}>
      {children}
    </AuthenticationContext.Provider>
  );
};
