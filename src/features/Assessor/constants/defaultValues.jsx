import { FIELD_NAMES } from "./fieldNames";

export const LAND_APPRAISAL_DEFAULT_DATA = {
  [FIELD_NAMES.LAND_CLASSIFICATION]: "",
  [FIELD_NAMES.LAND_SUB_CLASS]: "",
  [FIELD_NAMES.LAND_AREA]: "",
  [FIELD_NAMES.LAND_UNIT_VALUE]: 0,
  [FIELD_NAMES.LAND_BASE_MARKET_VALUE]: 0,
  [FIELD_NAMES.LAND_ACTUAL_USE]: "",
  adjusted: false,
};

export const DATA_GRID_INITIAL_STATE = {
  pagination: {
    paginationModel: {
      pageSize: 100,
      page: 0,
    },
  },
};

export const SAMPLE_DATA = [
  {
    id: 1,
    fname: "Juan",
    mname: "S.",
    lname: "Dela Cruz",
    PID: "PID-001",
    ArpNo: "ARP-2024-0001",
    oldArp: "ARP-2020-0001",
    Address: "123 Mabini St, San Pablo City",
    Boundaries: {
      land: true,
      building: false,
      machinery: true,
      others: false,
    },
    classification: [
      {
        classification: "Residential",
        assessedValue: "₱500,000",
      },
    ],
    BLOCK: "Block 12",
    Brgy: "Barangay 4",
    LocationOfProperty: "Block 12 Barangay 4", // Optional if not used directly
    AssessedValue: "₱500,000", // Optional if not used directly
    TAXABILITY: "taxable",
    dateOfEffectivity: "2025-01-01",
  },
  {
    id: 2,
    fname: "Maria",
    mname: "L.",
    lname: "Reyes",
    PID: "PID-002",
    ArpNo: "ARP-2024-0002",
    oldArp: "ARP-2019-0002",
    Address: "456 Bonifacio Ave, San Pablo City",
    Boundaries: {
      land: true,
      building: true,
      machinery: false,
      others: false,
    },
    classification: [
      {
        classification: "Commercial",
        assessedValue: "₱1,200,000",
      },
      {
        classification: "Industrial",
        assessedValue: "₱300,000",
      },
    ],
    BLOCK: "Block 9",
    Brgy: "Barangay 2",
    TAXABILITY: "exempt",
    dateOfEffectivity: "2024-06-15",
  },
];

export const DEFAULT_FIELD_VALUES = {
  // property info
  [FIELD_NAMES.TRANSACTION_CODE]: "",
  [FIELD_NAMES.ARP_NO]: "",
  [FIELD_NAMES.PIN]: "",
  [FIELD_NAMES.NO_AND_STREET]: "",
  [FIELD_NAMES.BARANGAY]: "",
  [FIELD_NAMES.CITY]: "San Pablo City", // example fixed value
  [FIELD_NAMES.PROVINCE]: "Laguna", // example fixed value
  [FIELD_NAMES.OCT_TCT_NO]: "",
  [FIELD_NAMES.DATE]: null,
  [FIELD_NAMES.LOT_NO]: "",
  [FIELD_NAMES.BLOCK_NO]: "",
  [FIELD_NAMES.SURVEY_NO]: "",

  // owner info
  [FIELD_NAMES.OWNER_FULLNAME]: "",
  [FIELD_NAMES.OWNER_TIN]: "",
  [FIELD_NAMES.OWNER_STREET]: "",
  [FIELD_NAMES.OWNER_BARANGAY]: "",
  [FIELD_NAMES.OWNER_CITY]: "",
  [FIELD_NAMES.OWNER_PROVINCE]: "",

  // admin info
  [FIELD_NAMES.ADMINISTRATOR_FULLNAME]: "",
  [FIELD_NAMES.ADMINISTRATOR_STREET]: "",
  [FIELD_NAMES.ADMINISTRATOR_BRGY]: "",
  [FIELD_NAMES.ADMINISTRATOR_CITY]: "",
  [FIELD_NAMES.ADMINISTRATOR_PROVINCE]: "",
  [FIELD_NAMES.ADMIN_TEL]: "",
  [FIELD_NAMES.ADMINISTRATOR_TIN]: "",

  // boundaries
  [FIELD_NAMES.NORTH_BOUNDARY]: "",
  [FIELD_NAMES.SOUTH_BOUNDARY]: "",
  [FIELD_NAMES.EAST_BOUNDARY]: "",
  [FIELD_NAMES.WEST_BOUNDARY]: "",
  [FIELD_NAMES.NE_BOUNDARY]: "",
  [FIELD_NAMES.SW_BOUNDARY]: "",
  [FIELD_NAMES.SE_BOUNDARY]: "",
  [FIELD_NAMES.NW_BOUNDARY]: "",

  // land appraisal
  [FIELD_NAMES.LAND_APPRAISAL]: [],

  // market adjustment
  [FIELD_NAMES.MARKET_ADJUSTMENT_CLASSIFICATION]: "",
  [FIELD_NAMES.MARKET_ADJUSTMENT_SUB_CLASS]: "",
  [FIELD_NAMES.MARKET_ADJUSTMENT_UNIT_VALUE]: "",
  [FIELD_NAMES.MARKET_ADJUSTMENT_BASE_MARKET_VALUE]: "",

  // property assessment
  [FIELD_NAMES.PROPERTY_ASSESSMENT]: [],
  [FIELD_NAMES.PROPERTY_ASSESSMENT_ACTUAL_USE]: "",
  [FIELD_NAMES.PROPERTY_ASSESSMENT_LEVEL]: 0,
  [FIELD_NAMES.PROPERTY_MARKET_VALUE]: "",
  [FIELD_NAMES.PROPERTY_ASSESSED_VALUE]: "",

  // taxability
  [FIELD_NAMES.TAXABILITY]: "",

  // effectivity of assessment/reassessment
  [FIELD_NAMES.EFFECTIVITY_QTR]: "",
  [FIELD_NAMES.EFFECTIVITY_YEAR]: null,
  [FIELD_NAMES.EFFECTIVITY_DATE_OF_EFFECTIVITY]: null,

  [FIELD_NAMES.TOTAL_MARKET_VALUE]: 0,
};

export const ACTUAL_USE_EQUIVALENTS = {
  residential: 0.15,
  agricultural: 0.4,
  commercial: 0.4,
  industrial: 0.4,
};
