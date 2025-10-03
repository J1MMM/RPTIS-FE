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
  FormControl,
  Chip,
} from "@mui/material";
import { DataGrid } from "@mui/x-data-grid";
import axios from "axios";
import StyledFieldset from "../../../../../components/ui/StyledFieldset";
import { computeTotal } from "../../../utils/computation.utils";

const allowedQuarters = ["first", "second", "third", "fourth"];

export default function OrdersForm({ row, onSuccess }) {
  const currentTaxYear = new Date().getFullYear();

  const [orders, setOrders] = useState([]);
  const [form, setForm] = useState({
    td_no: row?.td_no,
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
  const [loading, setLoading] = useState(false);

  const handleChange = (field, value) => {
    setForm({ ...form, [field]: value });
  };

  const handleQuarterChange = (event) => {
    const value = event.target.value;
    setForm({ ...form, quarter: [...new Set(value)] });
  };

  const handleAddOrder = () => {
    const { basicTax, penalty, discount, total, percentage, percentagePenalty } =
      computeTotal(form.total_assessed_value, form.tax_due, form.quarter);

    const newOrder = {
      id: orders.length + 1,
      ...form,
      basic_tax: basicTax,
      penalty,
      discount,
      total,
      quarterPercentage: percentage,
      percentagePenalty,
    };

    setOrders([...orders, newOrder]);

    setForm({
      td_no: row?.td_no,
      tax_year: currentTaxYear, // reset to current year
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

    setOpen(false);
  };

  const handleSubmitOrders = async () => {
    try {
      setLoading(true);

      const payload = {
        td_no: row?.td_no,
        orders: orders,
      };

      const res = await axios.post(
        "http://localhost:3000/api/landtax/computations",
        payload
      );

      alert("Orders submitted successfully!");
      setOrders([]);
      onSuccess?.(); // refresh parent data if needed
    } catch (err) {
      console.error("Submit failed:", err);
      alert(err.response?.data?.message || "Error submitting orders");
    } finally {
      setLoading(false);
    }
  };

  const columns = [
    { field: "td_no", headerName: "ARP No", flex: 1 },
    { field: "tax_year", headerName: "Tax Year", flex: 1 },
    { field: "tax_due", headerName: "Tax Due", flex: 1 },
    { field: "current_owner", headerName: "Owner", flex: 1 },
    { field: "total_assessed_value", headerName: "Assessment Value", flex: 1 },
    { field: "basic_tax", headerName: "Basic", flex: 1 },
    { field: "penalty", headerName: "Penalty", flex: 1 },
    { field: "discount", headerName: "Discount", flex: 1 },
    { field: "total", headerName: "Total", flex: 1 },
    { field: "quarterPercentage", headerName: "Quarter %", flex: 1 },
    { field: "percentagePenalty", headerName: "Penalty %", flex: 1 },
    { field: "payor", headerName: "Payor", flex: 1 },
    { field: "clerk", headerName: "Clerk", flex: 1 },
  ];

  return (
    <Box p={2}>
      <Button variant="contained" onClick={() => setOpen(true)}>
        + Add Order
      </Button>

      <Box mt={2} style={{ height: 300, width: "100%" }}>
        <DataGrid
          rows={orders}
          columns={columns}
          getRowId={(row) => row.id}
          slots={{
            footer: () => (
              <Box
                sx={{
                  p: 2,
                  display: "flex",
                  justifyContent: "flex-end",
                  borderTop: "1px solid #e0e0e0",
                  bgcolor: "#fafafa",
                }}
              >
                <Typography variant="h6">
                  Total:{" "}
                  {orders
                    .reduce((sum, order) => sum + Number(order.total || 0), 0)
                    .toFixed(2)}
                </Typography>
              </Box>
            ),
          }}
        />
      </Box>

      <Box mt={2}>
        <Button
          variant="contained"
          sx={{ backgroundColor: "#287F71", color: "white" }}
          onClick={handleSubmitOrders}
          disabled={orders.length === 0 || loading}
        >
          {loading ? "Submitting..." : "Submit Orders"}
        </Button>
      </Box>

      {/* Order Modal */}
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
                  <TextField sx={{ flex: 1 }} label="ARP No" value={form.td_no} />
                  <TextField sx={{ flex: 1 }} label="Owner" value={form.current_owner} />
                </Stack>
              </StyledFieldset>

              <StyledFieldset title={"Tax Year"}>
                <Stack direction="row" gap={1}>
                  <TextField
                    sx={{ flex: 1 }}
                    label="Tax Year"
                    value={form.tax_year}
                    onChange={(e) => handleChange("tax_year", e.target.value)}
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
