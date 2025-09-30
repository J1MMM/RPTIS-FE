import React, { useState } from "react";
import {
    Box,
    Button,
    TextField,
    Typography,
    Alert,
    CircularProgress,
    InputAdornment,
    Paper,
    Stack,
} from "@mui/material";
import { Person, Lock, Visibility, VisibilityOff } from "@mui/icons-material";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import useAuth from "../../../hooks/useAuth";
import axios from "../../../api/axios";
import Cookies from "js-cookie";

const LoginForm = () => {
    const { setAuth } = useAuth();
    const navigate = useNavigate();
    const [showPassword, setShowPassword] = useState(false);
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState("");

    const {
        register,
        handleSubmit,
        formState: { errors, isValid },
    } = useForm({
        mode: "onChange",
        defaultValues: {
            email: "",
            password: "",
        },
    });

    const onSubmit = async (data) => {
        setIsLoading(true);
        setError("");

        try {
            const token = "secret_token";
            Cookies.set("token", token);
            setAuth({ accessToken: token });
            navigate("/", { replace: true });
            // const response = await axios.post(
            //     "/api/user/login",
            //     JSON.stringify(data),
            //     {
            //         headers: { "Content-Type": "application/json" },
            //         withCredentials: false,
            //     }
            // );

            // if (response.data.token) {
            //     const token = response?.data?.token;
            //     Cookies.set("token", token);
            //     setAuth({ accessToken: token });
            //     navigate("/", { replace: true });
            // } else {
            //     setError(response.data.error || response.data.message || "Login failed");
            // }
        } catch (error) {
            console.error("Login error:", error);

            if (!error?.response) {
                setError("No Server Response");
            } else if (error.response?.status === 400) {
                setError("All fields are required");
            } else if (error.response?.status === 401) {
                setError("Incorrect email or password");
            } else {
                setError("Login failed. Please try again.");
            }
        } finally {
            setIsLoading(false);
        }
    };

    const togglePasswordVisibility = () => {
        setShowPassword(!showPassword);
    };

    return (
        <Paper
            elevation={8}
            sx={{
                p: 4,
                borderRadius: 3,
                backgroundColor: "rgba(255, 255, 255, 0.95)",
                backdropFilter: "blur(10px)",
                border: "1px solid rgba(255, 255, 255, 0.2)",
                maxWidth: 400,
                width: "100%",
                mx: "auto",
            }}
        >
            <Stack spacing={3}>
                {/* Header */}
                <Box textAlign="center">
                    <Typography
                        variant="h4"
                        fontWeight={700}
                        color="primary.main"
                        gutterBottom
                        sx={{
                            fontSize: { xs: "1.75rem", sm: "2rem" },
                            lineHeight: 1.2,
                        }}
                    >
                        Welcome Back
                    </Typography>
                    <Typography
                        variant="body1"
                        color="text.secondary"
                        sx={{ fontSize: "0.95rem" }}
                    >
                        Sign in to your account
                    </Typography>
                </Box>

                {/* Error Alert */}
                {error && (
                    <Alert
                        severity="error"
                        sx={{
                            borderRadius: 2,
                            "& .MuiAlert-message": {
                                fontSize: "0.875rem",
                            }
                        }}
                    >
                        {error}
                    </Alert>
                )}

                {/* Login Form */}
                <Box component="form" onSubmit={handleSubmit(onSubmit)}>
                    <Stack spacing={2.5}>
                        {/* Email Field */}
                        <TextField
                            {...register("email", {
                                required: "Email is required",
                                pattern: {
                                    value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                                    message: "Please enter a valid email address",
                                },
                            })}
                            fullWidth
                            label="Email Address"
                            type="email"
                            variant="outlined"
                            disabled={isLoading}
                            error={!!errors.email}
                            helperText={errors.email?.message}
                            InputProps={{
                                startAdornment: (
                                    <InputAdornment position="start">
                                        <Person color="action" />
                                    </InputAdornment>
                                ),
                            }}
                            sx={{
                                "& .MuiOutlinedInput-root": {
                                    borderRadius: 2,
                                    "&:hover .MuiOutlinedInput-notchedOutline": {
                                        borderColor: "primary.main",
                                    },
                                },
                                "& .MuiInputLabel-root": {
                                    fontSize: "0.95rem",
                                },
                            }}
                        />

                        {/* Password Field */}
                        <TextField
                            {...register("password", {
                                required: "Password is required",
                                minLength: {
                                    value: 6,
                                    message: "Password must be at least 6 characters",
                                },
                            })}
                            fullWidth
                            label="Password"
                            type={showPassword ? "text" : "password"}
                            variant="outlined"
                            disabled={isLoading}
                            error={!!errors.password}
                            helperText={errors.password?.message}
                            InputProps={{
                                startAdornment: (
                                    <InputAdornment position="start">
                                        <Lock color="action" />
                                    </InputAdornment>
                                ),
                                endAdornment: (
                                    <InputAdornment position="end">
                                        <Button
                                            type="button"
                                            onClick={togglePasswordVisibility}
                                            sx={{
                                                minWidth: "auto",
                                                p: 0.5,
                                                color: "text.secondary",
                                                "&:hover": {
                                                    backgroundColor: "action.hover",
                                                },
                                            }}
                                        >
                                            {showPassword ? <VisibilityOff /> : <Visibility />}
                                        </Button>
                                    </InputAdornment>
                                ),
                            }}
                            sx={{
                                "& .MuiOutlinedInput-root": {
                                    borderRadius: 2,
                                    "&:hover .MuiOutlinedInput-notchedOutline": {
                                        borderColor: "primary.main",
                                    },
                                },
                                "& .MuiInputLabel-root": {
                                    fontSize: "0.95rem",
                                },
                            }}
                        />

                        {/* Submit Button */}
                        <Button
                            type="submit"
                            variant="contained"
                            fullWidth
                            disabled={isLoading || !isValid}
                            sx={{
                                py: 1.5,
                                borderRadius: 2,
                                fontSize: "1rem",
                                fontWeight: 600,
                                textTransform: "none",
                                boxShadow: "none",
                                "&:hover": {
                                    boxShadow: "0 4px 12px rgba(40, 127, 113, 0.3)",
                                },
                                "&:disabled": {
                                    backgroundColor: "action.disabled",
                                    color: "action.disabled",
                                },
                            }}
                        >
                            {isLoading ? (
                                <Stack direction="row" alignItems="center" spacing={1}>
                                    <CircularProgress size={20} color="inherit" />
                                    <Typography variant="body2">Signing in...</Typography>
                                </Stack>
                            ) : (
                                "Sign In"
                            )}
                        </Button>
                    </Stack>
                </Box>

                {/* Footer */}
                <Box textAlign="center">
                    <Typography
                        variant="body2"
                        color="text.secondary"
                        sx={{ fontSize: "0.85rem" }}
                    >
                        Real Property Tax Information System
                    </Typography>
                </Box>
            </Stack>
        </Paper>
    );
};

export default LoginForm;
