// src/components/AddComputationModal.jsx
import { Box, TextField, FormControl, InputLabel, Select, MenuItem, Chip, Stack,OutlinedInput } from '@mui/material';
import React, { useState } from 'react';
import ContainerModal from '../../../../../../components/shared/ContainerModal';
import StyledFieldset from '../../../../../../components/ui/StyledFieldset';

function AddComputationModal({ open, handleClose, handleSave }) {
  const [quarters, setQuarters] = useState([]);
  const quarterOptions = ["first", "second", "third", "fourth"];

  const handleQuarterChange = (event) => {
    const { value } = event.target;
    setQuarters(typeof value === 'string' ? value.split(',') : value);
  };

  const onSubmit = () => {
    const data = {
      taxYear: "2025", // later you can bind TextField value
      amount: "1000",  // later you can bind TextField value
      quarter: quarters,
    };
    handleSave(data);
  };

  return (
    <ContainerModal
      title="ADD Computation"
      open={open}
      onClose={handleClose}
      onSubmit={onSubmit}
    >
      <StyledFieldset title="Computation">
        <Stack spacing={2}>
          <TextField
            label="Tax Year"
            fullWidth
            size="small"
          />
          <TextField
            label="Amount"
            fullWidth
            size="small"
          />

          {/* Quarter Multi-select */}
          <FormControl size="small">
            <InputLabel id="quarter-select-label">Quarter</InputLabel>
            <Select
              labelId="quarter-select-label"
              multiple
              value={quarters}
              onChange={handleQuarterChange}
              input={<OutlinedInput label="Quarter" />}   // ✅ fixes border + label overlap
              renderValue={(selected) => (
                <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 0.5 }}>
                  {selected.map((value) => (
                    <Chip key={value} label={value} />
                  ))}
                </Box>
              )}
            >
              {quarterOptions.map((q) => (
                <MenuItem key={q} value={q}>
                  {q.charAt(0).toUpperCase() + q.slice(1)} Quarter
                </MenuItem>
              ))}
            </Select>
          </FormControl>

        </Stack>
      </StyledFieldset>
    </ContainerModal>
  );
}

export default AddComputationModal;
