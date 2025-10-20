import DashboardCards from "@/components/admin/dashboard-cards";
import ReservationList from "@/components/admin/reservation-list";
import { Metadata } from "next";
import React, { Suspense } from "react";

export const metadata: Metadata = {
  title: "Dashboard",
};

const DashboardPage = () => {
  return (
    <div className="max-w-screen-xl px-4 py-16 mt-8 mx-auto">
      <h1 className="text-4xl font-bold text-gray-800">Dashboard</h1>
      <Suspense fallback={<p>Loading Cards...</p>}>
        <DashboardCards />
      </Suspense>
      <Suspense fallback={<p>Loading Reservations...</p>}>
        <ReservationList />
      </Suspense>
    </div>
  );
};

export default DashboardPage;
