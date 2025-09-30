import { useEffect, useState } from "react";
import { Outlet } from "react-router-dom";
import { Box, Typography } from "@mui/material";
import UseRefreshToken from "../../hooks/useRefreshToken";
import useAuth from "../../hooks/useAuth";
import LoadingScreen from "../ui/LoadingScreen";

const PersistLogin = () => {
  const [isLoading, setIsLoading] = useState(true);
  // get access token
  const refresh = UseRefreshToken();
  const { auth } = useAuth();
  useEffect(() => {
    const verifyRefreshToken = async () => {
      try {
        await refresh();
      } catch (error) {
        console.error(error);
      } finally {
        setIsLoading(false);
      }
    };
    !auth?.accessToken ? verifyRefreshToken() : setIsLoading(false);
  }, []);

  return (
    <>
      {isLoading ? (
        <LoadingScreen />
      ) : (
        <Outlet />
      )}
    </>
  );
};

export default PersistLogin;
