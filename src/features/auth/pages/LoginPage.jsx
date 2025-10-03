import { Box, Typography, useTheme, useMediaQuery } from "@mui/material";
import { Navigate } from "react-router-dom";
import useAuth from "../../../hooks/useAuth";
import LoginForm from "../components/LoginForm";

const LoginPage = () => {
    const { auth } = useAuth();
    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

    if (auth?.accessToken) {
        return <Navigate to="/dashboard" replace />;
    }

    return (
        <Box
            sx={{
                minHeight: "100vh",
                width: "100%",
                display: "flex",
                position: "relative",
                background: `linear-gradient(135deg, ${theme.palette.primary.main}15 0%, ${theme.palette.primary.main}05 100%)`,
                overflow: "hidden",
                flexDirection: 'column',
                justifyContent: 'center',
                alignItems: 'center',
                "&::before": {
                    content: '""',
                    position: "absolute",
                    top: "-50%",
                    right: "-10%",
                    width: "600px",
                    height: "600px",
                    borderRadius: "50%",
                    background: `radial-gradient(circle, ${theme.palette.primary.main}20 0%, transparent 70%)`,
                    filter: "blur(60px)",
                },
                "&::after": {
                    content: '""',
                    position: "absolute",
                    bottom: "-30%",
                    left: "-5%",
                    width: "500px",
                    height: "500px",
                    borderRadius: "50%",
                    background: `radial-gradient(circle, ${theme.palette.secondary.main}15 0%, transparent 70%)`,
                    filter: "blur(50px)",
                },
            }}
        >
            <LoginForm />

            <Typography
                variant="caption"
                sx={{
                    color: theme.palette.text.secondary,
                    textAlign: "center",
                    position: "absolute",
                    bottom: isMobile ? 8 : 16,
                }}
            >
                © 2025 Your Company. All rights reserved.
            </Typography>
        </Box>
    );
};

export default LoginPage;