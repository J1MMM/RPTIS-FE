import { createContext, useContext, useState, useEffect, useCallback } from "react";

const AuthContext = createContext();

export function AuthProvider({ children }) {
  const [auth, setAuth] = useState({
    accessToken: null,
    refreshToken: null,
  });

  // Simulate login
  const login = async (credentials) => {
    // const res = await axiosPrivate.post("/auth/login", credentials);
    // setAuth({
    //   user: res.data.user,
    //   accessToken: res.data.accessToken,
    //   refreshToken: res.data.refreshToken,
    // });
  };

  const logout = () => {
    setAuth({ user: null, accessToken: null, refreshToken: null });
  };

  // Refresh token function


  return (
    <AuthContext.Provider value={{ auth, setAuth, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
}

export const useAuth = () => useContext(AuthContext);
