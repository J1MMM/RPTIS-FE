import { Outlet } from "react-router-dom";
import NavigationTabs from "../../../../components/navigation/NavigationTabs";
import { AssessorProvider } from "../../context/AssessorContext";
import { ASSESSOR_TAB_LINKS } from "../../constants/tabs";
import { AssessorFormProvider } from "../../context/FormContext";

const AssessorPageLayout = () => {
  return (
    <AssessorProvider>
      <AssessorFormProvider>
        <NavigationTabs links={ASSESSOR_TAB_LINKS} />
        <Outlet />
      </AssessorFormProvider>
    </AssessorProvider>
  );
};

export default AssessorPageLayout;
