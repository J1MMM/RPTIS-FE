import { useState } from "react";
import { DataGrid } from "@mui/x-data-grid";
import Button from "@mui/material/Button";
import { Box, Stack } from "@mui/material";
import { DATA_GRID_INITIAL_STATE, DATA_GRID_STYLE, PAGE_SIZE_OPTION } from "@constants/tableStyles";
import { Add, Shuffle } from "@mui/icons-material";
import useFaasData from "../../hooks/useFaasData";
import { TableToolbar } from "../../../../components/shared/TableToolbar";
import { LAND_TABLE_COLUMN } from "../../constants/tableColumns";
import useAssessorForm from "../../hooks/useFormContext";
import AddLandFaasModal from "../../components/forms/land/modals/AddLandFaasModal";
import { toast, ToastContainer } from "react-toastify";
import ConfirmationDialog from "../../../../components/shared/ConfirmationDialog";
import axios from "axios";
import { toastConfig } from "../../../../constants/toastConfig";
import { Plus, ShuffleIcon } from "lucide-react";

function LandFaasPage() {
  const { handleSubmit, formState: { isSubmitting } } = useAssessorForm();
  const { landFaasRecords, setLandFaasRecords } = useFaasData();
  const [showConfirmation, setShowConfirmation] = useState(false);
  const [addModalActive, setAddModalActive] = useState(false);
  const [disabled, setDisabled] = useState(false);
  const [selectedArpNos, setSelectedArpNos] = useState([]);


  const onSubmit = async (data) => {
    // Exit early if already submitting
    if (isSubmitting) return;
    setDisabled(true); // disable immediately
    console.log("Submitting data:", data);

    try {
      const res = await axios.get("https://mpfb2cea69f43c978176.free.beeceptor.com"); // example request
      console.log(res.data);

      toast.success("Form submitted successfully!", toastConfig);
      setAddModalActive(false);
    } catch (error) {
      toast.error("Something went wrong while submitting.", toastConfig);
    } finally {
      setShowConfirmation(false);
      setDisabled(false); // re-enable after request
    }
  };

  const handleClickSubmit = (e) => {
    e.preventDefault()
    e.stopPropagation();
    setShowConfirmation(true)
  }


  const PageButton = () => {
    return (
      <Stack direction="row" gap={1}>
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
          startIcon={<Plus size={18} />}
        >
          Add Faas
        </Button>
      </Stack>
    );
  };


  const handleViewClick = (params) => {
    const id = params?.row?.id;
  };


  const TABLE_HEADER = [
    ...LAND_TABLE_COLUMN,
    {
      field: "actions",
      headerName: "ACTIONS",
      flex: 1,
      sortable: false,
      filterable: false,
      align: "center",
      headerAlign: "center",
      headerClassName: "data-grid-header",
      renderCell: (params) => (
        <Button
          variant="outlined"
          size="small"
          onClick={() => handleViewClick(params)}
        >
          View
        </Button>
      ),
    },
  ];

  return (
    <>
      <DataGrid
        className="land-faas-table"
        checkboxSelection
        // loading={isAssessorLoading}
        rows={landFaasRecords}
        columns={TABLE_HEADER}
        initialState={DATA_GRID_INITIAL_STATE}
        pageSizeOptions={PAGE_SIZE_OPTION}
        disableRowSelectionOnClick
        disableColumnResize
        sx={{ ...DATA_GRID_STYLE }}
        slots={{
          toolbar: () => (
            <TableToolbar
              titleText="Land FAAS Records"
              // subText="Appraisal and Assessment Data"
              actionBtn={<PageButton />}
            />
          ),
        }}
        slotProps={{
          panel: {
            placement: "bottom-end",

          },
        }}
      />

      <AddLandFaasModal
        disabled={disabled}
        open={addModalActive}
        onClose={() => setAddModalActive(false)}
        handleSubmit={handleClickSubmit}
      // actionButton={<TaxdecModalButtons />}
      />


      <ConfirmationDialog
        disabled={disabled}
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
