export const LAND_APPRAISAL_DEFAULT_DATA = {
  classification: "",
  subclassification: "",
  area: "",
  baseMarketValue: 0,
  AdjustmentFactors: [],
  otherImprovements: [],
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
