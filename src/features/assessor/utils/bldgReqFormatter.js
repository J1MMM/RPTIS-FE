/**
 * Format data from seedBldgReq.json structure to building_req.json structure
 * @param {Object} data  
 * @returns {Object} 
 */

import { FIELDS } from "../constants/fieldNames";

export const bldgReqFormatter = (data) => {
    // const formatOwnership = (ownership) => {
    //     return ownership.map(owner => ({
    //         regions: owner.regions || "",
    //         province: owner.province || "",
    //         city: owner.city || "",
    //         barangay: owner.barangay || "",
    //         street: owner.street || "",
    //         postal: owner.postal || "",
    //         type: owner.type || "",
    //         role: owner.role || "",
    //         contact_no: owner.contact_no || "",
    //         email: owner.email || "",
    //         firstname: owner.firstname || "",
    //         lastname: owner.lastname || "",
    //         middlename: owner.middlename || "",
    //         name: owner.name || "",
    //         remarks: owner.remarks || "",
    //         tin: owner.tin || ""
    //     }));
    // };

    // const formatLandReference = (landRef) => {
    //     return {
    //         td: landRef.td || "",
    //         owner: landRef.owner || "",
    //         street: landRef.street || "",
    //         brgy: landRef.brgy || "",
    //         city: landRef.city || "",
    //         province: landRef.province || "",
    //         oct_tct_cloa_no: landRef["oct_tct-cloa_no"] || "",
    //         lot_no: landRef.lot_no || "",
    //         blk_no: landRef.blk_no || "",
    //         survey_no: landRef.survey_no || landRef["oct_tct-survey_no"] || "",
    //         area: parseFloat(landRef.area) || 0
    //     };
    // };

    // Format floors data
    // const formatFloors = (floors) => {
    //     return Array.isArray(floors) ? floors.map(floor => ({
    //         id: floor.id || "",
    //         label: floor.label || "",
    //         area: parseFloat(floor.area) || 0,
    //         flooring: Array.isArray(floor.flooring) ? floor.flooring : [],
    //         walls: Array.isArray(floor.walls) ? floor.walls : []
    //     })) : [];
    // };

    // Format property appraisal coai array
    // const formatCoai = (coai) => {
    //     return Array.isArray(coai) ? coai.map(item => ({
    //         category: item.category || "",
    //         type: item.type || "",
    //         area: parseFloat(item.area) || 0,
    //         noFloors: parseInt(item.noFloors) || 0,
    //         material: item.material || "",
    //         cost: parseFloat(item.cost) || 0,
    //         affectedArea: parseFloat(item.affectedArea) || 0,
    //         height: item.height || "",
    //         storey: item.storey || "",
    //         sub_total: parseFloat(item.sub_total) || 0,
    //         id: item.id || ""
    //     })) : [];
    // };

    // Main transformation
    const formattedData = {
        // Basic fields
        transaction_code: data.transaction_code || "",
        arp_no: data.arp_no || "",
        pin_no: data.pin_no || "",

        // Building ownership
        bldg_ownership: data[FIELDS.BLDG_OWNERSHIP_FIELD] || [],

        // Land reference
        land_reference: data[FIELDS.BLDG_LAND_REF_FIELD] || {},

        // Building details
        kindBldg: data.kindBldg || "",
        structural_type: {
            category: data[FIELDS.STRUCTURAL_FIELDS]?.category || "",
            type: data[FIELDS.STRUCTURAL_FIELDS]?.type || ""
        },
        bldgPermit: data.bldgPermit || "",
        date_issued: data.date_issued || "",
        cct: data.cct || "",
        coc_issued_on: data.coc_issued_on || "",
        dateConstructed: data.dateConstructed || "",
        dateOccupied: data.dateOccupied || "",
        buildingAge: data.buildingAge || "",
        noOfStorey: parseInt(data.noOfStorey) || 1,
        floors: data.floors || [],

        // Property appraisal
        property_appraisal: {
            ucc: data[FIELDS.PROPERTY_APPRAISAL_FIELD]?.ucc || "",
            bcst: data[FIELDS.PROPERTY_APPRAISAL_FIELD]?.bcst || "",
            coai: data[FIELDS.ADDITIONAL_ITEMS] || [],
            totalConstructionCost: data[FIELDS.PROPERTY_APPRAISAL_FIELD]?.totalConstructionCost || "",
            depreciationRate: data[FIELDS.PROPERTY_APPRAISAL_FIELD]?.depreciationRate || "",
            yearsToDepreciate: data[FIELDS.PROPERTY_APPRAISAL_FIELD]?.yearsToDepreciate || "",
            depreciationCost: data[FIELDS.PROPERTY_APPRAISAL_FIELD]?.depreciationCost || "",
            marketValue: data[FIELDS.PROPERTY_APPRAISAL_FIELD]?.marketValue || ""
        },

        // Property assessment
        property_assessment: {
            actualUse: data[FIELDS.BLDG_ASSESSMENT_FIELDS]?.actualUse || "",
            assessmentLevel: data[FIELDS.BLDG_ASSESSMENT_FIELDS]?.assessmentLevel || "",
            assessedValue: data[FIELDS.BLDG_ASSESSMENT_FIELDS]?.assessedValue || "",
            marketValue: data[FIELDS.BLDG_ASSESSMENT_FIELDS]?.marketValue || ""
        },

        // Tax and assessment info
        taxable: data.taxable || "",
        effectivityOfAssessment: data.effectivity_year || data.effectivityOfAssessment || "",
        quarter: data.effectivity_quarter || data.quarter || "",
        yearAssessment: data.yearAssessment || "",

        // Approval and encoding
        appraisers: data.appraisers || {},
        approvedBy: data.approvedBy || "",
        dateApproved: data.dateApproved || "",
        memoranda: data.memoranda || "",
        dateEncoded: data.dateEncoded || "",
        encoderName: data.encoderName || "",

        // Previous records
        previous_records: data.previous_records || {}
    };

    return formattedData;
};