import { useState } from "react";
import { DataGrid } from "@mui/x-data-grid";
import Button from "@mui/material/Button";
import { Collapse, Stack } from "@mui/material";
import {
  DATA_GRID_INITIAL_STATE,
  DATA_GRID_STYLE,
  PAGE_SIZE_OPTION,
} from "@constants/tableStyles";
import { Add, Shuffle } from "@mui/icons-material";
import useFaasData from "../../hooks/useFaasData";
import AddLandFaasModal from "../../components/modals/AddLandFaasModal";
import { DEFAULT_FIELD_VALUES } from "../../constants/defaultValues";
import { FIELDS } from "../../constants/fieldNames";
import { TableToolbar } from "../../../../components/shared/TableToolbar";
import { LAND_TABLE_COLUMN } from "../../constants/tableColumns";
import { useForm } from "react-hook-form";
import { TRANSACTION_CODE } from "../../constants/dropdownOptions";
import SelectField from "../../../../components/ui/SelectField";
import useAssessorForm from "../../hooks/useFormContext";

function LandFaasPage() {
  const { handleSubmit } = useAssessorForm();
  const { landFaasRecords, setLandFaasRecords } = useFaasData();
  const [formData, setFormData] = useState(DEFAULT_FIELD_VALUES);

  const [addModalActive, setAddModalActive] = useState(false);
  const [selectedArpNos, setSelectedArpNos] = useState([]);
  const [readOnly, setReadOnly] = useState(true);

  const onSubmit = (data) => {
    console.log("Submit from react-hook-form");
    console.log(data);
    console.log(data[FIELDS.TRANSACTION_CODE]);
  };
  const handleViewClick = (params) => {
    const id = params?.row?.id;
  };

  const PageButton = () => {
    return (
      <Stack direction="row" gap={1}>
        <Button
          disabled={Boolean(selectedArpNos.length < 2)}
          variant="outlined"
          onClick={() => setConsolidateActive(true)}
          startIcon={<Shuffle />}
        >
          consolidate
        </Button>
        <Button
          onClick={() => setAddModalActive(true)}
          variant="contained"
          startIcon={<Add />}
        >
          Add Faas
        </Button>
      </Stack>
    );
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
        checkboxSelection
        // loading={isAssessorLoading}
        rows={landFaasRecords}
        columns={TABLE_HEADER}
        initialState={DATA_GRID_INITIAL_STATE}
        pageSizeOptions={PAGE_SIZE_OPTION}
        disableRowSelectionOnClick
        disableColumnResize
        sx={DATA_GRID_STYLE}
        slots={{
          toolbar: () => (
            <TableToolbar
              titleText="Land FAAS Records"
              subText="Appraisal and Assessment Data"
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
        modalControl={{
          open: addModalActive,
          onClose: () => setAddModalActive(false),
        }}
        formState={{ formData, setFormData, setReadOnly }}
        onSubmit={onSubmit}
        // actionButton={<TaxdecModalButtons />}
      />

      {/* <TaxDecModal
        open={openRPTview}
        handleClose={handleTaxModalClose}
        row={selectedRow}
        setSelectedRow={setSelectedRow}
        readOnly={readOnly}
        setConfirmationOpen={setConfirmationOpen}
        setReadOnly={setReadOnly}
        actionButton={<TaxdecModalButtons />}
      />



      <SubdivideModal
        open={subdivideModalOpen}
        setOpen={setSubdivideModalOpen}
        Brgy={selectedRow?.Brgy || null}
        subdivideForm={subdivideForm}
        setSubdivideForm={setSubdivideForm}
        handleSubmit={handleSubdivideSubmit}
        disabled={isDisable}
      />

      <ConsolidateModal
        open={consolidateActive}
        handleClose={() => setConsolidateActive(false)}
        row={consolidateFormData}
        setSelectedRow={setconsolidateFormData}
        setConfirmationOpen={setConsolidateConfirmation}
      />

      <ConfirmationDialog
        open={confirmationOpen}
        setOpen={setConfirmationOpen}
        confirm={handleTransferSubmit}
        title="Transfer Tax Dec Confirmation"
        content="Are you sure you want to transfer this data? Once confirmed, the new data will be added to the system, and the previous data will be moved to the canceled records."
        disabled={isDisable}
      />

      <ConfirmationDialog
        open={addTaxConfirmation}
        setOpen={setAddTaxConfirmation}
        confirm={handleAddTaxSubmit}
        title="Add Tax Dec Confirmation"
        content="Are you sure you want to add this data? Once confirmed, it will be permanently added to the system."
        disabled={isDisable}
      />

      <ConfirmationDialog
        open={consolidateConfirmation}
        setOpen={setConsolidateConfirmation}
        confirm={handleConsolidateSubmit}
        title="Consolidate Tax dec Confirmation"
        content="Are you sure you want to consolidate this tax declaration? Once confirmed, the data will be merged and permanently recorded in the system, and this action cannot be undone."
        disabled={isDisable}
      />

      <SnackBar
        open={alertShown}
        onClose={setAlertShown}
        severity={alertSeverity}
        msg={formMsg}
      />

      <TaxdecPrintableFormModal
        open={printableFormOpen}
        onClose={() => setPrintableFormOpen(false)}
        row={selectedRow} // Ensure `selectedRow` is defined in your component
        formType={currentFormType}
      /> */}
    </>
  );
}

export default LandFaasPage;
