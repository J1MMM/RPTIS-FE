import { CardContent, Button, Box, Typography, Card } from '@mui/material';
import { keyframes } from '@mui/system';

// Define the floating animation
const float = keyframes`
  0%, 100% {
    transform: translateY(0px);
  }
  50% {
    transform: translateY(-15px);
  }
`;

const floatSlow = keyframes`
  0%, 100% {
    transform: translateY(0px);
  }
  50% {
    transform: translateY(-10px);
  }
`;

function HeroCard() {
    return (
        <Box sx={{ position: 'relative', width: "100%" }}>
            <Box
                sx={{
                    position: 'relative',
                    zIndex: 10,
                    // animation: `${float} 4s ease-in-out infinite`
                }}
            >
                {/* Main Card */}
                <Card
                    sx={{
                        bgcolor: '#287F71',
                        color: 'white',
                        p: 3,
                        borderRadius: 6,
                        boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.25)',
                        transition: 'box-shadow 0.3s ease'
                    }}
                >
                    <CardContent sx={{ p: 0 }}>
                        <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
                            <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                                <Typography sx={{ color: 'rgba(255, 255, 255, 0.8)' }}>
                                    Property Tax Calculator
                                </Typography>
                                <Box
                                    sx={{
                                        width: 24,
                                        height: 24,
                                        bgcolor: 'rgba(255, 255, 255, 0.2)',
                                        borderRadius: '50%'
                                    }}
                                />
                            </Box>

                            <Box sx={{ display: 'flex', flexDirection: 'column', gap: 1.5 }}>
                                <Box>
                                    <Typography sx={{ color: 'rgba(255, 255, 255, 0.8)', fontSize: '0.875rem' }}>
                                        Estimated Annual Tax
                                    </Typography>
                                    <Typography sx={{ fontSize: '1.875rem', fontWeight: 'bold' }}>
                                        $8,470.00
                                    </Typography>
                                </Box>

                                <Box
                                    sx={{
                                        bgcolor: 'rgba(255, 255, 255, 0.1)',
                                        borderRadius: 4,
                                        p: 2,
                                        display: 'flex',
                                        flexDirection: 'column',
                                        gap: 1.5
                                    }}
                                >
                                    <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
                                        <Typography sx={{ color: 'rgba(255, 255, 255, 0.8)' }}>
                                            Property Value
                                        </Typography>
                                        <Typography sx={{ color: 'white' }}>
                                            $450,000
                                        </Typography>
                                    </Box>

                                    <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
                                        <Typography sx={{ color: 'rgba(255, 255, 255, 0.8)' }}>
                                            Tax Rate
                                        </Typography>
                                        <Typography sx={{ color: 'white' }}>
                                            1.88%
                                        </Typography>
                                    </Box>

                                    <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
                                        <Typography sx={{ color: 'rgba(255, 255, 255, 0.8)' }}>
                                            Exemptions
                                        </Typography>
                                        <Typography sx={{ color: 'white' }}>
                                            -$2,000
                                        </Typography>
                                    </Box>
                                </Box>

                                <Button
                                    variant="contained"
                                    fullWidth
                                    sx={{
                                        bgcolor: 'white',
                                        color: '#287F71',
                                        borderRadius: 4,
                                        textTransform: 'none',
                                        py: 1.5,
                                        userSelect: "none",
                                        pointerEvents: "none",
                                        '&:hover': {
                                            bgcolor: '#f9fafb'
                                        }
                                    }}
                                >
                                    Download Tax Computation
                                </Button>
                            </Box>
                        </Box>
                    </CardContent>
                </Card>

                {/* Floating Elements */}
                <Box
                    sx={{
                        position: 'absolute',
                        top: -28,
                        right: -48,
                        bgcolor: 'white',
                        borderRadius: 4,
                        boxShadow: '0 10px 15px -3px rgba(0, 0, 0, 0.1)',
                        p: 2,
                        border: '1px solid',
                        borderColor: 'grey.100',
                        animation: `${floatSlow} 3s ease-in-out infinite`,
                        animationDelay: '0.5s'
                    }}
                >
                    <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                        <Box
                            sx={{
                                width: 8,
                                height: 8,
                                bgcolor: '#10b981',
                                borderRadius: '50%'
                            }}
                        />
                        <Typography sx={{ fontSize: '0.875rem', fontWeight: 500, color: 'grey.700' }}>
                            Payment Due
                        </Typography>
                    </Box>
                    <Typography sx={{ fontSize: '0.75rem', color: 'grey.500', mt: 0.5 }}>
                        Dec 31, 2025
                    </Typography>
                </Box>

                <Box
                    sx={{
                        position: 'absolute',
                        bottom: -28,
                        left: -48,
                        bgcolor: 'white',
                        borderRadius: 4,
                        boxShadow: '0 10px 15px -3px rgba(0, 0, 0, 0.1)',
                        p: 2,
                        border: '1px solid',
                        borderColor: 'grey.100',
                        animation: `${floatSlow} 3.5s ease-in-out infinite`,
                        animationDelay: '1s'
                    }}
                >
                    <Typography sx={{ fontSize: '0.875rem', fontWeight: 500, color: 'grey.700' }}>
                        Savings Goal
                    </Typography>
                    <Typography sx={{ fontSize: '1.5rem', fontWeight: 'bold', color: '#287F71' }}>
                        $705/mo
                    </Typography>
                    <Typography sx={{ fontSize: '0.75rem', color: 'grey.500' }}>
                        Auto-save enabled
                    </Typography>
                </Box>
            </Box>
        </Box>
    )
}

export default HeroCard