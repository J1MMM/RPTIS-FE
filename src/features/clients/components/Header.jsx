import { Box, Button, Stack, Typography } from "@mui/material";
import { useState } from "react";
import logo from '../../../assets/images/seal.png'
import { NavLink } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import '../styles/header.scss'

function Header() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

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
                backgroundColor: "rgba(255, 255, 255, 0.95)"
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

                {/* Navigation Links */}
                <Stack
                    direction="row"
                    spacing={4}
                    alignItems="center"
                    sx={{
                        display: { xs: "none", md: "flex" }
                    }}
                >
                    <NavLink className="nav-links">Home</NavLink>
                    <NavLink className="nav-links">Services</NavLink>
                    <NavLink className="nav-links">About</NavLink>
                    <NavLink className="nav-links">Contact</NavLink>
                </Stack>

                {/* CTA Button */}
                <Stack
                    direction="row"
                    spacing={1}
                    alignItems="center"
                    sx={{
                        display: { xs: "none", md: "flex" }
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
                            boxShadow: "none",

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
            </Stack>
        </Box>
    );
}

export default Header;