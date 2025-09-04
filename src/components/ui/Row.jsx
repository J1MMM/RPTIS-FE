import { Stack } from '@mui/material'

function Row({ children, sx }) {
    return (
        <Stack direction="row" gap={1} sx={{ ...sx, width: "100%" }}>{children}</Stack>
    )
}

export default Row