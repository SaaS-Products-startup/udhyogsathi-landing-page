"use client";
import React from "react";
import { Images } from "@/resources/images";
import Image from "next/image";

const AdminFeatures = () => {
  return (
    <div className="w-full max-w-[1140px] mx-auto flex flex-col justify-start items-center gap-[60px] px-4 py-12">
      <div className="w-full max-w-[655px] flex flex-col justify-center items-center gap-6">
        <div className="px-4 py-2 rounded-[58px] outline-1 outline-[#c7c9d0] inline-flex justify-start items-center gap-2">
          <div className="w-6 h-6 relative overflow-hidden">
            <Image
              src={Images.ThunderIc}
              alt="Udhyog Sathi"
              fill
              style={{ objectFit: "contain" }}
              priority
            />
          </div>
          <div className="text-center text-[#4254bc] text-base font-normal font-['Onest'] leading-tight">
            Admin Key Features
          </div>
        </div>
        <div className="w-full flex flex-col justify-start items-center gap-4">
          <h1 className="w-full text-center text-black text-[40px] font-semibold font-['Onest'] leading-[48px]">
            Powerful Admin Tools for Complete Control
          </h1>
          <p className="w-full text-center text-[#5d606e] text-base font-normal font-['Onest'] leading-tight">
            Manage products, orders, customers, and employees—all from a single
            dashboard.
          </p>
        </div>
      </div>

      <div className="w-full flex flex-col justify-start items-start gap-6">
        <div className="w-full h-[350px] flex flex-col md:flex-row justify-between items-center bg-[#f6f6f7] rounded-3xl outline-1 outline-[#ecedf8] p-8 relative overflow-hidden">
          <div className="w-full md:w-1/2 flex flex-col justify-center items-start gap-4">
            <div className="w-[72px] h-[72px] bg-[#4254bc] rounded-[50px] flex justify-center items-center">
              <div className="w-9 h-9 relative overflow-hidden">
                <Image
                  src={Images.OrderIC}
                  alt="Order Management Icon"
                  fill
                  style={{ objectFit: "contain" }}
                  priority
                />
              </div>
            </div>
            <div className="flex flex-col justify-center items-start gap-4">
              <h2 className="text-black text-4xl font-semibold font-['Onest'] leading-[52px]">
                Order Management
              </h2>
              <p className="text-[#5d606e] text-base font-normal font-['Onest'] leading-tight">
                Track, process, and manage B2B orders effortlessly from a
                centralized dashboard.
              </p>
            </div>
          </div>
          <div className="w-full md:w-1/2 flex justify-center md:justify-end">
            <Image
              src={Images.OrderManagementMockup}
              alt="Order Management Mockup"
              width={458}
              height={300}
              style={{ objectFit: "contain" }}
              priority
            />
          </div>
        </div>

        <div className="w-full h-[350px] flex flex-col md:flex-row-reverse justify-between items-center bg-[#f6f6f7] rounded-3xl outline-1 outline-[#ecedf8] p-8 relative overflow-hidden">
          <div className="w-full md:w-1/2 flex flex-col justify-center items-start gap-4">
            <div className="w-[72px] h-[72px] bg-[#4254bc] rounded-[50px] flex justify-center items-center">
              <div className="w-9 h-9 relative overflow-hidden">
                <Image
                  src={Images.LocationIc}
                  alt="Location-Based Pricing Icon"
                  fill
                  style={{ objectFit: "contain" }}
                  priority
                />
              </div>
            </div>
            <div className="flex flex-col justify-center items-start gap-4">
              <h2 className="text-black text-4xl font-semibold font-['Onest'] leading-[52px]">
                Location-Based Pricing
              </h2>
              <p className="text-[#5d606e] text-base font-normal font-['Onest'] leading-tight">
                Set custom pricing for different regions to optimize sales and
                profitability.
              </p>
            </div>
          </div>
          <div className="w-full md:w-1/2 flex justify-center md:justify-start">
            <Image
              src={Images.LocationPricingMockup}
              alt="Location-Based Pricing Mockup"
              width={458}
              height={300}
              style={{ objectFit: "contain" }}
              priority
            />
          </div>
        </div>
        <div className="w-full h-[350px] flex flex-col md:flex-row justify-between items-center bg-[#f6f6f7] rounded-3xl outline-1 outline-[#ecedf8] p-8 relative overflow-hidden">
          <div className="w-full md:w-1/2 flex flex-col justify-center items-start gap-4">
            <div className="w-[72px] h-[72px] bg-[#4254bc] rounded-[50px] flex justify-center items-center">
              <div className="w-9 h-9 relative overflow-hidden">
                <Image
                  src={Images.StatementIc}
                  alt="Invoice Management Icon"
                  fill
                  style={{ objectFit: "contain" }}
                  priority
                />
              </div>
            </div>
            <div className="flex flex-col justify-center items-start gap-4">
              <h2 className="text-black text-4xl font-semibold font-['Onest'] leading-[52px]">
                Invoice Management
              </h2>
              <p className="text-[#5d606e] text-base font-normal font-['Onest'] leading-tight">
                Generate, send, and track invoices with ease for transparent
                transactions.
              </p>
            </div>
          </div>
          <div className="w-full md:w-1/2 flex justify-center md:justify-end">
            <Image
              src={Images.OrderManagementMockup}
              alt="Invoice Management Mockup"
              width={458}
              height={300}
              style={{ objectFit: "contain" }}
              priority
            />
          </div>
        </div>
        <div className="w-full h-[350px] flex flex-col md:flex-row-reverse justify-between items-center bg-[#f6f6f7] rounded-3xl outline-1 outline-[#ecedf8] p-8 relative overflow-hidden">
          <div className="w-full md:w-1/2 flex flex-col justify-center items-start gap-4">
            <div className="w-[72px] h-[72px] bg-[#4254bc] rounded-[50px] flex justify-center items-center">
              <div className="w-9 h-9 relative overflow-hidden">
                <Image
                  src={Images.AttendanceIc}
                  alt="Sub-Admin Attendance Tracking Icon"
                  fill
                  style={{ objectFit: "contain" }}
                  priority
                />
              </div>
            </div>
            <div className="flex flex-col justify-center items-start gap-4">
              <h2 className="text-black text-4xl font-semibold font-['Onest'] leading-[52px]">
                Sub-Admin Attendance Tracking
              </h2>
              <p className="text-[#5d606e] text-base font-normal font-['Onest'] leading-tight">
                Monitor attendance and performance of sub-admins in real time.
              </p>
            </div>
          </div>
          <div className="w-full md:w-1/2 flex justify-center md:justify-start">
            <Image
              src={Images.AttendanceTrackingMockup}
              alt="Sub-Admin Attendance Tracking Mockup"
              width={458}
              height={300}
              style={{ objectFit: "contain" }}
              priority
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export { AdminFeatures };
