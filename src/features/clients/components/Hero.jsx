import { Box, Stack, Typography, Button, Chip } from "@mui/material";
import { Calculator, Building2, CheckCircle, ArrowRight, Users, Shield, Landmark } from "lucide-react";
import HeroCard from "./ui/HeroCard";

function Hero() {
    return (
        <Box
            sx={{
                minHeight: "100vh",
                display: "flex",
                alignItems: "center",
                position: "relative",
                overflow: "hidden",
                py: { xs: 6, md: 8 },
                px: { xs: 3, md: 6, lg: 8 },
                // border: "1px solid red",

            }}
        >
            {/* Background decorative elements */}
            <Box
                sx={{
                    position: "absolute",
                    top: "10%",
                    right: "5%",
                    width: 400,
                    height: 400,
                    background: "radial-gradient(circle, rgba(40, 127, 113, 0.1) 0%, transparent 70%)",
                    borderRadius: "50%",
                    filter: "blur(60px)",
                    zIndex: 0,
                    // bgcolor: 'red'

                }}
            />
            <Box
                sx={{
                    position: "absolute",
                    bottom: "10%",
                    left: "5%",
                    width: 300,
                    height: 300,
                    background: "radial-gradient(circle, rgba(16, 185, 129, 0.1) 0%, transparent 70%)",
                    borderRadius: "50%",
                    filter: "blur(60px)",
                    zIndex: 0,

                }}
            />

            <Stack
                direction={{ xs: "column", md: "row" }}
                spacing={{ xs: 6, md: 8 }}
                alignItems="center"
                sx={{
                    maxWidth: 1400,
                    margin: "0 auto",
                    width: "100%",
                    position: "relative",
                    zIndex: 1,
                    // border: "1px solid blue",
                    mt: -10
                }}
            >
                {/* Left Content */}
                <Box sx={{
                    flex: 1, maxWidth: { md: "50%" },
                    // border: "1px solid red",
                }}>
                    <Stack spacing={3}>
                        {/* Badge */}
                        <Box>
                            <Chip
                                icon={<Landmark size={16} />}
                                label="City of San Pablo - Official Service"
                                sx={{
                                    px: 1,
                                    bgcolor: "rgba(40, 127, 113, 0.1)",
                                    color: "#287F71",
                                    fontWeight: 600,
                                    fontSize: "0.875rem",
                                    border: "1px solid rgba(40, 127, 113, 0.2)",
                                    "& .MuiChip-icon": {
                                        color: "#287F71"
                                    }
                                }}
                            />
                        </Box>

                        {/* Main Headline */}
                        <Typography
                            variant="h2"
                            fontWeight="800"
                            sx={{
                                fontSize: { xs: "2.5rem", md: "3.5rem" },
                                lineHeight: 1.1,
                                color: "#1e293b",
                                letterSpacing: "-0.02em"
                            }}
                        >
                            Simplify the Way You{" "}
                            <Box
                                component="span"
                                sx={{
                                    background: "linear-gradient(135deg, #287F71 0%, #10b981 100%)",
                                    WebkitBackgroundClip: "text",
                                    WebkitTextFillColor: "transparent",
                                    backgroundClip: "text"
                                }}
                            >
                                Manage and Pay
                            </Box>{" "}
                            Your Real Property Taxes
                        </Typography>

                        {/* Subheadline */}
                        <Typography
                            variant="body1"
                            sx={{
                                fontSize: { xs: "1.125rem", md: "1.25rem" },
                                color: "#64748b",
                                lineHeight: 1.7,
                                maxWidth: 600
                            }}
                        >
                            San Pablo City's official Real Property Tax Management System. Calculate your taxes and view your property information - no account required.
                        </Typography>

                        {/* Feature Pills */}
                        <Stack direction="row" spacing={2} flexWrap="wrap" useFlexGap>
                            <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
                                <CheckCircle size={20} color="#10b981" />
                                <Typography sx={{ color: "#475569", fontWeight: 500 }}>
                                    Instant Tax Calculations
                                </Typography>
                            </Box>
                            <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
                                <CheckCircle size={20} color="#10b981" />
                                <Typography sx={{ color: "#475569", fontWeight: 500 }}>
                                    Flexible Payment Plans
                                </Typography>
                            </Box>
                            <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
                                <CheckCircle size={20} color="#10b981" />
                                <Typography sx={{ color: "#475569", fontWeight: 500 }}>
                                    24/7 Online Access
                                </Typography>
                            </Box>
                        </Stack>

                        {/* CTA Buttons */}
                        <Stack direction={{ xs: "column", sm: "row" }} spacing={2} sx={{ pt: 2 }}>
                            <Button
                                variant="contained"
                                size="large"
                                endIcon={<ArrowRight size={20} />}
                                sx={{
                                    bgcolor: "#287F71",
                                    color: "white",
                                    px: 4,
                                    py: 1.5,
                                    fontSize: "1rem",
                                    fontWeight: 600,
                                    borderRadius: 3,
                                    textTransform: "none",
                                    boxShadow: "0 10px 30px rgba(40, 127, 113, 0.3)",
                                    "&:hover": {
                                        bgcolor: "#236b5e",
                                        boxShadow: "0 15px 40px rgba(40, 127, 113, 0.4)",
                                        transform: "translateY(-2px)",
                                    },
                                    transition: "all 0.3s ease"
                                }}
                            >
                                View Property Record
                            </Button>
                            <Button
                                variant="outlined"
                                size="large"
                                startIcon={<Calculator size={20} />}
                                sx={{
                                    color: "#287F71",
                                    borderColor: "#287F71",
                                    px: 4,
                                    py: 1.5,
                                    fontSize: "1rem",
                                    fontWeight: 600,
                                    borderRadius: 3,
                                    textTransform: "none",
                                    borderWidth: 2,
                                    "&:hover": {
                                        borderColor: "#287F71",
                                        bgcolor: "rgba(40, 127, 113, 0.05)",
                                        borderWidth: 2,
                                    }
                                }}
                            >
                                Calculate Tax
                            </Button>
                        </Stack>

                        {/* Trust Indicators */}
                        <Stack
                            direction="row"
                            spacing={4}
                            sx={{
                                pt: 3,
                                borderTop: "1px solid #e2e8f0",
                                mt: 2
                            }}
                        >
                            <Box>
                                <Stack direction="row" spacing={1} alignItems="center">
                                    <Users size={20} color="#10b981" />
                                    <Typography variant="h6" fontWeight="700" color="#1e293b">
                                        15,000+
                                    </Typography>
                                </Stack>
                                <Typography variant="body2" color="#64748b">
                                    Properties Registered
                                </Typography>
                            </Box>
                            <Box>
                                <Stack direction="row" spacing={1} alignItems="center">
                                    <Shield size={20} color="#10b981" />
                                    <Typography variant="h6" fontWeight="700" color="#1e293b">
                                        Safe & Secure
                                    </Typography>
                                </Stack>
                                <Typography variant="body2" color="#64748b">
                                    Official Government System
                                </Typography>
                            </Box>
                        </Stack>
                    </Stack>
                </Box>

                {/* Right Content - Card */}
                <Box
                    sx={{
                        flex: 1,
                        maxWidth: { md: "50%" },
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                        padding: 10,
                        // border: "1px solid red",
                    }}
                >
                    <HeroCard />
                </Box>
            </Stack>
        </Box>
    );
}

export default Hero;