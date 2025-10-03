import { Box, Button, Stack, Typography, IconButton, Drawer } from "@mui/material";
import { useState } from "react";
import logo from '../../../assets/images/seal.png'
import { NavLink } from "react-router-dom";
import { ArrowRight, Menu, X } from "lucide-react";
import { keyframes } from '@mui/system';
import '../styles/header.scss'

// Define animations
const slideDown = keyframes`
  from {
    opacity: 0;
    transform: translateY(-20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
`;

const fadeIn = keyframes`
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
`;

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
        toggleMenu(); // Close menu after clicking
    };

    return (
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
                animation: `${slideDown} 0.6s ease-out`,
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
                <Stack
                    direction="row"
                    alignItems="center"
                    gap={1.5}
                    sx={{
                        animation: `${fadeIn} 0.8s ease-out`,
                        animationDelay: '0.2s',
                        animationFillMode: 'backwards',
                        cursor: 'pointer'
                    }}
                    onClick={() => scrollToSection('home')}
                >
                    <img src={logo} width={48} alt="San Pablo City Logo" />
                    <Stack spacing={-0.5}>
                        <Typography
                            sx={{
                                color: "#287F71",
                                fontWeight: 700,
                                fontSize: "1.25rem",
                                lineHeight: 1,
                                letterSpacing: "0.5px"
                            }}
                        >
                            RPTMS
                        </Typography>
                        <Typography
                            sx={{
                                color: "#64748b",
                                fontSize: "0.75rem",
                                fontWeight: 500,
                                letterSpacing: "0.3px"
                            }}
                        >
                            San Pablo City
                        </Typography>
                    </Stack>
                </Stack>

                {/* Navigation Links - Desktop */}
                <Stack
                    direction="row"
                    spacing={4}
                    alignItems="center"
                    sx={{
                        display: { xs: "none", md: "flex" },
                        animation: `${fadeIn} 0.8s ease-out`,
                        animationDelay: '0.4s',
                        animationFillMode: 'backwards'
                    }}
                >
                    <Box
                        className="nav-links"
                        onClick={() => scrollToSection('home')}
                        sx={{ cursor: 'pointer' }}
                    >
                        Home
                    </Box>
                    <Box
                        className="nav-links"
                        onClick={() => scrollToSection('services')}
                        sx={{ cursor: 'pointer' }}
                    >
                        Services
                    </Box>
                    <Box
                        className="nav-links"
                        onClick={() => scrollToSection('about')}
                        sx={{ cursor: 'pointer' }}
                    >
                        About
                    </Box>
                    <Box
                        className="nav-links"
                        onClick={() => scrollToSection('contact')}
                        sx={{ cursor: 'pointer' }}
                    >
                        Contact
                    </Box>
                </Stack>

                {/* CTA Buttons - Desktop */}
                <Stack
                    direction="row"
                    spacing={1}
                    alignItems="center"
                    sx={{
                        display: { xs: "none", md: "flex" },
                        animation: `${fadeIn} 0.8s ease-out`,
                        animationDelay: '0.6s',
                        animationFillMode: 'backwards'
                    }}
                >
                    <Button
                        variant="text"
                        sx={{
                            px: 3,
                            py: 1,
                            fontSize: "0.95rem",
                            fontWeight: 600,
                            borderRadius: 2.5,
                            textTransform: "none",
                            color: "#287F71",
                            boxShadow: "none",
                            "&:hover": {
                                bgcolor: "rgba(40, 127, 113, 0.05)",
                            },
                            transition: "all 0.2s ease"
                        }}
                    >
                        Login
                    </Button>
                    <Button
                        variant="contained"
                        endIcon={<ArrowRight size={18} />}
                        sx={{
                            bgcolor: "#287F71",
                            color: "white",
                            px: 3,
                            py: 1,
                            fontSize: "0.95rem",
                            fontWeight: 600,
                            borderRadius: 2.5,
                            textTransform: "none",
                            boxShadow: "none",
                            "&:hover": {
                                bgcolor: "#236b5e",
                                boxShadow: "0 4px 12px rgba(40, 127, 113, 0.3)",
                                transform: "translateY(-1px)",
                            },
                            transition: "all 0.2s ease"
                        }}
                    >
                        Get Started
                    </Button>
                </Stack>

                {/* Mobile Menu Button */}
                <IconButton
                    onClick={toggleMenu}
                    sx={{
                        display: { xs: "flex", md: "none" },
                        color: "#287F71",
                        animation: `${fadeIn} 0.8s ease-out`,
                        animationDelay: '0.4s',
                        animationFillMode: 'backwards'
                    }}
                >
                    <Menu size={24} />
                </IconButton>
            </Stack>

            {/* Mobile Drawer Menu */}
            <Drawer
                anchor="right"
                open={isMenuOpen}
                onClose={toggleMenu}
                sx={{
                    display: { xs: "block", md: "none" },
                    "& .MuiDrawer-paper": {
                        width: "280px",
                        bgcolor: "white",
                        p: 3
                    }
                }}
            >
                <Box>
                    {/* Close Button */}
                    <Box sx={{ display: "flex", justifyContent: "flex-end", mb: 3 }}>
                        <IconButton onClick={toggleMenu} sx={{ color: "#287F71" }}>
                            <X size={24} />
                        </IconButton>
                    </Box>

                    {/* Mobile Navigation Links */}
                    <Stack spacing={3} sx={{ mb: 4 }}>
                        <Box
                            onClick={() => scrollToSection('home')}
                            sx={{
                                color: "#475569",
                                fontWeight: 500,
                                fontSize: "1.1rem",
                                padding: "12px 0",
                                borderBottom: "1px solid #e5e7eb",
                                cursor: 'pointer',
                                '&:hover': {
                                    color: '#287F71'
                                }
                            }}
                        >
                            Home
                        </Box>
                        <Box
                            onClick={() => scrollToSection('services')}
                            sx={{
                                color: "#475569",
                                fontWeight: 500,
                                fontSize: "1.1rem",
                                padding: "12px 0",
                                borderBottom: "1px solid #e5e7eb",
                                cursor: 'pointer',
                                '&:hover': {
                                    color: '#287F71'
                                }
                            }}
                        >
                            Services
                        </Box>
                        <Box
                            onClick={() => scrollToSection('about')}
                            sx={{
                                color: "#475569",
                                fontWeight: 500,
                                fontSize: "1.1rem",
                                padding: "12px 0",
                                borderBottom: "1px solid #e5e7eb",
                                cursor: 'pointer',
                                '&:hover': {
                                    color: '#287F71'
                                }
                            }}
                        >
                            About
                        </Box>
                        <Box
                            onClick={() => scrollToSection('contact')}
                            sx={{
                                color: "#475569",
                                fontWeight: 500,
                                fontSize: "1.1rem",
                                padding: "12px 0",
                                borderBottom: "1px solid #e5e7eb",
                                cursor: 'pointer',
                                '&:hover': {
                                    color: '#287F71'
                                }
                            }}
                        >
                            Contact
                        </Box>
                    </Stack>

                    {/* Mobile CTA Buttons */}
                    <Stack spacing={2}>
                        <Button
                            variant="outlined"
                            fullWidth
                            onClick={toggleMenu}
                            sx={{
                                color: "#287F71",
                                borderColor: "#287F71",
                                py: 1.5,
                                fontSize: "0.95rem",
                                fontWeight: 600,
                                borderRadius: 2.5,
                                textTransform: "none",
                                borderWidth: 2,
                                "&:hover": {
                                    borderColor: "#287F71",
                                    bgcolor: "rgba(40, 127, 113, 0.05)",
                                    borderWidth: 2,
                                }
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
                                bgcolor: "#287F71",
                                color: "white",
                                py: 1.5,
                                fontSize: "0.95rem",
                                fontWeight: 600,
                                borderRadius: 2.5,
                                textTransform: "none",
                                boxShadow: "none",
                                "&:hover": {
                                    bgcolor: "#236b5e",
                                    boxShadow: "0 4px 12px rgba(40, 127, 113, 0.3)",
                                },
                            }}
                        >
                            Get Started
                        </Button>
                    </Stack>
                </Box>
            </Drawer>
        </Box>
    );
}

export default Header;