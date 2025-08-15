import { DataGrid } from "@mui/x-data-grid";
import { APPRAISAL_COLUMN } from "../../../constants/tableColumns";
import { IconButton, InputAdornment, MenuItem, TextField } from "@mui/material";
import { Close } from "@mui/icons-material";
import { ADJUSTMENT_FACTOR_OPTIONS } from "../../../constants/dropdownOptions";
import {
  DATA_GRID_INITIAL_STATE,
  DATA_GRID_STYLE,
} from "@constants/tableStyles";
import DividerHeading from "@components/ui/DividerHeading";

function SelectAppraisalTable({
  rows,
  selectedRow,
  selectedRowEmpty,
  selectedFactor,
  handleAdjustmentFactorChange,
  onClear,
}) {
  return (
    <>
      <DividerHeading mt={0}> Land Appraisal</DividerHeading>
      <DataGrid
        rows={rows}
        columns={[
          ...APPRAISAL_COLUMN,
          {
            field: "Adjustment",
            headerName: "Adjustment",
            headerClassName: "data-grid-header",
            sortable: false,
            filterable: false,
            disableColumnMenu: true,
            headerAlign: "center",
            align: "center",
            width: 220,
            display: "flex",

            renderCell: (params) => {
              const isSelected = params.row.id === selectedRow?.id;

              return (
                <TextField
                  select
                  size="small"
                  variant="standard"
                  fullWidth
                  value={isSelected ? selectedFactor : ""}
                  onChange={(e) =>
                    handleAdjustmentFactorChange(params.row, e.target.value)
                  }
                  slotProps={{
                    input: {
                      startAdornment: isSelected ? (
                        <InputAdornment position="start">
                          <IconButton size="small" onClick={onClear}>
                            <Close fontSize="small" />
                          </IconButton>
                        </InputAdornment>
                      ) : null,
                    },
                  }}
                >
                  <MenuItem disabled value="">
                    <em>Select Factor</em>
                  </MenuItem>
                  {ADJUSTMENT_FACTOR_OPTIONS.map((item) => (
                    <MenuItem key={item.value} value={item.value}>
                      {item.label}
                    </MenuItem>
                  ))}
                </TextField>
              );
            },
          },
        ]}
        initialState={DATA_GRID_INITIAL_STATE}
        disableRowSelectionOnClick
        sx={{
          ...DATA_GRID_STYLE,
          borderBottom: "1px solid #e3e3e3",
          minHeight: 220,
          maxHeight: 220,

          "& .disabled-row": {
            opacity: 0.5,
            userSelect: "none",
            pointerEvents: "none",
          },
          "& .active-row": {
            bgcolor: "#EDF0F6",
          },

          "& .active-row:hover": {
            bgcolor: "#EDF0F6",
          },
        }}
        hideFooterPagination
        disableColumnResize
        showCellVerticalBorder
        hideFooter
        getRowClassName={(params) =>
          !selectedRowEmpty
            ? params.row.id === selectedRow?.id
              ? "active-row"
              : "disabled-row"
            : ""
        }
      />
    </>
  );
}

export default SelectAppraisalTable;
