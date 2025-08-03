import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import { ThemeProvider } from "@mui/material/styles";
import { AssessmentRoll, Pending, Cancels } from "./pages/Assessor";
import Layout from "./components/layout/Layout.jsx";
import theme from "./styles/theme.jsx";
import "./styles/global.scss";
import LoginPage from "./pages/LoginPage/";
import PersistLogin from "./components/auth/PersistLogin.jsx";
import RequireAuth from "./components/auth/RequireAuth.jsx";
import { LandTaxAR, LandTaxPaidList, LandTaxComputed } from "./pages/LandTax";
import { CashPendingList, CashPaidList } from "./pages/Cash";
import { AssessorLayout } from "./components/layout/AssessorLayout.jsx";
import { Missing } from "./pages/404.jsx";
import { LandTaxLayout } from "./components/layout/LandTaxLayout.jsx";
import { CashLayout } from "./components/layout/CashLayout.jsx";
import ArchivedRecordsLayout from "./pages/Assessor/ArchivedRecordsLayout.jsx";
import {
  AssessorPageLayout,
  ActiveRecordsLayout,
  LandFaasPage,
  BuildingFaasPage,
  MachineryFaasPage,
} from "./features/Assessor";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* <Route element={<PersistLogin />}> */}
        <Route path="/login" element={<LoginPage />} />

        {/* <Route element={<RequireAuth />}> */}
        <Route path="/" element={<Layout />}>
          <Route path="/" element={<Navigate to="/assessor" />} />
          <Route>
            <Route path="assessor" element={<AssessorPageLayout />}>
              <Route index element={<Navigate to="active" replace />} />
              <Route path="active" element={<ActiveRecordsLayout />}>
                <Route index element={<Navigate to="land" replace />} />
                <Route path="land" element={<LandFaasPage />} />
                <Route path="building" element={<BuildingFaasPage />} />
                <Route path="machinery" element={<MachineryFaasPage />} />
              </Route>
              <Route path="archived" element={<ArchivedRecordsLayout />}>
                <Route index element={<Navigate to="land" replace />} />
                <Route path="land" element={<Cancels />} />
                <Route path="building" element={<AssessmentRoll />} />
                <Route path="machinery" element={<AssessmentRoll />} />
              </Route>
              <Route path="pending" element={<Pending />} />
            </Route>

            <Route path="landtax-division" element={<LandTaxLayout />}>
              <Route path="" element={<LandTaxAR />} />
              <Route path="computed" element={<LandTaxComputed />} />
              <Route path="paidlist" element={<LandTaxPaidList />} />
            </Route>

            <Route path="cash-division" element={<CashLayout />}>
              <Route path="" element={<CashPendingList />} />
              <Route path="paidlist" element={<CashPaidList />} />
            </Route>
          </Route>

          <Route path="landtax-division" element={<LandTaxLayout />}>
            <Route path="" element={<LandTaxAR />} />
            <Route path="computed" element={<LandTaxComputed />} />
            <Route path="paidlist" element={<LandTaxPaidList />} />
          </Route>

          <Route path="cash-division" element={<CashLayout />}>
            <Route path="" element={<CashPendingList />} />
            <Route path="paidlist" element={<CashPaidList />} />
          </Route>
        </Route>
        {/* </Route> */}
        {/* </Route> */}
        <Route path="*" element={<Missing />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
