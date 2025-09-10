import { Box } from '@mui/material'
import React from 'react'
import { DataGrid } from '@mui/x-data-grid';
import { columns } from '../constants/rptar';
function LandTaxPage() {
    return (
        <Box
            // border={"1px solid violet"}
            boxSizing={"border-box"}
            display={"flex"}
            flexDirection={"column"}
            height={"calc(100vh - 160px)"}

        >
            <DataGrid
                textAlign={"center"}
                columns={columns}>

            </DataGrid>
        </Box>
    )
}

export default LandTaxPage