import { useEffect, useState } from "react";
import { Button, Stack } from "@mui/material";
import { v4 } from "uuid";
import StyledFieldset from "@components/ui/StyledFieldset";
import { FIELDS } from "../../../../constants/shared/fieldNames";
import { useFieldArray, useForm, useFormContext } from "react-hook-form";
import { toast } from "react-toastify";
import { PlusCircle } from "lucide-react";
import { AddMachineAppraisal } from "../modals/AddMachineAppraisal";
import { MachineAppraisalTable } from "../../../tables/machinery/MachineAppraisalTable";
import { sumByField } from "../../../../../../utils/math";

const FORM_DEFAULT = {
  machinery_description: "",
  no_of_units: "",
  acquisition_cost: "",
  additional_cost: {
    freight: "",
    installation: "",
    insurance: "",
    others: ""
  },
  market_value: "",
  depreciation: "",
  depreciation_value: ""
}

function MachineAppraisal({ readOnly }) {
  const { control: machineFormControl, setValue: setMachineValue } = useFormContext();
  const { control: formControl, watch, setValue, handleSubmit, reset: resetForm, formState: { isSubmitting } } = useForm({ defaultValues: FORM_DEFAULT });
  const [modalActive, setModalActive] = useState(false);
  const [formMode, setFormMode] = useState("add");
  const [editingId, setEditingId] = useState(null);
  const { fields, append, remove, update } = useFieldArray({ control: machineFormControl, name: FIELDS.M_PROPERTY_APPRAISAL });

  const watchValues = watch();

  // useEffect(() => {
  //   const {
  //     market_value,
  //     additional_cost = {},
  //     depreciation,
  //   } = watchValues;

  //   // safely parse numbers (fallback to 0 if empty/NaN)
  //   const freight = Number(additional_cost.freight) || 0;
  //   const installation = Number(additional_cost.installation) || 0;
  //   const insurance = Number(additional_cost.insurance) || 0;
  //   const others = Number(additional_cost.others) || 0;

  //   // compute totals
  //   const totalAdditional = freight + installation + insurance + others;
  //   const totalMarketValue = (Number(market_value) || 0) + totalAdditional;

  //   // compute depreciation
  //   const depreciationRate = (Number(depreciation) || 0);
  //   const depreciationValue = totalMarketValue - depreciationRate;

  //   // update form values
  //   setValue("market_value", totalMarketValue, { shouldValidate: true, shouldDirty: true });
  //   setValue("depreciation_value", depreciationValue, { shouldValidate: true, shouldDirty: true });
  // }, [
  //   watchValues.additional_cost?.freight,
  //   watchValues.additional_cost?.installation,
  //   watchValues.additional_cost?.insurance,
  //   watchValues.additional_cost?.others,
  //   watchValues.depreciation,
  //   setValue,
  // ]);

  const onAddSubmit = (data) => {
    try {
      const newItem = { ...data, id: v4() };
      append(newItem);
      resetForm(FORM_DEFAULT);
      toast.success("Property appraisal added successfully!");
      setModalActive(false);
    } catch (error) {
      toast.error("Failed to add property appraisal. Please try again.");
      console.error("Error in onAddSubmit:", error);
    }
  };

  const onEditSubmit = (data) => {
    try {
      update(editingId, { ...data, id: fields[editingId].id });
      setModalActive(false);
      setEditingId(null);
      resetForm(FORM_DEFAULT);
      toast.success("Property appraisal updated successfully!");
    } catch (error) {
      console.error("Error updating property appraisal:", error);
      toast.error("Failed to update property appraisal. Please try again.");
    }
  };

  const handleEdit = (idx) => {
    setFormMode("edit");
    setEditingId(idx);
    setModalActive(true);
    resetForm(fields[idx]);
  };

  const handleDelete = (idx) => {
    try {
      remove(idx);
      toast.success("Property appraisal deleted successfully!");
    } catch (error) {
      toast.error("Failed to delete property appraisal. Please try again.");
      console.error(error);
    }
  };

  const handleClose = () => {
    setModalActive(false);
    setEditingId(null);
    setFormMode("add");
    resetForm(FORM_DEFAULT);
  };

  const handleAddBtnClick = () => {
    setFormMode("add");
    setModalActive(true);
  };

  return (
    <>
      <StyledFieldset title="Property Appraisal">
        <Stack mb={2}>
          <Button
            disabled={readOnly}
            disableFocusRipple
            variant="contained"
            startIcon={<PlusCircle size="18" />}
            onClick={handleAddBtnClick}
            sx={{
              alignSelf: "flex-start",
            }}
          >
            Appraisal
          </Button>
        </Stack>

        <MachineAppraisalTable
          readOnly={readOnly}
          rows={fields}
          handleDelete={handleDelete}
          handleEdit={handleEdit}
        />

      </StyledFieldset>

      <AddMachineAppraisal
        disabled={isSubmitting}
        open={modalActive}
        onClose={handleClose}
        handleSubmit={formMode === "add" ? handleSubmit(onAddSubmit) : handleSubmit(onEditSubmit)}
        control={formControl}
        formMode={formMode}
      />
    </>
  );
};

export default MachineAppraisal