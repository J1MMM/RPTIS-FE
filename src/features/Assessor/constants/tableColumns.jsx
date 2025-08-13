import { formatPercent, formatPeso } from "../../../utils/formatters";
import { roundToNearestTen } from "../../../utils/math";
import { FIELD_NAMES } from "./fieldNames";

export const APPRAISAL_COLUMN = [
  {
    field: FIELD_NAMES.LAND_CLASSIFICATION,
    headerName: "Classification",
    flex: 1,
    headerClassName: "data-grid-header",
    sortable: false,
    filterable: false,
    disableColumnMenu: true,
  },
  {
    field: FIELD_NAMES.LAND_SUB_CLASS,
    headerName: "Sub-Classification",
    flex: 1,
    headerClassName: "data-grid-header",
    sortable: false,
    filterable: false,
    disableColumnMenu: true,
  },
  {
    field: FIELD_NAMES.LAND_AREA,
    headerName: "Area",
    flex: 1,
    headerClassName: "data-grid-header",
    sortable: false,
    filterable: false,
    disableColumnMenu: true,
    valueFormatter: (params) => {
      const value = Number(params);
      return isNaN(value) ? "" : `${value?.toLocaleString()} m²`;
    },
  },
  {
    field: FIELD_NAMES.LAND_UNIT_VALUE,
    headerName: "Unit Value",
    flex: 1,
    headerClassName: "data-grid-header",
    sortable: false,
    filterable: false,
    disableColumnMenu: true,
    valueFormatter: (params) => {
      const value = Number(params);
      return isNaN(value) ? "" : formatPeso(value);
    },
  },
  {
    field: FIELD_NAMES.LAND_BASE_MARKET_VALUE,
    headerName: "Base Market Value",
    flex: 1,
    headerClassName: "data-grid-header",
    sortable: false,
    filterable: false,
    disableColumnMenu: true,
    valueFormatter: (params) => {
      const value = Number(params);
      return isNaN(value) ? "" : formatPeso(value);
    },
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
    valueFormatter: (params) => {
      const value = Number(params);
      return isNaN(value) ? "" : formatPeso(value);
    },
  },
  {
    field: FIELD_NAMES.MARKET_ADJUSTMENT_FACTORS,
    headerName: "Adjustment Factors",
    flex: 1,
    headerClassName: "data-grid-header",
    sortable: false,
    filterable: false,
    disableColumnMenu: true,
  },

  {
    field: FIELD_NAMES.MARKET_ADJUSTMENT_PERCENT,
    headerName: "% Adjustment ",
    flex: 1,
    headerClassName: "data-grid-header",
    sortable: false,
    filterable: false,
    disableColumnMenu: true,
    valueFormatter: (params) => {
      const value = Number(params);
      return isNaN(value) ? "" : formatPercent(value);
    },
  },
  {
    field: FIELD_NAMES.ADJUSTED_MARKETVALUE,
    headerName: "Value Adjustment",
    flex: 1,
    headerClassName: "data-grid-header",
    sortable: false,
    filterable: false,
    disableColumnMenu: true,
    valueFormatter: (params) => {
      const value = Number(params);
      return isNaN(value) ? "" : formatPeso(value);
    },
  },
];

export const PROPERTY_ASS_TABLE_COLUMN = [
  {
    field: FIELD_NAMES.LAND_MARKET_VALUE,
    headerName: "Market Value",
    flex: 1,
    headerClassName: "data-grid-header",
    sortable: false,
    filterable: false,
    disableColumnMenu: true,
    valueFormatter: (params) => {
      const value = Number(params);
      return isNaN(value) ? "" : formatPeso(value);
    },
  },

  {
    field: FIELD_NAMES.LAND_ASSESSMENT_LEVEL,
    headerName: "Assessment Level",
    flex: 1,
    headerClassName: "data-grid-header",
    sortable: false,
    filterable: false,
    disableColumnMenu: true,
    valueFormatter: (params) => {
      const value = Number(params);
      return isNaN(value) ? "" : formatPercent(value);
    },
  },
  {
    field: FIELD_NAMES.LAND_ASSESSED_VALUE,
    headerName: "Assessed Value",
    flex: 1,
    headerClassName: "data-grid-header",
    sortable: false,
    filterable: false,
    disableColumnMenu: true,
    valueFormatter: (params) => {
      const value = Number(params);
      return isNaN(value) ? "" : formatPeso(roundToNearestTen(value));
    },
  },
];
