import { useEffect, useState } from "react";
import Button from "@mui/material/Button";
import useFaasData from "../../hooks/useFaasData";
import AddLandFaasModal from "../../components/forms/land/modals/AddLandFaasModal";
import { toast, } from "react-toastify";
import { toastConfig } from "../../../../constants/toastConfig";
import { PlusCircle, ShuffleIcon } from "lucide-react";
import { v4 } from "uuid";
import { FormProvider, useForm, useFormContext } from "react-hook-form";
import { LAND_DEFAULT_FIELD } from "../../constants/land/default";
import useConfirm from "../../../../hooks/useConfirm";
import MachineryFaasTable from "../../components/tables/machinery/active-faas-page/MachineryFaasTable";

function MachineryFaasPage() {
  const methods = useForm({ defaultValues: LAND_DEFAULT_FIELD, mode: "onSubmit" });
  const { handleSubmit, formState: { isSubmitting, isDirty, dirtyFields }, reset, setValue, getValues, watch } = methods;
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
      // const response = await axios.post('/faasLand', data)
      setLandFaasRecords(prev => [...prev, { ...data, id: v4() }])
      toast.success("Form submitted successfully!", toastConfig);
      setAddModalActive(false);
    } catch (error) {
      console.error("Error submitting form:", error);

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
        <MachineryFaasTable
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
        />
      </FormProvider>
    </>
  );
}

export default MachineryFaasPage;
