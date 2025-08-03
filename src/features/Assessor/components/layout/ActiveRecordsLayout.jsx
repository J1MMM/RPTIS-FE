import React from "react";
import { Outlet } from "react-router-dom";
import { PageContainer } from "../../../../components/layout/PageContainer";
import TabGroupBtn from "../ui/TabGroupBtn";

function ActiveRecordsLayout() {
  return (
    <PageContainer>
      <TabGroupBtn />
      <Outlet />
    </PageContainer>
  );
}

export default ActiveRecordsLayout;
