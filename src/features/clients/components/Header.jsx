import { Box, Button, Stack, Typography, IconButton, Drawer } from "@mui/material";
import { useState } from "react";
import logo from '../../../assets/images/spclogo.png'
import { ArrowRight, Menu, X } from "lucide-react";
import { motion } from "framer-motion";
import '../styles/header.scss'

function Header() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    const scrollToSection = (sectionId) => {
        const element = document.getElementById(sectionId);
        if (element) {
            element.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
        toggleMenu();
    };

    // Variants for framer-motion
    const fadeIn = (delay = 0) => ({
        hidden: { opacity: 0, y: -10 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.6, delay } }
    });

    return (
        <motion.div
            initial={{ y: -30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
        >
            <Box
                sx={{
                    borderBottom: "1px solid #E5E7EB",
                    py: 2,
                    px: { xs: 3, md: 6, lg: 8 },
                    bgcolor: "white",
                    position: "sticky",
                    top: 0,
                    zIndex: 100,
                    backdropFilter: "blur(10px)",
                    backgroundColor: "rgba(255, 255, 255, 0.95)",
                }}
            >
                <Stack
                    direction="row"
                    justifyContent="space-between"
                    alignItems="center"
                    sx={{
                        maxWidth: 1400,
                        margin: "0 auto",
                        width: "100%"
                    }}
                >
                    {/* Logo Section */}
                    <motion.div
                        variants={fadeIn(0.2)}
                        initial="hidden"
                        animate="visible"
                        onClick={() => scrollToSection('home')}
                        style={{ cursor: 'pointer' }}
                    >
                        <Stack direction="row" alignItems="center" gap={1.5}>
                            <img src={logo} width={48} alt="San Pablo City Logo" />
                            <Stack spacing={-0.5}>
                                <Typography sx={{
                                    color: "#287F71",
                                    fontWeight: 700,
                                    fontSize: "1.25rem",
                                    lineHeight: 1,
                                    letterSpacing: "0.5px"
                                }}>
                                    RPTMS
                                </Typography>
                                <Typography sx={{
                                    color: "#64748b",
                                    fontSize: "0.75rem",
                                    fontWeight: 500,
                                    letterSpacing: "0.3px"
                                }}>
                                    San Pablo City
                                </Typography>
                            </Stack>
                        </Stack>
                    </motion.div>

                    {/* Navigation Links - Desktop */}
                    <motion.div
                        variants={fadeIn(0.4)}
                        initial="hidden"
                        animate="visible"
                    >
                        <Stack
                            direction="row"
                            spacing={4}
                            alignItems="center"
                            sx={{ display: { xs: "none", md: "flex" } }}
                        >
                            {["home", "services", "about", "contact"].map((item) => (
                                <Box
                                    key={item}
                                    className="nav-links"
                                    onClick={() => scrollToSection(item)}
                                    sx={{ cursor: 'pointer' }}
                                >
                                    {item.charAt(0).toUpperCase() + item.slice(1)}
                                </Box>
                            ))}
                        </Stack>
                    </motion.div>

                    {/* CTA Buttons - Desktop */}
                    <motion.div
                        variants={fadeIn(0.6)}
                        initial="hidden"
                        animate="visible"
                    >
                        <Stack
                            direction="row"
                            spacing={1}
                            alignItems="center"
                            sx={{ display: { xs: "none", md: "flex" } }}
                        >
                            <Button
                                variant="text"
                                sx={{
                                    px: 3, py: 1, fontSize: "0.95rem", fontWeight: 600,
                                    borderRadius: 2.5, textTransform: "none", color: "#287F71",
                                    "&:hover": { bgcolor: "rgba(40, 127, 113, 0.05)" },
                                }}
                            >
                                Login
                            </Button>
                            <Button
                                variant="contained"
                                endIcon={<ArrowRight size={18} />}
                                sx={{
                                    bgcolor: "#287F71", color: "white", px: 3, py: 1,
                                    fontSize: "0.95rem", fontWeight: 600, borderRadius: 2.5,
                                    textTransform: "none", boxShadow: "none",
                                    "&:hover": {
                                        bgcolor: "#236b5e",
                                        boxShadow: "0 4px 12px rgba(40, 127, 113, 0.3)",
                                        transform: "translateY(-1px)"
                                    }
                                }}
                            >
                                Get Started
                            </Button>
                        </Stack>
                    </motion.div>

                    {/* Mobile Menu Button */}
                    <motion.div
                        variants={fadeIn(0.4)}
                        initial="hidden"
                        animate="visible"
                    >
                        <IconButton
                            onClick={toggleMenu}
                            sx={{ display: { xs: "flex", md: "none" }, color: "#287F71" }}
                        >
                            <Menu size={24} />
                        </IconButton>
                    </motion.div>
                </Stack>

                {/* Mobile Drawer Menu */}
                <Drawer
                    anchor="right"
                    open={isMenuOpen}
                    onClose={toggleMenu}
                    sx={{
                        display: { xs: "block", md: "none" },
                        "& .MuiDrawer-paper": { width: "280px", bgcolor: "white", p: 3 }
                    }}
                >
                    <Box>
                        <Box sx={{ display: "flex", justifyContent: "flex-end", mb: 3 }}>
                            <IconButton onClick={toggleMenu} sx={{ color: "#287F71" }}>
                                <X size={24} />
                            </IconButton>
                        </Box>

                        <Stack spacing={3} sx={{ mb: 4 }}>
                            {["home", "services", "about", "contact"].map((item) => (
                                <Box
                                    key={item}
                                    onClick={() => scrollToSection(item)}
                                    sx={{
                                        color: "#475569", fontWeight: 500, fontSize: "1.1rem",
                                        padding: "12px 0", borderBottom: "1px solid #e5e7eb",
                                        cursor: 'pointer', '&:hover': { color: '#287F71' }
                                    }}
                                >
                                    {item.charAt(0).toUpperCase() + item.slice(1)}
                                </Box>
                            ))}
                        </Stack>

                        <Stack spacing={2}>
                            <Button
                                variant="outlined"
                                fullWidth
                                onClick={toggleMenu}
                                sx={{
                                    color: "#287F71", borderColor: "#287F71", py: 1.5,
                                    fontSize: "0.95rem", fontWeight: 600, borderRadius: 2.5,
                                    textTransform: "none", borderWidth: 2,
                                    "&:hover": { bgcolor: "rgba(40, 127, 113, 0.05)" }
                                }}
                            >
                                Login
                            </Button>
                            <Button
                                variant="contained"
                                fullWidth
                                endIcon={<ArrowRight size={18} />}
                                onClick={toggleMenu}
                                sx={{
                                    bgcolor: "#287F71", color: "white", py: 1.5,
                                    fontSize: "0.95rem", fontWeight: 600, borderRadius: 2.5,
                                    textTransform: "none", boxShadow: "none",
                                    "&:hover": {
                                        bgcolor: "#236b5e",
                                        boxShadow: "0 4px 12px rgba(40, 127, 113, 0.3)",
                                    }
                                }}
                            >
                                Get Started
                            </Button>
                        </Stack>
                    </Box>
                </Drawer>
            </Box>
        </motion.div>
    );
}

export default Header;
