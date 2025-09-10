import HeaderSection from "@/components/header-section";
import Main from "@/components/main";
import { Metadata } from "next";
import React, { Suspense } from "react";

export const metadata: Metadata = {
  title: "Property & Rates",
  description: "Choose your best Property",
};

const RoomPage = () => {
  return (
    <div>
      <HeaderSection
        title="Property & Rates"
        subTitle="Beberapa Room dan Properti yang tersedia"
      />
      <div className="mt-10 px-4">
        <Suspense fallback={<p>Loading...</p>}>
          <Main />
        </Suspense>
      </div>
    </div>
  );
};

export default RoomPage;
