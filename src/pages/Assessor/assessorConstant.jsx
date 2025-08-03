import { MenuItem, Select } from "@mui/material";
import { act } from "react";

export const CLASSIFICATION_DEFAULT = {
  classification: "",
  subclassification: "",
  area: "",
  baseMarketValue: 0,
  AdjustmentFactors: [],
  otherImprovements: [],
};

export const CLASSIFICATION_DD = [
  { value: "Residential", label: "Residential" },
  { value: "Commercial", label: "Commercial" },
  { value: "Industrial", label: "Industrial" },
  { value: "Agricultural", label: "Agricultural" },
];

export const SUBCLASS_DD = {
  Residential: ["R1", "R2", "R3", "R4", "R5", "R6"],
  Commercial: ["C1", "C2", "C3", "C4"],
  Industrial: ["I1", "I2", "I3"],
  Agricultural: [
    "A1",
    "A2",
    "A3",
    "A4",
    "B1",
    "B2",
    "B3",
    "C1",
    "C2",
    "C3",
    "D1",
    "D2",
    "D3",
  ],
};

export const TRANSACTION_CODE = [
  "SD",
  "CS",
  "DC",
  "PC",
  "DP",
  "DT",
  "TR",
  "RC",
  "GR",
  "SP",
];

export const UNIT_VALUE_TABLE = {
  residential: {
    r1: 2860,
    r2: 1260,
    r3: 800,
    r4: 400,
    r5: 300,
    r6: 200,
  },
  commercial: {
    c1: 8280,
    c2: 5260,
    c3: 3000,
    c4: 2000,
  },
  industrial: {
    i1: 850,
    i2: 600,
    i3: 400,
  },
  agricultural: {
    a1: 17.33,
    a2: 15.95,
    a3: 12.25,
    a4: 9.82,
    b1: 16.162,
    b2: 14.546,
    b3: 11.313,
    c1: 24.53,
    c2: 20.28,
    c3: 13.08,
    d1: 17,
    d2: 15.3,
    d3: 13.6,
  },
};

export const CLASSIFICATION_COLUMN = [
  {
    field: "classification",
    headerName: "Classification",
    flex: 1,
    headerClassName: "data-grid-header",
    sortable: false,
    filterable: false,
    disableColumnMenu: true,
  },
  {
    field: "subClass",
    headerName: "Sub-Classification",
    flex: 1,
    headerClassName: "data-grid-header",
    sortable: false,
    filterable: false,
    disableColumnMenu: true,
  },
  {
    field: "area",
    headerName: "Area",
    flex: 1,
    headerClassName: "data-grid-header",
    sortable: false,
    filterable: false,
    disableColumnMenu: true,
  },
  {
    field: "unitValue",
    headerName: "Unit Value",
    flex: 1,
    headerClassName: "data-grid-header",
    sortable: false,
    filterable: false,
    disableColumnMenu: true,
  },
  {
    field: "baseMarketValue",
    headerName: "Base Market Value",
    flex: 1,
    headerClassName: "data-grid-header",
    sortable: false,
    filterable: false,
    disableColumnMenu: true,
  },
];

export const MARKET_VALUE_TABLE_COLUMN = [
  {
    field: "baseMarketValue",
    headerName: "Base Market Value",
    flex: 1,
    headerClassName: "data-grid-header",
    sortable: false,
    filterable: false,
    disableColumnMenu: true,
  },
  {
    field: "adjustmentFactors",
    headerName: "Adjustment Factors",
    flex: 1,
    headerClassName: "data-grid-header",
    sortable: false,
    filterable: false,
    disableColumnMenu: true,
  },

  {
    field: "adjustmentPercentage",
    headerName: "% Adjustment ",
    flex: 1,
    headerClassName: "data-grid-header",
    sortable: false,
    filterable: false,
    disableColumnMenu: true,
  },
  {
    field: "valueAdjustment",
    headerName: "Value Adjustment",
    flex: 1,
    headerClassName: "data-grid-header",
    sortable: false,
    filterable: false,
    disableColumnMenu: true,
  },
  {
    field: "marketValue",
    headerName: "Market Value",
    flex: 1,
    headerClassName: "data-grid-header",
    sortable: false,
    filterable: false,
    disableColumnMenu: true,
  },
];
export const PROPERTY_ASS_TABLE_COLUMN = [
  {
    field: "actualUse",
    headerName: "Actual Use",
    flex: 1,
    headerClassName: "data-grid-header",
    sortable: false,
    filterable: false,
    disableColumnMenu: true,
  },
  {
    field: "marketValue",
    headerName: "Market Value",
    flex: 1,
    headerClassName: "data-grid-header",
    sortable: false,
    filterable: false,
    disableColumnMenu: true,
  },

  {
    field: "assessmentLevel",
    headerName: "Assessment Level",
    flex: 1,
    headerClassName: "data-grid-header",
    sortable: false,
    filterable: false,
    disableColumnMenu: true,
  },
  {
    field: "assessedValue",
    headerName: "Assessed Value",
    flex: 1,
    headerClassName: "data-grid-header",
    sortable: false,
    filterable: false,
    disableColumnMenu: true,
  },
];

export const LAND_INNER_TABLE_WIDTH = "calc(100% - 8px)";

export const ACTUALUSE_EQUI_LEVEL = {
  residential: 0.15,
  agricultural: 0.4,
  commercial: 0.4,
  industrial: 0.4,
};
