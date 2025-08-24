import { Stack } from '@mui/material'

function Row({ children }) {
    return (
        <Stack direction="row" gap={1}>{children}</Stack>
    )
}

export default Row