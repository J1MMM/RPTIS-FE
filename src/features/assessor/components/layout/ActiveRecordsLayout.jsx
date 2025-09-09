import React from "react";
import { Outlet } from "react-router-dom";
import { PageContainer } from "../../../../components/layout/PageContainer";
import SegmentedTabs from "../../../../components/navigation/SegmentedTabs";
import { Box } from "@mui/material";

function ActiveRecordsLayout() {
  return (
    <Box
      // border={"1px solid violet"}
      boxSizing={"border-box"}
      display={"flex"}
      flexDirection={"column"}
      height={"calc(100vh - 160px)"}
    >
      <Box p={1} my={1} ml={2}>
        <SegmentedTabs />
      </Box>
      <Outlet />
    </Box>
  );
}

export default ActiveRecordsLayout;
