import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { createRoutesFromElements, Route } from "react-router";
import App from "./App.tsx";

import TeamPage from "./pages/TeamPage.tsx";
import ContactsPage from "./pages/ContactsPage.tsx";
import InvoicesPage from "./pages/InvoicesPage.tsx";

import "./index.css";
import DashboardPage from "./pages/DashboardPage.tsx";

import { createBrowserRouter } from "react-router";
import { RouterProvider } from "react-router/dom";
import ProfilePage from "./pages/ProfilePage.tsx";
import CalenderPage from "./pages/CalenderPage.tsx";
import FaqPage from "./pages/FaqPage.tsx";
import BarChartPage from "./pages/BarChartPage.tsx";
import PieChartPage from "./pages/PieChartPage.tsx";
import LineChartPage from "./pages/LineChartPage.tsx";
import GeographyChartPage from "./pages/GeographyChartPage.tsx";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<App />}>
      <Route path="/dashboard" element={<DashboardPage />} />
      <Route path="/team" element={<TeamPage />} />
      <Route path="/contacts" element={<ContactsPage />} />
      <Route path="/invoices" element={<InvoicesPage />} />
      <Route path="/profile" element={<ProfilePage />} />
      <Route path="/calender" element={<CalenderPage />} />
      <Route path="/faq" element={<FaqPage />} />
      <Route path="/bar" element={<BarChartPage />} />
      <Route path="/pie" element={<PieChartPage />} />
      <Route path="/line" element={<LineChartPage />} />
      <Route path="/geography" element={<GeographyChartPage />} />
    </Route>,
  ),
);

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
);
