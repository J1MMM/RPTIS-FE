import { Box, Button, Stack, Typography } from "@mui/material";
import {
  GridToolbarContainer,
  GridToolbarFilterButton,
  useGridApiContext,
} from "@mui/x-data-grid";
import React from "react";
import TableFilterBtn from "./TableFilterBtn";

export const TableToolbar = ({ titleText, subText, actionBtn }) => {
  const apiRef = useGridApiContext();

  const handleDownload = () => {
    const confirmDownload = window.confirm(
      "Do you want to download the CSV file?"
    );

    if (confirmDownload) {
      apiRef.current.exportDataAsCsv({
        fileName: "my-data",
        utf8WithBom: true,
      });
    }
  };

  return (
    <Stack
      width="100%"
      flexDirection="row"
      justifyContent="space-between"
      alignItems="center"
      mb={2}
    >
      <Stack>
        <Typography variant="h6" fontWeight={600}>
          {titleText}
        </Typography>
        <Typography variant="body2">{subText}</Typography>
      </Stack>
      <Stack direction="row" gap={1} alignItems="center">
        <Button variant="outlined" onClick={handleDownload}>
          Export CSV
        </Button>
        <TableFilterBtn />
        {actionBtn}
      </Stack>
    </Stack>
  );
};
