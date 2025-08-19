import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import Layout from "./components/layout/Layout.jsx";
import PersistLogin from "./components/auth/PersistLogin.jsx";
import RequireAuth from "./components/auth/RequireAuth.jsx";
import LoginPage from "./pages/login/index.jsx";
import { Missing } from "./pages/404.jsx";
import {
  AssessorPageLayout,
  ActiveRecordsLayout,
  LandFaasPage,
} from "./features/Assessor";
import "./styles/global.scss";
import { ToastContainer } from "react-toastify";
import { CssBaseline } from "@mui/material";

function App() {
  return (
    <BrowserRouter>
      <CssBaseline />
      <Routes>
        {/* <Route element={<PersistLogin />}> */}
        <Route path="/login" element={<LoginPage />} />

        {/* <Route element={<RequireAuth />}> */}
        <Route path="/" element={<Layout />}>
          {/* <Route path="/" element={<Navigate to="/assessor" />} /> */}

          <Route>
            <Route path="assessor" element={<AssessorPageLayout />}>
              <Route index element={<Navigate to="active" replace />} />
              <Route path="active" element={<ActiveRecordsLayout />}>
                <Route index element={<Navigate to="land" replace />} />
                <Route path="land" element={<LandFaasPage />} />
                <Route path="building" element={<LandFaasPage />} />
                <Route path="machinery" element={<LandFaasPage />} />
                {/* <Route path="building" element={<BuildingFaasPage />} />
                <Route path="machinery" element={<MachineryFaasPage />} /> */}
              </Route>
              <Route path="archived" element={<LandFaasPage />}>
                <Route index element={<Navigate to="land" replace />} />
                <Route path="land" element={<LandFaasPage />} />
                <Route path="building" element={<LandFaasPage />} />
                <Route path="machinery" element={<LandFaasPage />} />
              </Route>
              <Route path="pending" element={<LandFaasPage />} />
            </Route>

            <Route path="landtax-division" element={<AssessorPageLayout />}>
              <Route path="" element={<LandFaasPage />} />
              <Route path="computed" element={<LandFaasPage />} />
              <Route path="paidlist" element={<LandFaasPage />} />
            </Route>

            <Route path="cash-division" element={<AssessorPageLayout />}>
              <Route path="" element={<LandFaasPage />} />
              <Route path="paidlist" element={<LandFaasPage />} />
            </Route>
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
