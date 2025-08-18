import { TextField, styled } from "@mui/material";

const CustomTextField = styled(TextField)(({ theme }) => ({
  backgroundColor: "#f5f5f5",
  "& .MuiOutlinedInput-root": {
    color: "#333",
    "& fieldset": {
      borderColor: "gray",
    },
    "&:hover fieldset": {
      borderColor: "blue",
    },
    "&.Mui-focused fieldset": {
      borderColor: "purple",
    },
  },
}));

export default CustomTextField

