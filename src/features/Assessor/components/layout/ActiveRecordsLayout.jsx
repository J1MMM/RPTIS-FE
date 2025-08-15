import React from "react";
import { Outlet } from "react-router-dom";
import { PageContainer } from "../../../../components/layout/PageContainer";
import SegmentedTabs from "../../../../components/navigation/SegmentedTabs";

function ActiveRecordsLayout() {
  return (
    <PageContainer>
      <SegmentedTabs />
      <Outlet />
    </PageContainer>
  );
}

export default ActiveRecordsLayout;
