import React, { useState } from "react";
import { Button, Stack } from "@mui/material";
import AddComputationModal from "../components/forms/land/modals/AddComputationModal"; // adjust path if needed

// Small component to handle modal state per row
function ActionCell({ params }) {
  const [open, setOpen] = useState(false);

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const handleSave = () => {
    console.log("Saving for row:", params.row);
    setOpen(false);
  };

  return (
    <>

      <Button variant="outlined" size="small" onClick={handleOpen}>
        add
      </Button>
      <Button variant="outlined" size="small" onClick={handleOpen}>
        view
      </Button>



      <AddComputationModal
        open={open}
        handleClose={handleClose}
        handleSave={handleSave}
        row={params.row}
      />
    </>
  );
}

export const tax_dec_columns = [
  {
    field: "tax_dec",
    headerName: "TAX DEC.",
    flex: 1,
    headerAlign: "center",
  },
  {
    field: "name",
    headerName: "NAME",
    flex: 1,
    headerAlign: "center",
  }, {
    field: "total_area",
    headerName: "AREA",
    flex: 1,
    headerAlign: "center",
  }, {
    field: "total_assessed_value",
    headerName: "ASSESSED VALUE",
    flex: 1,
    headerAlign: "center",
  }, {
    field: "effecitivity_of_assessment",
    headerName: "EFFECTIVITY YEAR",
    flex: 1,
    headerAlign: "center",
  }, {
    field: "kind",
    headerName: "KIND",
    flex: 1,
    headerAlign: "center",
  }, {
    field: "effecitivity_of_quarter",
    headerName: "EFFECTIVITY QUARTER",
    flex: 1,
    headerAlign: "center",
  },
  {
    field: "action",
    headerName: "ACTION",
    flex: 1,
    headerAlign: "center",
    renderCell: (params) =>
      <Stack direction={"row"} gap={1} display={"flex"} justifyContent={"center"} padding={1}>
        <ActionCell params={params} />
      </Stack>
    ,

  }
]

export const columns = [
  {
    field: "tax_dec",
    headerName: "TAX DEC.",
    flex: 1,
    headerAlign: "center",
  },
  {
    field: "pin_no",
    headerName: "PIN NO.",
    flex: 1,
    headerAlign: "center",
  },
  {
    field: "name",
    headerName: "NAME",
    flex: 1,
    headerAlign: "center",
  },
  {
    field: "year",
    headerName: "TAX YEAR",
    flex: 1,
    headerAlign: "center",
  },
  {
    field: "paymentPercentage",
    headerName: "PAYMENT %",
    flex: 1,
    headerAlign: "center",
  },
  {
    field: "basic_tax",
    headerName: "BASIC TAX",
    flex: 1,
    headerAlign: "center",
  },
  {
    field: "penalty",
    headerName: "PENALTY",
    flex: 1,
    headerAlign: "center",
  },
  {
    field: "discount",
    headerName: "DISCOUNT",
    flex: 1,
    headerAlign: "center",
  },
  {
    field: "total_collection",
    headerName: "COLLECTION",
    flex: 1,
    headerAlign: "center",
  },
  {
    field: "or_no",
    headerName: "OR NO.",
    flex: 1,
    headerAlign: "center",
  },
  {
    field: "date_of_payment",
    headerName: "PAYMENT DATE",
    flex: 1,
    headerAlign: "center",
  },
  {
    field: "clerk_name",
    headerName: "CLERK",
    flex: 1,
    headerAlign: "center",
  },
  {
    field: "action",
    headerName: "ACTION",
    flex: 1,
    headerAlign: "center",
    renderCell: (params) => <ActionCell params={params} />,
  },
];
