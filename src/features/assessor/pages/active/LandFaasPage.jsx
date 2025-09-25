import { useEffect, useState } from "react";
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
import { FormProvider, useForm, useFormContext, useWatch } from "react-hook-form";
import { LAND_DEFAULT_FIELD } from "../../constants/defaultValues";
import LandFaasTable from "../../components/tables/land/active-faas-page/LandFaasTable";
import { logger } from "../../../../utils/logger";
import useConfirm from "../../../../hooks/useConfirm";

import PrintableLandFaasFormModal from "../../components/forms/land/modals/printableModal/PrintableLandFaasFormModal";
import PrintablesMenu from "../../components/forms/PrintablesMenu";
import PrintableTaxdecFormModal from "../../components/forms/land/modals/printableModal/PrintableTaxdecFormModal";
// import PrintableTaxdecFormModal from "../../components/forms/land/modals/printableModal/PrintableTaxdecFormModal";

function LandFaasPage() {

  const methods = useForm({ defaultValues: LAND_DEFAULT_FIELD, mode: "onSubmit" });
  const { handleSubmit, formState: { isSubmitting, isDirty, dirtyFields }, reset, setValue, getValues, watch } = methods;
  const { landFaasRecords, setLandFaasRecords } = useFaasData();
  const confirm = useConfirm()

  const [showConfirmation, setShowConfirmation] = useState(false);
  const [addModalActive, setAddModalActive] = useState(false);
  const [printFaasModalActive, setPrintFaasModalActive] = useState(false);
  const [printTacdecModalActive, setPrintTacdecModalActive] = useState(false);
  const [formMode, setFormMode] = useState("add");

  const onSubmit = async (data) => {
    console.log("Submitting data:", data);
    if (isSubmitting) return;
    try {
      // const response = await axios.post('/faasLand', data)
      setLandFaasRecords(prev => [...prev, { ...data, id: v4() }])
      toast.success("Form submitted successfully!", toastConfig);
      setAddModalActive(false);
    } catch (error) {
      console.error("Error submitting form:", error);

      toast.error("Something went wrong while submitting.", toastConfig);
    } finally {
      setShowConfirmation(false);
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
          reset(LAND_DEFAULT_FIELD);
          setAddModalActive(false);
        },
      });
      return;
    }
    reset(LAND_DEFAULT_FIELD);
    setAddModalActive(false);
  };

  const handleFaasForm = () => {
    setPrintFaasModalActive(true);
  };
  const handleClosePrintModal = () => {
    setPrintFaasModalActive(false);
    setPrintTacdecModalActive(false);
  };

  const handleTaxdecForm = () => {
    setPrintTacdecModalActive(true);
  };

  const [anchorEl, setAnchorEl] = useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const open = Boolean(anchorEl);

  useEffect(() => {
    if (!open || !isDirty) return;

    const handleBeforeUnload = (event) => {
      event.preventDefault();
      event.returnValue = "";
    };

    window.addEventListener("beforeunload", handleBeforeUnload);

    return () => {
      window.removeEventListener("beforeunload", handleBeforeUnload);
    };
  }, [open, isDirty]);


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
              New FAAS
            </Button>
          </>)}
        />

        <AddLandFaasModal
          formMode={formMode}
          setFormMode={setFormMode}
          disabled={isSubmitting}
          open={addModalActive}
          onClose={handleCloseModal}
          handleSubmit={handleSubmit(() => confirm({
            title: "Add Land FAAS Confirmation",
            message: "Are you sure you want to add this land FAAS data? It will be saved once confirmed.",
            onConfirm: handleSubmit(onSubmit)
          }))}
          handleForm={handleClick}
        />

        <PrintableLandFaasFormModal
          open={printFaasModalActive}
          onClose={handleClosePrintModal}
        />

        <PrintableTaxdecFormModal
          open={printTacdecModalActive}
          onClose={handleClosePrintModal}
        />

        <PrintablesMenu
          open={open}
          handleClose={handleClose}
          anchorEl={anchorEl}
          handleFaas={handleFaasForm}
          handleTaxdec={handleTaxdecForm}
        />
      </FormProvider>
    </>
  );
}

export default LandFaasPage;
