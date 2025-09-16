import React from 'react'
import {
    Box,
    Paper,
    Typography,
    Stack,
    Button,
    Chip,
    useTheme,
    Divider,
    ToggleButton,
    ToggleButtonGroup,
    Grid2
} from '@mui/material'
import { Chart } from 'react-charts'
import {
    Landmark,
    Building2,
    Factory,
    LineChart,
    PlusCircle,
    FileText,
    Search,
    Download,
    TrendingUp,
    AlertCircle,
    CheckCircle,
    Activity
} from 'lucide-react'
import { formatPeso } from '../../../utils/formatters'
import { green, grey, lime } from '@mui/material/colors'
import StatCard from '../components/ui/StatCards'



const recentColumns = [
    { field: 'tdNo', headerName: 'TD No.', flex: 1, minWidth: 120 },
    { field: 'owner', headerName: 'Owner', flex: 1.4, minWidth: 160 },
    { field: 'propertyType', headerName: 'Type', flex: 0.8, minWidth: 120 },
    { field: 'barangay', headerName: 'Barangay', flex: 1, minWidth: 140 },
    {
        field: 'assessedValue', headerName: 'Assessed Value', flex: 1, minWidth: 150,
        valueFormatter: (value) => formatPeso(value)
    },
]

const recentRows = [
    { id: 1, tdNo: 'TD-24-0001', owner: 'Juan Dela Cruz', propertyType: 'Land', barangay: 'Poblacion', assessedValue: 450000 },
    { id: 2, tdNo: 'TD-24-0002', owner: 'Maria Santos', propertyType: 'Building', barangay: 'San Isidro', assessedValue: 1220000 },
    { id: 3, tdNo: 'TD-24-0003', owner: 'ACME Corp.', propertyType: 'Machinery', barangay: 'San Roque', assessedValue: 990000 },
    { id: 4, tdNo: 'TD-24-0004', owner: 'Pedro Penduko', propertyType: 'Land', barangay: 'Sta. Cruz', assessedValue: 305000 },
]

// Charts are implemented via react-charts for better visuals and responsiveness

function Dashboard() {
    const [period, setPeriod] = React.useState('monthly')
    const handlePeriod = (_, v) => {
        if (!!v) setPeriod(v)
    }

    const revenueSeries = React.useMemo(() => {
        if (period === 'daily') {
            const days = Array.from({ length: 14 }, (_, i) => ({ primary: `D${i + 1}`, secondary: 350000 + Math.round(Math.random() * 120000) }))
            return [{ label: 'RPTAR Revenue', data: days }]
        }
        if (period === 'annual') {
            const years = ['2021', '2022', '2023', '2024', '2025'].map((y, i) => ({ primary: y, secondary: 4200000 + i * 380000 }))
            return [{ label: 'RPTAR Revenue', data: years }]
        }
        const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']
        const vals = [420000, 480000, 460000, 520000, 510000, 600000, 640000, 700000, 680000, 720000, 760000, 810000]
        return [{ label: 'RPTAR Revenue', data: months.map((m, i) => ({ primary: m, secondary: vals[i] })) }]
    }, [period])

    const revenuePrimaryAxis = React.useMemo(() => ({ getValue: d => d.primary }), [])
    const revenueSecondaryAxes = React.useMemo(() => ([{ getValue: d => d.secondary, elementType: 'line', show: true, min: 0 }]), [])

    const breakdownSeries = React.useMemo(() => ([
        {
            label: 'Revenue',
            data: [
                { primary: 'Current', secondary: 4200000 },
                { primary: 'Delinq.', secondary: 1850000 },
                { primary: 'Other', secondary: 520000 },
            ]
        }
    ]), [])
    const breakdownPrimaryAxis = React.useMemo(() => ({ getValue: d => d.primary }), [])
    const breakdownSecondaryAxes = React.useMemo(() => ([{ getValue: d => d.secondary, elementType: 'bar', min: 0 }]), [])

    // Pie chart data for property types
    const propertyTypeSeries = React.useMemo(() => ([
        {
            label: 'Property Types',
            data: [
                { primary: 'Land', secondary: 2143 },
                { primary: 'Building', secondary: 1087 },
                { primary: 'Machinery', secondary: 312 },
            ]
        }
    ]), [])
    const propertyTypePrimaryAxis = React.useMemo(() => ({ getValue: d => d.primary }), [])
    const propertyTypeSecondaryAxes = React.useMemo(() => ([{ getValue: d => d.secondary, elementType: 'area' }]), [])

    // Recent activity data
    const recentActivities = [
        { id: 1, type: 'success', message: 'New land record added', time: '2 min ago', icon: <CheckCircle size={16} /> },
        { id: 2, type: 'info', message: 'Building assessment updated', time: '15 min ago', icon: <Building2 size={16} /> },
        { id: 3, type: 'warning', message: 'Payment overdue - TD-24-0001', time: '1 hour ago', icon: <AlertCircle size={16} /> },
        { id: 4, type: 'success', message: 'Machinery record processed', time: '2 hours ago', icon: <Factory size={16} /> },
        { id: 5, type: 'info', message: 'Monthly report generated', time: '3 hours ago', icon: <FileText size={16} /> },
    ]

    return (
        <Box p={2} sx={{ height: "calc(100vh - 60px)", display: "flex", flexDirection: "column", overflowY: "scroll" }}  >
            {/* ============================ stats cards ================================================= */}
            <Grid2 container spacing={2} sx={{ mb: 2 }} display={"grid"} gridTemplateColumns={{ xs: "1fr", sm: "1fr 1fr", md: "1fr 1fr 1fr 1fr" }}>
                <Grid2>
                    <StatCard icon={<Landmark />} label="Total Land Records" value="2,143" delta={4.2} color="success" />
                </Grid2>
                <Grid2>
                    <StatCard icon={<Building2 />} label="Total Building Records" value="1,087" delta={-1.3} color="info" />
                </Grid2>
                <Grid2>
                    <StatCard icon={<Factory />} label="Total Machinery Records" value="312" delta={2.8} color="warning" />
                </Grid2>
                <Grid2>
                    <StatCard icon={<LineChart />} label="Assessed Value (M)" value="₱ 4,560" delta={3.1} color="primary" />
                </Grid2>
            </Grid2>

            {/* ============================ charts ================================================= */}
            <Grid2 container spacing={2} mb={2}>
                <Grid2 size={{ xs: 12, sm: 12, md: 7 }}>
                    <Paper
                        elevation={0}
                        sx={{
                            p: { xs: 1.5, sm: 2 },
                            borderRadius: 2,
                            border: theme => `1px solid ${theme.palette.divider}`,
                            mb: 2,
                            display: 'flex',
                            flexDirection: 'column',
                            height: "100%"
                        }}
                    >
                        <Stack
                            direction={{ xs: "column", sm: "row" }}
                            alignItems={{ xs: "flex-start", sm: "center" }}
                            justifyContent="space-between"
                            spacing={{ xs: 1, sm: 0 }}
                            sx={{ mb: 1 }}
                        >
                            <Typography
                                variant="subtitle1"
                                fontWeight={600}
                                sx={{ fontSize: { xs: '1rem', sm: '1.1rem' } }}
                            >
                                Revenue Insights
                            </Typography>
                            <ToggleButtonGroup
                                size="small"
                                color="primary"
                                exclusive
                                value={period}
                                onChange={handlePeriod}
                                sx={{
                                    mb: .3,
                                    width: { xs: '100%', sm: 'auto' },
                                    '& .MuiToggleButton-root': {
                                        flex: { xs: 1, sm: 'none' }
                                    }
                                }}
                            >
                                <ToggleButton
                                    value="daily"
                                    sx={{
                                        px: { xs: 1, sm: 2 },
                                        py: 0.8,
                                        fontSize: { xs: 11, sm: 12 },
                                        textTransform: "none"
                                    }}
                                >
                                    Daily
                                </ToggleButton>
                                <ToggleButton
                                    value="monthly"
                                    sx={{
                                        px: { xs: 1, sm: 2 },
                                        py: 0.8,
                                        fontSize: { xs: 11, sm: 12 },
                                        textTransform: "none"
                                    }}
                                >
                                    Monthly
                                </ToggleButton>
                                <ToggleButton
                                    value="annual"
                                    sx={{
                                        px: { xs: 1, sm: 2 },
                                        py: 0.8,
                                        fontSize: { xs: 11, sm: 12 },
                                        textTransform: "none"
                                    }}
                                >
                                    Annual
                                </ToggleButton>
                            </ToggleButtonGroup>
                        </Stack>
                        <Box
                            sx={{
                                width: '100%',
                                aspectRatio: { xs: '16/6', sm: '16/5', md: '16/4' },
                                minHeight: { xs: 200, sm: 250 }
                            }}
                        >
                            <Chart
                                options={{
                                    data: revenueSeries,
                                    primaryAxis: revenuePrimaryAxis,
                                    secondaryAxes: revenueSecondaryAxes,
                                    defaultColors: ['#FF8C42'], // line color
                                }}
                            />
                        </Box>
                    </Paper>
                </Grid2>

                <Grid2 size={{ xs: 12, sm: 12, md: 5 }}>
                    <Paper
                        elevation={0}
                        sx={{
                            p: { xs: 1.5, sm: 2 },
                            borderRadius: 2,
                            border: theme => `1px solid ${theme.palette.divider}`,
                            mb: 2,
                            height: "100%"
                        }}
                    >
                        <Typography
                            variant="subtitle1"
                            fontWeight={600}
                            sx={{
                                mb: 1,
                                fontSize: { xs: '1rem', sm: '1.1rem' }
                            }}
                        >
                            Revenue Breakdown
                        </Typography>
                        <Box
                            sx={{
                                width: '100%',
                                aspectRatio: { xs: '16/6', sm: '16/5', md: '16/4' },
                                minHeight: { xs: 200, sm: 250 }
                            }}
                        >
                            <Chart
                                options={{
                                    data: breakdownSeries,
                                    primaryAxis: breakdownPrimaryAxis,
                                    secondaryAxes: breakdownSecondaryAxes,
                                    defaultColors: ["#287F71"]
                                }}
                            />
                        </Box>
                    </Paper>
                </Grid2>
            </Grid2>
            {/* ============================ others ================================================= */}
            <Grid2 container spacing={2}>
                {/* Property Type Distribution Pie Chart */}
                <Grid2 size={{ xs: 12, sm: 12, md: 4 }}>
                    <Paper
                        elevation={0}
                        sx={{
                            p: { xs: 1.5, sm: 2 },
                            borderRadius: 2,
                            border: theme => `1px solid ${theme.palette.divider}`,
                            height: "100%",
                            display: 'flex',
                            flexDirection: 'column'
                        }}
                    >
                        <Typography
                            variant="subtitle1"
                            fontWeight={600}
                            sx={{
                                mb: 1,
                                fontSize: { xs: '1rem', sm: '1.1rem' }
                            }}
                        >
                            Property Distribution
                        </Typography>
                        <Box
                            sx={{
                                width: '100%',
                                aspectRatio: { xs: '16/6', sm: '16/5', md: '16/4' },
                                minHeight: { xs: 200, sm: 250 },
                                flex: 1
                            }}
                        >
                            <Chart
                                options={{
                                    data: propertyTypeSeries,
                                    primaryAxis: propertyTypePrimaryAxis,
                                    secondaryAxes: propertyTypeSecondaryAxes,
                                    defaultColors: ["#287F71", "#FF8C42", "#0284C7"]
                                }}
                            />
                        </Box>
                    </Paper>
                </Grid2>

                {/* Recent Activity Feed */}
                <Grid2 size={{ xs: 12, sm: 12, md: 3 }}>
                    <Paper
                        elevation={0}
                        sx={{
                            p: { xs: 1.5, sm: 2 },
                            borderRadius: 2,
                            border: theme => `1px solid ${theme.palette.divider}`,
                            height: "100%",
                            display: 'flex',
                            flexDirection: 'column'
                        }}
                    >
                        <Stack direction="row" alignItems="center" spacing={1} sx={{ mb: 2 }}>
                            <Activity size={20} color="#287F71" />
                            <Typography
                                variant="subtitle1"
                                fontWeight={600}
                                sx={{ fontSize: { xs: '1rem', sm: '1.1rem' } }}
                            >
                                Recent Activity
                            </Typography>
                        </Stack>
                        <Box
                            sx={{
                                flex: 1,
                                overflow: 'auto',
                                minHeight: { xs: 200, sm: 250 }
                            }}
                        >
                            <Stack spacing={1.5}>
                                {recentActivities.map((activity) => (
                                    <Stack
                                        key={activity.id}
                                        direction="row"
                                        alignItems="flex-start"
                                        spacing={1.5}
                                        sx={{
                                            p: 1.5,
                                            borderRadius: 1.5,
                                            bgcolor: theme => theme.palette.background.default,
                                            border: theme => `1px solid ${theme.palette.divider}`
                                        }}
                                    >
                                        <Box
                                            sx={{
                                                color: theme => {
                                                    switch (activity.type) {
                                                        case 'success': return theme.palette.success.main
                                                        case 'warning': return theme.palette.warning.main
                                                        case 'info': return theme.palette.info.main
                                                        default: return theme.palette.text.secondary
                                                    }
                                                },
                                                mt: 0.2
                                            }}
                                        >
                                            {activity.icon}
                                        </Box>
                                        <Box sx={{ flex: 1, minWidth: 0 }}>
                                            <Typography
                                                variant="body2"
                                                sx={{
                                                    fontSize: '0.85rem',
                                                    lineHeight: 1.3,
                                                    mb: 0.5
                                                }}
                                            >
                                                {activity.message}
                                            </Typography>
                                            <Typography
                                                variant="caption"
                                                color="text.secondary"
                                                sx={{ fontSize: '0.75rem' }}
                                            >
                                                {activity.time}
                                            </Typography>
                                        </Box>
                                    </Stack>
                                ))}
                            </Stack>
                        </Box>
                    </Paper>
                </Grid2>

                {/* Quick Actions Panel */}
                <Grid2 size={{ xs: 12, sm: 12, md: 5 }}>
                    <Paper
                        elevation={0}
                        sx={{
                            p: { xs: 1.5, sm: 2 },
                            borderRadius: 2,
                            border: theme => `1px solid ${theme.palette.divider}`,
                            height: "100%",
                            display: 'flex',
                            flexDirection: 'column'
                        }}
                    >
                        <Stack direction="row" alignItems="center" spacing={1} sx={{ mb: 2 }}>
                            <TrendingUp size={20} color="#287F71" />
                            <Typography
                                variant="subtitle1"
                                fontWeight={600}
                                sx={{ fontSize: { xs: '1rem', sm: '1.1rem' } }}
                            >
                                Quick Actions
                            </Typography>
                        </Stack>

                        <Box
                            sx={{
                                flex: 1,
                                display: 'flex',
                                flexDirection: 'column',
                                minHeight: { xs: 200, sm: 250 }
                            }}
                        >

                            <Grid2 container spacing={1.5}>
                                <Grid2 size={6}>
                                    <Button
                                        variant="outlined"
                                        fullWidth
                                        startIcon={<PlusCircle size={18} />}
                                        sx={{
                                            p: 1.5,
                                            borderRadius: 2,
                                            borderColor: theme => theme.palette.primary.main,
                                            color: theme => theme.palette.primary.main,
                                            '&:hover': {
                                                bgcolor: theme => `${theme.palette.primary.main}10`,
                                                borderColor: theme => theme.palette.primary.main
                                            }
                                        }}
                                    >
                                        <Stack alignItems="center" spacing={0.5}>
                                            <Typography variant="body2" fontWeight={500}>
                                                Add Record
                                            </Typography>
                                            <Typography variant="caption" color="text.secondary">
                                                New FAAS
                                            </Typography>
                                        </Stack>
                                    </Button>
                                </Grid2>

                                <Grid2 size={6}>
                                    <Button
                                        variant="outlined"
                                        fullWidth
                                        startIcon={<Search size={18} />}
                                        sx={{
                                            p: 1.5,
                                            borderRadius: 2,
                                            borderColor: theme => theme.palette.info.main,
                                            color: theme => theme.palette.info.main,
                                            '&:hover': {
                                                bgcolor: theme => `${theme.palette.info.main}10`,
                                                borderColor: theme => theme.palette.info.main
                                            }
                                        }}
                                    >
                                        <Stack alignItems="center" spacing={0.5}>
                                            <Typography variant="body2" fontWeight={500}>
                                                Search
                                            </Typography>
                                            <Typography variant="caption" color="text.secondary">
                                                Find Records
                                            </Typography>
                                        </Stack>
                                    </Button>
                                </Grid2>

                                <Grid2 size={6}>
                                    <Button
                                        variant="outlined"
                                        fullWidth
                                        startIcon={<FileText size={18} />}
                                        sx={{
                                            p: 1.5,
                                            borderRadius: 2,
                                            borderColor: theme => theme.palette.warning.main,
                                            color: theme => theme.palette.warning.main,
                                            '&:hover': {
                                                bgcolor: theme => `${theme.palette.warning.main}10`,
                                                borderColor: theme => theme.palette.warning.main
                                            }
                                        }}
                                    >
                                        <Stack alignItems="center" spacing={0.5}>
                                            <Typography variant="body2" fontWeight={500}>
                                                Reports
                                            </Typography>
                                            <Typography variant="caption" color="text.secondary">
                                                Generate
                                            </Typography>
                                        </Stack>
                                    </Button>
                                </Grid2>

                                <Grid2 size={6}>
                                    <Button
                                        variant="outlined"
                                        fullWidth
                                        startIcon={<Download size={18} />}
                                        sx={{
                                            p: 1.5,
                                            borderRadius: 2,
                                            borderColor: theme => theme.palette.success.main,
                                            color: theme => theme.palette.success.main,
                                            '&:hover': {
                                                bgcolor: theme => `${theme.palette.success.main}10`,
                                                borderColor: theme => theme.palette.success.main
                                            }
                                        }}
                                    >
                                        <Stack alignItems="center" spacing={0.5}>
                                            <Typography variant="body2" fontWeight={500}>
                                                Export
                                            </Typography>
                                            <Typography variant="caption" color="text.secondary">
                                                Data
                                            </Typography>
                                        </Stack>
                                    </Button>
                                </Grid2>
                            </Grid2>

                            <Divider sx={{ my: 2 }} />

                            {/* Quick Stats */}
                            <Stack spacing={1}>
                                <Typography variant="subtitle2" color="text.secondary" sx={{ fontSize: '0.85rem' }}>
                                    Today's Summary
                                </Typography>
                                <Stack direction="row" justifyContent="space-between" alignItems="center">
                                    <Stack direction="row" alignItems="center" spacing={1}>
                                        <Box sx={{ width: 8, height: 8, borderRadius: '50%', bgcolor: 'success.main' }} />
                                        <Typography variant="body2">New Records</Typography>
                                    </Stack>
                                    <Typography variant="body2" fontWeight={600}>12</Typography>
                                </Stack>
                                <Stack direction="row" justifyContent="space-between" alignItems="center">
                                    <Stack direction="row" alignItems="center" spacing={1}>
                                        <Box sx={{ width: 8, height: 8, borderRadius: '50%', bgcolor: 'warning.main' }} />
                                        <Typography variant="body2">Pending</Typography>
                                    </Stack>
                                    <Typography variant="body2" fontWeight={600}>8</Typography>
                                </Stack>
                                <Stack direction="row" justifyContent="space-between" alignItems="center">
                                    <Stack direction="row" alignItems="center" spacing={1}>
                                        <Box sx={{ width: 8, height: 8, borderRadius: '50%', bgcolor: 'info.main' }} />
                                        <Typography variant="body2">Updated</Typography>
                                    </Stack>
                                    <Typography variant="body2" fontWeight={600}>24</Typography>
                                </Stack>
                            </Stack>
                        </Box>
                    </Paper>
                </Grid2>
            </Grid2>
        </Box >
    )
}

export default Dashboard