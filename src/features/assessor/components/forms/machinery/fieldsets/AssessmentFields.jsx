import StyledFieldset from "@components/ui/StyledFieldset";
import { FIELDS } from "../../../../constants/shared/fieldNames";
import { sumByField } from "@utils/math";
import { useFormContext, useWatch } from "react-hook-form";
import { BuildingAssessmentTable } from "../../../tables/building/BuildingAssessmentTable";
import { useEffect } from "react";
import { getBldgAssLvl } from "../../../../utils/getBldgAssLvl";
import { v4 } from "uuid";
import { DataGrid } from "@mui/x-data-grid";
import { MenuItem, Select } from "@mui/material";
import { CLASSIFICATION_OPTIONS } from "../../../../constants/shared/dropdown";
import { BLDG_ASSESSMENT_COLUMNS } from "../../../../constants/building/table-columns";
import { DATA_GRID_INITIAL_STATE, DATA_GRID_STYLE, LAND_INNER_TABLE_WIDTH } from "../../../../../../constants/tableStyles";
import { M_ASSESSMENT_COLUMNS } from "../../../../constants/machinery/table-columns";

const actualUseEquivalents = {
  residential: .5,
  commercial: .8,
  industrial: .8,
  agricultural: .4
}

function AssessmentFields({ readOnly }) {
  const { control, setValue } = useFormContext()
  const [propertyAssessment, appraisal] = useWatch({ control, name: [FIELDS.M_PROPERTY_ASSESSMENT, FIELDS.M_PROPERTY_APPRAISAL] }) || {};
  const { actual_use, market_value } = propertyAssessment

  const handleChange = (newActualUse) => {
    const assLevel = (actualUseEquivalents[newActualUse] ?? 0)

    setValue(`${FIELDS.M_PROPERTY_ASSESSMENT}.actual_use`, newActualUse)
    setValue(`${FIELDS.M_PROPERTY_ASSESSMENT}.assessment_level`, assLevel)
  }

  // compute assessment value 
  useEffect(() => {
    const assLevel = (actualUseEquivalents[actual_use] ?? 0);
    setValue(`${FIELDS.M_PROPERTY_ASSESSMENT}.assessment_level`, assLevel);
    setValue(`${FIELDS.M_PROPERTY_ASSESSMENT}.assessed_value`, market_value * assLevel);
  }, [actual_use, market_value, setValue]);

  useEffect(() => {
    if (!Array.isArray(appraisal)) return;

    const total = appraisal.reduce((total, row) => {
      const dep = Number(row?.["depreciation_value"]);
      const mv = Number(row?.["market_value"]);

      let value;
      if (!isNaN(dep) && dep !== 0) {
        value = dep;
      } else {
        value = mv;
      }

      return isNaN(value) ? total : total + value;
    }, 0);

    const current = propertyAssessment?.market_value || 0;

    if (current !== total) {
      setValue(`${FIELDS.M_PROPERTY_ASSESSMENT}.market_value`, total, {
        shouldValidate: true,
        shouldDirty: true,
      });
    }
  }, [appraisal, propertyAssessment?.market_value, setValue]);


  return (
    <>
      <StyledFieldset title="Property Assessment">
        <DataGrid
          rows={[{ ...propertyAssessment, id: v4() }]}
          columns={[
            {
              field: "kind",
              headerName: "Kind",
              flex: 1,
              headerClassName: "data-grid-header",
              sortable: false,
              filterable: false,
              disableColumnMenu: true,
            },
            {
              field: "actual_use",
              headerName: "Actual Use",
              flex: 1,
              headerClassName: "data-grid-header",
              sortable: false,
              filterable: false,
              disableColumnMenu: true,
              renderCell: (params) => {
                return (
                  <Select
                    required
                    disabled={readOnly}
                    value={params.row?.actual_use}
                    onChange={(e) => handleChange(e.target.value)}
                    fullWidth
                    variant="standard"
                  >
                    {CLASSIFICATION_OPTIONS.map((option, index) => (
                      <MenuItem key={index} value={option.value}>
                        {option.label}
                      </MenuItem>
                    ))}
                  </Select>
                );
              },
            },
            ...M_ASSESSMENT_COLUMNS,
          ]}
          initialState={DATA_GRID_INITIAL_STATE}
          disableRowSelectionOnClick
          sx={{
            ...DATA_GRID_STYLE,
            width: LAND_INNER_TABLE_WIDTH,
            border: "1px solid neutral.main",
          }}
          hideFooterPagination
          disableColumnResize
          showCellVerticalBorder

        />
      </StyledFieldset>
    </>
  );
};

export default AssessmentFields