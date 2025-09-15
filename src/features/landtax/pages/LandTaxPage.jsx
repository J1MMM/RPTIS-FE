import { Box, Button, Stack } from '@mui/material'
import React, { useState } from 'react'
import { DataGrid } from '@mui/x-data-grid';
import { columns, tax_dec_columns } from '../constants/rptar';
import { rows, tax_dec_rows } from '../constants/sample';
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
      </Stack>

      <DataGrid textAlign={"center"} columns={tax_dec_columns} rows={tax_dec_rows} />

      
    </Box>
  )
}

export default LandTaxPage