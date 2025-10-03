import { Box, Typography, Stack, Card, CardContent } from '@mui/material';
import { Calculator, FileCheck, CreditCard, Bell, Download, FileText, Building2, Clock } from 'lucide-react';
import { keyframes } from '@mui/system';

// Animation
const fadeInUp = keyframes`
  from {
    opacity: 0;
    transform: translateY(30px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
`;

function Services() {
    const services = [
        {
            icon: <Calculator size={32} />,
            title: "Property Tax Calculator",
            description: "Calculate your annual property tax instantly with our accurate and easy-to-use calculator."
        },
        {
            icon: <FileCheck size={32} />,
            title: "Assessment Verification",
            description: "Verify your tax declaration and assessment details using ARP or Tax Declaration number."
        },
        {
            icon: <CreditCard size={32} />,
            title: "Payment Validation",
            description: "Validate your payment reference and track your transaction status in real-time."
        },
        {
            icon: <Bell size={32} />,
            title: "Announcements & Deadlines",
            description: "Stay updated with official announcements, payment deadlines, and important notices."
        },
        {
            icon: <Download size={32} />,
            title: "Download Forms",
            description: "Access and download all necessary forms, requirements, and documentation easily."
        },
        {
            icon: <FileText size={32} />,
            title: "Property Records",
            description: "View and manage your complete property records and transaction history."
        },
        {
            icon: <Building2 size={32} />,
            title: "Property Registration",
            description: "Register new properties or update existing property information seamlessly."
        },
        {
            icon: <Clock size={32} />,
            title: "Payment Plans",
            description: "Set up flexible payment plans and auto-save schedules for your property taxes."
        }
    ];

    return (
        <Box
            id="services"
            sx={{
                py: { xs: 8, md: 12 },
                px: { xs: 3, md: 6, lg: 8 },
                bgcolor: "#f8fafc"
            }}
        >
            <Stack
                spacing={6}
                sx={{
                    maxWidth: 1400,
                    margin: "0 auto",
                    width: "100%"
                }}
            >
                {/* Header */}
                <Stack spacing={2} alignItems="center" textAlign="center">
                    <Typography
                        variant="h3"
                        fontWeight="800"
                        sx={{
                            fontSize: { xs: "2rem", md: "2.5rem" },
                            color: "#1e293b",
                            letterSpacing: "-0.02em",
                            animation: `${fadeInUp} 0.8s ease-out`
                        }}
                    >
                        Services that grow with your needs
                    </Typography>
                    <Typography
                        variant="body1"
                        sx={{
                            fontSize: { xs: "1rem", md: "1.125rem" },
                            color: "#64748b",
                            maxWidth: 700,
                            lineHeight: 1.7,
                            animation: `${fadeInUp} 0.8s ease-out`,
                            animationDelay: '0.1s',
                            animationFillMode: 'backwards'
                        }}
                    >
                        Comprehensive property tax management tools designed to save you time, money, and stress throughout the year.
                    </Typography>
                </Stack>

                {/* Service Cards Grid */}
                <Box
                    sx={{
                        display: 'grid',
                        gridTemplateColumns: {
                            xs: '1fr',
                            sm: 'repeat(2, 1fr)',
                            md: 'repeat(3, 1fr)',
                            lg: 'repeat(4, 1fr)'
                        },
                        gap: 3,
                        animation: `${fadeInUp} 0.8s ease-out`,
                        animationDelay: '0.2s',
                        animationFillMode: 'backwards'
                    }}
                >
                    {services.map((service, index) => (
                        <Card
                            key={index}
                            sx={{
                                bgcolor: 'white',
                                borderRadius: 4,
                                border: '1px solid #e5e7eb',
                                boxShadow: '0 1px 3px rgba(0, 0, 0, 0.05)',
                                transition: 'all 0.3s ease',
                                cursor: 'pointer',
                                '&:hover': {
                                    transform: 'translateY(-8px)',
                                    boxShadow: '0 20px 40px rgba(40, 127, 113, 0.15)',
                                    borderColor: '#287F71',
                                    '& .service-icon': {
                                        bgcolor: '#287F71',
                                        color: 'white',
                                        transform: 'scale(1.1)'
                                    }
                                }
                            }}
                        >
                            <CardContent sx={{ p: 3 }}>
                                <Stack spacing={2}>
                                    {/* Icon */}
                                    <Box
                                        className="service-icon"
                                        sx={{
                                            width: 64,
                                            height: 64,
                                            borderRadius: 3,
                                            bgcolor: 'rgba(40, 127, 113, 0.1)',
                                            color: '#287F71',
                                            display: 'flex',
                                            alignItems: 'center',
                                            justifyContent: 'center',
                                            transition: 'all 0.3s ease'
                                        }}
                                    >
                                        {service.icon}
                                    </Box>

                                    {/* Title */}
                                    <Typography
                                        variant="h6"
                                        fontWeight="700"
                                        sx={{
                                            color: '#1e293b',
                                            fontSize: '1.125rem'
                                        }}
                                    >
                                        {service.title}
                                    </Typography>

                                    {/* Description */}
                                    <Typography
                                        variant="body2"
                                        sx={{
                                            color: '#64748b',
                                            lineHeight: 1.6
                                        }}
                                    >
                                        {service.description}
                                    </Typography>
                                </Stack>
                            </CardContent>
                        </Card>
                    ))}
                </Box>
            </Stack>
        </Box>
    );
}

export default Services;