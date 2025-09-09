import React from 'react'
import {
    Box,
    Grid,
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
import { DataGrid } from '@mui/x-data-grid'
import { Chart } from 'react-charts'
import {
    Landmark,
    Building2,
    Factory,
    LineChart,
    PlusCircle,
    FileText,
    Search,
    Download
} from 'lucide-react'
import { formatPeso } from '../../../utils/formatters'

function StatCard({ icon, label, value, delta, color }) {
    const theme = useTheme()
    return (
        <Paper elevation={0} sx={{ p: 2.5, borderRadius: 2, border: `1px solid ${theme.palette.divider}`, overflow: "hidden" }}>
            <Stack direction={{ xs: "column-reverse", sm: "row" }} alignItems={{ xs: "start", sm: "center" }} justifyContent="space-between" spacing={1}>
                <Stack direction="row" spacing={1.5} alignItems="center">
                    <Box
                        sx={{
                            bgcolor: `${color}.50`,
                            color: `${color}.700`,
                            borderRadius: 2,
                            width: 44,
                            height: 44,
                            display: 'grid',
                            placeItems: 'center',
                            border: `1px solid ${theme.palette.divider}`
                        }}
                    >
                        {icon}
                    </Box>
                    <Box>
                        <Typography variant="subtitle2" noWrap color="text.secondary">{label}</Typography>
                        <Typography variant="h5" fontWeight={700}>{value}</Typography>
                    </Box>
                </Stack>
                {delta != null && (
                    <Chip size="small" label={`${delta > 0 ? '+' : ''}${delta}%`} color={delta >= 0 ? 'success' : 'error'} variant="outlined" />
                )}
            </Stack>
        </Paper>
    )
}

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

    return (
        <Box p={2} sx={{ height: "calc(100vh - 60px)", display: "flex", flexDirection: "column" }} >
            <Stack direction={{ xs: 'column', sm: 'row' }} alignItems={{ xs: 'flex-start', sm: 'center' }} justifyContent="space-between" spacing={2} sx={{ mb: 2 }}>
                <Box>
                    <Typography variant="h5" fontWeight={700}>Real Property Intelligence</Typography>
                    <Typography variant="body2" color="text.secondary">Monitor assessments, renewals, and revenues across land, buildings, and machinery</Typography>
                </Box>
                <Stack direction="row" spacing={1} alignItems="center">
                    <Button variant="outlined" startIcon={<Download size={18} />}>Export CSV</Button>
                    <Button variant="contained" startIcon={<PlusCircle size={18} />}>New FAAS</Button>
                </Stack>
            </Stack>
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
            <Grid2 container spacing={2} display={"grid"} gridTemplateColumns={{ xs: "1fr", sm: "1fr", md: "1fr 1fr" }} border={"1px solid"} alignItems="stretch">
                <Grid2>
                    <Paper elevation={0} sx={{ p: 2, borderRadius: 2, border: theme => `1px solid ${theme.palette.divider}`, mb: 2, display: 'flex', flexDirection: 'column' }}>
                        <Stack direction="row" alignItems="center" justifyContent="space-between" sx={{ mb: 1 }}>
                            <Typography variant="subtitle1" fontWeight={600}>Revenue Insights</Typography>
                            <ToggleButtonGroup size="small" color="primary" exclusive value={period} onChange={handlePeriod} sx={{ mb: .3 }}>
                                <ToggleButton value="daily" sx={{ px: 2, py: 0.8, fontSize: 12, textTransform: "none", }}>Daily</ToggleButton>
                                <ToggleButton value="monthly" sx={{ px: 2, py: 0.8, fontSize: 12, textTransform: "none", }}>Monthly</ToggleButton>
                                <ToggleButton value="annual" sx={{ px: 2, py: 0.8, fontSize: 12, textTransform: "none", }}>Annual</ToggleButton>
                            </ToggleButtonGroup>
                        </Stack>
                        <Box sx={{ width: '100%', aspectRatio: '16/4.5' }} >
                            <Chart
                                options={{
                                    data: revenueSeries,
                                    primaryAxis: revenuePrimaryAxis,
                                    secondaryAxes: revenueSecondaryAxes,
                                    defaultColors: ['#FF8C42'], // line color
                                }}
                            />
                        </Box>
                        <Divider sx={{ my: 1 }} />
                        <Stack direction="row" spacing={3} sx={{ flexWrap: 'wrap' }}>
                            <Box>
                                <Typography variant="overline" color="text.secondary">YTD Income</Typography>
                                <Typography variant="h6" fontWeight={700}>₱ 6.57M</Typography>
                            </Box>
                            <Box>
                                <Typography variant="overline" color="text.secondary">MoM Change</Typography>
                                <Typography variant="h6" fontWeight={700} color="success.main">+6.8%</Typography>
                            </Box>
                        </Stack>
                    </Paper>
                </Grid2>
                <Grid2>

                    <Paper elevation={0} sx={{ p: 2, borderRadius: 2, border: theme => `1px solid ${theme.palette.divider}`, mb: 2 }}>
                        <Typography variant="subtitle1" fontWeight={600} sx={{ mb: 1 }}>Revenue Breakdown</Typography>
                        <Box sx={{
                            width: '100%', aspectRatio: '2.5 / 1'
                        }}>
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
            <Grid2 container spacing={2} display={"grid"} gridTemplateColumns={{ xs: "1fr", sm: "1fr", md: "1fr 1fr" }}>
                <Grid2>
                    <Paper elevation={0} sx={{ p: 2, borderRadius: 2, border: theme => `1px solid ${theme.palette.divider}` }}>
                        <Stack direction="row" alignItems="center" justifyContent="space-between" sx={{ mb: 1.5 }}>
                            <Typography variant="subtitle1" fontWeight={600}>Recent FAAS Records</Typography>
                            <Button size="small" startIcon={<Search size={16} />}>See all</Button>
                        </Stack>
                        <DataGrid
                            density="compact"
                            disableRowSelectionOnClick
                            rows={recentRows}
                            columns={recentColumns}
                            hideFooter
                            sx={{
                            }}
                        />
                    </Paper>
                </Grid2>
                <Grid2>
                    <Paper elevation={0} sx={{ p: 2, borderRadius: 2, border: theme => `1px solid ${theme.palette.divider}` }}>
                        <Typography variant="subtitle1" fontWeight={600} sx={{ mb: 1.5 }}>Quick Actions</Typography>
                        <Stack spacing={1}>
                            <Button fullWidth variant="outlined" startIcon={<Search size={18} />}>Search TD</Button>
                            <Button fullWidth variant="outlined" startIcon={<FileText size={18} />}>Generate Report</Button>
                            <Button fullWidth variant="outlined" startIcon={<PlusCircle size={18} />}>Import Data</Button>
                        </Stack>
                    </Paper>
                </Grid2>
            </Grid2>
        </Box >
    )
}

export default Dashboard