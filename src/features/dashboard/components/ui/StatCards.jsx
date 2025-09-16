import { Box, Chip, Paper, Stack, Typography, useTheme } from "@mui/material";
import { green, grey, red } from "@mui/material/colors";

function StatCard({ icon, label, value, delta, color }) {
    const theme = useTheme();
    return (
        <Paper
            elevation={0}
            sx={{
                p: 2,
                borderRadius: 2,
                border: `1px solid ${theme.palette.divider}`,
                overflow: "hidden",
                height: "100%",
                display: "flex",
                flexDirection: "column",
            }}
        >
            <Typography variant="subtitle2" color={grey[700]}>
                {label}
            </Typography>

            <Stack
                direction={{ xs: "column-reverse", sm: "row" }}
                alignItems={{ xs: "start", sm: "center" }}
                justifyContent="space-between"
                spacing={1}
            >
                <Stack direction="row" spacing={1.5} alignItems="center">
                    <Box>
                        <Typography variant="h5" fontWeight={700}>
                            {value}
                        </Typography>
                    </Box>
                </Stack>
                <Box
                    sx={{
                        bgcolor: `${color}.50`,
                        color: `${color}.700`,
                        p: 1,
                        borderRadius: 2,
                        display: "flex ",
                        justifyContent: "center",
                        placeItems: "center",
                        border: `1px solid ${theme.palette.divider}`,
                    }}
                >
                    {icon}
                </Box>
            </Stack>

            <Stack direction="row" alignItems="center" spacing={1}>
                {delta != null && (
                    <Chip
                        size="small"
                        label={`${delta > 0 ? "+" : ""}${delta}%`}
                        variant="outlined"
                        sx={{
                            width: "fit-content",
                            border: "none",
                            bgcolor: delta >= 0 ? "#D5F0EE" : "#F6D8DD",
                            color:
                                delta >= 0
                                    ? theme.palette.success.main
                                    : theme.palette.error.main,
                            borderRadius: 1,
                        }}
                    />
                )}

                <Typography
                    variant="subtitle2"
                    color={grey[500]}
                    sx={{ fontSize: "0.8rem" }}
                >
                    Compare to last month
                </Typography>
            </Stack>
        </Paper>
    );
}

export default StatCard;
