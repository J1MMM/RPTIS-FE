import { useEffect, useState } from "react";
import Button from "@mui/material/Button";
import useFaasData from "../../../assessor/hooks/useFaasData";
import { toast, } from "react-toastify";
import { toastConfig } from "../../../../constants/toastConfig";
import { PlusCircle, ShuffleIcon } from "lucide-react";
import { v4 } from "uuid";
import { FormProvider, useForm, useFormContext } from "react-hook-form";
import useConfirm from "../../../../hooks/useConfirm";
import MachineryFaasTable from "../../components/tables/machinery/MachineryFaasTable";
import MachineyFaasModal from "../../components/forms/machinery/modals/MachineyFaasModal";
import { MACHINERY_FORM_DEFAULTS } from "../../constants/machinery/default";
import axios from "../../../../api/axios";
import { machineryReqFormatter } from "../../utils/machineryReqFormatter";
import { useCreateMachineryFaas } from "../../hooks/useMachineryFaasMutation";

function MachineryFaasPage() {
  const methods = useForm({ defaultValues: MACHINERY_FORM_DEFAULTS, mode: "onSubmit" });
  const { handleSubmit, formState: { isDirty }, reset } = methods;
  const { machineFaasRecords } = useFaasData();
  const createMachineryFaas = useCreateMachineryFaas();
  const confirm = useConfirm()

  const [showConfirmation, setShowConfirmation] = useState(false);
  const [addModalActive, setAddModalActive] = useState(false);
  const [formMode, setFormMode] = useState("add");

  const onSubmit = async (data) => {
    try {
      const formattedData = machineryReqFormatter(data);
      await createMachineryFaas.mutateAsync(formattedData);
      toast.success("Form submitted successfully!", toastConfig);
      setAddModalActive(false);
      reset(MACHINERY_FORM_DEFAULTS);
    } catch (error) {
      console.error("Error submitting form:", error);
      toast.error(error.response?.data?.message, toastConfig);
      throw error;
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
          reset(MACHINERY_FORM_DEFAULTS);
          setAddModalActive(false);
        },
      });
      return;
    }
    reset(MACHINERY_FORM_DEFAULTS);
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
          rows={machineFaasRecords}
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

        <MachineyFaasModal
          formMode={formMode}
          setFormMode={setFormMode}
          disabled={createMachineryFaas.isLoading}
          open={addModalActive}
          onClose={handleCloseModal}
          handleSubmit={() => confirm({
            title: "Add Machinery FAAS Confirmation",
            message: "Are you sure you want to add this machinery FAAS data? It will be saved once confirmed.",
            onConfirm: () => handleSubmit(onSubmit)()
          })}
        />
      </FormProvider>
    </>
  );
}

export default MachineryFaasPage;
