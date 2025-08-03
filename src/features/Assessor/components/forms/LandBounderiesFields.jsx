import { Stack, TextField } from "@mui/material";
import StyledFieldset from "../modals/StyledFieldset";

function LandBounderiesFields({ props, handleLandChange }) {
  return (
    <StyledFieldset title="Boundaries">
      <Stack direction="row" gap={1}>
        <TextField
          margin="dense"
          fullWidth
          label="North"
          variant="outlined"
          name="northBoundary"
          value={props?.row?.Boundaries?.landDetails?.northBoundary}
          onChange={handleLandChange}
          slotProps={{
            input: {
              readOnly: props?.readOnly,
            },
          }}
        />
        <TextField
          margin="dense"
          fullWidth
          label="South"
          variant="outlined"
          name="southBoundary"
          value={props?.row?.Boundaries?.landDetails?.southBoundary}
          onChange={handleLandChange}
          slotProps={{
            input: {
              readOnly: props?.readOnly,
            },
          }}
        />
        <TextField
          margin="dense"
          fullWidth
          label="East"
          variant="outlined"
          name="EastBoundary"
          value={props?.row?.Boundaries?.landDetails?.EastBoundary}
          onChange={handleLandChange}
          slotProps={{
            input: {
              readOnly: props?.readOnly,
            },
          }}
        />
        <TextField
          margin="dense"
          fullWidth
          label="West"
          variant="outlined"
          name="westBoundary"
          value={props?.row?.Boundaries?.landDetails?.westBoundary}
          onChange={handleLandChange}
          slotProps={{
            input: {
              readOnly: props?.readOnly,
            },
          }}
        />
      </Stack>
      <Stack direction="row" gap={1}>
        <TextField
          margin="dense"
          fullWidth
          label="NE"
          variant="outlined"
          name="NEboundary"
          value={props?.row?.Boundaries?.landDetails?.NEboundary}
          onChange={handleLandChange}
          slotProps={{
            input: {
              readOnly: props?.readOnly,
            },
          }}
        />
        <TextField
          margin="dense"
          fullWidth
          label="SW"
          variant="outlined"
          name="SWBoundary"
          value={props?.row?.Boundaries?.landDetails?.SWBoundary}
          onChange={handleLandChange}
          slotProps={{
            input: {
              readOnly: props?.readOnly,
            },
          }}
        />

        <TextField
          margin="dense"
          fullWidth
          label="SE"
          variant="outlined"
          name="SEBoundary"
          value={props?.row?.Boundaries?.landDetails?.SEBoundary}
          onChange={handleLandChange}
          slotProps={{
            input: {
              readOnly: props?.readOnly,
            },
          }}
        />
        <TextField
          margin="dense"
          fullWidth
          label="NW"
          variant="outlined"
          name="NWBoundary"
          value={props?.row?.Boundaries?.landDetails?.NWBoundary}
          onChange={handleLandChange}
          slotProps={{
            input: {
              readOnly: props?.readOnly,
            },
          }}
        />
      </Stack>
      {/* <TextField
        margin="dense"
        fullWidth
        label="Description"
        variant="outlined"
        name="description"
        value={props?.row?.Boundaries?.landDetails?.description}
        onChange={handleLandChange}
        slotProps={{
          input: {
            readOnly: props?.readOnly,
          },
        }}
      /> */}
    </StyledFieldset>
  );
}

export default LandBounderiesFields;
