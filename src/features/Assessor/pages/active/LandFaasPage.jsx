import { useState } from "react";
import { DataGrid } from "@mui/x-data-grid";
import Button from "@mui/material/Button";
import { Stack } from "@mui/material";
import { DATA_GRID_INITIAL_STATE, DATA_GRID_STYLE, PAGE_SIZE_OPTION } from "@constants/tableStyles";
import useFaasData from "../../hooks/useFaasData";
import { TableToolbar } from "../../../../components/shared/TableToolbar";
import { LAND_TABLE_COLUMN } from "../../constants/tableColumns";
import useAssessorForm from "../../hooks/useFormContext";
import AddLandFaasModal from "../../components/forms/land/modals/AddLandFaasModal";
import { toast, } from "react-toastify";
import ConfirmationDialog from "../../../../components/shared/ConfirmationDialog";
import { toastConfig } from "../../../../constants/toastConfig";
import { PlusCircle, ShuffleIcon } from "lucide-react";
import axios from "../../../../api/axios";
import { FIELDS } from "../../constants/fieldNames";
import { formatAppraisalData } from "../../utils/payloadAppraisalFormatter";
import { v4 } from "uuid";

function LandFaasPage() {
  const { handleSubmit, formState: { isSubmitting } } = useAssessorForm();
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
      const landappraisals = formatAppraisalData(data[FIELDS.LAND_APPRAISAL], data[FIELDS.MARKET_ADJUSTMENT])
      const payload = {
        ...res,
        land_ownership: [
          {
            type: "person",
            name: "",
            firstname: "juan",
            middlename: "D",
            lastname: "Cruz",
            suffix: "juan",
            status: "active",
            remarks: "",
            tin: "93010",
            contact_no: "09944465989",
            email: "user@gmail.com",
            street: "PUROK III",
            brgy: "San Miguel",
            city: "San Pablo",
            province: "laguna",
            role: "owner"
          }
        ],
        landappraisals
      }
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

  const handleClickSubmit = (e) => {
    e.preventDefault()
    e.stopPropagation();
    setShowConfirmation(true)
  }





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
        // loading={true}
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
              actionBtn={(<>
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
              </>
              )}
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
        disabled={isSubmitting}
        open={addModalActive}
        onClose={() => setAddModalActive(false)}
        handleSubmit={handleClickSubmit}
      // actionButton={<TaxdecModalButtons />}
      />


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
