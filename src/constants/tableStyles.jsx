export const DATA_GRID_STYLE = {
  "& .MuiDataGrid-row": {
    fontFamily: "Poppins",
    "&:last-child .MuiDataGrid-cell": {
      borderBottom: "none", // Remove bottom border from last row
    },
  },
  ".MuiDataGrid-columnHeaderTitleContainer": {
    bgcolor: "mono.main",
  },

  ".data-grid-header": {
    bgcolor: "mono.main",
    color: "#000",
    ".MuiDataGrid-columnHeaderTitle": {
      fontWeight: "600",
      fontFamily: "Poppins",
    },
    "&.MuiDataGrid-root": {
      border: "none",
      color: "#000",
    },
    ".MuiIconButton-sizeSmall": {
      color: "#000",
    },
  },
  "& .MuiDataGrid-cell:focus": {
    outline: "none",
  },
  "& .MuiDataGrid-cell:focus-within": {
    outline: "none",
  },
  border: "none",
};

export const PAGE_SIZE_OPTION = [10, 50, 100];
export const DATA_GRID_INITIAL_STATE = {
  pagination: {
    paginationModel: {
      pageSize: 100,
      page: 0,
    },
  },
};
