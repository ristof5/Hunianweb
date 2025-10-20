import { getRevenueAndReserve, getTotalCustomers } from "@/lib/data";
import { formatCurrency } from "@/lib/utils";
import { notFound } from "next/navigation";
import React from "react";
import { LuChartArea, LuShoppingCart, LuUser } from "react-icons/lu";

const DashboardCards = async () => {
  const [data, customer] = await Promise.all([
    getRevenueAndReserve(),
    getTotalCustomers(),
  ]);
  if (!data || !customer) return notFound();
  return (
    <div>
      <div className="grid md:grid-cols-3 gap-5 pb-10 mt-2">
        <div className="flex items-center bg-white border rounded-md overflow-hidden shadow-sm">
          <div className="p-4 bg-green-400">
            <LuChartArea className="size-12 text-white" />
          </div>
          <div className="px-4 text-gray-700">
            <h3 className="text-sm tracking-wider">Total Revenue</h3>
            <p className="text-3xl">{formatCurrency(data.revenue)}</p>
          </div>
        </div>
        <div className="flex items-center bg-white border rounded-md overflow-hidden shadow-sm">
          <div className="p-4 bg-red-400">
            <LuShoppingCart className="size-12 text-white" />
          </div>
          <div className="px-4 text-gray-700">
            <h3 className="text-sm tracking-wider">Total Reservation</h3>
            <p className="text-3xl">{data.reserve}</p>
          </div>
        </div>
        <div className="flex items-center bg-white border rounded-md overflow-hidden shadow-sm">
          <div className="p-4 bg-blue-400">
            <LuUser className="size-12 text-white" />
          </div>
          <div className="px-4 text-gray-700">
            <h3 className="text-sm tracking-wider">Total Customers</h3>
            <p className="text-3xl">{customer.length}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DashboardCards;
