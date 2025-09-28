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
  DATE: "date",
  LOT_NO: "lot_no",
  BLOCK_NO: "blk_no",
  SURVEY_NO: "survey_no",
  // owner info
  BLDG_OWNERSHIP_FIELD: "bldg_ownership",
  LAND_OWNERSHIP: "land_ownership",
  // Boundaries
  NORTH_BOUNDARY: "north",
  SOUTH_BOUNDARY: "south",
  EAST_BOUNDARY: "east",
  WEST_BOUNDARY: "west",
  NE_BOUNDARY: "northeast",
  SW_BOUNDARY: "southWest",
  SE_BOUNDARY: "southEast",
  NW_BOUNDARY: "northWest",
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
  LAND_EFFECTIVITY_QTR: "effectivity_quarter",
  LAND_EFFECTIVITY_YEAR: "effectivity_year",
  EFFECTIVITY_QTR: "quarter",
  EFFECTIVITY_YEAR: "yearAssessment",
  BLDG_EFFECTIVITY_YEAR: "effectivity_assessment",

  TOTAL_MARKET_VALUE: "totalMarketValue",
  TOTAL_ASSESSED_VALUE: "total_property_assessment",
  // previous record 
  LAND_PIN_NO_PREV: "previous_records.pin_no",
  LAND_ARP_NO_PREV: "previous_records.arp_no",
  LAND_TD_ARP_PREV: "previous_records.td_no",
  LAND_ASSESSED_VALUE_PREV: "previous_records.total_assessed_value",
  LAND_OWNER_PREV: "previous_records.owner_name",
  LAND_EFFECTIVITY_YEAR_PREV: "previous_records.effectivity_assessment",

  //memoranda
  MEMORANDA: "memoranda",
  // land reference 
  BLDG_LAND_REF_FIELD: "land_reference",
  STREET_REF: "land_reference.street",
  BRGY_REF: "land_reference.brgy",
  CITY_REF: "land_reference.city",
  PROVINCE_REF: "land_reference.province",

  TD_ARP_REF: "land_reference.td",
  LAND_AREA_REF: "land_reference.area",
  LAND_OWNER_REF: "land_reference.owner",

  OCT_REF: "land_reference.oct_tct_cloa_no",
  SURVEY_NO_REF: "land_reference.survey_no",
  LOT_NO_REF: "land_reference.lot_no",
  BLOCK_NO_REF: "land_reference.blk_no",

  STRUCTURAL_FIELDS: "structural_type",
  STRUCTURAL_TYPE: "structural_type.type",
  STRUCTURAL_CATEGORY: "structural_type.category",

  // propertyAppraisals
  PROPERTY_APPRAISAL_FIELD: "propertyAppraisals",
  UNIT_CONSTRUCTION_COST: "propertyAppraisals.ucc",
  UCC_SUB_TOTAL: "propertyAppraisals.bcst",
  TOTAL_CONSTRUCTION_COST: "propertyAppraisals.totalConstructionCost",
  DEPRECIATION_RATE: "propertyAppraisals.depreciationRate",
  DEPRECIATION_YEARS: "propertyAppraisals.yearsToDepreciate",
  DEPRECIATION_COST: "propertyAppraisals.depreciationCost",
  TOTAL_PERCENT_DEPRECIATION: "propertyAppraisals.total_percent_depreciation",
  ADDITIONAL_ITEMS: "propertyAppraisals.additionalItems",
  BUILDING_MARKET_VALUE: "propertyAppraisals.marketValue",
  TOTAL_CONSTRUCTION_COST: "propertyAppraisals.totalConstructionCost",
  TOTAL_COST_ADD_ITEMS: "propertyAppraisals.totalCostAddItems",

  // general desc 
  KIND_OF_BUILDING: "kindBldg",
  BUILDING_AGE: "buildingAge",
  NO_OF_STOREYS: "noOfStorey",
  BLDG_PERMIT: "bldg_permit",
  BLDG_PERMIT_DATE_ISSUE: "bldg_permit_date_issued_on",
  CCT: "cct",
  CO_COMPLITION: "coc_issued_on",
  DATE_CONSTRUCTED: "dateConstructed",
  DATE_OCCUPIED: "dateOccupied",
  CO_OCCUPANCY: "cetificateOfOccupancyIssuedOn",

  // previous record 
  PREV_RECORDS_FIELDS: "previousRecords",
  PIN_NO_PREV: "previousRecords.pin_no",
  ARP_NO_PREV: "previousRecords.arp_no",
  TD_ARP_PREV: "previousRecords.td_no",
  ASSESSED_VALUE_PREV: "previousRecords.total_assessed_value",
  OWNER_PREV: "previousRecords.owner_name",
  EFFECTIVITY_YEAR_PREV: "previousRecords.effectivity_assessment",

  TOTAL_FLOOR_AREA: "total_floor_areas",

  // Property Assesment 
  ASSESSMENT_FIELDS: "propertyAssessments",
  BLDG_ASSESSMENT_FIELDS: "propertyAssessments",
  BLDG_ASSESSMENT_ACTUAL_USE: "propertyAssessments.actualUse",
  BLDG_ASSESSMENT_LEVEL: "propertyAssessments.assessmentLevel",
  BLDG_ASSESSED_VALUE: "propertyAssessments.assessedValue",
  BLDG_ASSESSED_MARKET_VALUE: "propertyAssessments.marketValue",

  APPROVED_BY: "approvedBy",
  DATE_APPROVED: "dateApproved",

  /* =================================================== MACHINERY FIELDS =================================================== */
  M_BLDG_REF_OWNER: "bldg_reference.owner",
  M_BLDG_REF_PIN: "bldg_reference.pin_no",

  M_LAND_REF_OWNER: "land_reference.owner",
  M_LAND_REF_PIN: "land_reference.pin_no",

  M_BRAND_CAPACITY: "machine_brand_capacity",
  M_PROPERTY_APPRAISAL: "property_appraisal_machine",
  M_PROPERTY_ASSESSMENT: "property_assessment_machine",
  M_REF_N_POSTING: "reference_posting_summary",

};
