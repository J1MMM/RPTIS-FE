import { FIELDS } from "./fieldNames";

export const APPRAISAL_FORM_DEFAULT = {
  id: "",
  appraisalID: "",
  adjusted: false,
  [FIELDS.LAND_CLASSIFICATION]: "",
  [FIELDS.SUBCLASS]: "",
  [FIELDS.LAND_AREA]: "",
  [FIELDS.LAND_UNIT_VALUE]: "",
  [FIELDS.LAND_BASE_MARKET_VALUE]: "",
  [FIELDS.LAND_MARKET_VALUE]: "",
  [FIELDS.LAND_ACTUAL_USE]: "",
  [FIELDS.LAND_ASSESSMENT_LEVEL]: "",
  [FIELDS.LAND_ASSESSED_VALUE]: "",
  totalValueAdjustment: "",
  marketAdjustmentFactors: "",
  marketValueAdjustmentInputArea: "",
};

export const DATA_GRID_INITIAL_STATE = {
  pagination: {
    paginationModel: {
      pageSize: 100,
      page: 0,
    },
  },
};



export const DEFAULT_FIELD_VALUES = {
  // property info
  [FIELDS.TRANSACTION_CODE]: "",
  [FIELDS.ARP_NO]: "",
  [FIELDS.PIN]: "",
  [FIELDS.NO_AND_STREET]: "",
  [FIELDS.BARANGAY]: "",
  [FIELDS.CITY]: "San Pablo City", // example fixed value
  [FIELDS.PROVINCE]: "Laguna", // example fixed value
  [FIELDS.OCT_TCT_NO]: "",
  [FIELDS.DATE]: null,
  [FIELDS.LOT_NO]: "",
  [FIELDS.BLOCK_NO]: "",
  [FIELDS.SURVEY_NO]: "",

  // owner info
  [FIELDS.OWNER_FULLNAME]: "",
  [FIELDS.OWNER_TIN]: "",
  [FIELDS.OWNER_STREET]: "",
  [FIELDS.OWNER_BARANGAY]: "",
  [FIELDS.OWNER_CITY]: "",
  [FIELDS.OWNER_PROVINCE]: "",

  // admin info
  [FIELDS.ADMINISTRATOR_FULLNAME]: "",
  [FIELDS.ADMINISTRATOR_STREET]: "",
  [FIELDS.ADMINISTRATOR_BRGY]: "",
  [FIELDS.ADMINISTRATOR_CITY]: "",
  [FIELDS.ADMINISTRATOR_PROVINCE]: "",
  [FIELDS.ADMIN_TEL]: "",
  [FIELDS.ADMINISTRATOR_TIN]: "",

  // boundaries
  [FIELDS.NORTH_BOUNDARY]: "",
  [FIELDS.SOUTH_BOUNDARY]: "",
  [FIELDS.EAST_BOUNDARY]: "",
  [FIELDS.WEST_BOUNDARY]: "",
  [FIELDS.NE_BOUNDARY]: "",
  [FIELDS.SW_BOUNDARY]: "",
  [FIELDS.SE_BOUNDARY]: "",
  [FIELDS.NW_BOUNDARY]: "",

  // land appraisal
  [FIELDS.LAND_APPRAISAL]: [],

  // market adjustment
  [FIELDS.MARKET_ADJUSTMENT]: [],
  [FIELDS.MARKET_ADJUSTMENT_CLASSIFICATION]: "",
  [FIELDS.MARKET_ADJUSTMENT_SUB_CLASS]: "",
  [FIELDS.MARKET_ADJUSTMENT_UNIT_VALUE]: "",
  [FIELDS.MARKET_ADJUSTMENT_BASE_MARKET_VALUE]: "",

  // property assessment
  [FIELDS.PROPERTY_ASSESSMENT]: [],
  [FIELDS.PROPERTY_ASSESSMENT_ACTUAL_USE]: "",
  [FIELDS.PROPERTY_ASSESSMENT_LEVEL]: 0,
  [FIELDS.PROPERTY_MARKET_VALUE]: "",

  // taxability
  [FIELDS.TAXABILITY]: "",

  // effectivity of assessment/reassessment
  [FIELDS.EFFECTIVITY_QTR]: "",
  [FIELDS.EFFECTIVITY_YEAR]: null,
  [FIELDS.EFFECTIVITY_DATE_OF_EFFECTIVITY]: null,

  [FIELDS.TOTAL_MARKET_VALUE]: 0,
};

export const ACTUAL_USE_EQUIVALENTS = {
  residential: 0.15,
  agricultural: 0.4,
  commercial: 0.4,
  industrial: 0.4,
};

export const STRIPPING_FIELDS_DEFAULT = [
  {
    id: "",
    name: "1stStripping",
    label: "1st Stripping",
    unitVal: 0,
    percentOfAdj: 0,
    area: 0,
    valueAdjustment: 0,
  },
];

export const FACTOR_TYPES = {
  STRIPPING: "Stripping",
  CORNER_INFLUENCE: "Corner Influence",
  RIGHT_OF_WAY: "Right of Way",
  OPEN_SPACES: "Open Spaces",
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
    id: 123,
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
  {
    id: 2,
    fname: "Maria",
    mname: "L.",
    lname: "Santos",
    PID: "PID-002",
    ArpNo: "ARP-2024-0002",
    oldArp: "ARP-2019-0021",
    Address: "45 Rizal Ave, San Pablo City",
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
    ],
    BLOCK: "Block 5",
    Brgy: "Barangay 7",
    LocationOfProperty: "Block 5 Barangay 7",
    AssessedValue: "₱1,200,000",
    TAXABILITY: "taxable",
    dateOfEffectivity: "2025-02-15",
  },
  {
    id: 3,
    fname: "Pedro",
    mname: "D.",
    lname: "Reyes",
    PID: "PID-003",
    ArpNo: "ARP-2024-0003",
    oldArp: "ARP-2018-0040",
    Address: "789 Bonifacio St, San Pablo City",
    Boundaries: {
      land: false,
      building: true,
      machinery: true,
      others: true,
    },
    classification: [
      {
        classification: "Industrial",
        assessedValue: "₱3,500,000",
      },
    ],
    BLOCK: "Block 20",
    Brgy: "Barangay 12",
    LocationOfProperty: "Block 20 Barangay 12",
    AssessedValue: "₱3,500,000",
    TAXABILITY: "taxable",
    dateOfEffectivity: "2025-03-10",
  },
  {
    id: 4,
    fname: "Josefa",
    mname: "C.",
    lname: "Mendoza",
    PID: "PID-004",
    ArpNo: "ARP-2024-0004",
    oldArp: "ARP-2021-0033",
    Address: "56 Lopez Jaena St, San Pablo City",
    Boundaries: {
      land: true,
      building: false,
      machinery: false,
      others: false,
    },
    classification: [
      {
        classification: "Agricultural",
        assessedValue: "₱250,000",
      },
    ],
    BLOCK: "Block 2",
    Brgy: "Barangay 1",
    LocationOfProperty: "Block 2 Barangay 1",
    AssessedValue: "₱250,000",
    TAXABILITY: "exempt",
    dateOfEffectivity: "2025-04-20",
  },
  {
    id: 5,
    fname: "Ricardo",
    mname: "E.",
    lname: "Garcia",
    PID: "PID-005",
    ArpNo: "ARP-2024-0005",
    oldArp: "ARP-2020-0102",
    Address: "102 J.P. Laurel St, San Pablo City",
    Boundaries: {
      land: true,
      building: true,
      machinery: false,
      others: false,
    },
    classification: [
      {
        classification: "Residential",
        assessedValue: "₱800,000",
      },
      {
        classification: "Commercial",
        assessedValue: "₱600,000",
      },
    ],
    BLOCK: "Block 9",
    Brgy: "Barangay 9",
    LocationOfProperty: "Block 9 Barangay 9",
    AssessedValue: "₱1,400,000",
    TAXABILITY: "taxable",
    dateOfEffectivity: "2025-05-05",
  },

  {
    id: 111,
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
    id: 12113,
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
  {
    id: 211,
    fname: "Maria",
    mname: "L.",
    lname: "Santos",
    PID: "PID-002",
    ArpNo: "ARP-2024-0002",
    oldArp: "ARP-2019-0021",
    Address: "45 Rizal Ave, San Pablo City",
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
    ],
    BLOCK: "Block 5",
    Brgy: "Barangay 7",
    LocationOfProperty: "Block 5 Barangay 7",
    AssessedValue: "₱1,200,000",
    TAXABILITY: "taxable",
    dateOfEffectivity: "2025-02-15",
  },
  {
    id: 311,
    fname: "Pedro",
    mname: "D.",
    lname: "Reyes",
    PID: "PID-003",
    ArpNo: "ARP-2024-0003",
    oldArp: "ARP-2018-0040",
    Address: "789 Bonifacio St, San Pablo City",
    Boundaries: {
      land: false,
      building: true,
      machinery: true,
      others: true,
    },
    classification: [
      {
        classification: "Industrial",
        assessedValue: "₱3,500,000",
      },
    ],
    BLOCK: "Block 20",
    Brgy: "Barangay 12",
    LocationOfProperty: "Block 20 Barangay 12",
    AssessedValue: "₱3,500,000",
    TAXABILITY: "taxable",
    dateOfEffectivity: "2025-03-10",
  },
  {
    id: 411,
    fname: "Josefa",
    mname: "C.",
    lname: "Mendoza",
    PID: "PID-004",
    ArpNo: "ARP-2024-0004",
    oldArp: "ARP-2021-0033",
    Address: "56 Lopez Jaena St, San Pablo City",
    Boundaries: {
      land: true,
      building: false,
      machinery: false,
      others: false,
    },
    classification: [
      {
        classification: "Agricultural",
        assessedValue: "₱250,000",
      },
    ],
    BLOCK: "Block 2",
    Brgy: "Barangay 1",
    LocationOfProperty: "Block 2 Barangay 1",
    AssessedValue: "₱250,000",
    TAXABILITY: "exempt",
    dateOfEffectivity: "2025-04-20",
  },
  {
    id: 511,
    fname: "Ricardo",
    mname: "E.",
    lname: "Garcia",
    PID: "PID-005",
    ArpNo: "ARP-2024-0005",
    oldArp: "ARP-2020-0102",
    Address: "102 J.P. Laurel St, San Pablo City",
    Boundaries: {
      land: true,
      building: true,
      machinery: false,
      others: false,
    },
    classification: [
      {
        classification: "Residential",
        assessedValue: "₱800,000",
      },
      {
        classification: "Commercial",
        assessedValue: "₱600,000",
      },
    ],
    BLOCK: "Block 9",
    Brgy: "Barangay 9",
    LocationOfProperty: "Block 9 Barangay 9",
    AssessedValue: "₱1,400,000",
    TAXABILITY: "taxable",
    dateOfEffectivity: "2025-05-05",
  },
];