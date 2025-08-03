import { Outlet } from "react-router-dom";
import Tab from "../../../../components/layout/Tab";
import { ASSESSOR_TAB_LINKS } from "../../../../utils/constant";
import { AssessorProvider } from "../../context/AssessorContext";

const AssessorPageLayout = () => {
  return (
    <AssessorProvider>
      <Tab links={ASSESSOR_TAB_LINKS} />
      <Outlet />
    </AssessorProvider>
  );
};

export default AssessorPageLayout;
