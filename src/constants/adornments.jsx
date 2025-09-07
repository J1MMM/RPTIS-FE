import { InputAdornment } from "@mui/material";
import { SYMBOLS } from "./symbols";

export const ADORNMENTS = {
  PESO: {
    startAdornment: (
      <InputAdornment position="start">Php</InputAdornment>
    ),
  },
  PERCENT: {
    endAdornment: (
      <InputAdornment position="end">{SYMBOLS.PERCENT}</InputAdornment>
    ),
  },
  SQM: {
    endAdornment: (
      <InputAdornment position="end">{SYMBOLS.SQUARE_METER}</InputAdornment>
    ),
  },
};
