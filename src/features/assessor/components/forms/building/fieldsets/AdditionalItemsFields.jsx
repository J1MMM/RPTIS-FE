import { useEffect, useState } from "react";
import { Button, Stack, Typography } from "@mui/material";
import { v4 } from "uuid";
import StyledFieldset from "@components/ui/StyledFieldset";
import { toastConfig } from "@constants/toastConfig";
import { ADDITIONAL_ITEMS_DEFAULT, } from "../../../../constants/building/defaults";
import { FIELDS } from "../../../../constants/shared/fieldNames";
import { useFieldArray, useForm, useFormContext, useWatch } from "react-hook-form";
import { toast } from "react-toastify";
import { AdditionalItemsTable } from "../../../tables/building/AdditionalItemsTable";
import { PlusCircle } from "lucide-react";
import { AdditionalItemModal } from "../modal/AdditionalItemModal";
import { additionalItemsComputations } from "../../../../utils/buildingAdditionalItems";

function AdditionalItemsFields({ readOnly }) {
  const [modalActive, setModalActive] = useState(false);
  const { control: buildingControl, getValues: getBldgValue, setValue: setBldgVal } = useFormContext();
  const { fields, append, remove } = useFieldArray({ control: buildingControl, name: FIELDS.ADDITIONAL_ITEMS });
  const { control, watch, reset, setValue, handleSubmit, formState: { isSubmitting } } = useForm();
  const { affectedArea, area, category, cost, height, material, noFloors, storey, total, type } = useWatch({ control })

  //compute subtotal
  useEffect(() => {
    if (!category) return; // exit early if not set

    const computeFn = additionalItemsComputations[category];
    if (typeof computeFn !== "function") {
      console.warn("No compute function for category:", category);
      return;
    }

    const structuralType = getBldgValue(FIELDS.UNIT_CONSTRUCTION_COST) || 0
    const subTotal = computeFn({ type, area, noFloors, cost, height, material, storey, total: total, affectedArea, structuralType }) || 0;

    setValue("structuralType", structuralType);
    setValue("total", subTotal);

  }, [category, noFloors, area, type, material, cost, affectedArea, height, storey]);

  // reset fields when category cahnge 
  useEffect(() => {
    setValue("affectedArea", "");
    setValue("area", "");
    setValue("cost", "");
    setValue("height", "");
    setValue("noFloors", "");
    setValue("material", "");
    setValue("storey", "");
    setValue("type", "");

  }, [category]);

  const onSubmit = (data) => {
    try {
      const newAdditionItem = { ...data, id: v4() };
      append(newAdditionItem);
      toast.success("Item added successfully!", toastConfig);
      setModalActive(false);
      reset(ADDITIONAL_ITEMS_DEFAULT)
    } catch (error) {
      toast.error("Failed to Add Items. Please try again.", toastConfig);
      console.error("Error in onAppraisalSubmit:", error);
    }
  };

  const handleDelete = (index) => {
    try {
      remove(index)
      toast.success("Item deleted successfully!", toastConfig);
    } catch (error) {
      toast.error("Failed to delete Item. Please try again.", toastConfig);
      console.error(error);
    }
  };

  return (
    <>
      <StyledFieldset title="Cost of Additional Items">
        <Stack mb={2}>
          <Button
            disabled={readOnly || !getBldgValue(FIELDS.BUILDING_MARKET_VALUE)}
            disableFocusRipple
            variant="contained"
            startIcon={<PlusCircle size="18" />}
            onClick={() => setModalActive(true)}
            sx={{
              alignSelf: "flex-start",
            }}
          >
            Add Items
          </Button>
        </Stack>

        <AdditionalItemsTable
          readOnly={readOnly}
          fields={fields}
          handleDelete={handleDelete}
        />

      </StyledFieldset>

      <AdditionalItemModal
        control={control}
        disabled={isSubmitting}
        open={modalActive}
        onClose={() => setModalActive(false)}
        handleSubmit={handleSubmit(onSubmit)}

      />
    </>
  );
};

export default AdditionalItemsFields