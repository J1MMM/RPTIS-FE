import React, { useState } from "react";
import {
  Box,
  Button,
  Modal,
  Stack,
  TextField,
  Typography,
  MenuItem,
  Select,
  InputLabel,
  FormControl,
  Chip,
} from "@mui/material";
import { DataGrid } from "@mui/x-data-grid";
import StyledFieldset from "../../../../../components/ui/StyledFieldset";
import { computeTotal } from "../../../utils/computation.utils";

const allowedQuarters = ["first", "second", "third", "fourth"];

export default function OrdersForm({ row }) {
  const currentTaxYear = new Date().getFullYear();

  const [orders, setOrders] = useState([]);

  const [form, setForm] = useState({
    tax_dec: row?.tax_dec,
    tax_year: currentTaxYear,
    tax_due: "",
    basic_tax: "",
    discount: "",
    penalty: "",
    total: "",
    total_assessed_value: row?.total_assessed_value,
    quarter: [],
    quarterPercentage: "",
    current_owner: row?.name,
    payor: "",
    clerk: "",
    kind: row?.kind,
  });

  const [open, setOpen] = useState(false);

  const handleChange = (field, value) => {
    setForm({ ...form, [field]: value });
  };

  const handleQuarterChange = (event) => {
    const value = event.target.value;
    // Ensure unique values (no duplicates)
    const unique = [...new Set(value)];
    setForm({ ...form, quarter: unique });
  };

  const handleAddOrder = () => {
    const { basicTax, penalty, discount, total,percentage } = computeTotal(
      form.total_assessed_value,
      form.tax_due,
      form.quarter
    );

    const newOrder = {
      id: orders.length + 1,
      ...form,
      basic_tax: basicTax,
      penalty,
      discount,
      total,
      quarterPercentage:percentage
    };

    setOrders([...orders, newOrder]);

    setForm({
      ...form,
      basic_tax: "",
      discount: "",
      penalty: "",
      total: "",
      tax_due: "",
      clerk: "",
      quarter: [],
      quarterPercentage: "",
    });

    setOpen(false);
  };

  const columns = [
    { field: "tax_dec", headerName: "ARP No", flex: 1 },
    { field: "tax_year", headerName: "Tax Year", flex: 1 },
    { field: "tax_due", headerName: "Tax Due", flex: 1 },
    { field: "current_owner", headerName: "Owner", flex: 1 },
    { field: "total_assessed_value", headerName: "Assessment Value", flex: 1 },
    { field: "basic_tax", headerName: "Basic", flex: 1 },
    { field: "penalty", headerName: "Penalty", flex: 1 },
    { field: "discount", headerName: "Discount", flex: 1 },
    { field: "total", headerName: "Total", flex: 1 },
    // {
    //   field: "quarter",
    //   headerName: "Quarter",
    //   flex: 1,
    //   renderCell: (params) => params.value?.join(", "),
    // },
    {
      field: "quarterPercentage",
      headerName: "Quarter %",
      flex: 1,
    },
    { field: "payor", headerName: "Payor", flex: 1 },
    { field: "clerk", headerName: "Clerk", flex: 1 },
  ];

  return (
    <Box p={2}>
      <Button variant="contained" onClick={() => setOpen(true)}>
        + Add Order
      </Button>

      <Box mt={2} style={{ height: 300, width: "100%" }}>
        <DataGrid rows={orders} columns={columns} />
      </Box>

      <Box mt={2}>
        <Button
          variant="contained"
          sx={{ backgroundColor: "#287F71", color: "white" }}
          onClick={() => console.log(orders)}
          disabled={orders.length === 0}
        >
          Submit Orders
        </Button>
      </Box>

      <Modal open={open} onClose={() => setOpen(false)}>
        <Box
          sx={{
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            width: "50vw",
            bgcolor: "background.paper",
            p: 3,
            borderRadius: 2,
          }}
        >
          <StyledFieldset title={"Add Order"}>
            <Stack spacing={2}>
              <StyledFieldset title={"Property Assessment"}>
                <Stack direction="row" gap={1}>
                  <TextField
                    sx={{ flex: 1 }}
                    label="ARP No"
                    value={form.tax_dec}
                  />
                  <TextField
                    sx={{ flex: 1 }}
                    label="Owner"
                    value={form.current_owner}
                  />
                </Stack>
              </StyledFieldset>

              <StyledFieldset title={"Tax Year"}>
                <Stack direction="row" gap={1}>
                  <TextField
                    sx={{ flex: 1 }}
                    label="Tax Year"
                    value={form.tax_year}
                  />
                  <TextField
                    sx={{ flex: 1 }}
                    label="Tax Due"
                    value={form.tax_due}
                    onChange={(e) => handleChange("tax_due", e.target.value)}
                  />
                </Stack>
              </StyledFieldset>

              <StyledFieldset title={"Quarter"}>
                <FormControl fullWidth>
                  <Select
                    labelId="quarter-label"
                    multiple
                    value={form.quarter}
                    onChange={handleQuarterChange}
                    renderValue={(selected) => (
                      <Stack direction="row" gap={1} flexWrap="wrap">
                        {selected.map((q) => (
                          <Chip key={q} label={q} />
                        ))}
                      </Stack>
                    )}
                  >
                    {allowedQuarters.map((q) => (
                      <MenuItem key={q} value={q}>
                        {q}
                      </MenuItem>
                    ))}
                  </Select>
                </FormControl>
              </StyledFieldset>

              <StyledFieldset title={"Payor"}>
                <TextField
                  label="Fullname"
                  fullWidth
                  value={form.payor}
                  onChange={(e) => handleChange("payor", e.target.value)}
                />
              </StyledFieldset>

              <TextField
                label="Clerk"
                value={form.clerk}
                onChange={(e) => handleChange("clerk", e.target.value)}
              />
            </Stack>
          </StyledFieldset>

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
