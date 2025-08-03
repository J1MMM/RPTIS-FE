import { Outlet } from "react-router-dom";
import Tab from "../../../../components/layout/Tab";
import { ASSESSOR_TAB_LINKS } from "../../../../utils/constant";

const AssessorPageLayout = () => {
  return (
    <>
      <Tab links={ASSESSOR_TAB_LINKS} />
      <Outlet />
    </>
  );
};

export default AssessorPageLayout;
