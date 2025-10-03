import { Box, Stack, Typography, Button, Chip } from "@mui/material";
import { Calculator, CheckCircle, ArrowRight, Users, Shield, Landmark } from "lucide-react";
import HeroCard from "./ui/HeroCard";
import { motion } from "framer-motion";

// Parent container animation with stagger
const container = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: {
            staggerChildren: 0.2, // delay between children
        },
    },
};

// Variants for child elements
const fadeInUp = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

const fadeInLeft = {
    hidden: { opacity: 0, x: 30 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.8, ease: "easeOut" } },
};

function Hero() {
    return (
        <Box
            id="home"
            sx={{
                minHeight: "100vh",
                display: "flex",
                alignItems: "center",
                position: "relative",
                overflow: "hidden",
                py: { xs: 6, md: 8 },
                px: { xs: 3, md: 6, lg: 8 },
            }}
        >
            {/* Decorative background */}
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
                    mt: -10,
                }}
            >
                {/* Left Content */}
                <motion.div
                    variants={container}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.3 }}
                    style={{ flex: 1, maxWidth: "50%" }}
                >
                    <Stack spacing={3}>
                        {/* Badge */}
                        <motion.div variants={fadeInUp}>
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
                                    "& .MuiChip-icon": { color: "#287F71" },
                                }}
                            />
                        </motion.div>

                        {/* Headline */}
                        <motion.div variants={fadeInUp}>
                            <Typography
                                variant="h2"
                                fontWeight="800"
                                sx={{
                                    fontSize: { xs: "2.5rem", md: "3.5rem" },
                                    lineHeight: 1.1,
                                    color: "#1e293b",
                                    letterSpacing: "-0.02em",
                                }}
                            >
                                Simplify the Way You{" "}
                                <Box
                                    component="span"
                                    sx={{
                                        background: "linear-gradient(135deg, #287F71 0%, #10b981 100%)",
                                        WebkitBackgroundClip: "text",
                                        WebkitTextFillColor: "transparent",
                                    }}
                                >
                                    Manage and Pay
                                </Box>{" "}
                                Your Real Property Taxes
                            </Typography>
                        </motion.div>

                        {/* Subheadline */}
                        <motion.div variants={fadeInUp}>
                            <Typography
                                variant="body1"
                                sx={{
                                    fontSize: { xs: "1.125rem", md: "1.25rem" },
                                    color: "#64748b",
                                    lineHeight: 1.7,
                                    maxWidth: 600,
                                }}
                            >
                                San Pablo City's official Real Property Tax Management System. Calculate your taxes and
                                view your property information - no account required.
                            </Typography>
                        </motion.div>

                        {/* Features */}
                        <motion.div variants={fadeInUp}>
                            <Stack direction="row" spacing={2} flexWrap="wrap" useFlexGap>
                                {["Instant Tax Calculations", "Flexible Payment Plans", "24/7 Online Access"].map(
                                    (text, i) => (
                                        <motion.div key={i} variants={fadeInUp}>
                                            <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
                                                <CheckCircle size={20} color="#10b981" />
                                                <Typography sx={{ color: "#475569", fontWeight: 500 }}>{text}</Typography>
                                            </Box>
                                        </motion.div>
                                    )
                                )}
                            </Stack>
                        </motion.div>

                        {/* CTA */}
                        <motion.div variants={fadeInUp}>
                            <Stack direction={{ xs: "column", sm: "row" }} spacing={2} pt={2}>
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
                                        transition: "all 0.3s ease",
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
                                        },
                                    }}
                                >
                                    Calculate Tax
                                </Button>
                            </Stack>
                        </motion.div>

                        {/* Trust Indicators */}
                        <motion.div variants={fadeInUp}>
                            <Stack direction="row" spacing={4} sx={{ pt: 3, borderTop: "1px solid #e2e8f0", mt: 2 }}>
                                <motion.div variants={fadeInUp}>
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
                                </motion.div>
                                <motion.div variants={fadeInUp}>
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
                                </motion.div>
                            </Stack>
                        </motion.div>
                    </Stack>
                </motion.div>

                {/* Right Content */}
                <motion.div
                    variants={fadeInLeft}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.3 }}
                    style={{
                        flex: 1,
                        maxWidth: "50%",
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                        padding: 10,
                    }}
                >
                    <HeroCard />
                </motion.div>
            </Stack>
        </Box>
    );
}

export default Hero;
