export const FIELDS = {
  // property info
  TRANSACTION_CODE: "transaction_code",
  ARP_NO: "arp_no",
  PIN: "pin_no",
  NO_AND_STREET: "street",
  BARANGAY: "brgy",
  CITY: "city", // Fixed value
  PROVINCE: "province", // Fixed value
  OCT_TCT_NO: "oct_tct",
  DATE: "DATE",
  LOT_NO: "lot_no",
  BLOCK_NO: "blk_no",
  SURVEY_NO: "survey_no",
  // owner info

  BLDG_OWNERSHIP_FIELD: "bldg_ownership",
  OWNERSHIP: "land_ownership",
  OWNER_FULLNAME: "ownerFullname",
  OWNER_TIN: "TIN",
  OWNER_STREET: "Street",
  OWNER_BARANGAY: "ownerBrgy",
  OWNER_CITY: "City",
  OWNER_PROVINCE: "Province",
  // admin info
  ADMINISTRATOR_FULLNAME: "administratorFullname",
  ADMINISTRATOR_STREET: "administratorStreet",
  ADMINISTRATOR_BRGY: "administratorBrgy",
  ADMINISTRATOR_CITY: "administratorCity",
  ADMINISTRATOR_PROVINCE: "administratorProvince",
  ADMIN_TEL: "AdminTel",
  ADMINISTRATOR_TIN: "administratorTIN",
  // Boundaries
  NORTH_BOUNDARY: "north",
  SOUTH_BOUNDARY: "south",
  EAST_BOUNDARY: "east",
  WEST_BOUNDARY: "west",
  NE_BOUNDARY: "northeast",
  SW_BOUNDARY: "southwest",
  SE_BOUNDARY: "southeast",
  NW_BOUNDARY: "northwest",
  // Land Appraisal
  LAND_APPRAISAL: "landappraisals",
  LAND_CLASSIFICATION: "classification",
  SUBCLASS: "subclassification",
  LAND_AREA: "area",
  LAND_UNIT_VALUE: "unitValue",
  LAND_BASE_MARKET_VALUE: "base_market_value",
  LAND_MARKET_VALUE: "market_value",
  // Property Assessment
  LAND_ACTUAL_USE: "actual_use",
  LAND_ASSESSMENT_LEVEL: "assessment_level",
  LAND_ASSESSED_VALUE: "assessed_value",

  // market adjustment
  MARKET_ADJUSTMENT: "marketAdjustment",
  MARKET_ADJUSTMENT_FACTORS: "adjustment_factor",
  MARKET_ADJUSTMENT_PERCENT: "marketAdjustmentPercent",
  MARKET_VALUE_ADJUSTMENT_AREA: "marketValueAdjustmentArea",
  _VALUE_ADJUSTMENT: "marketValueAdjustment",
  TOTAL_MARKET_VALUE_ADJUSTMENT: "totalValueAdjustment",
  ADJUSTED_MARKETVALUE: "adjustment_value",
  INPUT_AREA: "marketValueAdjustmentInputArea",

  // TAXABILITY
  TAXABILITY: "taxable",
  // Effectivity of Assessment/Reassessment
  EFFECTIVITY_QTR: "quarter",
  EFFECTIVITY_YEAR: "yearAssessment",

  TOTAL_MARKET_VALUE: "totalMarketValue",
  TOTAL_ASSESSED_VALUE: "totalAssessedValue",

  //memoranda
  MEMORANDA: "memoranda",
  // land reference 
  BLDG_LAND_REF_FIELD: "landReferences",
  STREET_REF: "landReferences.street",
  BRGY_REF: "landReferences.brgy",
  CITY_REF: "landReferences.city",
  PROVINCE_REF: "landReferences.province",

  TD_ARP_REF: "landReferences.td",
  LAND_AREA_REF: "landReferences.area",
  LAND_OWNER_REF: "landReferences.owner",

  OCT_REF: "landReferences.oct_tct-cloa_no",
  SURVEY_NO_REF: "landReferences.survey_no",
  LOT_NO_REF: "landReferences.lot_no",
  BLOCK_NO_REF: "landReferences.blk_no",

  STRUCTURAL_TYPE: "structural_type.type",
  STRUCTURAL_CATEGORY: "structural_type.category",

  // propertyAppraisals
  UNIT_CONSTRUCTION_COST: "propertyAppraisals.ucc",
  UCC_SUB_TOTAL: "propertyAppraisals.bcst",
  TOTAL_CONSTRUCTION_COST: "propertyAppraisals.totalConstructionCost",
  DEPRECIATION_RATE: "propertyAppraisals.depreciationRate",
  DEPRECIATION_YEARS: "propertyAppraisals.yearsToDepreciate",
  DEPRECIATION_COST: "propertyAppraisals.depreciationCost",
  TOTAL_PERCENT_DEPRECIATION: "propertyAppraisals.total_percent_depreciation",
  ADDITIONAL_ITEMS: "propertyAppraisals.additionalItems",
  BUILDING_MARKET_VALUE: "propertyAppraisals.marketValue",

  // general desc 
  KIND_OF_BUILDING: "kindBldg",
  BUILDING_AGE: "buildingAge",
  NO_OF_STOREYS: "noOfStorey",
  BLDG_PERMIT: "bldg_permit",
  BLDG_PERMIT_DATE_ISSUE: "bldg_permit_date_issued",
  CCT: "cct",
  CO_COMPLITION: "coc_issued_on",
  DATE_CONSTRUCTED: "dateConstructed",
  DATE_OCCUPIED: "dateOccupied",
  CO_OCCUPANCY: "cetificateOfOccupancyIssuedOn",

  // previous record 
  PIN_NO_PREV: "previousRecords.pinNoPrevRec",
  ARP_NO_PREV: "previousRecords.arpNoPrevRec",
  TD_ARP_PREV: "previousRecords.tdArpPrevRec",
  ASSESSED_VALUE_PREV: "previousRecords.assessedValuePrevRec",
  OWNER_PREV: "previousRecords.ownerPrevRec",
  EFFECTIVITY_YEAR_PREV: "previousRecords.effectivityYearPrevRec",

  ADDITIONAL_ITEM_COST_SUB: "cost_of_additional_cost_sub_total",
  TOTAL_FLOOR_AREA: "total_floor_areas",

  // Property Assesment 
  BLDG_ASSESSMENT_FIELDS: "propertyAssessments",
  BLDG_ASSESSMENT_ACTUAL_USE: "propertyAssessments.actualUse",
  BLDG_ASSESSMENT_LEVEL: "propertyAssessments.assessmentLevel",
  BLDG_ASSESSED_VALUE: "propertyAssessments.assessedValue",
  BLDG_ASSESSED_MARKET_VALUE: "propertyAssessments.marketValue",
};
