import { createContext, useEffect, useState } from "react";
import axios from "../../../api/axios";
import { SAMPLE_DATA } from "../../../../tmp/sampleBldgRes";

const SAMPLE_LAND_DATA = [
  {
    "id": 1,
    "transaction_code": "DC",
    "arp_no": "06-0077-0001",
    "pin_no": "130-06-0077-0001",
    "oct_tct": "OCT",
    "date": "2025-09-25",
    "survey_no": "SURVERY",
    "lot_no": "LOT",
    "blk_no": "BLOCK",
    "street": "322",
    "brgy": "SOLEDAD",
    "north": "N",
    "northeast": "NE",
    "east": "E",
    "southEast": "SE",
    "southWest": "SW",
    "west": "W",
    "south": "A",
    "northWest": "NW",
    "total_property_assessment": "88890.00",
    "taxable": true,
    "effectivity_quarter": "4th Quarter",
    "effectivity_year": "2025-09-25",
    "status": "active",
    "memoranda": "MEMORANDA",
    "faasLandChain_id": 1,
    "createdAt": "2025-09-25T10:08:29.385Z",
    "updatedAt": "2025-09-25T10:08:29.451Z",
    "landowners": [
      {
        "id": 1,
        "status": "active",
        "ownership_type": null,
        "remarks": "REMARKS",
        "createdAt": "2025-09-25T10:08:29.424Z",
        "updatedAt": "2025-09-25T10:08:29.424Z",
        "landFaas_id": 1,
        "party_id": 1,
        "role_id": 3,
        "parties": {
          "id": 1,
          "type": "person",
          "name": null,
          "firstname": "George ",
          "middlename": "Carver",
          "lastname": "Washington",
          "suffix": null,
          "regions": "Region IV-A (CALABARZON)",
          "status": null,
          "tin": "T-3476287",
          "contactno": null,
          "email": "george@example.com",
          "street": "322 Purok 4",
          "brgy": "Soledad",
          "city": "San Pablo City",
          "province": "Laguna",
          "createdAt": "2025-09-25T10:08:29.398Z",
          "updatedAt": "2025-09-25T10:08:29.398Z"
        },
        "roles": {
          "id": 3,
          "name": "administrator",
          "createdAt": "2025-09-24T16:00:00.000Z",
          "updatedAt": "2025-09-24T16:00:00.000Z"
        }
      },
      {
        "id": 2,
        "status": "active",
        "ownership_type": null,
        "remarks": "REMARKS",
        "createdAt": "2025-09-25T10:08:29.433Z",
        "updatedAt": "2025-09-25T10:08:29.433Z",
        "landFaas_id": 1,
        "party_id": 1,
        "role_id": 2,
        "parties": {
          "id": 1,
          "type": "person",
          "name": null,
          "firstname": "George ",
          "middlename": "Carver",
          "lastname": "Washington",
          "suffix": null,
          "regions": "Region IV-A (CALABARZON)",
          "status": null,
          "tin": "T-3476287",
          "contactno": null,
          "email": "george@example.com",
          "street": "322 Purok 4",
          "brgy": "Soledad",
          "city": "San Pablo City",
          "province": "Laguna",
          "createdAt": "2025-09-25T10:08:29.398Z",
          "updatedAt": "2025-09-25T10:08:29.398Z"
        },
        "roles": {
          "id": 2,
          "name": "owner",
          "createdAt": "2025-09-24T16:00:00.000Z",
          "updatedAt": "2025-09-24T16:00:00.000Z"
        }
      }
    ],
    "landappraisals": [
      {
        "id": 1,
        "classification": "residential",
        "subclassification": "r1",
        "area": 100,
        "unitValue": 2860,
        "base_market_value": 286000,
        "market_value": 371800,
        "actual_use": "residential",
        "createdAt": "2025-09-25T10:08:29.434Z",
        "updatedAt": "2025-09-25T10:08:29.434Z",
        "landFaas_id": 1,
        "adjustments": [
          {
            "id": 1,
            "unit_value": 858,
            "adjustment_factor": "cornerInfluence",
            "area": 100,
            "adjustment_value": 371800,
            "createdAt": "2025-09-25T10:08:29.437Z",
            "updatedAt": "2025-09-25T10:08:29.437Z",
            "land_appraisal_id": 1
          }
        ]
      },
      {
        "id": 2,
        "classification": "commercial",
        "subclassification": "c1",
        "area": 100,
        "unitValue": 8280,
        "base_market_value": 828000,
        "market_value": 82800,
        "actual_use": "commercial",
        "createdAt": "2025-09-25T10:08:29.438Z",
        "updatedAt": "2025-09-25T10:08:29.438Z",
        "landFaas_id": 1,
        "adjustments": [
          {
            "id": 2,
            "unit_value": 828,
            "adjustment_factor": "rightOfWay",
            "area": 100,
            "adjustment_value": 82800,
            "createdAt": "2025-09-25T10:08:29.439Z",
            "updatedAt": "2025-09-25T10:08:29.439Z",
            "land_appraisal_id": 2
          }
        ]
      }
    ],
    "previous_records": {
      "id": 1,
      "pin_no": "SAVELLA",
      "arp_no": "06-0077-0001",
      "total_assessed_value": 10000,
      "owner_name": "EDEN",
      "effectivity_assessment": "2025-09-25",
      "ar_page_no": null,
      "recording_person": null,
      "date": null,
      "from_faas_id": null,
      "to_faas_id": null,
      "createdAt": "2025-09-25T10:08:29.456Z",
      "updatedAt": "2025-09-25T10:08:29.456Z",
      "landFaas_id": 1
    },
    "propertyAssessments": [
      {
        "id": 1,
        "actual_use": "residential",
        "market_value": "371800.00",
        "assessment_level": "15.00",
        "assessed_value": "55770.00",
        "createdAt": "2025-09-25T10:08:29.443Z",
        "updatedAt": "2025-09-25T10:08:29.443Z",
        "landFaas_id": 1
      },
      {
        "id": 2,
        "actual_use": "commercial",
        "market_value": "82800.00",
        "assessment_level": "40.00",
        "assessed_value": "33120.00",
        "createdAt": "2025-09-25T10:08:29.448Z",
        "updatedAt": "2025-09-25T10:08:29.448Z",
        "landFaas_id": 1
      }
    ],
    "appraisers": [],
    "land_ownership": [
      {
        "regions": "Region IV-A (CALABARZON)",
        "province": "Laguna",
        "city": "San Pablo City",
        "brgy": "Soledad",
        "street": "322 Purok 4",
        "postal": "4001",
        "type": "person",
        "role": "administrator",
        "contact_no": null,
        "email": "george@example.com",
        "name": "",
        "lastname": "Washington",
        "firstname": "George ",
        "middlename": "Carver",
        "suffix": null,
        "remarks": "REMARKS",
        "tin": "T-3476287",
        "id": 1
      },
      {
        "regions": "Region IV-A (CALABARZON)",
        "province": "Laguna",
        "city": "San Pablo City",
        "brgy": "Soledad",
        "street": "322 Purok 4",
        "postal": "4001",
        "type": "person",
        "role": "owner",
        "contact_no": null,
        "email": "george@example.com",
        "name": "",
        "lastname": "Washington",
        "firstname": "George ",
        "middlename": "Carver",
        "suffix": null,
        "remarks": "REMARKS",
        "tin": "T-3476287",
        "id": 2
      }
    ]
  },
  {
    "id": 5,
    "transaction_code": "DC",
    "arp_no": "06-0077-0002",
    "pin_no": "130-06-0077-0002",
    "oct_tct": "OCT",
    "date": "2025-09-25",
    "survey_no": "SUR",
    "lot_no": "LOT",
    "blk_no": "BLOCK",
    "street": "322",
    "brgy": "SOLEDAD",
    "north": "N",
    "northeast": "NE",
    "east": "E",
    "southEast": "SE",
    "southWest": "SW",
    "west": "W",
    "south": "A",
    "northWest": "NW",
    "total_property_assessment": "34000.00",
    "taxable": true,
    "effectivity_quarter": "4th Quarter",
    "effectivity_year": "2025-09-25",
    "status": "active",
    "memoranda": null,
    "faasLandChain_id": 5,
    "createdAt": "2025-09-25T11:18:01.981Z",
    "updatedAt": "2025-09-25T11:18:02.005Z",
    "landowners": [
      {
        "id": 6,
        "status": "active",
        "ownership_type": null,
        "remarks": "REMARKS",
        "createdAt": "2025-09-25T11:18:01.994Z",
        "updatedAt": "2025-09-25T11:18:01.994Z",
        "landFaas_id": 5,
        "party_id": 5,
        "role_id": 2,
        "parties": {
          "id": 5,
          "type": "company",
          "name": "N/A",
          "firstname": null,
          "middlename": null,
          "lastname": null,
          "suffix": null,
          "regions": "Region IV-A (CALABARZON)",
          "status": null,
          "tin": "T-3476287",
          "contactno": null,
          "email": "jimuelbaraero00@gmail.com",
          "street": "322",
          "brgy": "San Mateo",
          "city": "San Pablo City",
          "province": "Laguna",
          "createdAt": "2025-09-25T11:18:01.986Z",
          "updatedAt": "2025-09-25T11:18:01.986Z"
        },
        "roles": {
          "id": 2,
          "name": "owner",
          "createdAt": "2025-09-24T16:00:00.000Z",
          "updatedAt": "2025-09-24T16:00:00.000Z"
        }
      }
    ],
    "landappraisals": [
      {
        "id": 6,
        "classification": "industrial",
        "subclassification": "i1",
        "area": 100,
        "unitValue": 850,
        "base_market_value": 85000,
        "market_value": 85000,
        "actual_use": "industrial",
        "createdAt": "2025-09-25T11:18:01.999Z",
        "updatedAt": "2025-09-25T11:18:01.999Z",
        "landFaas_id": 5,
        "adjustments": []
      }
    ],
    "previous_records": {
      "id": 2,
      "pin_no": "SAVELLA",
      "arp_no": "06-0077-0001",
      "total_assessed_value": 10000,
      "owner_name": "EDEN",
      "effectivity_assessment": null,
      "ar_page_no": null,
      "recording_person": null,
      "date": null,
      "from_faas_id": null,
      "to_faas_id": null,
      "createdAt": "2025-09-25T11:18:02.007Z",
      "updatedAt": "2025-09-25T11:18:02.007Z",
      "landFaas_id": 5
    },
    "propertyAssessments": [
      {
        "id": 3,
        "actual_use": "industrial",
        "market_value": "85000.00",
        "assessment_level": "40.00",
        "assessed_value": "34000.00",
        "createdAt": "2025-09-25T11:18:02.002Z",
        "updatedAt": "2025-09-25T11:18:02.002Z",
        "landFaas_id": 5
      }
    ],
    "appraisers": [],
    "land_ownership": [
      {
        "regions": "Region IV-A (CALABARZON)",
        "province": "Laguna",
        "city": "San Pablo City",
        "brgy": "San Mateo",
        "street": "322",
        "postal": "4001",
        "type": "company",
        "role": "owner",
        "contact_no": null,
        "email": "jimuelbaraero00@gmail.com",
        "name": "N/A",
        "lastname": null,
        "firstname": null,
        "middlename": null,
        "suffix": null,
        "remarks": "REMARKS",
        "tin": "T-3476287",
        "id": 6
      }
    ]
  },
  {
    "id": 10,
    "transaction_code": "DC",
    "arp_no": "06-0077-0004",
    "pin_no": "130-06-0077-0004",
    "oct_tct": "OCT",
    "date": "2025-09-25",
    "survey_no": "SUR",
    "lot_no": "LOT",
    "blk_no": "BLOCK",
    "street": "322",
    "brgy": "SOLEDAD",
    "north": "N",
    "northeast": "NE",
    "east": "E",
    "southEast": "SE",
    "southWest": "SW",
    "west": "W",
    "south": "A",
    "northWest": "NW",
    "total_property_assessment": "240120.00",
    "taxable": true,
    "effectivity_quarter": "4th Quarter",
    "effectivity_year": "2025-09-25",
    "status": "active",
    "memoranda": "memo",
    "faasLandChain_id": 10,
    "createdAt": "2025-09-25T11:47:43.952Z",
    "updatedAt": "2025-09-25T11:47:43.975Z",
    "landowners": [
      {
        "id": 11,
        "status": "active",
        "ownership_type": null,
        "remarks": "REMARKS",
        "createdAt": "2025-09-25T11:47:43.962Z",
        "updatedAt": "2025-09-25T11:47:43.962Z",
        "landFaas_id": 10,
        "party_id": 9,
        "role_id": 2,
        "parties": {
          "id": 9,
          "type": "company",
          "name": "McDo",
          "firstname": null,
          "middlename": null,
          "lastname": null,
          "suffix": null,
          "regions": "Region IV-A (CALABARZON)",
          "status": null,
          "tin": "T-3476287",
          "contactno": null,
          "email": "jimuelbaraero00@gmail.com",
          "street": "322",
          "brgy": "San Antonio 1",
          "city": "San Pablo City",
          "province": "Laguna",
          "createdAt": "2025-09-25T11:45:57.105Z",
          "updatedAt": "2025-09-25T11:45:57.105Z"
        },
        "roles": {
          "id": 2,
          "name": "owner",
          "createdAt": "2025-09-24T16:00:00.000Z",
          "updatedAt": "2025-09-24T16:00:00.000Z"
        }
      }
    ],
    "landappraisals": [
      {
        "id": 8,
        "classification": "commercial",
        "subclassification": "c1",
        "area": 100,
        "unitValue": 8280,
        "base_market_value": 828000,
        "market_value": 600300,
        "actual_use": "commercial",
        "createdAt": "2025-09-25T11:47:43.967Z",
        "updatedAt": "2025-09-25T11:47:43.967Z",
        "landFaas_id": 10,
        "adjustments": [
          {
            "id": 9,
            "unit_value": 8280,
            "adjustment_factor": "stripping1st",
            "area": 30,
            "adjustment_value": 248400,
            "createdAt": "2025-09-25T11:47:43.969Z",
            "updatedAt": "2025-09-25T11:47:43.969Z",
            "land_appraisal_id": 8
          },
          {
            "id": 10,
            "unit_value": 6210,
            "adjustment_factor": "stripping2nd",
            "area": 30,
            "adjustment_value": 186300,
            "createdAt": "2025-09-25T11:47:43.971Z",
            "updatedAt": "2025-09-25T11:47:43.971Z",
            "land_appraisal_id": 8
          },
          {
            "id": 11,
            "unit_value": 4140,
            "adjustment_factor": "stripping3rd",
            "area": 40,
            "adjustment_value": 165600,
            "createdAt": "2025-09-25T11:47:43.971Z",
            "updatedAt": "2025-09-25T11:47:43.971Z",
            "land_appraisal_id": 8
          }
        ]
      }
    ],
    "previous_records": {
      "id": 4,
      "pin_no": "SAVELLA",
      "arp_no": "06-0077-0001",
      "total_assessed_value": 10000,
      "owner_name": "EDEN",
      "effectivity_assessment": "2025-09-25",
      "ar_page_no": null,
      "recording_person": null,
      "date": null,
      "from_faas_id": null,
      "to_faas_id": null,
      "createdAt": "2025-09-25T11:47:43.976Z",
      "updatedAt": "2025-09-25T11:47:43.976Z",
      "landFaas_id": 10
    },
    "propertyAssessments": [
      {
        "id": 5,
        "actual_use": "commercial",
        "market_value": "600300.00",
        "assessment_level": "40.00",
        "assessed_value": "240120.00",
        "createdAt": "2025-09-25T11:47:43.972Z",
        "updatedAt": "2025-09-25T11:47:43.972Z",
        "landFaas_id": 10
      }
    ],
    "appraisers": [],
    "land_ownership": [
      {
        "regions": "Region IV-A (CALABARZON)",
        "province": "Laguna",
        "city": "San Pablo City",
        "brgy": "San Antonio 1",
        "street": "322",
        "postal": "4001",
        "type": "company",
        "role": "owner",
        "contact_no": null,
        "email": "jimuelbaraero00@gmail.com",
        "name": "McDo",
        "lastname": null,
        "firstname": null,
        "middlename": null,
        "suffix": null,
        "remarks": "REMARKS",
        "tin": "T-3476287",
        "id": 11
      }
    ]
  }
]

const SAMPLE_BLDG_DATA = [
  {
    "land_reference": {
      "id": 1,
      "td": "06-0077-0001",
      "owner": "JOHN DOE",
      "street": "322",
      "brgy": "SOLEDAD",
      "city": "SAN PABLO CITY",
      "province": "LAGUNA",
      "oct_tct_cloa_no": "OCT",
      "lot_no": "LOT",
      "blk_no": "BLOCK",
      "survey_no": "SUR",
      "area": "1000.00",
      "createdAt": "2025-09-25T12:32:40.886Z",
      "updatedAt": "2025-09-25T12:32:40.886Z",
      "bldgFaas_id": 1
    },
    "id": 1,
    "transaction_code": "DC",
    "arp_no": "06-0077-0006",
    "pin_no": "130-06-0077-0006",
    "kindBldg": "commercial",
    "kindBldg_remarks": null,
    "structural_type": {
      "type": "type5A",
      "category": "marketShoppingCenter"
    },
    "bldg_permit": "PERMIT NO",
    "bldg_permit_date_issued_on": "2025-09-24T16:00:00.000Z",
    "cct": "CCT",
    "coc_issued_on": "2025-09-24T16:00:00.000Z",
    "dateConstructed": "2025-09-24T16:00:00.000Z",
    "dateOccupied": "2025-09-24T16:00:00.000Z",
    "buildingAge": "NEW",
    "noOfStorey": 3,
    "floors": [
      {
        "id": "837ee9dd-896d-4da2-8cba-4559f09bcaef",
        "area": 100,
        "label": "1st floor",
        "walls": [
          "plain_cement"
        ],
        "flooring": [
          "plain_cement"
        ],
        "roofMaterials": [
          "asbestos",
          "aluminum"
        ]
      },
      {
        "id": "fdf7681c-5bce-42c9-8670-b399ef12bc75",
        "area": 100,
        "label": "2nd floor",
        "walls": [
          "wood",
          "plain_cement"
        ],
        "flooring": [
          "marble"
        ],
        "roofMaterials": []
      },
      {
        "id": "a8d18a06-feee-41ab-9902-2ae71510515c",
        "area": 80,
        "label": "3rd floor",
        "walls": [
          "sawali"
        ],
        "flooring": [
          "wood"
        ],
        "roofMaterials": []
      }
    ],
    "taxable": true,
    "effectivity_assessment": "2025-09-25",
    "quarter": "4th Quarter",
    "approvedBy": "EVA F. PUNTO",
    "dateApproved": "2025-09-25T12:25:55.023Z",
    "memoranda": "MEMO",
    "dateEncoded": null,
    "encoderName": "",
    "faasBldgChain_id": 1,
    "createdAt": "2025-09-25T12:32:40.861Z",
    "updatedAt": "2025-09-25T12:32:40.901Z",
    "bldgowners": [
      {
        "id": 1,
        "ownership_type": null,
        "remarks": "REMARKS",
        "status": "active",
        "createdAt": "2025-09-25T12:32:40.879Z",
        "updatedAt": "2025-09-25T12:32:40.879Z",
        "bldgFaas_id": 1,
        "party_id": 1,
        "role_id": 2,
        "partiesBldg": {
          "id": 1,
          "type": "person",
          "name": null,
          "firstname": "George ",
          "middlename": "Carver",
          "lastname": "Washington",
          "suffix": null,
          "regions": "Region IV-A (CALABARZON)",
          "status": null,
          "tin": "T-3476287",
          "contactno": null,
          "email": "george@example.com",
          "street": "322 Purok 4",
          "brgy": "Soledad",
          "city": "San Pablo City",
          "province": "Laguna",
          "createdAt": "2025-09-25T10:08:29.398Z",
          "updatedAt": "2025-09-25T10:08:29.398Z"
        },
        "roles": {
          "id": 2,
          "name": "owner",
          "createdAt": "2025-09-24T16:00:00.000Z",
          "updatedAt": "2025-09-24T16:00:00.000Z"
        }
      }
    ],
    "propertyAppraisals": {
      "id": 1,
      "ucc": "10000.00",
      "bcst": "2800000.00",
      "totalConstructionCost": "2873590.00",
      "depreciationRate": "2.00",
      "yearsToDepreciate": 5,
      "depreciationCost": "10.00",
      "marketValue": "2873580.00",
      "createdAt": "2025-09-25T12:32:40.890Z",
      "updatedAt": "2025-09-25T12:32:40.890Z",
      "bldgFaas_id": 1,
      "additionalItems": [
        {
          "id": 1,
          "category": "foundation",
          "type": "type5",
          "area": "167.25",
          "noFloors": 1,
          "material": "",
          "cost": "0.00",
          "storey": "",
          "affectedArea": "0.00",
          "total": "73590.00",
          "createdAt": "2025-09-25T12:32:40.893Z",
          "updatedAt": "2025-09-25T12:32:40.893Z",
          "property_appraisal_id": 1
        }
      ]
    },
    "previousRecords": {
      "id": 1,
      "pin_no": "",
      "arp_no": "",
      "total_assessed_value": "0.00",
      "owner_name": "",
      "effectivity_assessment": null,
      "ar_page_no": null,
      "date": null,
      "from_faas_id": null,
      "to_faas_id": null,
      "createdAt": "2025-09-25T12:32:40.905Z",
      "updatedAt": "2025-09-25T12:32:40.905Z",
      "bldgFaas_id": 1
    },
    "propertyAssessments": {
      "id": 1,
      "actualUse": "residential",
      "assessmentLevel": "0.40",
      "assessedValue": "1149432.00",
      "marketValue": "2873580.00",
      "createdAt": "2025-09-25T12:32:40.897Z",
      "updatedAt": "2025-09-25T12:32:40.897Z",
      "bldgFaas_id": 1
    },
    "appraisers": [],
    "bldg_ownership": [
      {
        "regions": "Region IV-A (CALABARZON)",
        "province": "Laguna",
        "city": "San Pablo City",
        "brgy": "Soledad",
        "street": "322 Purok 4",
        "postal": "4001",
        "type": "person",
        "role": "owner",
        "contact_no": null,
        "email": "george@example.com",
        "name": "",
        "lastname": "Washington",
        "firstname": "George ",
        "middlename": "Carver",
        "suffix": null,
        "remarks": "REMARKS",
        "tin": "T-3476287",
        "id": 1
      }
    ]
  },
  {
    "land_reference": {
      "id": 2,
      "td": "06-0077-0001",
      "owner": "JOHN DOE",
      "street": "322",
      "brgy": "SOLEDAD",
      "city": "SAN PABLO CITY",
      "province": "LAGUNA",
      "oct_tct_cloa_no": "OCT",
      "lot_no": "LOT",
      "blk_no": "BLOCK",
      "survey_no": "SUR",
      "area": "1000.00",
      "createdAt": "2025-09-25T12:47:13.445Z",
      "updatedAt": "2025-09-25T12:47:13.445Z",
      "bldgFaas_id": 2
    },
    "id": 2,
    "transaction_code": "DC",
    "arp_no": "06-0077-0007",
    "pin_no": "130-06-0077-0007",
    "kindBldg": "commercial",
    "kindBldg_remarks": null,
    "structural_type": {
      "type": "type5A",
      "category": "marketShoppingCenter"
    },
    "bldg_permit": "PERMIT NO",
    "bldg_permit_date_issued_on": "2025-09-24T16:00:00.000Z",
    "cct": "CCT",
    "coc_issued_on": "2025-09-24T16:00:00.000Z",
    "dateConstructed": "2025-09-24T16:00:00.000Z",
    "dateOccupied": "2025-09-24T16:00:00.000Z",
    "buildingAge": "NEW",
    "noOfStorey": 3,
    "floors": [
      {
        "id": "837ee9dd-896d-4da2-8cba-4559f09bcaef",
        "area": 100,
        "label": "1st floor",
        "walls": [
          "plain_cement"
        ],
        "flooring": [
          "plain_cement"
        ],
        "roofMaterials": [
          "asbestos",
          "aluminum"
        ]
      },
      {
        "id": "fdf7681c-5bce-42c9-8670-b399ef12bc75",
        "area": 100,
        "label": "2nd floor",
        "walls": [
          "wood",
          "plain_cement"
        ],
        "flooring": [
          "marble"
        ],
        "roofMaterials": []
      },
      {
        "id": "a8d18a06-feee-41ab-9902-2ae71510515c",
        "area": 80,
        "label": "3rd floor",
        "walls": [
          "sawali"
        ],
        "flooring": [
          "wood"
        ],
        "roofMaterials": []
      }
    ],
    "taxable": true,
    "effectivity_assessment": "2025-09-25",
    "quarter": "4th Quarter",
    "approvedBy": "EVA F. PUNTO",
    "dateApproved": "2025-09-25T12:25:55.023Z",
    "memoranda": "MEMO",
    "dateEncoded": null,
    "encoderName": "",
    "faasBldgChain_id": 2,
    "createdAt": "2025-09-25T12:47:13.420Z",
    "updatedAt": "2025-09-25T12:47:13.456Z",
    "bldgowners": [
      {
        "id": 2,
        "ownership_type": null,
        "remarks": "REMARKS",
        "status": "active",
        "createdAt": "2025-09-25T12:47:13.438Z",
        "updatedAt": "2025-09-25T12:47:13.438Z",
        "bldgFaas_id": 2,
        "party_id": 1,
        "role_id": 2,
        "partiesBldg": {
          "id": 1,
          "type": "person",
          "name": null,
          "firstname": "George ",
          "middlename": "Carver",
          "lastname": "Washington",
          "suffix": null,
          "regions": "Region IV-A (CALABARZON)",
          "status": null,
          "tin": "T-3476287",
          "contactno": null,
          "email": "george@example.com",
          "street": "322 Purok 4",
          "brgy": "Soledad",
          "city": "San Pablo City",
          "province": "Laguna",
          "createdAt": "2025-09-25T10:08:29.398Z",
          "updatedAt": "2025-09-25T10:08:29.398Z"
        },
        "roles": {
          "id": 2,
          "name": "owner",
          "createdAt": "2025-09-24T16:00:00.000Z",
          "updatedAt": "2025-09-24T16:00:00.000Z"
        }
      },
      {
        "id": 3,
        "ownership_type": null,
        "remarks": "REMARKS",
        "status": "active",
        "createdAt": "2025-09-25T12:47:13.444Z",
        "updatedAt": "2025-09-25T12:47:13.444Z",
        "bldgFaas_id": 2,
        "party_id": 9,
        "role_id": 3,
        "partiesBldg": {
          "id": 9,
          "type": "company",
          "name": "McDo",
          "firstname": null,
          "middlename": null,
          "lastname": null,
          "suffix": null,
          "regions": "Region IV-A (CALABARZON)",
          "status": null,
          "tin": "T-3476287",
          "contactno": null,
          "email": "jimuelbaraero00@gmail.com",
          "street": "322",
          "brgy": "San Antonio 1",
          "city": "San Pablo City",
          "province": "Laguna",
          "createdAt": "2025-09-25T11:45:57.105Z",
          "updatedAt": "2025-09-25T11:45:57.105Z"
        },
        "roles": {
          "id": 3,
          "name": "administrator",
          "createdAt": "2025-09-24T16:00:00.000Z",
          "updatedAt": "2025-09-24T16:00:00.000Z"
        }
      }
    ],
    "propertyAppraisals": {
      "id": 2,
      "ucc": "10000.00",
      "bcst": "2800000.00",
      "totalConstructionCost": "2873590.00",
      "depreciationRate": "2.00",
      "yearsToDepreciate": 5,
      "depreciationCost": "10.00",
      "marketValue": "2873580.00",
      "createdAt": "2025-09-25T12:47:13.448Z",
      "updatedAt": "2025-09-25T12:47:13.448Z",
      "bldgFaas_id": 2,
      "additionalItems": [
        {
          "id": 2,
          "category": "foundation",
          "type": "type5",
          "area": "167.25",
          "noFloors": 1,
          "material": "",
          "cost": "0.00",
          "storey": "",
          "affectedArea": "0.00",
          "total": "73590.00",
          "createdAt": "2025-09-25T12:47:13.451Z",
          "updatedAt": "2025-09-25T12:47:13.451Z",
          "property_appraisal_id": 2
        }
      ]
    },
    "previousRecords": {
      "id": 2,
      "pin_no": "130-06-0077-0007",
      "arp_no": "06-0077-0007",
      "total_assessed_value": "100000.00",
      "owner_name": "John D",
      "effectivity_assessment": "2025-09-24T16:00:00.000Z",
      "ar_page_no": null,
      "date": null,
      "from_faas_id": null,
      "to_faas_id": null,
      "createdAt": "2025-09-25T12:47:13.458Z",
      "updatedAt": "2025-09-25T12:47:13.458Z",
      "bldgFaas_id": 2
    },
    "propertyAssessments": {
      "id": 2,
      "actualUse": "residential",
      "assessmentLevel": "0.40",
      "assessedValue": "1149432.00",
      "marketValue": "2873580.00",
      "createdAt": "2025-09-25T12:47:13.453Z",
      "updatedAt": "2025-09-25T12:47:13.453Z",
      "bldgFaas_id": 2
    },
    "appraisers": [],
    "bldg_ownership": [
      {
        "regions": "Region IV-A (CALABARZON)",
        "province": "Laguna",
        "city": "San Pablo City",
        "brgy": "Soledad",
        "street": "322 Purok 4",
        "postal": "4001",
        "type": "person",
        "role": "owner",
        "contact_no": null,
        "email": "george@example.com",
        "name": "",
        "lastname": "Washington",
        "firstname": "George ",
        "middlename": "Carver",
        "suffix": null,
        "remarks": "REMARKS",
        "tin": "T-3476287",
        "id": 2
      },
      {
        "regions": "Region IV-A (CALABARZON)",
        "province": "Laguna",
        "city": "San Pablo City",
        "brgy": "San Antonio 1",
        "street": "322",
        "postal": "4001",
        "type": "company",
        "role": "administrator",
        "contact_no": null,
        "email": "jimuelbaraero00@gmail.com",
        "name": "McDo",
        "lastname": null,
        "firstname": null,
        "middlename": null,
        "suffix": null,
        "remarks": "REMARKS",
        "tin": "T-3476287",
        "id": 3
      }
    ]
  }
]

const AssessorContext = createContext({});

export const AssessorProvider = ({ children }) => {
  const [landFaasRecords, setLandFaasRecords] = useState([]);
  const [buildingFaasRecords, setBuildingFaasRecords] = useState([]);
  const [loading, setLoading] = useState([]);

  useEffect(() => {
    const fetchLandFaas = async () => {
      try {
        // const data = await getLandFaasRecords();
        const res = await axios('/faasLandFetch')
        console.log("res.data.data===========================");
        console.log(res.data.data);

        setLandFaasRecords(res.data.data);

      } catch (err) {
        // setError(err);
        setLandFaasRecords(SAMPLE_LAND_DATA);
        console.error("Failed to fetch land FAAS records:", err);
      } finally {
        setLoading(false);
      }
    };

    fetchLandFaas();
  }, []);

  useEffect(() => {
    const fetchBldgFaas = async () => {
      try {
        const res = await axios('/faasBdlgFetch')
        console.log(res.data.data);
        setBuildingFaasRecords(res.data.data);

      } catch (err) {
        setBuildingFaasRecords(SAMPLE_BLDG_DATA);
        console.error("Failed to fetch building FAAS records:", err);
      } finally {
        setLoading(false);
      }
    };

    fetchBldgFaas();
  }, []);

  return (
    <AssessorContext.Provider
      value={{
        landFaasRecords,
        setLandFaasRecords,
        buildingFaasRecords,
        setBuildingFaasRecords
      }}
    >
      {children}
    </AssessorContext.Provider>
  );
};

export default AssessorContext;
