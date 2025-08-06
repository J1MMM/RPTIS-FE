import { useRef, useState } from "react";
import { DataGrid } from "@mui/x-data-grid";
import Button from "@mui/material/Button";
import { Collapse, Stack } from "@mui/material";
import {
  ALERT_SEV,
  ASSESSMENT_ROLL_COLUMN,
  BOUNDARIES_INITIAL_STATE,
  DATA_GRID_INITIAL_STATE,
  DATA_GRID_STYLE,
  INITIAL_FORM_DATA,
  PAGE_SIZE_OPTION,
  sampleRows,
  SUBDIVIDE_INITIAL_DATA,
} from "../../../../utils/constant";
import { Add, Shuffle } from "@mui/icons-material";
import { useQueryClient } from "react-query";
import { v4 } from "uuid";
import axios from "../../../../api/axios";
import dayjs from "dayjs";
import { useRowFormatter } from "../../../../hooks/useRowFormatter";
import { formatFullname, sumFieldInArray } from "../../../../utils/helper";
import { TableToolbar } from "../../../../components/form/table/TableToolbar";
import useFaasData from "../../hooks/useFaasData";
import AddLandFaasModal from "../../components/modals/AddLandFaasModal";

function MachineryFaasPage() {
  const queryClient = useQueryClient();

  const { landFaasRecords, setLandFaasRecords } = useFaasData();

  const [modalActive, setModalActive] = useState(false);
  const [openRPTview, setOpenRPTview] = useState(false);
  const [selectedRow, setSelectedRow] = useState(null);
  const [selectedArpNos, setSelectedArpNos] = useState([]);
  const [selectedRowID, setSelectedRowID] = useState(null);
  const [prevSelected, setPrevSelected] = useState(null);
  const [readOnly, setReadOnly] = useState(true);

  const [isDisable, setIsDisable] = useState(false);
  const [alertShown, setAlertShown] = useState(false);
  const [alertSeverity, setAlertSeverity] = useState(ALERT_SEV.info);
  const [formMsg, setFormMsg] = useState("");
  const [confirmationOpen, setConfirmationOpen] = useState(false);
  const [addTaxConfirmation, setAddTaxConfirmation] = useState(false);
  const [consolidateConfirmation, setConsolidateConfirmation] = useState(false);

  const [subdivideForm, setSubdivideForm] = useState(SUBDIVIDE_INITIAL_DATA);
  const [subdivideModalOpen, setSubdivideModalOpen] = useState(false);

  const [formDataNew, setFormDataNew] = useState(INITIAL_FORM_DATA);
  const [consolidateFormData, setconsolidateFormData] =
    useState(INITIAL_FORM_DATA);
  const [printableFormOpen, setPrintableFormOpen] = useState(false);
  const [currentFormType, setCurrentFormType] = useState("ClientForm");

  const [consolidateActive, setConsolidateActive] = useState(false);

  const openPrintableForm = (formType) => {
    setCurrentFormType(formType);
    setPrintableFormOpen(true);
  };

  const handleCellDoubleClick = (params) => {
    setSelectedRowID(params?.row?.id);

    const formattedRow = useRowFormatter(params);

    setSelectedRow(formattedRow);
    setPrevSelected(formattedRow);
    setOpenRPTview(true);
  };

  const handleTransferClick = (e) => {
    const Boundaries = BOUNDARIES_INITIAL_STATE;

    const assessedValueTotal = sumFieldInArray(
      selectedRow?.classification || [],
      "assessedValue"
    );

    const new_data = {
      ...INITIAL_FORM_DATA,
      oldArp: selectedRow?.ArpNo,
      previousOwner: formatFullname(selectedRow),
      previousAV: assessedValueTotal || 0,
      previousPid: selectedRow?.PID,
      Boundaries,
    };

    setSelectedRow(new_data);
    setReadOnly(false);
  };

  const handleCancelTransferClick = () => {
    setReadOnly(true);
    setSelectedRow(prevSelected);
  };

  const handleAddTaxSubmit = async (e) => {
    setIsDisable(true);

    try {
      const id = v4();
      console.log("submit add");
      console.log(formDataNew);

      const newFormData = {
        ...formDataNew,
        id: id,

        DATE: dayjs(formDataNew.DATE).toISOString(),
        year: dayjs(formDataNew.year).toISOString(),
        dateOfEffectivity: dayjs(formDataNew.dateOfEffectivity).toISOString(),
      };

      const response = await axios.post("/api/assessor/createTax", newFormData);
      console.log(response.data);

      setAlertShown(true);
      setAlertSeverity(ALERT_SEV.success);
      setFormMsg("Tax Created Successfully");
      setModalActive(false);

      setFormDataNew(INITIAL_FORM_DATA);
    } catch (error) {
      console.log(error);
      setAlertShown(true);
      setAlertSeverity(ALERT_SEV.error);
      setFormMsg(error?.message);

      if (error.status == 409) {
        setFormMsg("ARP Already Exist");
      }
    }

    setAddTaxConfirmation(false);
    setIsDisable(false);
  };

  const handleTransferSubmit = async () => {
    setIsDisable(true);
    const id = v4();

    try {
      const formatedArr = {
        ...selectedRow,
        NewArp: selectedRow?.ArpNo,
        ArpNo: selectedRow?.oldArp,
        DATE: dayjs(selectedRow?.DATE).toISOString(),
        dateOfEffectivity: dayjs(selectedRow?.dateOfEffectivity).toISOString(),
        year: dayjs(selectedRow?.year).toISOString(),
      };

      const response = await axios.post("/api/assessor/cancel", formatedArr);
      console.log(response);

      await queryClient.invalidateQueries("cancelsData");

      setAlertShown(true);
      setAlertSeverity(ALERT_SEV.success);
      setFormMsg("ARP found and values have been moved to tax cancels");
      setOpenRPTview(false);
      setSelectedRow(INITIAL_FORM_DATA);

      setReadOnly(true);
    } catch (error) {
      console.log(error);
      setAlertShown(true);
      setAlertSeverity(ALERT_SEV.error);
      setFormMsg(error?.message);

      if (error.status == 409) {
        setFormMsg("ARP Already Exist");
      }
    }
    setIsDisable(false);
    setConfirmationOpen(false);
  };

  const handleConsolidateSubmit = async () => {
    setIsDisable(true);

    try {
      const id = v4();
      console.log("submit conso");
      // console.log(consolidateFormData);

      const newFormData = {
        ...consolidateFormData,
        id: id,
        ArpNo: selectedArpNos,
        NewArp: consolidateFormData.ArpNo,
        DATE: dayjs(consolidateFormData.DATE).toISOString(),
        year: dayjs(consolidateFormData.year).toISOString(),
        dateOfEffectivity: dayjs(
          consolidateFormData.dateOfEffectivity
        ).toISOString(),
      };

      console.log(newFormData);

      const response = await axios.post(
        "/api/assessor/consolidate",
        newFormData
      );
      console.log(response.data);

      await queryClient.invalidateQueries("cancelsData");

      setSelectedArpNos([]);
      setAlertShown(true);
      setAlertSeverity(ALERT_SEV.success);
      setFormMsg("Tax Created Successfully");
      setConsolidateActive(false);

      setconsolidateFormData(INITIAL_FORM_DATA);
    } catch (error) {
      console.log(error);
      setAlertShown(true);
      setAlertSeverity(ALERT_SEV.error);
      setFormMsg(error?.message);

      if (error.status == 409) {
        setFormMsg("ARP Already Exist");
      }
    }

    setConsolidateConfirmation(false);
    setIsDisable(false);
  };

  const handleSubdivideClick = () => {
    setSubdivideModalOpen(true);
    setSubdivideForm((prev) => ({ ...prev, ArpNo: selectedRow?.ArpNo }));
  };

  const handleTaxModalClose = () => {
    setReadOnly(true);
    setOpenRPTview(false);
    setConsolidateActive(false);
  };
  const handleSubdivideSubmit = async () => {
    setIsDisable(true);
    try {
      const formatedData = {
        ...subdivideForm,
        count: parseInt(subdivideForm?.count),
        startArpNo: parseInt(subdivideForm?.startArpNo),
      };

      const response = await axios.post(
        "/api/assessor/subdivide",
        formatedData
      );
      console.log("response");
      console.log(response);

      setAlertSeverity(ALERT_SEV.success);
      if (response.data?.message == "auto rollback of transaction") {
        setFormMsg(response.data?.error);
        setAlertSeverity(ALERT_SEV.error);
        setAlertShown(true);
        setIsDisable(false);
        return;
      }
      setFormMsg(response.data?.message);

      await queryClient.invalidateQueries("pendingData");
      await queryClient.invalidateQueries("cancelsData");
      setOpenRPTview(false);
    } catch (error) {
      console.log(error);
      setAlertSeverity(ALERT_SEV.error);
      setFormMsg(error?.message);
    }
    setAlertShown(true);
    setIsDisable(false);
    setSubdivideModalOpen(false);
  };

  const handleSelectionChange = (newSelection) => {
    // Get only the ArpNo field for the selected IDs
    const selectedArpNosData = newSelection?.map((id) => {
      const selectedRow = landFaasRecords?.find((row) => row.id === id);
      return selectedRow ? selectedRow?.ArpNo : null; // Return only the ArpNo
    });
    setSelectedArpNos(selectedArpNosData);
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
          onClick={() => setModalActive(true)}
          variant="contained"
          startIcon={<Add />}
        >
          Add Faas
        </Button>
      </Stack>
    );
  };

  const TABLE_HEADER = [
    ...ASSESSMENT_ROLL_COLUMN,
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
          onClick={() => handleCellDoubleClick(params)}
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
        rows={sampleRows}
        columns={TABLE_HEADER}
        initialState={DATA_GRID_INITIAL_STATE}
        pageSizeOptions={PAGE_SIZE_OPTION}
        disableRowSelectionOnClick
        disableColumnResize
        // onCellDoubleClick={handleCellDoubleClick}
        onRowSelectionModelChange={handleSelectionChange}
        sx={DATA_GRID_STYLE}
        slots={{
          toolbar: () => (
            <TableToolbar
              titleText="Machinery FAAS Records"
              subText="Mechanical and Valuation Data"
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
        open={modalActive}
        handleClose={() => setModalActive(false)}
        row={formDataNew}
        setSelectedRow={setFormDataNew}
        setConfirmationOpen={setAddTaxConfirmation}
        setReadOnly={setReadOnly}
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

export default MachineryFaasPage;
