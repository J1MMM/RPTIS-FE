import React from "react";
import { PageContainer } from "../../components/layout/PageContainer";
import { Outlet } from "react-router-dom";
import TabGroupBtn from "../ui/TabGroupBtn";

function ArchivedRecordsLayout() {
  return (
    <PageContainer>
      <TabGroupBtn />
      <Outlet />
    </PageContainer>
  );
}

export default ArchivedRecordsLayout;
