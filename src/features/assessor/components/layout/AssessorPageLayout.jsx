import { Box, Paper } from "@mui/material";
import { Outlet } from "react-router-dom";
import NavigationTabs from "../../../../components/navigation/NavigationTabs";
import { AssessorProvider } from "../../context/AssessorContext";
import { AssessorFormProvider } from "../../context/FormContext";
import { ASSESSOR_TAB_LINKS } from "@constants/routes";

const AssessorPageLayout = () => {
  return (
    <AssessorProvider>
      <AssessorFormProvider>
        <Box
          // border={"1px solid red"}
          padding={3}
          height={"100%"}
          boxSizing={"border-box"}
        >
          <Paper
            sx={{
              // border: "1px solid",
              borderRadius: "12px",
              overflow: "hidden",
            }}
          >
            <NavigationTabs links={ASSESSOR_TAB_LINKS} />

            <Outlet />
          </Paper>
        </Box>
      </AssessorFormProvider>
    </AssessorProvider>
  );
};

export default AssessorPageLayout;
