import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import { CssBaseline } from "@mui/material";
import { ToastContainer } from "react-toastify";
import PersistLogin from "./components/auth/PersistLogin.jsx";
import RequireAuth from "./components/auth/RequireAuth.jsx";
import Layout from "./components/layout/Layout.jsx";
import LoginPage from "./pages/login/index.jsx";
import { Missing } from "./pages/404.jsx";
import { AssessorPageLayout, ActiveRecordsLayout, LandFaasPage } from "./features/Assessor";
import "./styles/global.scss";
import ArchivedRecordsLayout from "./features/Assessor/components/layout/ArchivedRecordsLayout.jsx";
import BuildingFaasPage from "./features/Assessor/pages/active/BuildingFaasPage.jsx";
import Dashboard from "./features/dashboard/pages/dashboard.jsx";

function App() {
  return (
    <BrowserRouter>
      <CssBaseline />
      <Routes>
        {/* <Route element={<PersistLogin />}> */}
        <Route path="/login" element={<LoginPage />} />

        {/* <Route element={<RequireAuth />}> */}
        <Route path="/" element={<Layout />}>
          <Route index element={<Dashboard />} />

          {/* <Route path="/" element={<Navigate to="/assessor" />} /> */}
          <Route path="assessor" element={<AssessorPageLayout />}>
            <Route index element={<Navigate to="active" replace />} />
            <Route path="active" element={<ActiveRecordsLayout />}>
              <Route index element={<Navigate to="land" replace />} />
              <Route path="land" element={<LandFaasPage />} />
              <Route path="building" element={<BuildingFaasPage />} />
              <Route path="machinery" element={<LandFaasPage />} />
              {/* <Route path="building" element={<BuildingFaasPage />} />
                <Route path="machinery" element={<MachineryFaasPage />} /> */}
            </Route>
            <Route path="archived" element={<ArchivedRecordsLayout />}>
              <Route index element={<Navigate to="land" replace />} />
              <Route path="land" element={<LandFaasPage />} />
              <Route path="building" element={<BuildingFaasPage />} />
              <Route path="machinery" />
            </Route>
            <Route path="pending" element={<LandFaasPage />} />
          </Route>

          <Route path="landtax">
            <Route path="" />
            <Route path="computed" element={<LandFaasPage />} />
            <Route path="paidlist" element={<LandFaasPage />} />
          </Route>

          <Route path="cash-division">
            <Route path="" />
            <Route path="paidlist" element={<LandFaasPage />} />
          </Route>
        </Route>
        {/* </Route> */}
        {/* </Route> */}
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
