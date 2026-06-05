import {
  createContext,
  useEffect,
  useState,
} from "react";

import type { User } from "../types/user.ts";

import {
  getMe,
  logoutUser,
} from "../api/authApi.ts";

interface AuthContextType {
  user: User | null;

  loading: boolean;

  isAuthenticated: boolean;

  setUser: React.Dispatch<
    React.SetStateAction<User | null>
  >;

  logout: () => Promise<void>;
}

export const AuthContext =
  createContext<
    AuthContextType | undefined
  >(undefined);

export const AuthProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const [user, setUser] =
    useState<User | null>(
      null
    );

  const [loading, setLoading] =
    useState(true);

  const checkAuth =
    async () => {
      try {
        const data =
          await getMe();

        setUser(data.user);
      } catch {
        setUser(null);
      } finally {
        setLoading(false);
      }
    };

  useEffect(() => {
    checkAuth();
  }, []);

  const logout =
    async () => {
      await logoutUser();

      setUser(null);
    };

  return (
    <AuthContext.Provider
      value={{
        user,
        loading,
        isAuthenticated: !!user,
        setUser,
        logout,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};