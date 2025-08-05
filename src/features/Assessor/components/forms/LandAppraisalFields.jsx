import { Button, Stack } from "@mui/material";
import { Add } from "@mui/icons-material";
import { v4 } from "uuid";
import StyledFieldset from "../ui/StyledFieldset";
import { LandMarketValueTable } from "../tables/LandMarketValueTable";
import { useState } from "react";
import { AddLandAppraisalModal } from "../modals/AddLandAppraisalModal";
import { LandAppraisalTable } from "../tables/LandAppraisalTable";

export const LandAppraisalFields = (props) => {
  const { setFormData, formData } = props;
  const [modalActive, setModalActive] = useState(false);
  const [landAppraisal, setLandAppraisal] = useState([]);

  const handleSubmit = (e) => {
    e.preventDefault();
    e.stopPropagation();
    try {
      const id = v4();

      setFormData((prev) => ({
        ...prev,
        landAppraisal: [...prev?.landAppraisal, { ...landAppraisal, id }],
      }));
    } catch (error) {
      console.error(error);
    } finally {
      setModalActive(false);
    }
  };

  return (
    <>
      <StyledFieldset title="Land Appraisal">
        <Stack mb={2}>
          <Button
            sx={{
              alignSelf: "flex-start",
            }}
            variant="contained"
            disabled={props?.readOnly}
            startIcon={<Add />}
            onClick={() => setModalActive(true)}
          >
            Appraisal
          </Button>
        </Stack>

        <LandAppraisalTable formData={formData} />
      </StyledFieldset>

      <AddLandAppraisalModal
        open={modalActive}
        onClose={() => setModalActive(false)}
        handleSubmit={handleSubmit}
        landAppraisal={landAppraisal}
        setLandAppraisal={setLandAppraisal}
      />
    </>
  );
};
