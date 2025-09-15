import React, { useState } from "react";
import {
  Box,
  Button,
  Modal,
  Stack,
  TextField,
  Typography
} from "@mui/material";
import { DataGrid } from "@mui/x-data-grid";

export default function OrdersForm() {
  const [orders, setOrders] = useState([]);

  const [form, setForm] = useState({
    arp_no: "",
    tax_year: "2024",
    tax_due: "2016",
    basic_tax: "",
    discount: "",
    penalty: "",
    total: "",
    property_assessment: {
      classification: "residential",
      assessed_value: 4800,
    },
    quarter: ["first", "second", "third", "fourth"],
    current_owner: "",
    payor: "",
    clerk: "",
    kind: "",
  });

  const [open, setOpen] = useState(false);

  const handleChange = (field, value) => {
    setForm({ ...form, [field]: value });
  };

  const handleAddOrder = () => {
    setOrders([...orders, { ...form, id: orders.length + 1 }]);
    setForm({
      ...form,
      arp_no: "",
      basic_tax: "",
      discount: "",
      penalty: "",
      total: "",
      current_owner: "",
      payor: "",
      clerk: "",
      kind: "",
    }); // reset only some fields
    setOpen(false);
  };

  const columns = [
    { field: "arp_no", headerName: "ARP No", flex: 1 },
    { field: "tax_year", headerName: "Tax Year", flex: 1 },
    { field: "tax_due", headerName: "Tax Due", flex: 1 },
    { field: "current_owner", headerName: "Owner", flex: 1 },
    { field: "payor", headerName: "Payor", flex: 1 },
    { field: "clerk", headerName: "Clerk", flex: 1 },
  ];

  return (
    <Box p={2}>
      <Button variant="contained" onClick={() => setOpen(true)}>
        + Add Order
      </Button>

      {/* DataGrid for displaying orders */}
      <Box mt={2} style={{ height: 300, width: "100%" }}>
        <DataGrid rows={orders} columns={columns} />
      </Box>

      {/* Modal for input */}
      <Modal open={open} onClose={() => setOpen(false)}>
        <Box
          sx={{
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            width: 400,
            bgcolor: "background.paper",
            p: 3,
            borderRadius: 2,
          }}
        >
          <Typography variant="h6" mb={2}>
            Add Order
          </Typography>

          <Stack spacing={2}>
            <TextField
              label="ARP No"
              value={form.arp_no}
              onChange={(e) => handleChange("arp_no", e.target.value)}
            />
            <TextField
              label="Tax Year"
              value={form.tax_year}
              onChange={(e) => handleChange("tax_year", e.target.value)}
            />
            <TextField
              label="Tax Due"
              value={form.tax_due}
              onChange={(e) => handleChange("tax_due", e.target.value)}
            />
            <TextField
              label="Owner"
              value={form.current_owner}
              onChange={(e) => handleChange("current_owner", e.target.value)}
            />
            <TextField
              label="Payor"
              value={form.payor}
              onChange={(e) => handleChange("payor", e.target.value)}
            />
            <TextField
              label="Clerk"
              value={form.clerk}
              onChange={(e) => handleChange("clerk", e.target.value)}
            />
          </Stack>

          <Stack direction="row" spacing={2} mt={3}>
            <Button variant="contained" onClick={handleAddOrder}>
              Save
            </Button>
            <Button variant="outlined" onClick={() => setOpen(false)}>
              Cancel
            </Button>
          </Stack>
        </Box>
      </Modal>
    </Box>
  );
}
