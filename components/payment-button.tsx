"use client";

import { reservationProps } from "@/types/reservation";
import React, { useEffect, useTransition } from "react";

declare global {
  interface Window {
    snap: {
      pay: (token: string) => void;
    };
  }
}

const PaymentButton = ({ reservation }: { reservation: reservationProps }) => {
  const [isPending, startTransition] = useTransition();

  // ✅ Load script Midtrans Snap di client
  useEffect(() => {
    const midtransUrl = "https://app.sandbox.midtrans.com/snap/snap.js";
    const script = document.createElement("script");
    script.src = midtransUrl;
    script.setAttribute(
      "data-client-key",
      process.env.NEXT_PUBLIC_MIDTRANS_CLIENT_KEY || ""
    );
    script.async = true;
    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script); // cleanup saat unmount
    };
  }, []);

  const handlePayment = async () => {
    startTransition(async () => {
      try {
        const response = await fetch("/api/payment", {
          method: "POST",
          body: JSON.stringify(reservation),
        });
        const { token } = await response.json();

        if (token && window.snap) {
          window.snap.pay(token);
        } else {
          console.error("Midtrans Snap belum siap atau token kosong");
        }
      } catch (error) {
        console.log("Error saat memproses pembayaran:", error);
      }
    });
  };

  return (
    <button
      onClick={handlePayment}
      disabled={isPending}
      className="px-10 py-4 mt-2 text-center font-semibold text-white w-full bg-orange-400 rounded-sm hover:bg-orange-500 cursor-pointer disabled:opacity-70"
    >
      {isPending ? "Processing..." : "Process Payment"}
    </button>
  );
};

export default PaymentButton;
