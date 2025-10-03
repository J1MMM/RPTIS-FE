import { Box, Typography, Stack, Grid, Card, CardContent } from "@mui/material";
import { Target, Eye, Award, Users, Shield, TrendingUp } from "lucide-react";
import { motion } from "framer-motion";

// Variants for staggered animations
const fadeInUp = {
    hidden: { opacity: 0, y: 30 },
    visible: (i = 0) => ({
        opacity: 1,
        y: 0,
        transition: { delay: i * 0.2, duration: 0.6, ease: "easeOut" },
    }),
};

const fadeInLeft = {
    hidden: { opacity: 0, x: -30 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.8, ease: "easeOut" } },
};

const fadeInRight = {
    hidden: { opacity: 0, x: 30 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.8, ease: "easeOut" } },
};

function About() {
    const values = [
        {
            icon: <Shield size={28} />,
            title: "Transparency",
            description: "Clear and open processes in all property tax transactions",
        },
        {
            icon: <Users size={28} />,
            title: "Service Excellence",
            description: "Committed to providing efficient and responsive service",
        },
        {
            icon: <Award size={28} />,
            title: "Integrity",
            description: "Upholding the highest standards of accountability",
        },
        {
            icon: <TrendingUp size={28} />,
            title: "Innovation",
            description: "Leveraging technology for better citizen experience",
        },
    ];

    const stats = [
        { number: "15,000+", label: "Properties Registered" },
        { number: "₱2.5M+", label: "Taxes Processed" },
        { number: "98%", label: "Satisfaction Rate" },
        { number: "24/7", label: "Online Access" },
    ];

    return (
        <Box
            id="about"
            sx={{
                py: { xs: 8, md: 12 },
                px: { xs: 3, md: 6, lg: 8 },
                bgcolor: "white",
            }}
        >
            <Stack spacing={8} sx={{ maxWidth: 1400, margin: "0 auto", width: "100%" }}>
                {/* Main Content */}
                <Grid container spacing={6} alignItems="center">
                    {/* Left Side - Text Content */}
                    <Grid item xs={12} md={6}>
                        <motion.div
                            variants={fadeInLeft}
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true }}
                        >
                            <Stack spacing={3}>
                                <Typography
                                    variant="overline"
                                    sx={{
                                        color: "#287F71",
                                        fontWeight: 700,
                                        fontSize: "0.875rem",
                                        letterSpacing: "1.5px",
                                    }}
                                >
                                    ABOUT US
                                </Typography>

                                <Typography
                                    variant="h3"
                                    fontWeight="800"
                                    sx={{
                                        fontSize: { xs: "2rem", md: "2.5rem" },
                                        color: "#1e293b",
                                        letterSpacing: "-0.02em",
                                        lineHeight: 1.2,
                                    }}
                                >
                                    Modernizing Property Tax Management for{" "}
                                    <Box
                                        component="span"
                                        sx={{
                                            background: "linear-gradient(135deg, #287F71 0%, #10b981 100%)",
                                            WebkitBackgroundClip: "text",
                                            WebkitTextFillColor: "transparent",
                                            backgroundClip: "text",
                                        }}
                                    >
                                        San Pablo City
                                    </Box>
                                </Typography>

                                <Typography variant="body1" sx={{ fontSize: "1.125rem", color: "#64748b", lineHeight: 1.8 }}>
                                    The Real Property Tax Management System (RPTMS) is San Pablo City's official digital
                                    platform designed to streamline property tax assessment, payment, and management processes.
                                </Typography>

                                <Typography variant="body1" sx={{ fontSize: "1.125rem", color: "#64748b", lineHeight: 1.8 }}>
                                    Our mission is to provide convenient, transparent, and efficient property tax services to
                                    all residents and property owners, making government services more accessible through
                                    technology.
                                </Typography>

                                {/* Mission & Vision */}
                                <Stack spacing={2} sx={{ pt: 2 }}>
                                    <Box>
                                        <Stack direction="row" spacing={1} alignItems="center" sx={{ mb: 1 }}>
                                            <Target size={20} color="#287F71" />
                                            <Typography variant="h6" fontWeight="700" sx={{ color: "#1e293b" }}>
                                                Our Mission
                                            </Typography>
                                        </Stack>
                                        <Typography sx={{ color: "#64748b", pl: 3.5 }}>
                                            To deliver efficient, transparent, and citizen-centered property tax services through
                                            innovative digital solutions.
                                        </Typography>
                                    </Box>

                                    <Box>
                                        <Stack direction="row" spacing={1} alignItems="center" sx={{ mb: 1 }}>
                                            <Eye size={20} color="#287F71" />
                                            <Typography variant="h6" fontWeight="700" sx={{ color: "#1e293b" }}>
                                                Our Vision
                                            </Typography>
                                        </Stack>
                                        <Typography sx={{ color: "#64748b", pl: 3.5 }}>
                                            A fully digitalized property tax system that sets the standard for local government
                                            efficiency and public service excellence.
                                        </Typography>
                                    </Box>
                                </Stack>
                            </Stack>
                        </motion.div>
                    </Grid>

                    {/* Right Side - Stats Cards */}
                    <Grid item xs={12} md={6}>
                        <motion.div
                            variants={fadeInRight}
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true }}
                        >
                            <Grid container spacing={3}>
                                {stats.map((stat, index) => (
                                    <Grid item xs={6} key={index}>
                                        <motion.div
                                            custom={index}
                                            variants={fadeInUp}
                                            initial="hidden"
                                            whileInView="visible"
                                            viewport={{ once: true }}
                                        >
                                            <Card
                                                sx={{
                                                    bgcolor: index % 2 === 0 ? "#287F71" : "white",
                                                    color: index % 2 === 0 ? "white" : "#1e293b",
                                                    borderRadius: 4,
                                                    border: index % 2 === 0 ? "none" : "2px solid #e5e7eb",
                                                    boxShadow:
                                                        index % 2 === 0
                                                            ? "0 10px 30px rgba(40, 127, 113, 0.3)"
                                                            : "0 4px 12px rgba(0, 0, 0, 0.05)",
                                                    transition: "all 0.3s ease",
                                                    "&:hover": {
                                                        transform: "translateY(-8px)",
                                                        boxShadow: "0 20px 40px rgba(40, 127, 113, 0.25)",
                                                    },
                                                }}
                                            >
                                                <CardContent sx={{ p: 3, textAlign: "center" }}>
                                                    <Typography
                                                        variant="h3"
                                                        fontWeight="800"
                                                        sx={{
                                                            fontSize: "2.5rem",
                                                            mb: 1,
                                                            color: index % 2 === 0 ? "white" : "#287F71",
                                                        }}
                                                    >
                                                        {stat.number}
                                                    </Typography>
                                                    <Typography
                                                        variant="body2"
                                                        sx={{
                                                            color: index % 2 === 0 ? "rgba(255, 255, 255, 0.9)" : "#64748b",
                                                            fontWeight: 500,
                                                        }}
                                                    >
                                                        {stat.label}
                                                    </Typography>
                                                </CardContent>
                                            </Card>
                                        </motion.div>
                                    </Grid>
                                ))}
                            </Grid>
                        </motion.div>
                    </Grid>
                </Grid>

                {/* Core Values Section */}
                <motion.div
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                >
                    <Typography
                        variant="h4"
                        fontWeight="700"
                        textAlign="center"
                        sx={{ color: "#1e293b", mb: 4 }}
                    >
                        Our Core Values
                    </Typography>

                    <Grid container spacing={3}>
                        {values.map((value, index) => (
                            <Grid item xs={12} sm={6} md={3} key={index}>
                                <motion.div
                                    custom={index}
                                    variants={fadeInUp}
                                    initial="hidden"
                                    whileInView="visible"
                                    viewport={{ once: true }}
                                >
                                    <Card
                                        sx={{
                                            bgcolor: "white",
                                            borderRadius: 4,
                                            border: "1px solid #e5e7eb",
                                            height: "100%",
                                            transition: "all 0.3s ease",
                                            "&:hover": {
                                                borderColor: "#287F71",
                                                boxShadow: "0 10px 30px rgba(40, 127, 113, 0.15)",
                                                transform: "translateY(-4px)",
                                                "& .value-icon": {
                                                    bgcolor: "#287F71",
                                                    color: "white",
                                                },
                                            },
                                        }}
                                    >
                                        <CardContent sx={{ p: 3, textAlign: "center" }}>
                                            <Box
                                                className="value-icon"
                                                sx={{
                                                    width: 56,
                                                    height: 56,
                                                    borderRadius: 3,
                                                    bgcolor: "rgba(40, 127, 113, 0.1)",
                                                    color: "#287F71",
                                                    display: "flex",
                                                    alignItems: "center",
                                                    justifyContent: "center",
                                                    margin: "0 auto 16px",
                                                    transition: "all 0.3s ease",
                                                }}
                                            >
                                                {value.icon}
                                            </Box>
                                            <Typography variant="h6" fontWeight="700" sx={{ color: "#1e293b", mb: 1 }}>
                                                {value.title}
                                            </Typography>
                                            <Typography variant="body2" sx={{ color: "#64748b", lineHeight: 1.6 }}>
                                                {value.description}
                                            </Typography>
                                        </CardContent>
                                    </Card>
                                </motion.div>
                            </Grid>
                        ))}
                    </Grid>
                </motion.div>
            </Stack>
        </Box>
    );
}

export default About;
