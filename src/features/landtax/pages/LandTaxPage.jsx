import { Box, Button, Stack } from '@mui/material'
import React, { useState } from 'react'
import { DataGrid } from '@mui/x-data-grid';
import { columns } from '../constants/rptar';
import AddComputationModal from '../components/forms/land/modals/addComputationModal';
function LandTaxPage() {
    const [open, setOpen] = useState(false);

    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    const handleSave = () => {
        // TODO: Save logic here (API call, state update, etc.)
        console.log("Saved computation!");
        handleClose();
    };



    return (
        <Box
            // border={"1px solid violet"}
            boxSizing={"border-box"}
            display={"flex"}
            flexDirection={"column"}
            height={"calc(100vh - 160px)"}

        >
             <Stack display={'flex'} justifyContent={'start'} padding={1}>
        <Button
          onClick={handleOpen}
          sx={{ width: '15%', backgroundColor: '#287f71', color: "white", padding: 1 }}
        >
          Add Computation
        </Button>
      </Stack>

      <DataGrid textAlign={"center"} columns={columns} />

      {/* Reusable Modal Component */}
      <AddComputationModal 
        open={open} 
        handleClose={handleClose} 
        handleSave={handleSave} 
      />
        </Box>
    )
}

export default LandTaxPage