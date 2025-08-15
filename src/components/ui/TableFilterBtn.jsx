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
              marginTop: "-3px",
              padding: "5.5px 20px",
              border: "1px solid #414780",
            },
          },
        }}
      />
    </GridToolbarContainer>
  );
}
