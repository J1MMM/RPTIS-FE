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

function LandFaasPage() {

  const methods = useForm({ defaultValues: DEFAULT_FIELD_VALUES });
  const { handleSubmit, formState: { isSubmitting } } = methods;
  const { landFaasRecords, setLandFaasRecords } = useFaasData();
  const [showConfirmation, setShowConfirmation] = useState(false);
  const [addModalActive, setAddModalActive] = useState(false);
  const [disabled, setDisabled] = useState(false);
  const [selectedArpNos, setSelectedArpNos] = useState([]);

  const onSubmit = async (data) => {
    console.log("Submitting data:", data);
    if (isSubmitting) return;
    try {
      const { landAppraisal, marketAdjustment, ...res } = data
      const landappraisals = []
      const payload = {
        ...res,
        landappraisals
      }
      await new Promise(r => setTimeout(r, 3000))
      console.log(payload);
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

  const handleViewClick = (params) => {
    const id = params?.row?.id;
  };

  return (
    <>
      <FormProvider {...methods}>
        <LandFaasTable
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
              onClick={() => setAddModalActive(true)}
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
          onClose={() => setAddModalActive(false)}
          handleSubmit={handleSubmit(() => setShowConfirmation(true))}
        />
      </FormProvider>


      <ConfirmationDialog
        disabled={isSubmitting}
        open={showConfirmation}
        setOpen={() => setShowConfirmation(false)}
        confirm={handleSubmit(onSubmit)}
        title="Add Land FAAS Confirmation"
        content="Are you sure you want to add this land FAAS data? It will be saved once confirmed."
      />

    </>
  );
}

export default LandFaasPage;
