import React from "react";
import { PageContainer } from "../../components/layout/PageContainer";
import GroupBtnTabs from "../../components/layout/GroupBtnTabs";
import { Outlet } from "react-router-dom";

function ActiveRecordsLayout() {
  return (
    <PageContainer>
      <GroupBtnTabs />
      <Outlet />
    </PageContainer>
  );
}

export default ActiveRecordsLayout;
