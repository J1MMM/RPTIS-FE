import { Button, Stack, Typography } from "@mui/material";
import { useGridApiContext } from "@mui/x-data-grid";
import TableFilterBtn from "../ui/TableFilterBtn";
import SegmentedTabs from "../navigation/SegmentedTabs";

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
      // border={"1px solid"}
      px={2}
      width="100%"
      flexDirection="row"
      justifyContent="space-between"
      alignItems="center"
      mb={1}
      pt={.3}
    >
      {/* <Stack>
        <Typography variant="h6" fontWeight={600}>
          {titleText}
        </Typography>
        <Typography variant="body2">{subText}</Typography>
      </Stack> */}
      <SegmentedTabs />
      <Stack direction="row" gap={1} alignItems="center">
        <TableFilterBtn />
        <Button variant="outlined" onClick={handleDownload}>
          Export CSV
        </Button>
        {actionBtn}
      </Stack>
    </Stack>
  );
};
