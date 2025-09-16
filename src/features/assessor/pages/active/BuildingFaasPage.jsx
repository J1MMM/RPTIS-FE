import { useEffect, useState } from "react";
import Button from "@mui/material/Button";
import useFaasData from "../../hooks/useFaasData";
import AddLandFaasModal from "../../components/forms/land/modals/AddLandFaasModal";
import { toast, } from "react-toastify";
import { toastConfig } from "../../../../constants/toastConfig";
import { PlusCircle, ShuffleIcon } from "lucide-react";
import { v4 } from "uuid";
import { FormProvider, useForm, useFormContext } from "react-hook-form";
import { BUILDING_DEFAULT, LAND_DEFAULT_FIELD } from "../../constants/defaultValues";
import useConfirm from "../../../../hooks/useConfirm";
import BuildingFaasTable from "../../components/tables/land/active-faas-page/BuildingFaasTable";
import AddBuildingFaasModal from "../../components/forms/building/modal/AddBuildingFaasModal";
import axios from "../../../../api/axios";
import { bldgReqFormatter } from "../../utils/bldgReqFormatter";

function BuildingFaasPage() {

  const methods = useForm({ defaultValues: BUILDING_DEFAULT, mode: "onSubmit" });
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
      // const formattedData = bldgReqFormatter(data)


      // const response = await axios.post('/faasBldg', data)
      setBuildingFaasRecords(prev => [...prev, { ...data, id: v4() }])
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
