import { Outlet } from "react-router-dom";
import NavigationTabs from "../../../../components/navigation/NavigationTabs";
import { AssessorProvider } from "../../context/AssessorContext";
import { ASSESSOR_TAB_LINKS } from "../../constants/tabs";

const AssessorPageLayout = () => {
  return (
    <AssessorProvider>
      <NavigationTabs links={ASSESSOR_TAB_LINKS} />
      <Outlet />
    </AssessorProvider>
  );
};

export default AssessorPageLayout;
