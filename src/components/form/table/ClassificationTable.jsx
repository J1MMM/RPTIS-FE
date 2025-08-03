import { DataGrid } from "@mui/x-data-grid";
import React from "react";
import {
  DATA_GRID_INITIAL_STATE,
  DATA_GRID_STYLE,
  PAGE_SIZE_OPTION,
} from "../../../utils/constant";
import ClassificationCustomFooter from "../custom/ClassificationCustomFooter";
import { sumFieldInArray } from "../../../utils/helper";
import {
  CLASSIFICATION_COLUMN,
  LAND_INNER_TABLE_WIDTH,
} from "../../../pages/Assessor/assessorConstant";

export const ClassificationTable = ({ props, classification, setFormData }) => {
  const handleCellEdit = (id, field, value) => {
    const updatedArr = classification?.map((row) => {
      if (row?.id == id) {
        return { ...row, [field]: value };
      }
      return row;
    });
    setFormData((prev) => ({ ...prev, classification: updatedArr }));
  };

  const handleCellKeyDown = (event, cellParams) => {
    const { field, id } = event; // Get the field and id of the cell being edited
    const newValue = cellParams.target.value; // Get the current value of the input

    if (cellParams.key === "Enter") {
      handleCellEdit(id, field, newValue);
    }
  };
  return (
    <DataGrid
      rows={classification}
      columns={CLASSIFICATION_COLUMN}
      initialState={DATA_GRID_INITIAL_STATE}
      pageSizeOptions={PAGE_SIZE_OPTION}
      disableRowSelectionOnClick
      sx={{ ...DATA_GRID_STYLE, width: LAND_INNER_TABLE_WIDTH }}
      hideFooterPagination
      disableColumnResize
      showCellVerticalBorder
      // slots={{
      //   footer: () => (
      //     <ClassificationCustomFooter
      //       marketValueTotal={marketValueTotal}
      //       assessedValueTotal={assessedValueTotal}
      //       areaValueTotal={areaValueTotal}
      //     />
      //   ),
      // }}
    />
  );
};
