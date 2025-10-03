import { Box, Stack } from '@mui/material'
import React, { useState, useEffect } from 'react'
import { DataGrid } from '@mui/x-data-grid';
import { td_no_columns } from '../constants/rptar';
import axios from 'axios';

function LandTaxPage() {
  const [rows, setRows] = useState([]);

  useEffect(() => {
    const fetchTaxDecs = async () => {
      try {
        const res = await axios.get("http://localhost:3000/api/landtax/");
        if (res.data && res.data.data) {
          // Map backend response into DataGrid format
          const formatted = res.data.data.map((item) => ({
            id: item.id,
            td_no: item.td_no,
            pin_no: item.pin_no,
            name: item.individuals && item.individuals.length > 0 
              ? item.individuals.map(i => i.name || `${i.firstname ?? ""} ${i.lastname ?? ""}`).join(", ")
              : "N/A",
            total_area: item.lot_no || 0, // adjust based on your schema
            total_assessed_value: item.total_assessed_value,
            effecitivity_of_assessment: item.effectivity_of_assessment,
            kind: item.kind,
            effecitivity_of_quarter: item.quarter,
          }));
          setRows(formatted);
        }
      } catch (err) {
        console.error("Error fetching land tax data:", err);
      }
    };

    fetchTaxDecs();
  }, []);

  return (
    <Box
      boxSizing={"border-box"}
      display={"flex"}
      flexDirection={"column"}
      height={"calc(100vh - 160px)"}
    >
      <Stack display={'flex'} justifyContent={'start'} padding={1}>
      </Stack>

      <DataGrid 
        textAlign={"center"} 
        columns={td_no_columns} 
        rows={rows} 
        getRowId={(row) => row.id} // make sure DataGrid uses correct key
      />
    </Box>
  )
}

export default LandTaxPage;
