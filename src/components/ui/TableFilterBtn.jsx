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
              padding: "5px 20px",
              border: "0.1px solid",
              borderColor: "#009689b3"
            },
          },
        }}
      />
    </GridToolbarContainer>
  );
}
