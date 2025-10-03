import { Box, Stack, Button, Modal, Typography } from '@mui/material'
import React, { useState, useEffect } from 'react'
import { DataGrid } from '@mui/x-data-grid';
import axios from 'axios';

function Computations() {
  const [rows, setRows] = useState([]);
  const [open, setOpen] = useState(false);
  const [selectedItems, setSelectedItems] = useState([]);

  useEffect(() => {
    const fetchComputations = async () => {
      try {
        const res = await axios.get("http://localhost:3000/api/landtax/computations");
        if (res.data && res.data.data) {
          const formatted = res.data.data.map((item) => ({
            id: item.id,
            td_no: item.td_no,
            total: item.total,
            current_owner: item.current_owner ?? "N/A",
            status: item.status,
            createdAt: new Date(item.createdAt).toLocaleString(),
            updatedAt: new Date(item.updatedAt).toLocaleString(),
            items: item.computed_tax_items
          }));
          setRows(formatted);
        }
      } catch (err) {
        console.error("Error fetching computations:", err);
      }
    };

    fetchComputations();
  }, []);

  const handleOpen = (items) => {
    setSelectedItems(items);
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
    setSelectedItems([]);
  };

  const columns = [
    { field: 'td_no', headerName: 'TD No', flex: 1 },
    { field: 'total', headerName: 'Total', flex: 1 },
    { field: 'current_owner', headerName: 'Current Owner', flex: 1 },
    { field: 'status', headerName: 'Status', flex: 1 },

    {
      field: 'items',
      headerName: 'TAX DUES',
      flex: 1,
      renderCell: (params) => (
        <Button 
          variant="contained" 
          size="small" 
          onClick={() => handleOpen(params.value)}
        >
          View Items
        </Button>
      )
    }
  ];

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
        columns={columns}
        rows={rows}
        getRowId={(row) => row.id}
      />

      {/* Modal for Tax Items */}
      <Modal open={open} onClose={handleClose}>
        <Box
          sx={{
            position: 'absolute',
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
            width: 600,
            bgcolor: 'background.paper',
            boxShadow: 24,
            p: 4,
            borderRadius: 2,
            maxHeight: '80vh',
            overflowY: 'auto'
          }}
        >
          <Typography variant="h6" gutterBottom>
            Computed Tax Items
          </Typography>
          {selectedItems.length > 0 ? (
            selectedItems.map((item, i) => (
              <Box 
                key={item.id || i} 
                sx={{ mb: 2, p: 2, border: '1px solid #ddd', borderRadius: 1 }}
              >
                <Typography><b>Tax Year:</b> {item.tax_year}</Typography>
                <Typography><b>Tax Due:</b> {item.tax_due}</Typography>
                <Typography><b>Quarters:</b> {Array.isArray(item.quarter) ? item.quarter.join(", ") : item.quarter}</Typography>
                <Typography><b>Penalty:</b> {item.penalty}</Typography>
                <Typography><b>Total Assessed Value:</b> {item.total_assessed_value}</Typography>
                <Typography><b>Quarter %:</b> {item.quarter_percentage}</Typography>
                <Typography><b>Owner:</b> {item.current_owner}</Typography>
                <Typography><b>Status:</b> {item.status}</Typography>
              </Box>
            ))
          ) : (
            <Typography>No items found.</Typography>
          )}
        </Box>
      </Modal>
    </Box>
  )
}

export default Computations;
