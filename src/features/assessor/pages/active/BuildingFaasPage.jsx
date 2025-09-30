import { useEffect, useState } from "react";
import Button from "@mui/material/Button";
import useFaasData from "../../hooks/useFaasData";
import AddLandFaasModal from "../../components/forms/land/modals/AddLandFaasModal";
import { toast, } from "react-toastify";
import { PlusCircle, ShuffleIcon } from "lucide-react";
import { v4 } from "uuid";
import { FormProvider, useForm, useFormContext, useWatch } from "react-hook-form";
import useConfirm from "../../../../hooks/useConfirm";
import AddBuildingFaasModal from "../../components/forms/building/modal/AddBuildingFaasModal";

import PrintableBuildingFaasFormModal from "../../components/forms/building/modal/printableModal/PrintableBuildingFaasFormModal";
import PrintableBuildingTaxdecFormModal from "../../components/forms/building/modal/printableModal/PrintableBuildingTaxdecFormModal";
import PrintablesMenu from "../../components/forms/PrintablesMenu";
import axios from "../../../../api/axios";
import { bldgReqFormatter } from "../../utils/bldgReqFormatter";
import { logger } from "../../../../utils/logger";
import { capitalizeFirstLetter } from "../../../../utils/formatters";
import { BLDG_FORM_DEFAULT } from "../../constants/building/defaults";
import BuildingFaasTable from "../../components/tables/building/BuildingFaasTable";

function BuildingFaasPage() {

  const methods = useForm({ defaultValues: BLDG_FORM_DEFAULT, mode: "onSubmit" });
  const { handleSubmit, formState: { isSubmitting, isDirty, dirtyFields }, reset, setValue, getValues, watch } = methods;
  const { buildingFaasRecords, setBuildingFaasRecords } = useFaasData();
  const confirm = useConfirm()
  const [showConfirmation, setShowConfirmation] = useState(false);
  const [addModalActive, setAddModalActive] = useState(false);
  const [printFaasModalActive, setPrintFaasModalActive] = useState(false);
  const [printTaxdecModalActive, setPrintTaxdecModalActive] = useState(false);
  const [formMode, setFormMode] = useState("add");

  logger("BUILDING FORM DATA", useWatch({ control: methods.control }))

  const onSubmit = async (data) => {
    console.log("Submitting data:", data);
    if (isSubmitting) return;

    try {
      const formattedData = bldgReqFormatter(data)

      const response = await axios.post('/faasBldg', formattedData)
      console.log(response.data);
      setBuildingFaasRecords(prev => [...prev, { ...data, id: v4() }])
      toast.success("Building FAAS added successfully!");
      setAddModalActive(false);
    } catch (error) {
      console.error("Error submitting form:", error);

      toast.error(`${capitalizeFirstLetter(error.response.data?.message)}`);
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
          reset(BLDG_FORM_DEFAULT);
          setAddModalActive(false);
        },
      });
      return;
    }
    reset(BLDG_FORM_DEFAULT);
    setAddModalActive(false);
  };

  const handleFaasForm = () => {
    setPrintFaasModalActive(true);
  };
  const handleClosePrintModal = () => {
    setPrintFaasModalActive(false);
    setPrintTaxdecModalActive(false);
  };

  const handleTaxdecForm = () => {
    setPrintTaxdecModalActive(true);
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
              New FAAS
            </Button>
          </>)}
        />

        <AddBuildingFaasModal
          formMode={formMode}
          setFormMode={setFormMode}
          disabled={isSubmitting}
          open={addModalActive}
          onClose={handleCloseModal}
          handleSubmit={handleSubmit(() => confirm({
            title: "Add Building FAAS Confirmation",
            message: "Are you sure you want to add this building FAAS data? It will be saved once confirmed.",
            onConfirm: handleSubmit(onSubmit)
          }))}
          handleForm={handleClick}
        />

        <PrintableBuildingFaasFormModal open={printFaasModalActive} onClose={handleClosePrintModal} />
        <PrintableBuildingTaxdecFormModal open={printTaxdecModalActive} onClose={handleClosePrintModal} />
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

export default BuildingFaasPage;
