import React from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';

// Layouts
import AdminLayout from './components/AdminLayout';
import TaxpayerLayout from './components/TaxpayerLayout';
import AgentLayout from './components/AgentLayout';

// Admin Pages
import AdminDashboard from './components/AdminDashboard';
import RevenueConfig from './components/RevenueConfig';
import AuditLogs from './components/AuditLogs';
import PropertyManager from './components/PropertyManager';
import CertificateApproval from './components/CertificateApproval';

import TaxpayerPipeline from './components/TaxpayerPipeline';

// Taxpayer Pages
import TaxpayerDashboard from './components/TaxpayerDashboard';
import SelfServiceFiling from './components/SelfServiceFiling';
import CertificateOfOrigin from './components/CertificateOfOrigin';
import PropertyRental from './components/PropertyRental';
import Marketplace from './components/Marketplace';

// Field Agent Pages
import FieldAgentDashboard from './components/FieldAgentDashboard';
import TaxpayerRegistration from './components/TaxpayerRegistration';
import RecordPayment from './components/RecordPayment';
import QRScanner from './components/QRScanner';
import FieldAgentLogin from './components/FieldAgentLogin';

// USSD
import USSDMenuFlow from './components/USSDMenuFlow';

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* Redirect root to admin dashboard for now */}
        <Route path="/" element={<Navigate to="/admin" />} />

        {/* Admin Portal */}
        <Route path="/admin" element={<AdminLayout />}>
          <Route index element={<AdminDashboard />} />
          <Route path="revenue-config" element={<RevenueConfig />} />
          <Route path="audit-logs" element={<AuditLogs />} />
          <Route path="taxpayers" element={<TaxpayerPipeline />} />
          <Route path="properties" element={<PropertyManager />} />
          <Route path="certificates" element={<CertificateApproval />} />
        </Route>

        {/* Taxpayer Portal */}
        <Route path="/taxpayer" element={<TaxpayerLayout />}>
          <Route index element={<TaxpayerDashboard />} />
          <Route path="filing" element={<SelfServiceFiling />} />
          <Route path="certificate-of-origin" element={<CertificateOfOrigin />} />
          <Route path="property-rental" element={<PropertyRental />} />
          <Route path="marketplace" element={<Marketplace />} />
        </Route>

        {/* Field Agent App */}
        <Route path="/agent" element={<AgentLayout />}>
          <Route index element={<FieldAgentDashboard />} />
          <Route path="register" element={<TaxpayerRegistration />} />
          <Route path="payment" element={<RecordPayment />} />
          <Route path="scanner" element={<QRScanner />} />
        </Route>
        
        {/* Agent Login (no layout) */}
        <Route path="/agent/login" element={<FieldAgentLogin />} />

        {/* USSD Simulator */}
        <Route path="/ussd" element={<USSDMenuFlow />} />

        {/* Catch-all redirect for typos */}
        <Route path="*" element={<Navigate to="/taxpayer" />} />
      </Routes>
    </BrowserRouter>
  );
}
