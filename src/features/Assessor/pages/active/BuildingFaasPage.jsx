import { useState } from "react";
import Button from "@mui/material/Button";
import useFaasData from "../../hooks/useFaasData";
import AddLandFaasModal from "../../components/forms/land/modals/AddLandFaasModal";
import { toast, } from "react-toastify";
import { toastConfig } from "../../../../constants/toastConfig";
import { PlusCircle, ShuffleIcon } from "lucide-react";
import { v4 } from "uuid";
import { FormProvider, useForm, useFormContext } from "react-hook-form";
import { DEFAULT_FIELD_VALUES } from "../../constants/defaultValues";
import useConfirm from "../../../../hooks/useConfirm";
import BuildingFaasTable from "../../components/tables/land/active-faas-page/BuildingFaasTable";
import AddBuildingFaasModal from "../../components/forms/land/modals/AddBuildingFaasModal";

function BuildingFaasPage() {

  const methods = useForm({ defaultValues: DEFAULT_FIELD_VALUES });
  const { handleSubmit, formState: { isSubmitting, isDirty, dirtyFields }, reset, setValue, getValues, watch } = methods;
  const { buildingFaasRecords, setBuildingFaasRecords } = useFaasData();
  const confirm = useConfirm()

  const [showConfirmation, setShowConfirmation] = useState(false);
  const [addModalActive, setAddModalActive] = useState(false);
  const [formMode, setFormMode] = useState("add");
  const [disabled, setDisabled] = useState(false);

  const onSubmit = async (data) => {
    console.log("Submitting data:", data);
    if (isSubmitting) return;
    try {
      await new Promise(r => setTimeout(r, 1000))
      setBuildingFaasRecords(prev => [...prev, { ...data, id: v4() }])
      toast.success("Form submitted successfully!", toastConfig);
      setAddModalActive(false);
    } catch (error) {
      toast.error("Something went wrong while submitting.", toastConfig);
    } finally {
      setShowConfirmation(false);
      setDisabled(false); // re-enable after request
    }
  };

  const handleAddBtnClick = () => {
    setFormMode("add");
    setAddModalActive(true);

  };

  const handleShowDetails = (params) => {
    setFormMode("view")
    reset(params.row);
    setAddModalActive(true);
  };

  const handleCloseModal = () => {
    if (isDirty) {
      confirm({
        title: "Unsaved Changes",
        message: "You have unsaved changes. Discard them?",
        onConfirm: () => {
          reset(DEFAULT_FIELD_VALUES);
          setAddModalActive(false);
        },
      });
      return;
    }
    reset(DEFAULT_FIELD_VALUES);
    setAddModalActive(false);
  };

  return (
    <>
      <FormProvider {...methods}>
        <BuildingFaasTable
          handleShowDetails={handleShowDetails}
          rows={buildingFaasRecords}
          toolbarButtons={(<>
            <Button
              // disabled={Boolean(selectedArpNos.length < 2)}
              variant="outlined"
              onClick={() => setConsolidateActive(true)}
              startIcon={<ShuffleIcon size={18} />}
            >
              consolidate
            </Button>
            <Button
              disableFocusRipple
              onClick={handleAddBtnClick}
              variant="contained"
              startIcon={<PlusCircle size={18} />}
            >
              Add FAAS
            </Button>
          </>)}
        />

        <AddBuildingFaasModal
          disabled={isSubmitting}
          open={addModalActive}
          onClose={handleCloseModal}
          handleSubmit={handleSubmit(() => confirm({
            title: "Add Land FAAS Confirmation",
            message: "Are you sure you want to add this land FAAS data? It will be saved once confirmed.",
            onConfirm: handleSubmit(onSubmit)
          }))}
        />
      </FormProvider>
    </>
  );
}

export default BuildingFaasPage;
