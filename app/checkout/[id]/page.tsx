import CheckoutDetail from "@/components/checkout-detail";
import { Metadata } from "next";
import Script from "next/script";
import { Suspense } from "react";

export const metadata: Metadata = {
  title: "Reservation Summary",
};

const CheckoutPage = async ({
  params,
}: {
  params: Promise<{ id: string }>;
}) => {
  const { id } = await params; // ✅ tunggu promise selesai
  const reservationId = id;

  return (
    <div className="max-w-screen-xl px-4 mx-auto py-20 mt-5">
      <h1 className="text-2xl font-semibold mb-8 text-rose-500">
        Reservation Summary
      </h1>
      <Suspense fallback={<p>Loading...</p>}>
        <CheckoutDetail reservationId={reservationId} />
      </Suspense>
      <Script
        src="http://app.sandbox.midtrans.com/snap/snap.js"
        data-client-key={process.env.NEXT_PUBLIC_MIDTRANS_CLIENT_KEY}
        strategy="lazyOnload"
      />
    </div>
  );
};

export default CheckoutPage;
