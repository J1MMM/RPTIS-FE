// src/components/AddComputationModal.jsx
import { Box, TextField, FormControl, InputLabel, Select, MenuItem, Chip, Stack,OutlinedInput } from '@mui/material';
import React, { useState } from 'react';
import ContainerModal from '../../../../../../components/shared/ContainerModal';
import StyledFieldset from '../../../../../../components/ui/StyledFieldset';
import OrdersForm from '../../rptar/ComputationModal';
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
      <OrdersForm></OrdersForm>
    </ContainerModal>
  );
}

export default AddComputationModal;
