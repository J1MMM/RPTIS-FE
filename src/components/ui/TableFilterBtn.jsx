import {
  GridToolbarContainer,
  GridToolbarFilterButton,
} from "@mui/x-data-grid";

export default function TableFilterBtn() {
  return (
    <GridToolbarContainer>
      <GridToolbarFilterButton
        slotProps={{
          button: {
            style: {
              marginBottom: "4px",
              padding: "5px 20px",
              border: "0.1px solid",
            },
          },
        }}
      />
    </GridToolbarContainer>
  );
}
