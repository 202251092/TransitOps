import { Routes, Route } from "react-router-dom";

import DashboardLayout from "../layouts/DashboardLayout";
import AuthLayout from "../layouts/AuthLayout";
import ProtectedRoute from "./ProtectedRoute";

import Dashboard from "../pages/Dashboard";
import Vehicles from "../pages/Vehicles";
import Drivers from "../pages/Drivers";
import Trips from "../pages/Trips";
import Maintenance from "../pages/Maintenance";
import Expenses from "../pages/Expenses";
import Analytics from "../pages/Analytics";
import Login from "../pages/Login";
import NotFound from "../pages/NotFound";

export default function AppRoutes() {
  return (
    <Routes>
      <Route element={<AuthLayout />}>
        <Route path="/login" element={<Login />} />
      </Route>

      <Route
        element={
          <ProtectedRoute>
            <DashboardLayout />
          </ProtectedRoute>
        }
      >
        <Route index element={<Dashboard />} />
        <Route path="/vehicles" element={<Vehicles />} />
        <Route path="/drivers" element={<Drivers />} />
        <Route path="/trips" element={<Trips />} />
        <Route path="/maintenance" element={<Maintenance />} />
        <Route path="/expenses" element={<Expenses />} />
        <Route path="/analytics" element={<Analytics />} />
      </Route>

      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}