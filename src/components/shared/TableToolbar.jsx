import { Button, Chip, Stack, Typography } from "@mui/material";
import { useGridApiContext } from "@mui/x-data-grid";
import { splitLastWord } from "../../utils/formatters";
import { Download, Filter, ListFilter } from "lucide-react";

const TableToolbar = ({ titleText, subText, actionBtn, totalRows }) => {
  const apiRef = useGridApiContext();
  const { first, last } = splitLastWord(titleText);

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

  const handleOpenFilterPanel = () => {
    const isOpen = apiRef.current.state.preferencePanel.open;
    if (isOpen) {
      apiRef.current.hideFilterPanel();
    } else {
      apiRef.current.showFilterPanel();
    }
  };

  return (
    <Stack
      // border={"1px solid"}
      px={2}
      width="100%"
      justifyContent="space-between"
      flexDirection={{ md: "column", lg: "row" }}
      alignItems={{ md: "start", lg: "center" }}
      mb={1}
      pt={0.1}
      gap={1}
    >
      <Stack gap={1} direction={"row"} alignItems={"center"}>
        <Typography variant="h5" fontWeight={600}>
          {first} <span style={{ color: "#9CA3AF" }}>{last}</span>
        </Typography>
        {
          totalRows &&
          <Chip
            sx={{
              fontWeight: 600,
              color: "primary.main",
              bgcolor: "background.default",
            }}
            size="small"
            label={`${totalRows} total records`}
          />
        }
      </Stack>
      <Stack
        gap={1}
        direction={{ xs: "column", sm: "row" }}
        alignItems={{ md: "start" }}
      >
        <Button
          variant="outlined"
          onClick={handleDownload}
          startIcon={<Download size={18} />}
        >
          Export CSV
        </Button>
        <Button
          variant="outlined"
          onClick={handleOpenFilterPanel}
          startIcon={<Filter size={18} />}
        >
          Filters
        </Button>
        {actionBtn}
      </Stack>
    </Stack>
  );
};

export default TableToolbar;
