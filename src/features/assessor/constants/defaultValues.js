import { FIELDS } from "./fieldNames";

export const APPRAISAL_FORM_DEFAULT = {
  id: "",
  // appraisalID: "",
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
  // [FIELDS.MARKET_ADJUSTMENT_PERCENT]: "",
  // totalValueAdjustment: "",
  // marketAdjustmentFactors: "",
  // marketValueAdjustmentInputArea: "",
};

export const DATA_GRID_INITIAL_STATE = {
  pagination: {
    paginationModel: {
      pageSize: 100,
      page: 0,
    },
  },
};

export const LAND_DEFAULT_FIELD = {
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
  //owner info
  land_ownership: [],
  landappraisals: [],
  // boundaries
  [FIELDS.NORTH_BOUNDARY]: "",
  [FIELDS.SOUTH_BOUNDARY]: "",
  [FIELDS.EAST_BOUNDARY]: "",
  [FIELDS.WEST_BOUNDARY]: "",
  [FIELDS.NE_BOUNDARY]: "",
  [FIELDS.SW_BOUNDARY]: "",
  [FIELDS.SE_BOUNDARY]: "",
  [FIELDS.NW_BOUNDARY]: "",
  // taxability
  [FIELDS.TAXABILITY]: "",

  // effectivity of assessment/reassessment
  [FIELDS.EFFECTIVITY_QTR]: "",
  [FIELDS.EFFECTIVITY_YEAR]: null,

  [FIELDS.TOTAL_MARKET_VALUE]: 0,
  [FIELDS.TOTAL_ASSESSED_VALUE]: 0,
  propertyAssessments: [],
  previous_records: undefined
};

export const BUILDING_DEFAULT = {
  [FIELDS.TRANSACTION_CODE]: "",
  [FIELDS.ARP_NO]: "",
  [FIELDS.PIN]: "",
  bldg_ownership: [],
  land_reference: {
    city: "San Pablo",
    province: "Laguna"
  },
  structuralType: {},
  floorAreas: [],
  property_appraisal: {
    ucc: "",
    bcst: "",
    coai: [],
    totalConstructionCost: "",
    depreciationRate: "",
    yearsToDepreciate: "",
    depreciationCost: "",
    marketValue: ""
  },
  property_assessment: {
    "actualUse": "",
    "assessmentLevel": "",
    "assessedValue": "",
    "marketValue": ""
  },

  [FIELDS.KIND_OF_BUILDING]: "",
  [FIELDS.BLDG_PERMIT]: "",
  [FIELDS.BLDG_PERMIT_DATE_ISSUE]: "",
  [FIELDS.CCT]: "",
  [FIELDS.CO_COMPLITION]: "",
  [FIELDS.DATE_CONSTRUCTED]: "",
  [FIELDS.DATE_OCCUPIED]: "",
  [FIELDS.BUILDING_MARKET_VALUE]: "",

  [FIELDS.NO_OF_STOREYS]: "",
  [FIELDS.TAXABILITY]: "",
  [FIELDS.EFFECTIVITY_YEAR]: null,
  [FIELDS.EFFECTIVITY_QTR]: "",

  appraisers: {},
  approvedBy: "",
  dateApproved: "2025-09-08",
  encoderName: "",
  dateEncoded: "2025-09-08",
  [FIELDS.MEMORANDA]: "",
};

export const ACTUAL_USE_EQUIVALENTS = {
  residential: 15,
  agricultural: 40,
  commercial: 40,
  industrial: 40,
};

export const STRIPPING_FIELDS_DEFAULT = [
  {
    id: "",
    name: "stripping1st",
    label: "1st Stripping",
    unitVal: 0,
    percentOfAdj: 0,
    area: 0,
    valueAdjustment: 0,
  },
];

export const FACTOR_TYPES = {
  STRIPPING: "Stripping",
  CORNER_INFLUENCE: "cornerInfluence",
  RIGHT_OF_WAY: "rightOfWay",
  OPEN_SPACES: "openSpaces",
};

export const SAMPLE_DATA = [
  {
    id: 1,
    transaction_code: 'SP',
    arp_no: '07-053-123',
    pin_no: 'PIN-123',
    street: '322 Purok 4',
    brgy: 'SAN GREGORIO',
    city: 'San Pablo City',
    province: 'Laguna',
    oct_tct: 'OCT-123',
    DATE: '2025-08-25T16:00:00.000Z',
    lot_no: 'Lot-123',
    blk_no: 'blk-123',
    survey_no: 'sur-123',
    land_ownership: [
      {
        regions: 'Region IV-A (CALABARZON)',
        province: 'Laguna',
        city: 'SAN PABLO CITY',
        barangay: 'Santiago I',
        street: '322 Purok 4',
        postal: '4001',
        type: 'company',
        role: 'owner',
        contact_no: '8700',
        email: 'email@example.com',
        name: 'Jollibee',
        remarks: 'Tapat ng MCDO',
        tin: 'TIN-1233456',
        id: '60b6ef52-f777-455a-9157-8b23ee3dafba'
      },
      {
        regions: 'Region IV-A (CALABARZON)',
        province: 'Laguna',
        city: 'San Pablo City',
        barangay: 'Santo Cristo',
        street: '322 Purok 3',
        postal: '4001',
        type: 'person',
        role: 'administrator',
        contact_no: '09123141',
        email: 'jimuelbaraero00@gmail.com',
        name: '',
        lastname: 'Doe',
        firstname: 'Jose',
        middlename: 'Polgoso',
        suffix: 'Jr.',
        remarks: 'Kasal kay Maria Clara',
        tin: 'TIN-1233456',
        id: 'e728cac3-8888-4829-8410-5ac57382388d'
      }
    ],
    north: '12',
    south: '123',
    east: '234',
    west: '12345',
    northeast: '',
    southwest: '',
    southeast: '',
    northwest: '',
    landappraisals: [
      {
        id: '7a3b62fc-7e6d-4842-a99d-1b2622be9dee',
        adjusted: true,
        classification: 'residential',
        subclassification: 'r1',
        area: '30',
        unitValue: 2860,
        baseMarketValue: 85800,
        marketValue: 107250,
        actual_use: 'residential',
        assessmentLevel: 0.15,
        assessedValue: 16087.5,
        adjustments: [
          {
            "adjustment_factor": "stripping1st",
            "marketAdjustmentPercent": 1,
            "adjustedMarketValue": 85800,
            "area": 30
          },
          {
            "adjustment_factor": "stripping2nd",
            "marketAdjustmentPercent": 0.75,
            "adjustedMarketValue": 21450,
            "area": 10
          }
        ]
      },
      {
        id: '8891b2dd-56b3-407d-94d3-b570120cacd2',
        adjusted: true,
        classification: 'commercial',
        subclassification: 'c1',
        area: '10',
        unitValue: 8280,
        baseMarketValue: 82800,
        marketValue: 107640,
        actual_use: 'commercial',
        assessmentLevel: 0.4,
        assessedValue: 43056,
        adjustments: [
          {
            "adjustment_factor": "cornerInfluence",
            "marketAdjustmentPercent": 0.3,
            "adjustedMarketValue": 107640,
            "area": "10"
          }
        ]
      }
    ],
    taxable: 'exempt',
    effectivity_quarter: '1st Quarter',
    effectivity_year: '2025-08-25T16:00:00.000Z',
    totalMarketValue: 168600,
    totalAssessedValue: 59143.5
  },
  {
    id: 2,
    transaction_code: "PC",
    arp_no: "04-037-123",
    pin_no: "PIN-123",
    street: "L. Cortez Street",
    brgy: "SAN BARTOLOME",
    city: "SAN PABLO CITY",
    province: "LAGUNA",
    oct_tct: "OCT-123",
    DATE: "2025-08-25T16:00:00.000Z",
    lot_no: "Lot-123",
    blk_no: "BLKD-123",
    survey_no: "SUR-52312`23",
    land_ownership: [
      {
        regions: "Region IV-A (CALABARZON)",
        province: "Batangas",
        city: "Nasugbu",
        barangay: "Bunducan",
        street: "32`",
        postal: "4123",
        type: "person",
        role: "owner",
        contact_no: "912314234",
        email: "",
        name: "",
        lastname: "Doe",
        firstname: "Carlita",
        middlename: "Nuevo",
        suffix: "Jr.",
        remarks: "",
        tin: "TIN-12514",
        id: "161e362e-306b-400f-b999-4c4b26250467"
      }
    ],
    north: "",
    south: "",
    east: "",
    west: "",
    northeast: "",
    southwest: "",
    southeast: "",
    northwest: "",
    landappraisals: [
      {
        id: "e1706989-0633-4938-8627-072eab5c6917",
        adjusted: false,
        classification: "commercial",
        subclassification: "c1",
        area: "123",
        unitValue: 8280,
        baseMarketValue: 1018440,
        marketValue: 1018440,
        actual_use: "residential",
        assessmentLevel: 0.15,
        assessedValue: 152766
      }
    ],
    taxable: "exempt",
    effectivity_quarter: "2nd Quarter",
    effectivity_year: "2025-08-25T16:00:00.000Z",
    totalMarketValue: 1018440,
    totalAssessedValue: 152766
  },
  {
    id: 3,
    transaction_code: "DT",
    arp_no: "01-017-123",
    pin_no: "PIN-123",
    street: "1650 Peñafrancia",
    brgy: "IV-B",
    city: "SAN PABLO CITY",
    province: "Laguna",
    oct_tct: "OCT-123",
    DATE: "2025-08-25T16:00:00.000Z",
    lot_no: "Lot-123",
    blk_no: "blk-123",
    survey_no: "SUR-123",
    land_ownership: [
      {
        regions: "Region IV-A (CALABARZON)",
        province: "Quezon",
        city: "Tiaong",
        barangay: "San Jose",
        street: "120 McArthur Highway",
        postal: "4003",
        type: "person",
        role: "owner",
        contact_no: "09626425618",
        email: "",
        name: "",
        lastname: "Bonifacio",
        firstname: "Leonardo",
        middlename: "Jacinto",
        suffix: "Sr.",
        remarks: "Kasal kay Ines Agness",
        id: "af26bac0-6856-4d82-96d2-f28234406c5c",
      },
      {
        regions: "Region IV-A (CALABARZON)",
        province: "Laguna",
        city: "Los Baños",
        barangay: "Bayog",
        street: "322 Purok 3",
        postal: "4001",
        type: "person",
        role: "administrator",
        contact_no: "0912314121123",
        email: "",
        name: "",
        lastname: "Doe",
        firstname: "John",
        middlename: "Polgoso",
        suffix: "Jr.",
        remarks: "",
        tin: "",
        id: "d9899089-83a2-457c-b185-f980063b078c",
      },
    ],
    north: "1",
    south: "23",
    east: "34",
    west: "56",
    northeast: "56",
    southwest: "687",
    southeast: "89",
    northwest: "7",
    landappraisals: [
      {
        id: "d5e80d50-e4dc-4ba9-b5c8-fb96f2412093",
        adjusted: true,
        classification: "industrial",
        subclassification: "i3",
        area: "50",
        unitValue: 400,
        baseMarketValue: 20000,
        marketValue: 6000,
        actual_use: "industrial",
        assessmentLevel: 0.4,
        assessedValue: 2400,
        adjustments: [
          {
            adjustment_factor: "openSpaces",
            marketAdjustmentPercent: 0.3,
            adjustedMarketValue: 6000,
            area: "50",
          },
        ],
      },
      {
        id: "351c00d4-c5cd-4375-86cc-d4f206d6eeaf",
        adjusted: true,
        classification: "agricultural",
        subclassification: "d2",
        area: "100",
        unitValue: 15.3,
        baseMarketValue: 1530,
        marketValue: 1109.25,
        actual_use: "agricultural",
        assessmentLevel: 0.4,
        assessedValue: 443.7,
        adjustments: [
          {
            adjustment_factor: "stripping1st",
            marketAdjustmentPercent: 1,
            adjustedMarketValue: 459,
            area: 30,
          },
          {
            adjustment_factor: "stripping2nd",
            marketAdjustmentPercent: 0.75,
            adjustedMarketValue: 344.25,
            area: 30,
          },
          {
            adjustment_factor: "stripping3rd",
            marketAdjustmentPercent: 0.5,
            adjustedMarketValue: 306,
            area: 40,
          },
        ],
      },
    ],
    taxable: "taxable",
    effectivity_quarter: "1st Quarter",
    effectivity_year: "2025-08-25T16:00:00.000Z",
    totalMarketValue: 21530,
    totalAssessedValue: 2843.7,
  }
];


export const DEFAULT_OWNER_FORM = {
  regions: "",
  province: "",
  city: "",
  barangay: "",
  street: "",
  postal: "",
  type: "",
  role: "",
  contact_no: "",
  email: "",
  name: ""
}

export const ADDITIONAL_ITEMS_DEFAULT = {
  category: "",
  type: "",
  area: "",
  noFloors: "",
  material: "",
  cost: "",
  affectedArea: "",

  height: "",
  storey: "",
  sub_total: ""
}