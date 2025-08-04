import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Auth from "./pages/Auth";
import VerifyOtp from "./pages/VerifyOtp";
import Login from "./components/Login";
import SignUp from "./components/SignUp";
import VerifyOtpNo from "./components/VerifyOtpNo";
import SignUp2 from "./components/SingUp2";
import Signup3 from "./components/Signup3";
import ForgetPassword from "./components/ForgetPassword";
import ResetPassword from "./components/ResetPassword";
import VerifyOtpReset from "./pages/VerifyOtpReset";
import Layout from "./layout/Layout";
import Dashboard from "./Dashboard/Dashboard";
import PasswordResetSuccess from "./components/PasswordResetSuccess";
import Referral from "./Dashboard/Referral";
import Team from "./Dashboard/Team";
import Earnings from "./Dashboard/Earnings";
import Wallet from "./Dashboard/Wallet";
import PayoutHistory from "./Dashboard/PayoutHistory";
import HelpSupport from "./Dashboard/HelpSupport";
import Profile from "./Dashboard/Profile";

import AddWallet from "./Dashboard/AddWallet";
import TransferWallet from "./Dashboard/TransferWallet";
import WithdrawalRequest from "./Dashboard/WithdrawalRequest";
import FilterPanel from "./DashboardComponets/FilterPanel";
import OrgChart from "./DashboardComponets/OrgChart";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Auth />} />
        <Route path="/auth" element={<Auth />} />
        <Route path="/verify-otp" element={<VerifyOtp />} />
        <Route path="/signup3" element={<Signup3 />} />
        <Route path="/forgot-password" element={<ForgetPassword />} />
        <Route path="/reset-password" element={<ResetPassword />} />
        <Route
          path="/password-reset-success"
          element={<PasswordResetSuccess />}
        />
        <Route element={<Layout />}>
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/referral" element={<Referral />} />
          <Route path="/team" element={<Team />} />
          <Route path="/earnings" element={<Earnings />} />
          <Route path="/wallet" element={<Wallet />} />
          <Route path="/payout-history" element={<PayoutHistory />} />
          <Route path="/help-support" element={<HelpSupport />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/OrgChart" element={<OrgChart />} />
          <Route path="/FilterPanel" element={<FilterPanel />} />
          <Route path="/wallet/add" element={<AddWallet />} />
          <Route path="/wallet/transfer" element={<TransferWallet />} />
          <Route path="/wallet/withdraw" element={<WithdrawalRequest />} />
        </Route>
      </Routes>
    </Router>
  );
};

export default App;
