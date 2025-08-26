import { useState } from "react";
import { DataGrid } from "@mui/x-data-grid";
import Button from "@mui/material/Button";
import { Stack } from "@mui/material";
import { DATA_GRID_INITIAL_STATE, DATA_GRID_STYLE, PAGE_SIZE_OPTION } from "@constants/tableStyles";
import useFaasData from "../../hooks/useFaasData";
import { LAND_TABLE_COLUMN } from "../../constants/tableColumns";
import useAssessorForm from "../../hooks/useFormContext";
import AddLandFaasModal from "../../components/forms/land/modals/AddLandFaasModal";
import { toast, } from "react-toastify";
import ConfirmationDialog from "../../../../components/shared/ConfirmationDialog";
import { toastConfig } from "../../../../constants/toastConfig";
import { PlusCircle, ShuffleIcon } from "lucide-react";
import axios from "../../../../api/axios";
import { FIELDS } from "../../constants/fieldNames";
import { v4 } from "uuid";
import { FormProvider, useForm, useFormContext } from "react-hook-form";
import { DEFAULT_FIELD_VALUES } from "../../constants/defaultValues";
import LandFaasTable from "../../components/tables/land/active-faas-page/LandFaasTable";
import { logger } from "../../../../utils/logger";
import useConfirm from "../../../../hooks/useConfirm";

function LandFaasPage() {

  const methods = useForm({ defaultValues: DEFAULT_FIELD_VALUES });
  const { handleSubmit, formState: { isSubmitting, isDirty }, reset, setValue, } = methods;
  const { landFaasRecords, setLandFaasRecords } = useFaasData();
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
      setLandFaasRecords(prev => [...prev, { ...data, id: v4() }])
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
        <LandFaasTable
          handleShowDetails={handleShowDetails}
          rows={landFaasRecords}
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

        <AddLandFaasModal
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
      {/* 
      <ConfirmationDialog
        disabled={isSubmitting}
        open={showConfirmation}
        setOpen={() => setShowConfirmation(false)}
        onConfirm={handleSubmit(onSubmit)}
        title="Add Land FAAS Confirmation"
        message="Are you sure you want to add this land FAAS data? It will be saved once confirmed."
      /> */}

    </>
  );
}

export default LandFaasPage;
