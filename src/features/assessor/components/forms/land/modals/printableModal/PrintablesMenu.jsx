import React, { useState } from "react";
import { Button, Divider, Menu, MenuItem, Popover, Stack, Typography } from "@mui/material";
import { LogOutIcon, MessageCircleQuestion, Settings, UserRound } from "lucide-react";

export default function PrintablesMenu(props) {

return (
    <Popover
      open={props.open}
      anchorEl={props.anchorEl}
      onClose={props.handleClose}
      anchorOrigin={{
        vertical: 'bottom',
        horizontal: 'left',
      }}
      transformOrigin={{
        vertical: 'bottom',
        horizontal: 'right',
      }}
      >
        <Stack direction={'column'} gap={1} sx={{width: '10rem',p: 1}}>
          {props.actionButton}
          <Button variant="outlined" onClick={props.handleTaxdec}>Taxdec</Button>
          <Button variant="outlined" onClick={props.handleFaas}>Faas</Button>
        </Stack>
      </Popover>
  );
};
