import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import { CssBaseline } from "@mui/material";
import { ToastContainer } from "react-toastify";
import PersistLogin from "./components/auth/PersistLogin.jsx";
import RequireAuth from "./components/auth/RequireAuth.jsx";
import Layout from "./components/layout/Layout.jsx";
import { Missing } from "./pages/404.jsx";
import { AssessorPageLayout, ActiveRecordsLayout, LandFaasPage, BuildingFaasPage, MachineryFaasPage } from "./features/assessor";
import ArchivedRecordsLayout from "./features/assessor/components/layout/ArchivedRecordsLayout.jsx";
import Dashboard from "./features/dashboard/pages/Dashboard.jsx";
import LandTaxPage from "./features/landtax/pages/LandTaxPage.jsx";
import LandTaxLayout from "./features/landtax/components/layout/LandTaxLayout.jsx";
import PendingFaasPage from "./features/assessor/pages/pending/PendingFaasPage.jsx";
import "./styles/global.scss";
import LoginPage from "./features/auth/pages/LoginPage.jsx";
import LandingPage from "./features/clients/pages/LandingPage.jsx";
import Computations from "./features/landtax/pages/Computations.jsx";

function App() {
  return (
    <BrowserRouter>
      <CssBaseline />
      <Routes>
        <Route path="/" element={<LandingPage />} />

        <Route element={<PersistLogin />}>
          <Route path="/login" element={<LoginPage />} />
          <Route element={<RequireAuth />}>
            <Route element={<Layout />}>
              <Route path="dashboard" element={<Dashboard />} />
              {/* <Route path="/" element={<Navigate to="/assessor" />} /> */}
              <Route path="assessor" element={<AssessorPageLayout />}>
                <Route index element={<Navigate to="active" replace />} />
                <Route path="active" element={<ActiveRecordsLayout />}>
                  <Route index element={<Navigate to="land" replace />} />
                  <Route path="land" element={<LandFaasPage />} />
                  <Route path="building" element={<BuildingFaasPage />} />
                  <Route path="machinery" element={<MachineryFaasPage />} />
                  {/* <Route path="building" element={<BuildingFaasPage />} />
                <Route path="machinery" element={<MachineryFaasPage />} /> */}
                </Route>
                <Route path="archived" element={<ArchivedRecordsLayout />}>
                  <Route index element={<Navigate to="land" replace />} />
                  <Route path="land" element={<LandFaasPage />} />
                  <Route path="building" element={<BuildingFaasPage />} />
                  <Route path="machinery" element={<MachineryFaasPage />} />
                </Route>
                <Route path="pending" element={<ActiveRecordsLayout />}>
                  <Route index element={<Navigate to="land" replace />} />
                  <Route path="land" element={<PendingFaasPage />} />
                  <Route path="building" element={<BuildingFaasPage />} />
                  <Route path="machinery" element={<MachineryFaasPage />} />
                </Route>
              </Route>

              <Route path="landtax" element={<LandTaxLayout />}>
                <Route index element={<LandTaxPage />} />
                
                <Route path="tax-assessment" element={<Computations />} />
                <Route path="payment-records" element={<LandTaxPage />} />
              </Route>

              <Route path="cash-division" element={<AssessorPageLayout />}>
                <Route index element={<LandFaasPage />} />
                <Route path="paid" element={<LandFaasPage />} />
              </Route>
            </Route>
          </Route>
        </Route>
        <Route path="*" element={<Missing />} />
      </Routes>

      <ToastContainer
        autoClose={3000}
        pauseOnHover={false}
        pauseOnFocusLoss={false}
        newestOnTop
      />
    </BrowserRouter>
  );
}

export default App;
