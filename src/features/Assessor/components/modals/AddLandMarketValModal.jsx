import { Button, Stack } from "@mui/material";
import { ContainerModal } from "../../../../components/shared/ContainerModal";

export const AddLandMarketValModal = (props) => {
  const { open, onClose } = props;
  return (
    <ContainerModal
      maxWidth="sm"
      title="Market Value Adjustment"
      open={open}
      onClose={onClose}
      onSubmit={(e) => {
        e.preventDefault();
        e.stopPropagation();
      }}
      actionButton={
        <>
          <Button
            variant="outlined"
            size="small"
            color="primary"
            onClick={onClose}
          >
            Cancel
          </Button>
          <Button variant="contained" size="small" type="submit">
            Add
          </Button>
        </>
      }
    >
      <Stack></Stack>
    </ContainerModal>
  );
};
