import { Box, CircularProgress, Typography } from "@mui/material";

const LoadingScreen = ({ message = "Loading..." }) => {
    return (
        <Box
            sx={{
                display: "flex",
                flexDirection: "column",
                width: "100%",
                height: "100vh",
                justifyContent: "center",
                alignItems: "center",
                gap: 3,
                backgroundColor: "background.default",
            }}
        >
            <CircularProgress
                size={60}
                thickness={4}
                sx={{
                    color: "primary.main",
                }}
            />
            <Typography
                variant="h6"
                sx={{
                    color: "text.secondary",
                    fontWeight: 400,
                    letterSpacing: 0.5,
                }}
            >
                {message}
            </Typography>
        </Box>
    );
};

export default LoadingScreen;